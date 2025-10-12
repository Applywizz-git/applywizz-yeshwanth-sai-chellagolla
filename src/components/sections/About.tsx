import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Server, Users, Activity } from 'lucide-react';
import { profile } from '@/data/profile';

const iconMap = {
  award: Award,
  server: Server,
  users: Users,
  activity: Activity,
};

function Counter({ end, duration = 2 }: { end: string; duration?: number }) {
  const [count, setCount] = useState('0');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const numMatch = end.match(/\d+/);
    if (!numMatch) {
      setCount(end);
      return;
    }

    const target = parseInt(numMatch[0]);
    const suffix = end.replace(numMatch[0], '');
    const increment = target / (duration * 60);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target + suffix);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current) + suffix);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About Me
          </h2>

          <div className="glass-card p-8 md:p-12 space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {profile.about.summary}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {profile.about.highlights.map((stat, index) => {
                const Icon = iconMap[stat.icon as keyof typeof iconMap] || Award;
                
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center space-y-2"
                  >
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      <Counter end={stat.value} />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Key Strengths */}
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4">Key Strengths</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {profile.about.keyStrengths.map((strength, index) => (
                  <motion.div
                    key={strength}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 rounded-lg bg-primary/10 text-center text-sm font-medium"
                  >
                    {strength}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
