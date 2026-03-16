import { useState } from 'react';
import { MessageCircle, Facebook, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '21624621605';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const FACEBOOK_URL = 'https://www.facebook.com/p/Dhokkar-RENT-A-CAR-100063787620352/?locale=fr_FR';
const INSTAGRAM_URL = 'https://www.instagram.com/p/DQwqzR_jBnG/';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <AnimatePresence>
        {open && (
          <>
            <motion.a
              key="instagram"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.18 }}
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-md bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400"
              aria-label="Ouvrir Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </motion.a>

            <motion.a
              key="facebook"
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.18, delay: 0.04 }}
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-md facebook-btn"
              aria-label="Ouvrir Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </motion.a>

            <motion.a
              key="whatsapp-secondary"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.18, delay: 0.08 }}
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-md whatsapp-btn"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="w-14 h-14 rounded-full whatsapp-btn flex items-center justify-center shadow-lg whatsapp-float border-2 border-white/80"
        aria-label="Ouvrir les contacts"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.button>
    </div>
  );
}
