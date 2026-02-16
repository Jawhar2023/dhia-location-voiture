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

      {/* Hero — Porsche background image */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 px-4">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/50 to-black pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 w-full max-w-3xl mx-auto text-center flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4"
          >
            Premium car rental
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-5"
            style={{ fontFamily: 'system-ui, sans-serif' }}
          >
            Find your dream car
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10"
          >
            Explore our fleet and drive away with the perfect ride. Simple, transparent, and ready when you are.
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
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="used">Used cars</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[130px] sm:w-[150px] h-11 rounded-lg bg-white/5 border-white/10 text-white focus:ring-primary">
                <SelectValue placeholder="Any makes" />
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
                <SelectValue placeholder="Any models" />
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
                <SelectValue placeholder="All pricing" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">All pricing</SelectItem>
                <SelectItem value="budget">Under 90 TND/day</SelectItem>
                <SelectItem value="mid">90–120 TND/day</SelectItem>
                <SelectItem value="premium">120+ TND/day</SelectItem>
              </SelectContent>
            </Select>
            <Button size="lg" className="h-11 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-6" asChild>
              <Link to="/fleet">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Link>
            </Button>
          </motion.div>

          {/* Trust line + CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-10"
          >
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" /> Open 24/7
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" /> Fully insured
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-primary text-primary" /> 5.0 reviews
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="rounded-lg" asChild>
              <Link to="/fleet">Explore fleet <ChevronRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-lg border-white/20 text-white hover:bg-white/10" onClick={() => setQuizOpen(true)}>
              <Sparkles className="w-4 h-4 mr-2" /> Find your car
            </Button>
          </motion.div>

          {/* Location card — centered below */}
          <motion.a
            href="https://maps.google.com/maps?q=Dhia+Rent+A+Car+Ariana+Tunisia"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-14 inline-flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-5 py-4 text-left hover:bg-white/10 transition-colors"
          >
            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-white">View on the map</p>
              <p className="text-xs text-muted-foreground">Rue De Gharnata, Ariana – Bus Station (Terminus), Tunisia</p>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gold-text">Dhia Rent A Car</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience premium car rental with personalized VIP service
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Full Insurance', desc: 'All vehicles fully insured for your peace of mind' },
              { icon: Clock, title: '24/7 Availability', desc: 'Book or pick up your car anytime, day or night' },
              { icon: Star, title: '5-Star Service', desc: 'Rated 5.0 on Google with 25+ glowing reviews' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...stagger}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass rounded-2xl p-8 text-center hover:luxury-shadow transition-shadow duration-500"
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
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
              Our <span className="gold-text">VIP Fleet</span>
            </h2>
            <p className="text-muted-foreground">Select your luxury ride</p>
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
              <Link to="/fleet">View Full Fleet <ChevronRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button size="lg" variant="outline" onClick={() => setQuizOpen(true)}>
              <Sparkles className="w-4 h-4 mr-2" /> Find Your Match
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trust Wall */}
      <TrustWall />

      {/* Reviews */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
              Client <span className="gold-text">Testimonials</span>
            </h2>
            <p className="text-muted-foreground">What our VIP clients say about us</p>
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
                href="https://search.google.com/local/writereview?placeid=ChIJAa9vJACZAhMR-2HullFL1p8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Star className="w-4 h-4 mr-2" /> Leave a VIP Review
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
              Find <span className="gold-text">Us</span>
            </h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
              <MapPin className="w-5 h-5 text-primary" />
              Rue De Gharnata, Ariana – Inside Ariana Bus Station (Terminus)
            </div>
            <p className="text-sm text-muted-foreground animate-glow">We are here, ready 24/7</p>
          </motion.div>
          <motion.div {...fadeInUp} className="rounded-2xl overflow-hidden border border-border/30 h-[400px] luxury-shadow">
            <iframe
              src="https://maps.google.com/maps?q=Dhia+Rent+A+Car+Ariana+Tunisia&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dhia Rent A Car Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
