import { motion } from 'framer-motion';
import { Shield, Fuel, FileCheck, Eye, CheckCircle } from 'lucide-react';

const policies = [
  { icon: Shield, title: 'Insurance Included', desc: 'Full coverage on every rental. No extra charges.' },
  { icon: Fuel, title: 'Clear Fuel Policy', desc: 'Full-to-full. No hidden fuel surcharges.' },
  { icon: FileCheck, title: 'No Hidden Fees', desc: 'The price you see is the price you pay.' },
  { icon: Eye, title: 'Transparent Pricing', desc: 'All costs explained upfront before you book.' },
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
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            <span className="gold-text">Luxury</span> is Clarity
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No surprises. No hidden costs. Just premium service with total transparency.
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
                className="glass rounded-2xl p-8 text-center group hover:luxury-shadow transition-all duration-500"
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
