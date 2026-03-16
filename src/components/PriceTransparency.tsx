import { motion } from 'framer-motion';
import { Shield, Fuel, FileCheck, Eye, CheckCircle } from 'lucide-react';

const policies = [
  { icon: Shield, title: 'Assurance incluse', desc: 'Couverture complète sur chaque location. Sans frais cachés.' },
  { icon: Fuel, title: 'Carburant clair', desc: 'Plein à l\'arrivée, plein au retour. Pas de suppléments cachés.' },
  { icon: FileCheck, title: 'Pas de frais cachés', desc: 'Le prix affiché est le prix que vous payez.' },
  { icon: Eye, title: 'Tarifs transparents', desc: 'Tous les coûts expliqués avant la réservation.' },
];

export default function PriceTransparency() {
  return (
    <section className="section-padding bg-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            <span className="gold-text">Qualité</span> et clarté
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pas de mauvaises surprises. Pas de coûts cachés. Un service soigné et totalement transparent.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {policies.map((policy, i) => {
            const Icon = policy.icon;
            return (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-premium p-8 text-center group"
              >
                <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-6 group-hover:animate-glow transition-all">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{policy.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{policy.desc}</p>
                <CheckCircle className="w-5 h-5 text-primary mx-auto opacity-40 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
