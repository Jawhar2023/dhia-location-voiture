import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Flotte', to: '/fleet' },
  { label: 'À propos', to: '/about' },
  { label: 'Avis', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
];

const HERO_THRESHOLD = typeof window !== 'undefined' ? window.innerHeight * 0.85 : 700;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsHeroSection(false);
      return;
    }
    const check = () => setIsHeroSection(window.scrollY < HERO_THRESHOLD);
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, [location.pathname]);

  const navClass = isHeroSection
    ? 'fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-none border-0 border-b border-white/20 transition-all duration-300'
    : 'fixed top-0 left-0 right-0 z-50 glass transition-all duration-300';

  return (
    <nav className={navClass}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link
          to="/"
          className={`font-display text-xl font-semibold transition-colors ${
            isHeroSection ? 'text-white hover:text-primary/90' : 'gold-text'
          }`}
        >
          DHOKKAR RENT A CAR
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to
                  ? 'text-primary'
                  : isHeroSection
                    ? 'text-white/90 hover:text-white'
                    : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            size="sm"
            variant={isHeroSection ? 'ghost' : 'default'}
            className={isHeroSection ? 'text-white border-white/30 hover:bg-white/10 hover:text-white' : ''}
            asChild
          >
            <a href="tel:+21624621605">
              <Phone className="w-4 h-4 mr-2" />
              Appeler
            </a>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden transition-colors ${isHeroSection ? 'text-white' : 'text-foreground'}`}
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t ${isHeroSection ? 'bg-black/40 backdrop-blur-xl border-white/20' : 'glass border-border/30'}`}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors ${
                    location.pathname === link.to ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button size="sm" className="w-full mt-2" asChild>
                <a href="tel:+21624621605">
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
