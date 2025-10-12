import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { profile } from '@/data/profile';

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {profile.education.map((edu, index) => (
            <motion.div
              key={`${edu.school}-${edu.period}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-8"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-lg bg-primary/10 group-hover:animate-shimmer">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-primary font-semibold mb-4">{edu.school}</p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    {edu.focus && (
                      <p className="mt-2 font-medium">Focus: {edu.focus}</p>
                    )}
                    {edu.honors && (
                      <p className="mt-2 text-accent font-semibold">{edu.honors}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
