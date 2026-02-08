import React, { useEffect, useState } from 'react';
import { SlideData, SlideType } from '../types';
import { ChevronDown, Wind, Zap, Cpu, AlertTriangle, TrendingUp, ExternalLink, Quote, Lightbulb } from 'lucide-react';
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
    // Priority 1: Multiple sources
    if (data.sources && data.sources.length > 0) {
        return (
            <div className="flex flex-col md:flex-row flex-wrap md:items-center gap-y-2 gap-x-4 mt-6 text-xs text-slate-500 italic leading-7">
                <span className="opacity-70">Sources :</span>
                {data.sources.map((src, idx) => (
                    <a
                        key={idx}
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center hover:text-emerald-400 transition-colors group"
                    >
                        {src.text}
                        <ExternalLink className="w-3 h-3 ml-1 opacity-50 group-hover:opacity-100" />
                        {idx < (data.sources?.length || 0) - 1 && <span className="ml-4 text-slate-700 hidden md:inline">|</span>}
                    </a>
                ))}
            </div>
        );
    }

    // Priority 2: Single source with URL
    if (data.sourceUrl && data.source) {
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

    // Priority 3: Single source text only
    if (data.source) {
        return <p className="text-xs text-slate-500 italic mt-6 leading-7">Source: {data.source}</p>;
    }

    return null;
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
                    className="mt-8 text-lg text-slate-400 max-w-lg mx-auto leading-7 [&>b]:text-slate-200 [&>strong]:text-slate-200 [&>b]:font-bold [&>strong]:font-bold"
                    dangerouslySetInnerHTML={{ __html: data.content }}
                />
            </div>
          </div>
        );

      case SlideType.SECTION:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-emerald-900/20 to-slate-900 z-0"></div>
             
             <div className={`transition-all duration-1000 ease-out z-10 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="mb-8 inline-block p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <Zap className="w-12 h-12 md:w-16 md:h-16 text-emerald-400" />
                </div>
                <h2 className="text-sm md:text-xl font-bold tracking-[0.3em] text-emerald-400 uppercase mb-4">{data.subtitle || "Section"}</h2>
                <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-8 drop-shadow-2xl">
                  {data.title}
                </h1>
                <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto rounded-full opacity-80"></div>
             </div>
          </div>
        );

      case SlideType.QUOTE:
        return (
            <div className="w-full h-full flex flex-col items-center justify-center container mx-auto px-6 md:px-24 text-center relative z-10">
                {/* Decorative Quote Icon */}
                <Quote className={`w-24 h-24 md:w-32 md:h-32 text-emerald-500/10 absolute top-[15%] left-[5%] md:left-[10%] transform -rotate-12 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
                <Quote className={`w-24 h-24 md:w-32 md:h-32 text-blue-500/10 absolute bottom-[15%] right-[5%] md:right-[10%] transform rotate-12 scale-x-[-1] transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />

                <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex items-center justify-center space-x-2 text-emerald-400 mb-10">
                        <Lightbulb className="w-6 h-6" />
                        <span className="uppercase tracking-widest text-lg font-bold">{data.title}</span>
                    </div>

                    <div className="relative px-4">
                        <div 
                            className="text-lg md:text-2xl text-white leading-relaxed md:leading-loose font-light"
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        />
                    </div>
                </div>
            </div>
        );

      case SlideType.TEXT_IMAGE_SPLIT:
        return (
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-center container mx-auto px-6 md:px-12 py-20 gap-12">
            <div className={`flex-1 space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
               <div className="flex items-center space-x-2 text-rose-400 mb-2">
                 <AlertTriangle className="w-6 h-6" />
                 <span className="uppercase tracking-widest text-lg font-bold">{data.subtitle || "Impact"}</span>
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
                 <span className="uppercase tracking-widest text-lg font-bold">{data.subtitle || "Analyse"}</span>
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
                    <ExampleGraph 
                      data={data.graphData} 
                      keys={data.graphKeys} 
                      type={data.graphType} 
                      title={data.graphTitle}
                    />
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