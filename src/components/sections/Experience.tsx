import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { profile } from '@/data/profile';

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-12">
            {profile.experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
              >
                {/* Timeline dot */}
                {/* <div className="absolute left-0 md:left-auto md:-right-[2.15rem] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background" /> */}
                <div
                  className={`absolute top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background
    ${index % 2 === 0
                      ? 'md:-right-[2.15rem] left-auto'  // Dot on right for even (first, third…)
                      : 'md:-left-[2.15rem] right-auto'  // Dot on left for odd (second, fourth…)
                    }`}
                ></div>


                <div className="glass-card p-6 ml-8 md:ml-0">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                      <p className="text-primary font-semibold">{job.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {job.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
