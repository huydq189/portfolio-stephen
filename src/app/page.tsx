import { ExternalLink } from 'lucide-react';
import { Button, EnterAnimation, Motion } from '@/components/atoms';
import { GlobeView, TypingHero } from '@/components/molecules';

export default function Home() {
  return (
    <section className="flex items-center justify-center gap-20 p-5">
      <EnterAnimation>
        <div className="md:space-y-8 space-y-6 relative z-10">
          <TypingHero />
          <div className="space-y-2 sm:text-sm text-xs">
            <pre className="text-[#24292e]overflow-x-auto text-sm leading-relaxed">
              <code>
                <span className="text-[#6a737d]">
                  {'// you can see my Github page here'}
                </span>
                {'\n'}
                <span className="text-[#d73a49]">const</span>{' '}
                <span className="text-[#005cc5]">githubLink</span> ={' '}
                <a
                  href="https://github.com/huydq189"
                  target="_blank"
                  rel="noopener"
                  className="text-[#032f62] hover:underline hover:text-[#111]"
                >
                  'https://github.com/huydq189'
                </a>
              </code>
            </pre>
          </div>
          <Motion
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button asChild className="bg-black hover:bg-gray-800 px-6 py-3">
              <a
                href={
                  'https://sumptuous-fowl-63e.notion.site/200936644d828055927fd3a038dcfaa8'
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                View my CV here <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </Motion>
        </div>
      </EnterAnimation>
    </section>
  );
}
