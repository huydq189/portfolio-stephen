import { FadeIn } from '@/components/atoms/fade-in';
import { AnimatedName } from '@/components/molecules/animated-name';

export default function About() {
  return (
    <section className="flex items-center justify-center gap-20 p-5">
      <FadeIn>
        <div className="md:space-y-10 space-y-8 relative z-10">
          <header>
            <p className="text-muted-foreground text-lg font-extralight">
              Hello world. I am
            </p>
            <AnimatedName />
            <h2 className="text-muted-foreground md:text-2xl sm:text-xl text-base">
              <span className="animate-pulse">&gt; </span>
              Full-Stack Developer
            </h2>

            <div className="absolute w-full h-1/2 bg-muted-foreground/10 blur-2xl top-0 left-0 -z-10 rounded-full animate-pulse" />
          </header>

          <div className="space-y-2 sm:text-sm text-xs">
            <p className="text-muted-foreground">
              {'// you can download my CV here'}
            </p>
            <p className="text-muted-foreground">
              <span className="text-purple">const</span>{' '}
              <span className="text-green">githubLink</span> ={' '}
              <a
                target="_blank"
                href="https://github.com/huydq189"
                className="text-light-brown hover:underline hover:text-foreground transition-colors"
                rel="noopener"
              >
                &apos;https://github.com/huydq189&apos;
              </a>
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
