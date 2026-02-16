import { motion } from 'framer-motion';
import { Star, Clock, MapPin, Shield, Heart, Award } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <div>
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              About <span className="gold-text">Dhia Rent A Car</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Your trusted partner for premium car rental in Ariana, Tunisia. We deliver excellence,
              reliability, and a VIP experience with every ride.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div {...fadeInUp}>
              <h2 className="font-serif text-3xl font-bold mb-6">
                Our <span className="gold-text">Mission</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                At Dhia Rent A Car, we believe that every journey should be an exceptional experience.
                We combine quality vehicles with personalized attention to detail, ensuring our clients
                enjoy comfort, safety, and luxury at every turn.
              </p>
              <p className="text-muted-foreground">
                Located inside the Ariana bus station (Terminus), we're easily accessible and open
                24 hours a day, 7 days a week. Whether you need a car for a business trip, airport
                transfer, or a weekend getaway, we're here for you.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="grid grid-cols-2 gap-4">
              {[
                { value: '5.0', label: 'Google Rating', icon: Star },
                { value: '24/7', label: 'Always Open', icon: Clock },
                { value: '25+', label: 'Happy Reviews', icon: Heart },
                { value: '100%', label: 'Insured Fleet', icon: Shield },
              ].map(({ value, label, icon: Icon }) => (
                <div key={label} className="glass rounded-2xl p-6 text-center">
                  <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <div className="font-serif text-2xl font-bold gold-text mb-1">{value}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="glass rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Award, title: 'Professional', desc: 'A team dedicated to delivering the highest standards of service.' },
                { icon: Shield, title: 'Reliable', desc: 'Well-maintained vehicles and transparent pricing you can trust.' },
                { icon: Heart, title: 'Customer-Focused', desc: 'Your comfort and satisfaction are our top priorities.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="mt-20 text-center">
            <div className="flex items-center justify-center gap-2 text-lg">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">
                Rue De Gharnata, Ariana – Inside Ariana Bus Station (Terminus)
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
