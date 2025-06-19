
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O Que Dizem os Nossos Clientes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Histórias de sucesso de empresas que confiaram na Missão Design para o seu crescimento digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-white text-white" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 bg-gray-700"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
