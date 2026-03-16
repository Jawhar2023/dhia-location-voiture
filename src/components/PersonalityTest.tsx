import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, MapPin, Route, User, Users, Heart, Zap, Wallet, ChevronRight, Phone, Settings2, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cars } from '@/data/cars';

interface Answers {
  journey?: 'city' | 'long';
  company?: 'solo' | 'couple' | 'family';
  style?: 'comfort' | 'sporty' | 'economy';
  transmission?: 'manual' | 'automatic';
  occasion?: 'daily' | 'leisure' | 'wedding' | 'business';
}

function getRecommendation(a: Answers): string {
  const transmissionMatch = (id: string) => {
    const car = cars.find(c => c.id === id);
    if (!car) return true;
    const preferred = a.transmission === 'automatic' ? 'Automatic' : 'Manual';
    return car.transmission.toLowerCase() === preferred.toLowerCase();
  };
  // Special occasion: wedding → presentable, spacious
  if (a.occasion === 'wedding') return 'kia-stonic';
  if (a.occasion === 'business') return transmissionMatch('hyundai-i20') ? 'hyundai-i20' : 'kia-stonic';
  if (a.journey === 'long' && (a.company === 'family' || a.style === 'comfort')) return transmissionMatch('kia-stonic') ? 'kia-stonic' : 'seat-ibiza';
  if (a.journey === 'long' && a.style === 'sporty') return transmissionMatch('seat-ibiza') ? 'seat-ibiza' : 'kia-stonic';
  if (a.journey === 'long' && a.style === 'economy') return transmissionMatch('skoda-fabia') ? 'skoda-fabia' : 'hyundai-i20';
  if (a.journey === 'city' && a.style === 'economy') return transmissionMatch('skoda-fabia') ? 'skoda-fabia' : 'hyundai-i20';
  if (a.journey === 'city' && a.style === 'sporty') return transmissionMatch('seat-ibiza') ? 'seat-ibiza' : 'hyundai-i20';
  if (a.company === 'family') return 'kia-stonic';
  return transmissionMatch('hyundai-i20') ? 'hyundai-i20' : 'skoda-fabia';
}

const questions = [
  {
    title: 'Quel type de trajet prévoyez-vous ?',
    subtitle: 'Pour vous proposer le véhicule adapté',
    key: 'journey',
    options: [
      { value: 'city', label: 'Ville et court trajet', icon: MapPin, desc: 'Courses, déplacements locaux' },
      { value: 'long', label: 'Longue distance', icon: Route, desc: 'Autoroutes, voyages, trajets prolongés' },
    ],
  },
  {
    title: 'Qui voyage avec vous ?',
    subtitle: 'Pour adapter la taille du véhicule',
    key: 'company',
    options: [
      { value: 'solo', label: 'Seul(e)', icon: User, desc: 'Conducteur seul' },
      { value: 'couple', label: 'Deux ou trois', icon: Users, desc: 'Couple ou petit groupe' },
      { value: 'family', label: 'Famille (4–5)', icon: Heart, desc: 'Voyage en famille avec bagages' },
    ],
  },
  {
    title: 'Transmission préférée ?',
    subtitle: 'Choisissez ce avec quoi vous êtes à l\'aise',
    key: 'transmission',
    options: [
      { value: 'manual', label: 'Manuelle', icon: Settings2, desc: 'Contrôle total, souvent plus économique' },
      { value: 'automatic', label: 'Automatique', icon: Settings2, desc: 'Plus simple en ville, conduite détendue' },
    ],
  },
  {
    title: 'Quel est l\'usage principal de la location ?',
    subtitle: 'Pour vous proposer le véhicule idéal',
    key: 'occasion',
    options: [
      { value: 'daily', label: 'Usage quotidien', icon: MapPin, desc: 'Travail, courses, au quotidien' },
      { value: 'leisure', label: 'Loisirs et vacances', icon: Route, desc: 'Week-ends, découverte, voyages' },
      { value: 'wedding', label: 'Événement spécial (mariage, etc.)', icon: Gift, desc: 'Mariage, fête, transport VIP' },
      { value: 'business', label: 'Professionnel', icon: User, desc: 'Déplacements et rendez-vous pro' },
    ],
  },
  {
    title: 'Qu\'est-ce qui compte le plus pour vous ?',
    subtitle: 'Votre priorité pour cette location',
    key: 'style',
    options: [
      { value: 'comfort', label: 'Confort et espace', icon: Heart, desc: 'Conduite agréable, place, pratique' },
      { value: 'sporty', label: 'Sportif et dynamique', icon: Zap, desc: 'Plaisir de conduire et style' },
      { value: 'economy', label: 'Prix et efficacité', icon: Wallet, desc: 'Meilleur rapport qualité-prix' },
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
            aria-label="Fermer le quiz"
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
                  <p className="text-xs uppercase tracking-widest text-primary mb-3">Votre recommandation</p>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
                    Nous vous recommandons la <span className="gold-text">{recommendedCar.name}</span>
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
                      {recommendedCar.pricePerDay} TND / jour
                    </p>
                    <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                      {recommendedCar.description}
                    </p>
                    {answers.transmission === 'automatic' && recommendedCar.transmission.toLowerCase() === 'manual' && (
                      <p className="text-xs text-primary/90 mb-4 max-w-sm mx-auto">
                        Vous avez choisi la boîte automatique. Contactez-nous pour confirmer la disponibilité en automatique pour ce modèle ou un équivalent.
                      </p>
                    )}
                    <div className="flex flex-wrap gap-3 justify-center">
                      <Button size="lg" asChild>
                        <Link to={`/fleet/${recommendedCar.id}`} onClick={() => { onClose(); reset(); }}>
                          Voir les détails <ChevronRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <a href="tel:+21624621605">
                          <Phone className="w-4 h-4 mr-2" /> Réserver
                        </a>
                      </Button>
                    </div>
                  </div>

                  <button
                    onClick={reset}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    ← Recommencer
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
