import { motion } from 'framer-motion';
import { Star, Clock, MapPin, Shield, Facebook, CheckCircle } from 'lucide-react';

const badges = [
  { icon: Star, label: '5.0 Rating', value: 'Google Verified' },
  { icon: CheckCircle, label: '25+ Reviews', value: 'Real Clients' },
  { icon: Clock, label: '24/7 Open', value: 'Always Available' },
  { icon: MapPin, label: 'Location Verified', value: 'Ariana, Tunisia' },
  { icon: Shield, label: 'Fully Insured', value: 'All Vehicles' },
  { icon: Facebook, label: 'Social Verified', value: 'Active Page' },
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
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            Why Clients <span className="gold-text">Trust Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Verified credentials that remove all hesitation
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
                className="glass rounded-2xl p-5 text-center hover:luxury-shadow transition-all duration-500 group"
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
