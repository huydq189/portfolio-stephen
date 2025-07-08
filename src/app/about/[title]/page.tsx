import { notFound } from 'next/navigation';

import { abouts } from '#velite';
import { MDXComponent } from '@/components/molecules';
import { ENV } from '@/lib/constants';
import { generateSEO } from '@/lib/generateSEO';

interface AboutsProps {
  params: Promise<{ title: string }>;
}

function getContent(title: string) {
  return abouts.find((abouts) => abouts.title === title);
}

export async function generateMetadata({ params }: AboutsProps) {
  const { title } = await params;
  const abouts = getContent(title);
  if (!abouts) return {};

  const image = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/api/og?title=${abouts.title}`;

  return {
    ...generateSEO(abouts.title, abouts.title, image, `about/${abouts.title}`),
  };
}

export function generateStaticParams() {
  return abouts.map((abouts) => ({ title: abouts.title }));
}

export default async function Page({ params }: AboutsProps) {
  const { title } = await params;
  const abouts = getContent(title);
  if (!abouts) notFound();

  if (abouts == null) notFound();

  return <MDXComponent code={abouts.code} />;
}
