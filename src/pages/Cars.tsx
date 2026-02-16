import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Building2, Users, Star, Clock } from 'lucide-react';
import CarCard from '@/components/CarCard';
import { cars } from '@/data/cars';

const categories = ['all', 'suv', 'city', 'sport'] as const;
const categoryLabels: Record<string, string> = {
  all: 'All',
  suv: 'SUV',
  city: 'City',
  sport: 'Sport',
};

export default function Cars() {
  const [filter, setFilter] = useState<string>('all');
  const [airportMode, setAirportMode] = useState(false);
  const filtered = filter === 'all' ? cars : cars.filter(c => c.category === filter);

  return (
    <div className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
            Our <span className="gold-text">VIP Fleet</span>
          </h1>
          <p className="text-muted-foreground mb-8">Choose your luxury vehicle</p>

          {/* Airport / City Toggle */}
          <div className="inline-flex items-center glass rounded-full p-1 mb-4">
            <button
              onClick={() => setAirportMode(false)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                !airportMode ? 'gold-gradient text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Building2 className="w-4 h-4" /> City Rental
            </button>
            <button
              onClick={() => setAirportMode(true)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                airportMode ? 'gold-gradient text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Plane className="w-4 h-4" /> Airport VIP
            </button>
          </div>
        </motion.div>

        {/* Airport VIP banner */}
        <AnimatePresence>
          {airportMode && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: 'auto', marginBottom: 32 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              className="overflow-hidden"
            >
              <div className="glass rounded-2xl p-6 text-center border border-primary/20">
                <p className="text-xs uppercase tracking-widest text-primary mb-3">Airport VIP Service</p>
                <div className="flex items-center justify-center gap-8 flex-wrap">
                  <div className="flex items-center gap-2 text-sm">
                    <Plane className="w-4 h-4 text-primary" />
                    <span>Airport Pickup & Drop-off</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span>Driver Assistance</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-primary" />
                    <span>Priority Service</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Flight Tracking</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'gold-gradient text-primary-foreground'
                  : 'glass text-muted-foreground hover:text-foreground'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((car, i) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              layout
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
