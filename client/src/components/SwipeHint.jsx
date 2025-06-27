import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SwipeHint() {
  return (
    <div className="sm:hidden py-2 absolute bottom-2 left-[50%] -translate-x-[50%] flex items-center justify-center gap-2 animate-pulse text-sm text-gray-300 mt-4 font-jura select-none">
      <ChevronLeft className="w-4 h-4" />
      <span>Swipe</span>
      <ChevronRight className="w-4 h-4" />
    </div>
  );
}
