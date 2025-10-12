import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useThemeStore } from '@/stores/themeStore';
import { profile } from '@/data/profile';

const accents = [
  { name: 'Default', value: 'default' as const },
  { name: 'Cyan', value: 'cyan' as const },
  { name: 'Indigo', value: 'indigo' as const },
  { name: 'Ruby', value: 'ruby' as const },
];

export function Footer() {
  const { accent, setAccent } = useThemeStore();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              3D Skillverse
            </h3>
            <p className="text-muted-foreground">
              Building reliable, scalable software at scale
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <motion.a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={profile.social.email}
              className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>

          {/* Accent Selector */}
          <div className="flex flex-col items-end gap-2">
            <p className="text-sm text-muted-foreground">Accent Color</p>
            <div className="flex gap-2">
              {accents.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setAccent(item.value)}
                  className={`px-3 py-1 text-sm rounded-full transition-all ${
                    accent === item.value
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                  aria-label={`Set ${item.name} accent`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="scroll-fab"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
