import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import rehypePrettyCode from 'rehype-pretty-code';
import { defineCollection, defineConfig, s } from 'velite';

const slugify = (input: string) =>
  input
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

const icon = s.enum(['github', 'instagram', 'medium', 'twitter', 'youtube']);
const count = s
  .object({ total: s.number(), posts: s.number() })
  .default({ total: 0, posts: 0 });

const meta = s
  .object({
    title: s.string().optional(),
    description: s.string().optional(),
    keywords: s.array(s.string()).optional(),
  })
  .default({});

const execAsync = promisify(exec);

const timestamp = () =>
  s
    .custom<string | undefined>((i) => i === undefined || typeof i === 'string')
    .transform<string>(async (value, { meta, addIssue }) => {
      if (value != null) {
        addIssue({
          fatal: false,
          code: 'custom',
          message:
            '`s.timestamp()` schema will resolve the value from `git log -1 --format=%cd`',
        });
      }
      const { stdout } = await execAsync(
        `git log -1 --format=%cd ${meta.path}`,
      );
      return new Date(stdout || Date.now()).toISOString();
    });

const pages = defineCollection({
  name: 'About',
  pattern: 'about/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug('global', ['admin', 'login']),
      body: s.mdx(),
    })
    .transform((data) => ({ ...data, permalink: `/${data.slug}` })),
});

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { options, categories, tags, pages, posts },
  markdown: { rehypePlugins: [rehypePrettyCode] },
  prepare: ({ categories, tags, posts }) => {
    const docs = posts.filter(
      (i) => process.env.NODE_ENV !== 'production' || !i.draft,
    );

    const categoriesFromDoc = Array.from(
      new Set(docs.flatMap((i) => i.categories)),
    ).filter((i) => categories.find((j) => j.name === i) == null);
    categories.push(
      ...categoriesFromDoc.map((name) => ({
        name,
        slug: slugify(name),
        permalink: '',
        count: { total: 0, posts: 0 },
      })),
    );
    for (const category of categories) {
      category.count.posts = posts.filter((j) =>
        j.categories.includes(category.name),
      ).length;
      category.count.total = category.count.posts;
      category.permalink = `/${category.slug}`;
    }

    const tagsFromDoc = Array.from(new Set(docs.flatMap((i) => i.tags))).filter(
      (i) => tags.find((j) => j.name === i) == null,
    );
    tags.push(
      ...tagsFromDoc.map((name) => ({
        name,
        slug: slugify(name),
        permalink: '',
        count: { total: 0, posts: 0 },
      })),
    );
    for (const tag of tags) {
      tag.count.posts = posts.filter((j) => j.tags.includes(tag.name)).length;
      tag.count.total = tag.count.posts;
      tag.permalink = `/${tag.slug}`;
    }
  },
});
