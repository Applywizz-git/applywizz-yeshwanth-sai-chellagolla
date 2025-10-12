import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Briefcase } from 'lucide-react';
import { profile } from '@/data/profile';

export function Hero() {
  const sequence = profile.rotatingKeywords.flatMap((word) => [word, 2000]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-primary text-lg font-semibold mb-2">
                Hi, I'm {profile.name}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {profile.tagline}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground min-h-[60px]"
            >
              <span>Expertise in </span>
              <TypeAnimation
                sequence={sequence}
                wrapper="span"
                speed={50}
                className="text-primary font-semibold"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              {profile.about.summary.split('.')[0]}.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="#projects" className="btn-hero">
                <Briefcase className="w-5 h-5 inline-block mr-2" />
                View Projects
              </a>
              <a href="/wajahathullah_mohammad_resume.pdf" download className="btn-hero-secondary">
                <Download className="w-5 h-5 inline-block mr-2" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl"
              />
              <div className="relative glass-card rounded-full overflow-hidden">
                <img
                  // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                  src="/images/profile_img1.jpg"
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
