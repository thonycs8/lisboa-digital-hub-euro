
import { Button } from "@/components/ui/button";
import { ArrowRight, Euro } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-white font-medium">✨ Disponível para novos projetos</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
            <span className="text-white leading-tight">{t('hero.title')}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 fade-in-up scroll-reveal-delay-1">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-3xl mx-auto fade-in-up scroll-reveal-delay-2">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up scroll-reveal-delay-3">
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-black font-semibold text-lg px-8 py-4 h-14 transition-all duration-300 hover:scale-105 shadow-2xl pulse-glow relative group"
              onClick={scrollToContact}
            >
              <span className="relative z-10">{t('hero.cta.start')}</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-black font-semibold text-lg px-8 py-4 h-14 transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={scrollToPricing}
            >
              {t('hero.cta.pricing')} 
              <Euro className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400 fade-in-up scroll-reveal-delay-3">
            <div className="flex items-center gap-2">
              <div className="text-green-500">✓</div>
              <span>50+ Clientes Satisfeitos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-green-500">✓</div>
              <span>100+ Projetos Entregues</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-green-500">✓</div>
              <span>Resposta em 24h</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
