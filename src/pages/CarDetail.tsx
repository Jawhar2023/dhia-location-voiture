import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Fuel, Users, DoorOpen, Settings, Snowflake, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cars } from '@/data/cars';

export default function CarDetail() {
  const { id } = useParams();
  const car = cars.find(c => c.id === id);

  if (!car) {
    return (
      <div className="section-padding text-center">
        <h1 className="font-serif text-4xl font-bold mb-4">Car Not Found</h1>
        <Button asChild>
          <Link to="/fleet">Back to Fleet</Link>
        </Button>
      </div>
    );
  }

  const specs = [
    { icon: DoorOpen, label: `${car.doors} Doors` },
    { icon: Users, label: `${car.seats} Seats` },
    { icon: Fuel, label: car.fuel },
    { icon: Settings, label: car.transmission },
    { icon: Snowflake, label: car.ac ? 'AC' : 'No AC' },
  ];

  return (
    <div className="section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link
            to="/fleet"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Fleet
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl overflow-hidden p-8">
              <img
                src={car.image}
                alt={car.name}
                className="w-full object-contain animate-float"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs font-medium uppercase tracking-widest text-primary">{car.type}</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">{car.name}</h1>
            <p className="text-lg gold-text font-semibold mb-6">{car.pricePerDay} TND / day</p>
            <p className="text-muted-foreground mb-8">{car.description}</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {specs.map(({ icon: Icon, label }) => (
                <div key={label} className="glass rounded-xl p-4 text-center">
                  <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <span className="text-xs text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="font-serif text-lg font-semibold mb-3">Perfect For</h3>
              <div className="flex flex-wrap gap-2">
                {car.idealFor.map(use => (
                  <span key={use} className="px-4 py-1.5 rounded-full text-xs font-medium glass text-muted-foreground">
                    {use}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="tel:+21697657778">
                  <Phone className="w-4 h-4 mr-2" /> Call to Book
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/21697657778" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
