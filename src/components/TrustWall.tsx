import { motion } from 'framer-motion';
import { Star, Clock, MapPin, Shield, Facebook, CheckCircle } from 'lucide-react';

const badges = [
  { icon: Star, label: 'Note 3,4 (5)', value: 'Google' },
  { icon: CheckCircle, label: '5+ avis', value: 'Vrais clients' },
  { icon: Clock, label: 'Ouvert', value: 'Ferme à 15:30' },
  { icon: MapPin, label: 'Adresse vérifiée', value: "M'saken" },
  { icon: Shield, label: 'Tous assurés', value: 'Tous les véhicules' },
  { icon: Facebook, label: 'Réseaux', value: 'Page active' },
];

export default function TrustWall() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Pourquoi nos clients nous <span className="gold-text">font confiance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des garanties qui enlèvent toute hésitation
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card-premium p-5 text-center group"
              >
                <div className="w-11 h-11 rounded-full gold-gradient flex items-center justify-center mx-auto mb-3 group-hover:animate-pulse-gold transition-all">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="font-semibold text-sm mb-1">{badge.label}</div>
                <div className="text-xs text-muted-foreground">{badge.value}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
