import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle, Facebook } from 'lucide-react';

const INSTAGRAM_ICON = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

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
            Contact <span className="gold-text">[y business name]</span>
          </h1>
          <p className="text-muted-foreground">Réservez un créneau ou appelez-nous</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="font-serif text-2xl font-bold mb-6">Nous contacter</h2>
              <div className="flex flex-col gap-6">
                <a href="tel:+21624621605" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 group-hover:animate-pulse-gold">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Téléphone</div>
                    <div className="text-sm">24 621 605</div>
                  </div>
                </a>

                <a href="https://wa.me/21624621605" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-xl whatsapp-btn flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">WhatsApp</div>
                    <div className="text-sm">24 621 605</div>
                  </div>
                </a>

                <a href="https://www.facebook.com/p/Dhokkar-RENT-A-CAR-100063787620352/?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-xl facebook-btn flex items-center justify-center flex-shrink-0">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Facebook</div>
                  </div>
                </a>

                <a href="https://www.instagram.com/p/DQwqzR_jBnG/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-amber-500 flex items-center justify-center flex-shrink-0 text-white">
                    {INSTAGRAM_ICON()}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Instagram</div>
                  </div>
                </a>

                <a href="https://maps.app.goo.gl/wvZbMdZTURLgcwKPA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Adresse</div>
                    <div className="text-sm">Av. 20 mars, M'saken</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Horaires</div>
                    <div className="text-sm">Ouvert · Ferme à 15:30</div>
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
              <h2 className="font-serif text-2xl font-bold p-6 pb-4">Prendre rendez-vous</h2>
              <div className="h-[600px] w-full">
                <iframe
                  src="https://calendly.com/jawharchahed49/new-meeting-1?embed_type=Inline"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Calendly - Prendre rendez-vous"
                />
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border/30 h-[300px] luxury-shadow">
              <iframe
                src="https://www.google.com/maps?q=Av.+20+mars+Msaken+Tunisia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="[y business name] - M'saken"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
