import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Facebook } from 'lucide-react';

const INSTAGRAM_ICON = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-border/30 bg-card/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-xl font-semibold gold-text mb-4">DHOKKAR RENT A CAR</h3>
            <p className="text-sm text-muted-foreground">
              Agence de location de voitures à M'saken. Av. 20 mars.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Liens</h4>
            <div className="flex flex-col gap-2">
              <Link to="/fleet" className="text-sm text-muted-foreground hover:text-primary transition-colors">Flotte</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">À propos</Link>
              <Link to="/reviews" className="text-sm text-muted-foreground hover:text-primary transition-colors">Avis</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+21624621605" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> 24 621 605
              </a>
              <a href="https://maps.app.goo.gl/wvZbMdZTURLgcwKPA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="w-4 h-4 flex-shrink-0" /> Av. 20 mars, M'saken
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" /> Ouvert · Ferme à 15:30
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Suivez-nous</h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.facebook.com/p/Dhokkar-RENT-A-CAR-100063787620352/?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" /> Facebook
              </a>
              <a
                href="https://www.instagram.com/p/DQwqzR_jBnG/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {INSTAGRAM_ICON()} Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2026 Dhokkar Rent A Car. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
