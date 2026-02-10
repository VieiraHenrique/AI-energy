import React, { useRef } from 'react';
import { Wind, Cpu, ArrowRight, Zap, Cloud, Droplets, Trash2, Quote, Lightbulb } from 'lucide-react';
import { LANDING_TOPICS } from '../constants';

interface LandingPageProps {
  onStart: (topicId: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const getIcon = (name?: string) => {
    switch(name) {
        case 'zap': return <Zap className="w-6 h-6" />;
        case 'cloud': return <Cloud className="w-6 h-6" />;
        case 'droplets': return <Droplets className="w-6 h-6" />;
        case 'trash': return <Trash2 className="w-6 h-6" />;
        default: return <ArrowRight className="w-6 h-6" />;
    }
  };

  return (
    <div className="h-screen w-full bg-slate-900 text-white overflow-y-auto overflow-x-hidden scroll-smooth">
      
      {/* Hero Section - Apparence du Slide 1 */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative shrink-0">
         <div className="mb-6 flex justify-center space-x-4">
            <Wind className="w-12 h-12 text-emerald-400" />
            <Cpu className="w-12 h-12 text-blue-400" />
         </div>
         <h1 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500 mb-6 drop-shadow-lg leading-tight pb-2">
            Le Courage du Progrès
         </h1>
         <h2 className="text-xl md:text-3xl text-slate-300 font-light max-w-3xl mx-auto leading-7">
            L'Intelligence Artificielle comme architecture d'un monde durable et prospère.
         </h2>
         <div className="mt-12 h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
         <div className="mt-8 text-lg text-slate-400 max-w-lg mx-auto leading-7">
            <p>Un plaidoyer pour l'optimisme technologique par Henrique Vieira (2026).</p>
         </div>
         
         {/* Scroll Indicator Button */}
         <button 
            onClick={scrollToContent}
            className="absolute bottom-10 animate-bounce text-slate-500 hover:text-emerald-400 transition-colors cursor-pointer flex flex-col items-center focus:outline-none"
            aria-label="Commencer la lecture"
         >
            <p className="text-sm uppercase tracking-widest mb-2">Commencer</p>
            <ArrowRight className="w-6 h-6 rotate-90" />
         </button>
      </section>

      {/* Avant-propos (Ancien slide Changer de Regard) */}
      <section ref={contentRef} className="py-32 px-6 md:px-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
            {/* Decorative Quotes */}
            <Quote className="w-24 h-24 text-emerald-500/5 absolute -top-10 left-0 transform -rotate-12" />
            <Quote className="w-24 h-24 text-blue-500/5 absolute -bottom-10 right-0 transform rotate-12 scale-x-[-1]" />
            
            <div className="flex items-center justify-center space-x-2 text-emerald-400 mb-10">
                <Lightbulb className="w-6 h-6" />
                <span className="uppercase tracking-widest text-lg font-bold">Avant-propos</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Changer de Regard</h3>
            
            <div className="text-lg md:text-2xl text-slate-300 leading-relaxed md:leading-loose font-light">
                <p>
                    Les chiffres sont des miroirs : ils reflètent souvent ce que nous cherchons à y voir – nos peurs ou nos espoirs. La vraie question n'est pas seulement "que disent les données ?", mais "que décidons-nous d'en faire ?".
                </p>
                <br />
                <p>
                    Face aux mêmes graphiques, le pessimiste voit une fin inéluctable, l'optimiste voit un problème à résoudre et un horizon de possibilités.
                </p>
            </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-6 md:px-24 bg-slate-800/30 border-t border-slate-800 min-h-[50vh] flex flex-col justify-center">
        <div className="container mx-auto max-w-5xl">
            {LANDING_TOPICS.map((topic, index) => (
                <div key={index} className="mb-16 last:mb-0">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-200 mb-8 border-l-4 border-emerald-500 pl-4">
                        {topic.title}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {topic.questions.map((question) => (
                            <button
                                key={question.id}
                                onClick={() => onStart(question.id)}
                                className="group flex items-start p-6 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500/50 rounded-xl transition-all duration-300 text-left hover:shadow-lg hover:shadow-emerald-900/20"
                            >
                                <div className="p-3 bg-slate-900 rounded-lg text-emerald-400 group-hover:bg-emerald-500/10 group-hover:scale-110 transition-all duration-300 mr-4 shrink-0">
                                    {getIcon(question.iconName)}
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors mb-2">
                                        {question.label}
                                    </h4>
                                    <p className="text-sm text-slate-400 group-hover:text-slate-300">
                                        Explorer les données et les perspectives sur ce défi.
                                    </p>
                                </div>
                                <div className="ml-auto self-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0">
                                    <ArrowRight className="w-5 h-5 text-emerald-500" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        
        {/* Footer simple inside the scrollable area */}
        <footer className="mt-20 py-12 text-center text-slate-600 text-sm border-t border-slate-800/50">
            <p>&copy; 2026 EcoAI Narrative. Tous droits réservés.</p>
        </footer>
      </section>

    </div>
  );
};