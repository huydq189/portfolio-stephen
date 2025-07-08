import { EnterAnimation } from '@/components/atoms';
import { TypingHero } from '@/components/molecules';

export default function Home() {
  return (
    <section className="flex items-center justify-center gap-20 p-5">
      <EnterAnimation>
        <div className="md:space-y-10 space-y-8 relative z-10">
          <TypingHero />

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
      </EnterAnimation>
    </section>
  );
}
