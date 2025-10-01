
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "João Silva",
      company: "TechStart Lisboa",
      image: "/placeholder.svg",
      rating: 5,
      text: "A Missão Design transformou completamente a nossa presença digital. Em 3 meses aumentámos as vendas em 150%."
    },
    {
      name: "Maria Santos",
      company: "Boutique Elegance",
      image: "/placeholder.svg", 
      rating: 5,
      text: "Profissionalismo exemplar. O website que criaram superou todas as nossas expectativas. Recomendo vivamente!"
    },
    {
      name: "Pedro Costa",
      company: "Restaurante Tradição",
      image: "/placeholder.svg",
      rating: 5,
      text: "A gestão das redes sociais pela Missão Design trouxe-nos muito mais clientes. Equipa fantástica!"
    }
  ];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-block mb-4">
            <Badge className="bg-white text-black text-sm px-4 py-1">Testemunhos</Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O Que Dizem os Nossos Clientes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Histórias de sucesso de empresas que confiaram na Missão Design para o seu crescimento digital.
          </p>
          
          {/* Social proof */}
          <div className="mt-8 flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-gray-400">Taxa de Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4.9/5</div>
              <div className="text-sm text-gray-400">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-gray-400">Clientes Felizes</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-white/30 transition-all duration-500 hover-lift scroll-reveal group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Quote decoration */}
                <div className="text-6xl text-white/10 font-serif mb-2">"</div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  {testimonial.text}
                </p>
                
                <div className="flex items-center pt-4 border-t border-gray-700">
                  <div className="w-12 h-12 rounded-full mr-4 bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 scroll-reveal">
          <p className="text-gray-400 mb-6 text-lg">Junte-se aos nossos clientes satisfeitos</p>
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg font-bold group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Comece Agora <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
