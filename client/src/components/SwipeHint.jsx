import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SwipeHint() {
  return (
    <div className="flex items-center justify-center gap-2 animate-pulse text-sm text-gray-600 mt-4 select-none">
      <ChevronLeft className="w-4 h-4" />
      <span>Swipe</span>
      <ChevronRight className="w-4 h-4" />
    </div>
  );
}
