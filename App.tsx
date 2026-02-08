import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import { Slide } from './components/Slide';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < SLIDES.length) {
      setCurrentSlide(index);
      setIsScrolling(true);
      // Duration of the scroll cooldown
      setTimeout(() => setIsScrolling(false), 1200); 
    }
  }, []);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (isScrolling) return;

    if (e.deltaY > 20) {
      goToSlide(currentSlide + 1);
    } else if (e.deltaY < -20) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, isScrolling, goToSlide]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isScrolling) return;

    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      goToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, isScrolling, goToSlide]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleWheel, handleKeyDown]);

  return (
    <main className="h-screen w-screen overflow-hidden bg-slate-900 relative">
      {/* Sliding Container */}
      <div 
        className="w-full h-full transition-transform ease-[cubic-bezier(0.25,1,0.5,1)] duration-1000"
        style={{ transform: `translateY(-${currentSlide * 100}vh)` }}
      >
        {SLIDES.map((slide, index) => (
          <Slide 
            key={slide.id} 
            data={slide} 
            isLast={index === SLIDES.length - 1}
            isActive={index === currentSlide}
          />
        ))}
      </div>
      
      {/* Global Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 z-50">
        {SLIDES.map((slide, i) => (
            <button
                key={`dot-${slide.id}`} 
                onClick={() => !isScrolling && goToSlide(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentSlide 
                    ? 'bg-emerald-400 scale-125 shadow-[0_0_10px_rgba(52,211,153,0.5)]' 
                    : 'bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${i + 1}`}
            />
        ))}
      </div>
    </main>
  );
};

export default App;