import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, MapPin, Route, User, Users, Heart, Zap, Wallet, ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cars } from '@/data/cars';

interface Answers {
  journey?: 'city' | 'long';
  company?: 'solo' | 'couple' | 'family';
  style?: 'comfort' | 'sporty' | 'economy';
}

function getRecommendation(a: Answers): string {
  if (a.journey === 'long' && (a.company === 'family' || a.style === 'comfort')) return 'kia-stonic';
  if (a.journey === 'long' && a.style === 'sporty') return 'seat-ibiza';
  if (a.journey === 'long' && a.style === 'economy') return 'skoda-fabia';
  if (a.journey === 'city' && a.style === 'economy') return 'skoda-fabia';
  if (a.journey === 'city' && a.style === 'sporty') return 'seat-ibiza';
  if (a.company === 'family') return 'kia-stonic';
  return 'hyundai-i20';
}

const questions = [
  {
    title: "What's your journey?",
    subtitle: 'Tell us about your trip',
    key: 'journey',
    options: [
      { value: 'city', label: 'City Exploration', icon: MapPin, desc: 'Urban streets & local discoveries' },
      { value: 'long', label: 'Long Distance', icon: Route, desc: 'Highways & coastal adventures' },
    ],
  },
  {
    title: "Who's joining you?",
    subtitle: 'Select your travel crew',
    key: 'company',
    options: [
      { value: 'solo', label: 'Just Me', icon: User, desc: 'Solo adventure' },
      { value: 'couple', label: 'With Company', icon: Users, desc: '2–3 passengers' },
      { value: 'family', label: 'Family Trip', icon: Heart, desc: '4–5 passengers' },
    ],
  },
  {
    title: 'Your driving priority?',
    subtitle: 'What matters most to you',
    key: 'style',
    options: [
      { value: 'comfort', label: 'Comfort First', icon: Heart, desc: 'Smooth ride & space' },
      { value: 'sporty', label: 'Sporty & Fun', icon: Zap, desc: 'Dynamic performance' },
      { value: 'economy', label: 'Smart & Efficient', icon: Wallet, desc: 'Best value' },
    ],
  },
];

export default function PersonalityTest({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const handleAnswer = (key: string, value: string) => {
    const next = { ...answers, [key]: value };
    setAnswers(next);
    setTimeout(() => setStep(s => s + 1), 300);
  };

  const reset = () => { setStep(0); setAnswers({}); };

  const recommendedCar = step >= questions.length
    ? cars.find(c => c.id === getRecommendation(answers))
    : null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
        >
          <button
            onClick={() => { onClose(); reset(); }}
            className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close quiz"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="w-full max-w-2xl">
            {/* Progress bar */}
            <div className="flex gap-2 mb-10 justify-center">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 w-16 rounded-full transition-all duration-500 ${
                    i <= step ? 'gold-gradient' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step < questions.length ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">
                    {questions[step].title}
                  </h2>
                  <p className="text-muted-foreground mb-10">{questions[step].subtitle}</p>

                  <div className="grid gap-4 max-w-lg mx-auto">
                    {questions[step].options.map(opt => {
                      const Icon = opt.icon;
                      return (
                        <motion.button
                          key={opt.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleAnswer(questions[step].key, opt.value)}
                          className="glass rounded-2xl p-5 flex items-center gap-4 text-left hover:luxury-shadow transition-all duration-300 group"
                        >
                          <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold">{opt.label}</div>
                            <div className="text-sm text-muted-foreground">{opt.desc}</div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              ) : recommendedCar ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <p className="text-xs uppercase tracking-widest text-primary mb-3">Your perfect match</p>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
                    We Recommend the <span className="gold-text">{recommendedCar.name}</span>
                  </h2>

                  <div className="glass rounded-2xl p-8 mb-8">
                    <img
                      src={recommendedCar.image}
                      alt={recommendedCar.name}
                      className="w-full max-w-sm mx-auto h-48 object-contain mb-6 animate-float"
                    />
                    <div className="text-xs font-medium uppercase tracking-widest text-primary mb-1">
                      {recommendedCar.type}
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-2">{recommendedCar.name}</h3>
                    <p className="text-lg gold-text font-semibold mb-4">
                      {recommendedCar.pricePerDay} TND / day
                    </p>
                    <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                      {recommendedCar.description}
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <Button size="lg" asChild>
                        <Link to={`/fleet/${recommendedCar.id}`} onClick={() => { onClose(); reset(); }}>
                          View Details <ChevronRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <a href="tel:+21697657778">
                          <Phone className="w-4 h-4 mr-2" /> Book Now
                        </a>
                      </Button>
                    </div>
                  </div>

                  <button
                    onClick={reset}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    ← Try again
                  </button>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
