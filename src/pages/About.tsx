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
              À propos de <span className="gold-text">[y business name]</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Votre partenaire de confiance pour la location de voitures à M'saken. Nous offrons
              excellence, fiabilité et un service de qualité à chaque trajet.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div {...fadeInUp}>
              <h2 className="font-serif text-3xl font-bold mb-6">
                Notre <span className="gold-text">mission</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                Chez [y business name], nous croyons que chaque trajet doit être une expérience
                exceptionnelle. Nous allions véhicules de qualité et attention personnalisée pour
                que nos clients profitent du confort, de la sécurité et d'un service soigné.
              </p>
              <p className="text-muted-foreground">
                Situés Av. 20 mars à M'saken, nous sommes facilement accessibles. Que vous ayez
                besoin d'une voiture pour un déplacement professionnel, un transfert aéroport ou
                un week-end, nous sommes là pour vous.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="grid grid-cols-2 gap-4">
              {[
                { value: '3,4', label: 'Note Google', icon: Star },
                { value: 'Ouvert', label: 'Horaires', icon: Clock },
                { value: '5+', label: 'Avis clients', icon: Heart },
                { value: '100%', label: 'Flotte assurée', icon: Shield },
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
                { icon: Award, title: 'Professionnel', desc: 'Une équipe dévouée à un service de qualité.' },
                { icon: Shield, title: 'Fiable', desc: 'Véhicules bien entretenus et tarifs transparents.' },
                { icon: Heart, title: 'À l\'écoute', desc: 'Votre confort et satisfaction sont nos priorités.' },
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
                Av. 20 mars, M'saken
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
