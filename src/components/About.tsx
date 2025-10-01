
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, number: "50+", label: t('about.stats.clients') },
    { icon: Award, number: "100+", label: t('about.stats.projects') },
    { icon: CheckCircle, number: "98%", label: t('about.stats.success') },
    { icon: Clock, number: "24/7", label: t('about.stats.support') }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal">
            <div className="inline-block mb-4">
              <Badge className="bg-black text-white text-sm px-4 py-1">Sobre Nós</Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('about.description2')}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge className="bg-black text-white hover:bg-gray-800 scale-hover cursor-default">✨ Digital First</Badge>
              <Badge className="bg-black text-white hover:bg-gray-800 scale-hover cursor-default">🎯 Results Driven</Badge>
              <Badge className="bg-black text-white hover:bg-gray-800 scale-hover cursor-default">📍 Lisboa Based</Badge>
              <Badge className="bg-black text-white hover:bg-gray-800 scale-hover cursor-default">🚀 Full Service</Badge>
            </div>

            {/* Social proof */}
            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-black">
              <p className="text-sm text-gray-600 mb-2">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-700 font-medium">"Excelência em cada projeto"</p>
              <p className="text-sm text-gray-500 mt-2">- Avaliação média dos clientes</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 scroll-reveal scroll-reveal-delay-2">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="border-gray-200 bg-white hover:shadow-xl transition-all duration-300 hover-lift group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-black mb-2 gradient-text">{stat.number}</div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
