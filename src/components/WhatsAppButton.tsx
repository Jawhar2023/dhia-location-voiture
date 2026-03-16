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
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br from-[#f09433] via-[#e1306c] to-[#405de6] hover:scale-105 transition-transform"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white" />
            </motion.a>

            <motion.a
              key="facebook"
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2, delay: 0.03 }}
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-[#1877F2] hover:scale-105 transition-transform"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-white" />
            </motion.a>

            <motion.a
              key="whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2, delay: 0.06 }}
              className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg whatsapp-btn hover:scale-105 transition-transform"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="w-14 h-14 rounded-full whatsapp-btn flex items-center justify-center shadow-lg whatsapp-float border-2 border-white"
        aria-label={open ? 'Fermer le menu' : 'Ouvrir les contacts'}
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
