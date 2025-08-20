'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Importation correcte pour Next.js 13+
import { useState } from 'react';

// Added a trigger prop to accept custom triggers
interface WelcomeModalProps {
  trigger?: React.ReactNode;
}

export default function WelcomeModal({ trigger }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Initialisation du router avec useRouter

  // Default trigger is the logo
  const defaultTrigger = (
    <Button
      variant="ghost"
  className="h-auto w-auto cursor-pointer rounded-2xl bg-[color:var(--card)/0.3] p-3 shadow-lg backdrop-blur-lg hover:bg-[color:var(--card)/0.6] focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
      onClick={() => setIsOpen(true)}
    >
      <Image
        src="/osanai.gif"
        width={100}
        height={100}
        alt="Osanai gif"
        className="w-6 md:w-8 rounded-full"
      />
      <span className="sr-only">About Osanai Yuki</span>
    </Button>
  );

  // Fonction qui utilise window.location pour forcer un rechargement complet
  const handleContactMe = () => {
    setIsOpen(false);
    // Forcer un rechargement complet de la page avec la requête
    window.location.href = '/chat?query=How%20can%20I%20contact%20you%3F';
  };

  return (
    <>
      {/* Use custom trigger if provided, otherwise use default */}
      {trigger ? (
        <div onClick={() => setIsOpen(true)}>{trigger}</div>
      ) : (
        defaultTrigger
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-background z-52 max-h-[85vh] overflow-auto rounded-2xl border-none p-4 py-6 shadow-xl sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[1000px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-full flex-col"
          >
            {/* Header */}
            <DialogHeader className="relative flex flex-row items-start justify-between px-8 pt-8 pb-6">
              <div>
                <DialogTitle className="flex items-center gap-2 text-4xl font-bold tracking-tight">
                  Hello — I'm Osanai Yuki
                </DialogTitle>
                <DialogDescription className="mt-2 text-base">
                  I'm an AI assistant built to help visitors explore projects,
                  skills and contact info for muhammadakfz. Ask me anything —
                  I'll adapt my answers to what you want to know.
                </DialogDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="sticky top-0 right-0 cursor-pointer rounded-full bg-pink-500 p-2 text-white hover:bg-pink-600"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogHeader>

            {/* Content area */}
            <div className="space-y-6 overflow-y-auto px-2 py-4 md:px-8">
              <section className="bg-accent w-full space-y-8 rounded-2xl p-8">
                {/* What section */}
                <div className="space-y-3">
                  <h3 className="text-pink-500 flex items-center gap-2 text-xl font-semibold ">
                    What is this?
                  </h3>
                  <p className="text-accent-foreground text-base leading-relaxed">
                    This is an interactive portfolio powered by an AI assistant
                    (me — Osanai Yuki). I can explain projects, show my stack,
                    or walk you through demos. Ask any question and I'll
                    tailor the response to your needs.
                  </p>
                </div>

                {/* Why section */}
                <div className="space-y-3">
                  <h3 className="text-pink-500 flex items-center gap-2 text-xl font-semibold">
                    Why use it?
                  </h3>
                  <p className="text-accent-foreground text-base leading-relaxed">
                    Static portfolios are one-size-fits-all. With Osanai I can
                    adapt answers to recruiters, teammates or curious visitors
                    and surface only what's relevant.
                  </p>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="flex flex-col items-center px-8 pt-4 pb-0 md:pb-8">
              <Button
                onClick={() => setIsOpen(false)}
                className="h-auto rounded-full px-4 py-3 bg-pink-500 text-white hover:bg-pink-600"
                size="sm"
              >
                Talk to Osanai
              </Button>
              <div
                className="mt-6 flex cursor-pointer flex-wrap gap-1 text-center text-sm"
                onClick={handleContactMe}
              >
                <p className="text-muted-foreground">
                  If you like this, please share it — feedback helps improve
                  the experience.
                </p>
                <div className="flex cursor-pointer items-center text-pink-500 hover:underline">
                  Contact muhammadakfz
                </div>
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}
