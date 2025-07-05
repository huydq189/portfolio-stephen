import rehypePrettyCode, { type Options } from 'rehype-pretty-code';
import { defineCollection, defineConfig, s } from 'velite';

const meta = s
  .object({
    title: s.string().optional(),
    description: s.string().optional(),
    keywords: s.array(s.string()).optional(),
  })
  .default({});

const abouts = defineCollection({
  name: 'About',
  pattern: 'about/**/*.mdx',
  schema: s.object({
    title: s.string(),
    summary: s.string(),
    code: s.mdx(),
    meta,
  }),
});

const rehypePrettyOptions: Options = {
  theme: {
    light: 'github-light',
    dark: 'github-dark-dimmed',
  },
  keepBackground: false,
};

export default defineConfig({
  root: 'src/content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { abouts },
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypePrettyOptions]],
  },
});
