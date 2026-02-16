import { Star } from 'lucide-react';
import type { Review } from '@/data/reviews';

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="glass rounded-2xl p-6 h-full flex flex-col">
      <div className="flex mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-sm text-muted-foreground mb-4 flex-1 italic">"{review.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-sm font-bold text-primary-foreground">
          {review.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-medium">{review.name}</div>
          <div className="text-xs text-muted-foreground">{review.date}</div>
        </div>
      </div>
    </div>
  );
}
