'use client';

import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

export function TypingHero() {
  const introRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const [titleStart, setTitleStart] = useState(false);

  useEffect(() => {
    const introTyped = new Typed(introRef.current, {
      strings: ['Hello world. I am'],
      typeSpeed: 50,
      showCursor: false,
      onComplete: () => {
        new Typed(nameRef.current, {
          strings: ['STEPHEN DO'],
          typeSpeed: 80,
          showCursor: false,
          onComplete: () => {
            setTitleStart(true);
            new Typed(titleRef.current, {
              strings: ['Full-stack Developer'],
              typeSpeed: 60,
              cursorChar: '_',
            });
          },
        });
      },
    });

    return () => {
      introTyped.destroy();
    };
  }, []);

  return (
    <header>
      <p
        ref={introRef}
        className="text-muted-foreground text-lg font-extralight"
      />
      <h1
        className="md:text-6xl sm:text-4xl text-3xl font-medium"
        aria-label="STEPHEN DO"
      >
        <span ref={nameRef} />
      </h1>
      <h2 className="text-muted-foreground md:text-2xl sm:text-xl text-base mt-2">
        {titleStart && <span className="animate-pulse">&gt; </span>}
        <span ref={titleRef} />
      </h2>
      <div className="absolute w-full h-1/2 bg-muted-foreground/10 blur-2xl top-0 left-0 -z-10 rounded-full animate-pulse" />
    </header>
  );
}
