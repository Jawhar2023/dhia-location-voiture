import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fuel, Users, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Car } from '@/data/cars';

export default function CarCard({ car }: { car: Car }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="glass rounded-2xl overflow-hidden group h-full flex flex-col gold-hover-glow gold-ripple cursor-luxury"
    >
      <div className="relative overflow-hidden p-6 pb-0">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="text-xs font-medium uppercase tracking-widest text-primary mb-1">{car.type}</div>
        <h3 className="font-serif text-lg font-semibold mb-2">{car.name}</h3>
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1"><Fuel className="w-3 h-3" /> {car.fuel}</span>
          <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {car.seats}</span>
          <span className="flex items-center gap-1"><Settings className="w-3 h-3" /> {car.transmission}</span>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-semibold gold-text">
            {car.pricePerDay} TND<span className="text-xs text-muted-foreground">/day</span>
          </span>
          <Button size="sm" variant="outline" asChild>
            <Link to={`/fleet/${car.id}`}>Details</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
