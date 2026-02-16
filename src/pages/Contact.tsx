import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <div className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
            Contact <span className="gold-text">Concierge</span>
          </h1>
          <p className="text-muted-foreground">We're available 24/7 for your convenience</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-serif text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="flex flex-col gap-6">
                <a href="tel:+21697657778" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 group-hover:animate-pulse-gold">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Phone</div>
                    <div className="text-sm">+216 97 657 778</div>
                  </div>
                </a>

                <a href="https://wa.me/21697657778" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-xl whatsapp-btn flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">WhatsApp</div>
                    <div className="text-sm">+216 97 657 778</div>
                  </div>
                </a>

                <a href="https://www.facebook.com/dali.voiture.5/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-xl facebook-btn flex items-center justify-center flex-shrink-0">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Facebook</div>
                    <div className="text-sm">Dhia Rent A Car</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Address</div>
                    <div className="text-sm">Rue De Gharnata, Ariana (Terminus)</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Hours</div>
                    <div className="text-sm">Open 24h/24 – 7j/7</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass rounded-2xl overflow-hidden mb-8">
              <h2 className="font-serif text-2xl font-bold p-6 pb-4">Book an Appointment</h2>
              <div className="h-[600px] w-full">
                <iframe
                  src="https://calendly.com/jawharchahed49/new-meeting-1?embed_type=Inline"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Calendly - Book an appointment"
                />
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border/30 h-[300px] luxury-shadow">
              <iframe
                src="https://maps.google.com/maps?q=Dhia+Rent+A+Car+Ariana+Tunisia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
