import type { ClassValue } from 'clsx';
import Image from 'next/image';
import * as runtime from 'react/jsx-runtime';
import { cn } from '@/lib/utils';
import { EnterAnimation } from '../atoms/enter-animation';

interface MDXProps {
  code: string;
  className?: ClassValue;
  transparentBg?: boolean;
  components?: Record<string, unknown>;
  [key: string]: unknown;
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const sharedComponents = {
  Image,
};

export const MDXComponent = ({ code, components, ...props }: MDXProps) => {
  const Component = useMDXComponent(code);
  const { className, transparentBg = true } = props;

  return (
    <EnterAnimation className="my-auto">
      <article
        className={cn(
          className,
          transparentBg ? 'prose-pre:!bg-transparent' : '',
          'prose min-w-full p-2.5 prose-pre:my-0  prose-pre:p-0 prose-pre:focus-visible:!ring-0 prose-pre:!outline-0 prose-img:aspect-video prose-img:object-cover prose-img:object-center',
        )}
      >
        <Component
          components={{ ...sharedComponents, ...components }}
          {...props}
        />
      </article>
    </EnterAnimation>
  );
};
