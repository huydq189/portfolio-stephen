import { notFound } from 'next/navigation';
import { allAbouts } from '@/constants';
import { ENV } from '@/lib/constants';
import { generateSEO } from '@/lib/generateSEO';

type ParamsProps = {
  title: string;
  summary: string;
};

type About = {
  title: string;
  summary: string;
};

async function getContent(params: ParamsProps) {
  const post = allAbouts.find((post: About) => post.title === params.title);
  if (!post) return null;
  return post;
}

export async function generateMetadata({ params }: { params: ParamsProps }) {
  const about = await getContent(params);
  if (!about) return {};

  const title = about.title;
  const description = about.summary;
  const image = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/api/og?title=${title}`;

  return {
    ...generateSEO(title, description, image, `/projects/${title}`),
  };
}

export async function generateStaticParams() {
  return allAbouts.map((post) => ({
    title: post?.title.toLowerCase(),
  }));
}

export default async function Page({ params }: { params: ParamsProps }) {
  const content = await getContent(params);
  if (!content) return notFound();
  const { default: Component } = await import(`@/content/${content}.mdx`);

  return <Component />;
}
