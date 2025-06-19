
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      company: "Boutique Trendy",
      text: "A Missão Design transformou completamente a nossa presença online. As vendas aumentaram 300% em apenas 6 meses!",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      company: "TechStart Lisboa",
      text: "Profissionalismo excecional. O app que criaram superou todas as nossas expectativas e está a gerar excelentes resultados.",
      rating: 5
    },
    {
      name: "Maria Santos",
      company: "Clínica Bem-Estar",
      text: "A gestão das nossas redes sociais nunca foi tão eficaz. Recomendo vivamente os serviços da Missão Design.",
      rating: 5
    },
    {
      name: "João Pereira",
      company: "Restaurante O Bacalhau",
      text: "O site novo é fantástico e as campanhas de tráfego pago trouxeram muito mais clientes. Obrigado!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Dizem os Nossos Clientes
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Testemunhos reais de empresas que transformaram os seus negócios connosco
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg mb-4 text-white">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-yellow-400">{testimonial.name}</div>
                  <div className="text-blue-200">{testimonial.company}</div>
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
