import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReviewCard from '@/components/ReviewCard';
import { reviews } from '@/data/reviews';

export default function Reviews() {
  return (
    <div className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
            Avis <span className="gold-text">clients</span>
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-muted-foreground">3,4 (5) sur Google · 5 avis</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJBZW6IFP1_RIRPe4sg5EPD2k"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Star className="w-4 h-4 mr-2" /> Rédiger un avis
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
