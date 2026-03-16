import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Clock, Shield, Car, MapPin, Phone, ChevronRight, Sparkles, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import CarCard from '@/components/CarCard';
import ReviewCard from '@/components/ReviewCard';
import TrustWall from '@/components/TrustWall';
import PriceTransparency from '@/components/PriceTransparency';
import PersonalityTest from '@/components/PersonalityTest';
import { cars } from '@/data/cars';
import { reviews } from '@/data/reviews';
import heroBg from '@/assets/porshe 911.jpg';

const heroVideo = new URL('../video/Luxury_sports_car_reveal_studio_3e29641b7d (1).mp4', import.meta.url).href;

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Index() {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <div>
      <PersonalityTest open={quizOpen} onClose={() => setQuizOpen(false)} />

      {/* Hero — Video background with fallback image */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 px-4">
        {/* Fallback image (shown while video loads or if video fails) */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden="true"
        />
        {/* Full-bleed video background — autoplay, muted, loop, subtle zoom */}
        <div className="absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full hero-video-zoom"
            poster={heroBg}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        {/* Gradient overlay for text readability + cinematic depth */}
        <div
          className="absolute inset-0 z-[2] bg-gradient-to-b from-black/80 via-black/55 to-black/90 pointer-events-none"
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none" aria-hidden="true" />
        <div className="relative z-[10] w-full max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-5"
          >
            Location de voitures
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.08] tracking-tight mb-6"
          >
            Trouvez la voiture de vos rêves
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-12 font-normal"
          >
            Découvrez notre flotte et partez avec la voiture idéale. Simple, transparent et prêt pour vous.
          </motion.p>

          {/* Search bar — centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-wrap justify-center gap-3 w-full mb-12"
          >
            <Select defaultValue="used">
              <SelectTrigger className="w-[130px] sm:w-[150px] h-11 rounded-lg bg-white/5 border-white/10 text-white focus:ring-primary">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tout</SelectItem>
                <SelectItem value="new">Neuf</SelectItem>
                <SelectItem value="used">Occasion</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[130px] sm:w-[150px] h-11 rounded-lg bg-white/5 border-white/10 text-white focus:ring-primary">
                <SelectValue placeholder="Marque" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kia">Kia</SelectItem>
                <SelectItem value="skoda">Škoda</SelectItem>
                <SelectItem value="hyundai">Hyundai</SelectItem>
                <SelectItem value="seat">SEAT</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[130px] sm:w-[150px] h-11 rounded-lg bg-white/5 border-white/10 text-white focus:ring-primary">
                <SelectValue placeholder="Modèle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="stonic">Stonic</SelectItem>
                <SelectItem value="fabia">Fabia</SelectItem>
                <SelectItem value="i20">i20</SelectItem>
                <SelectItem value="ibiza">Ibiza</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[130px] sm:w-[150px] h-11 rounded-lg bg-white/5 border-white/10 text-white focus:ring-primary">
                <SelectValue placeholder="Prix" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Tous les prix</SelectItem>
                <SelectItem value="budget">Moins de 90 TND/j</SelectItem>
                <SelectItem value="mid">90–120 TND/j</SelectItem>
                <SelectItem value="premium">120+ TND/j</SelectItem>
              </SelectContent>
            </Select>
            <Button size="lg" className="h-11 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-6" asChild>
              <Link to="/fleet">
                <Search className="w-4 h-4 mr-2" />
                Rechercher
              </Link>
            </Button>
          </motion.div>

          {/* Trust line + CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/60 mb-12"
          >
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" /> Ouvert · Ferme à 15:30
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" /> Tous assurés
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-primary text-primary" /> 3,4 (5) · 5 avis
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" asChild>
              <Link to="/fleet">Voir la flotte <ChevronRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:border-white/30" onClick={() => setQuizOpen(true)}>
              <Sparkles className="w-4 h-4 mr-2" /> Trouver ma voiture
            </Button>
          </motion.div>

          {/* Location card — centered below */}
          <motion.a
            href="https://maps.app.goo.gl/wvZbMdZTURLgcwKPA"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 inline-flex items-center gap-3 rounded-2xl bg-white/[0.06] border border-white/10 px-6 py-4 text-left hover:bg-white/[0.1] hover:border-white/20 transition-all duration-200"
          >
            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-white">Voir sur la carte</p>
              <p className="text-xs text-muted-foreground">Av. 20 mars, M'saken</p>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-zinc-950/40">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              Pourquoi choisir <span className="gold-text">Dhokkar Rent A Car</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Location de voitures avec un service personnalisé et de qualité
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Assurance complète', desc: 'Tous nos véhicules sont entièrement assurés' },
              { icon: Clock, title: 'Disponibilité', desc: 'Ouvert · Ferme à 15:30' },
              { icon: Star, title: 'Avis clients', desc: '3,4 (5) sur Google avec 5 avis' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...stagger}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="card-premium p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Transparency */}
      <PriceTransparency />

      {/* Featured Cars */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              Notre <span className="gold-text">flotte</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">Choisissez votre véhicule</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cars.map((car, i) => (
              <motion.div key={car.id} {...stagger} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeInUp} className="text-center mt-12 flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/fleet">Voir toute la flotte <ChevronRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button size="lg" variant="outline" onClick={() => setQuizOpen(true)}>
              <Sparkles className="w-4 h-4 mr-2" /> Trouver ma voiture
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trust Wall */}
      <TrustWall />

      {/* Reviews */}
      <section className="section-padding bg-zinc-950/40">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              Avis <span className="gold-text">clients</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">Ce que disent nos clients</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, i) => (
              <motion.div key={review.name} {...stagger} transition={{ delay: i * 0.15, duration: 0.5 }}>
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeInUp} className="text-center mt-12">
            <Button asChild>
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJBZW6IFP1_RIRPe4sg5EPD2k"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Star className="w-4 h-4 mr-2" /> Rédiger un avis
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              Nous <span className="gold-text">trouver</span>
            </h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
              <MapPin className="w-5 h-5 text-primary" />
              Av. 20 mars, M'saken
            </div>
            <p className="text-sm text-muted-foreground mb-4">Ouvert · Ferme à 15:30</p>
            <Button variant="outline" size="sm" asChild>
              <a href="https://maps.app.goo.gl/wvZbMdZTURLgcwKPA" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-4 h-4 mr-2" /> Itinéraires
              </a>
            </Button>
          </motion.div>
          <motion.div {...fadeInUp} className="rounded-2xl overflow-hidden border border-border/30 h-[400px] luxury-shadow">
            <iframe
              src="https://www.google.com/maps?q=Av.+20+mars+Msaken+Tunisia&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dhokkar Rent A Car - M'saken"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
