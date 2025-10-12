import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '@/data/profile';

interface LoadingSceneProps {
  onComplete: () => void;
}

export function LoadingScene({ onComplete }: LoadingSceneProps) {
  const [progress, setProgress] = useState(0);
  const [currentLang, setCurrentLang] = useState(0);
  
  const languages = ['Java', 'TypeScript', 'Go', 'Python', 'Kubernetes'];

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    // Rotate languages
    const langInterval = setInterval(() => {
      setCurrentLang((prev) => (prev + 1) % languages.length);
    }, 400);

    return () => {
      clearInterval(interval);
      clearInterval(langInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center space-y-8">
        {/* Name Banner */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
        >
          {profile.name}
        </motion.h1>

        {/* Rotating Language Ring */}
        <div className="relative h-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentLang}
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              exit={{ opacity: 0, rotateX: -90 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-2xl font-semibold text-primary">
                {languages[currentLang]}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto space-y-2">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-primary to-secondary"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Loading • {languages[currentLang]} • {progress}%
          </p>
        </div>
      </div>
    </motion.div>
  );
}
