import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { profile } from '@/data/profile';

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {profile.certifications.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="skill-card group"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                <p className="text-primary font-semibold mb-2">{cert.issuer}</p>
                
                <div className="mt-auto pt-4 space-y-1 text-sm text-muted-foreground">
                  <p>Issued: {cert.date}</p>
                  <p className="font-mono text-xs">ID: {cert.credentialId}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
