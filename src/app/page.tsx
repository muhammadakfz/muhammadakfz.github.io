'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';
import { GithubButton } from '@/components/ui/github-button';
import WelcomeModal from '@/components/welcome-modal';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Laugh,
  Layers,
  PartyPopper,
  UserRoundSearch,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

/* ---------- quick-question data ---------- */
const questions = {
  Me: 'Who are you? I want to know more about you.',
  Projects: 'What are your projects? What are you working on right now?',
  Skills: 'What are your skills? Give me a list of your soft and hard skills.',
  Fun: 'What’s the craziest thing you’ve ever done? What are your hobbies?',
  Contact: 'How can I contact you?',
} as const;

const questionConfig = [
  { key: 'Me', color: '#329696', icon: Laugh },
  { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Fun', color: '#B95F9D', icon: PartyPopper },
  { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
] as const;

/* ---------- component ---------- */
export default function Home() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const goToChat = (query: string) =>
    router.push(`/chat?query=${encodeURIComponent(query)}`);

  /* hero animations (unchanged) */
  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8 },
    },
  };
  const bottomElementVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8, delay: 0.2 },
    },
  };

  useEffect(() => {
    // Précharger les assets du chat en arrière-plan
    const img = new window.Image();
    img.src = '/osanai.gif';

    // Précharger les vidéos aussi
    const linkWebm = document.createElement('link');
    linkWebm.rel = 'preload'; // Note: prefetch au lieu de preload
    linkWebm.as = 'video';
    linkWebm.href = '/final_memojis.webm';
    document.head.appendChild(linkWebm);

    const linkMp4 = document.createElement('link');
    linkMp4.rel = 'prefetch';
    linkMp4.as = 'video';
    linkMp4.href = '/final_memojis_ios.mp4';
    document.head.appendChild(linkMp4);
  }, []);

  useEffect(() => {
    // Opt-out of animations on this page (used by SparklesCore)
    try {
      document.documentElement.style.setProperty('--disable-animations', 'true');
      return () => {
        document.documentElement.style.removeProperty('--disable-animations');
      };
    } catch (e) {
      // ignore
    }
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 md:pb-20">

      {/* header */}
      {/* centre memoji */}
      <div className="relative z-10 h-48 w-48 overflow-hidden rounded-full sm:h-72 sm:w-72">
        <Image
          src="/osanai.gif"
          alt="Osanai gif"
          width={2000}
          height={2000}
          priority
          className="h-full w-full object-cover"
        />
      </div>

      {/* Text below memoji */}
      <motion.div
        className="z-1 mt-8 mb-4 flex flex-col items-center text-center"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-secondary-foreground mt-1 text-xl font-semibold md:text-2xl">
          皆さん、こんにちは 👋
        </h2>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Osanai Yuki
        </h1>
        <p className="mt-2 text-lg text-muted-foreground md:text-xl">
          muhammadakfz's assistant
        </p>
      </motion.div>

      {/* <div className="mt-6 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {questionConfig.map(({ key, color, icon: Icon }) => (
          <Button
            key={key}
            onClick={() => goToChat(questions[key])}
            variant="outline"
            aria-label={`Quick question: ${key}`}
            className="aspect-square w-full cursor-pointer rounded-2xl border border-border bg-[color:var(--card)/0.08] py-6 shadow-sm backdrop-blur-lg transform-gpu transition-all duration-200 hover:scale-105 hover:border-border/70 md:p-8"
          >
            <div className="flex h-full flex-col items-center justify-center gap-2 text-[color:var(--foreground)]">
              <span style={{ color }} className="flex items-center justify-center">
                <Icon size={22} strokeWidth={2} />
              </span>
              <span className="text-xs font-medium sm:text-sm text-[color:var(--muted-foreground)]">{key}</span>
            </div>
          </Button>
        ))}
      </div> */}

      {/* input + quick buttons */}
      <motion.div
        variants={bottomElementVariants}
        initial="hidden"
        animate="visible"
        className="z-10 mt-4 flex w-full flex-col items-center justify-center md:px-0"
      >
        {/* free-form question */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) goToChat(input.trim());
          }}
          className="relative w-full max-w-lg"
        >
          <div className="mx-auto flex items-center rounded-full border border-border bg-[color:var(--input)/0.3] py-2.5 pr-2 pl-6 backdrop-blur-lg transition-all hover:border-border/80 dark:border-border dark:bg-[color:var(--input)/0.6] dark:hover:border-border/60">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything…"
              className="w-full border-none bg-transparent text-base text-[color:var(--foreground)] placeholder:text-[color:var(--muted-foreground)] focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Submit question"
              className="flex items-center justify-center rounded-full bg-[#0171E3] p-2.5 text-[color:var(--primary-foreground)] transition-colors hover:bg-blue-600 disabled:opacity-70 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </form>

      </motion.div>
      {/* <FluidCursor /> */}
    </div>
  );
}
