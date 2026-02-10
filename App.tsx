import React, { useState, useEffect, useCallback } from 'react';
import { SLIDE_SETS } from './constants';
import { SlideData } from './types';
import { Slide } from './components/Slide';
import { LandingPage } from './components/LandingPage';
import { Home } from 'lucide-react';

const App: React.FC = () => {
  const [mode, setMode] = useState<'landing' | 'presentation'>('landing');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentSlides, setCurrentSlides] = useState<SlideData[]>([]);

  // Function to start presentation for a specific topic
  const startPresentation = (topicId: string) => {
    const slides = SLIDE_SETS[topicId];
    if (slides && slides.length > 0) {
        setCurrentSlides(slides);
        setCurrentSlide(0);
        setMode('presentation');
    }
  };

  const returnToLanding = () => {
    setMode('landing');
    setCurrentSlide(0);
    // Optional: Clear currentSlides after delay to avoid flash, but instant is fine here.
    setTimeout(() => setCurrentSlides([]), 500);
  };

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < currentSlides.length) {
      setCurrentSlide(index);
      setIsScrolling(true);
      // Duration of the scroll cooldown
      setTimeout(() => setIsScrolling(false), 1200); 
    }
  }, [currentSlides.length]);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (mode !== 'presentation' || isScrolling) return;

    if (e.deltaY > 20) {
      goToSlide(currentSlide + 1);
    } else if (e.deltaY < -20) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, isScrolling, goToSlide, mode]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (mode !== 'presentation' || isScrolling) return;

    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      goToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      goToSlide(currentSlide - 1);
    } else if (e.key === 'Escape') {
      returnToLanding();
    }
  }, [currentSlide, isScrolling, goToSlide, mode]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleWheel, handleKeyDown]);

  if (mode === 'landing') {
    return <LandingPage onStart={startPresentation} />;
  }

  return (
    <main className="h-screen w-screen overflow-hidden bg-slate-900 relative">
      {/* Sliding Container */}
      <div 
        className="w-full h-full transition-transform ease-[cubic-bezier(0.25,1,0.5,1)] duration-1000"
        style={{ transform: `translateY(-${currentSlide * 100}vh)` }}
      >
        {currentSlides.map((slide, index) => (
          <Slide 
            key={slide.id} 
            data={slide} 
            isLast={index === currentSlides.length - 1}
            isActive={index === currentSlide}
          />
        ))}
      </div>
      
      {/* Global Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 z-50">
        {currentSlides.map((slide, i) => (
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

      {/* Back to Home Button (top left) */}
      <button 
        onClick={returnToLanding}
        className="fixed top-6 left-6 z-50 p-2 bg-slate-800/50 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors backdrop-blur-sm"
        aria-label="Retour à l'accueil"
      >
        <Home className="w-5 h-5" />
      </button>

    </main>
  );
};

export default App;