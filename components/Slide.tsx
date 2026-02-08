import React, { useEffect, useState } from 'react';
import { SlideData, SlideType } from '../types';
import { ChevronDown, Wind, Zap, Cpu, AlertTriangle, TrendingUp, ExternalLink } from 'lucide-react';
import { ExampleGraph } from './ExampleGraph';

interface SlideProps {
  data: SlideData;
  isLast: boolean;
  isActive: boolean;
}

export const Slide: React.FC<SlideProps> = ({ data, isLast, isActive }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation slightly after the slide becomes active for better pacing
    if (isActive) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isActive]);

  const renderSource = () => {
    if (!data.source) return null;

    if (data.sourceUrl) {
        return (
            <a 
                href={data.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-xs text-slate-500 hover:text-emerald-400 transition-colors italic mt-6 group leading-7"
            >
                Source: {data.source}
                <ExternalLink className="w-3 h-3 ml-1 opacity-50 group-hover:opacity-100" />
            </a>
        );
    }

    return <p className="text-xs text-slate-500 italic mt-6 leading-7">Source: {data.source}</p>;
  };

  const renderContent = () => {
    switch (data.type) {
      case SlideType.COVER:
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-6">
            <div 
                className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="mb-6 flex justify-center space-x-4">
                   <Wind className="w-12 h-12 text-emerald-400" />
                   <Cpu className="w-12 h-12 text-blue-400" />
                </div>
                <h1 className="text-5xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500 mb-6 drop-shadow-lg leading-tight">
                {data.title}
                </h1>
                <h2 className="text-xl md:text-3xl text-slate-300 font-light max-w-3xl mx-auto leading-7">
                {data.subtitle}
                </h2>
                <div className="mt-12 h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
                <div 
                    className="mt-8 text-slate-400 max-w-lg mx-auto leading-7 [&>b]:text-slate-200 [&>strong]:text-slate-200 [&>b]:font-bold [&>strong]:font-bold"
                    dangerouslySetInnerHTML={{ __html: data.content }}
                />
            </div>
          </div>
        );

      case SlideType.TEXT_IMAGE_SPLIT:
        return (
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-center container mx-auto px-6 md:px-12 py-20 gap-12">
            <div className={`flex-1 space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
               <div className="flex items-center space-x-2 text-rose-400 mb-2">
                 <AlertTriangle className="w-6 h-6" />
                 <span className="uppercase tracking-widest text-sm font-bold">{data.subtitle || "Impact"}</span>
               </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {data.title}
              </h2>
              <div 
                className="text-lg md:text-xl text-slate-300 leading-7 border-l-4 border-rose-500 pl-6 [&>b]:text-white [&>strong]:text-white [&>b]:font-bold [&>strong]:font-bold"
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
              {renderSource()}
            </div>
            <div className={`flex-1 h-[40vh] md:h-[60vh] w-full relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              {data.imageUrl && (
                <div className="w-full h-full rounded-2xl shadow-2xl relative z-10 border border-slate-700 overflow-hidden bg-slate-800">
                    <img 
                        src={data.imageUrl} 
                        alt={data.title} 
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                    />
                </div>
              )}
            </div>
          </div>
        );

      case SlideType.TEXT_GRAPH_SPLIT:
        return (
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-center container mx-auto px-6 md:px-12 py-20 gap-12">
            {/* Text Section (Left) */}
            <div className={`flex-1 space-y-6 text-left transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
               <div className="flex items-center space-x-2 text-blue-400 mb-2">
                 <TrendingUp className="w-6 h-6" />
                 <span className="uppercase tracking-widest text-sm font-bold">{data.subtitle || "Analyse"}</span>
               </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {data.title}
              </h2>
              <div 
                className="text-lg md:text-xl text-slate-300 leading-7 border-l-4 border-blue-500 pl-6 [&>b]:text-white [&>strong]:text-white [&>b]:font-bold [&>strong]:font-bold"
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
              {renderSource()}
            </div>
            
            {/* Graph Section (Right) */}
             <div className={`flex-1 w-full transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                {data.graphData && isVisible ? (
                    <ExampleGraph data={data.graphData} keys={data.graphKeys} type={data.graphType} />
                ) : (
                    <div className="w-full h-[300px] md:h-[400px] border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600">
                        Chargement des données...
                    </div>
                )}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section 
      className="h-screen w-full relative overflow-hidden flex items-center shrink-0"
    >
      {renderContent()}
      
      {!isLast && (
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-slate-500 opacity-50" />
          </div>
        </div>
      )}
    </section>
  );
};