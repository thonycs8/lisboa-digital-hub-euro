
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "150+", label: "Projetos Concluídos" },
    { number: "95%", label: "Clientes Satisfeitos" },
    { number: "5+", label: "Anos de Experiência" },
    { number: "24/7", label: "Suporte Disponível" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre a Missão Design
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Somos uma agência de marketing digital baseada em Lisboa, especializada em 
              transformar negócios através de soluções digitais inovadoras e estratégias 
              de alta performance.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              A nossa missão é simples: ajudar empresas a crescer online através de 
              design excepcional, tecnologia avançada e estratégias de marketing 
              comprovadas. Cada projeto é uma oportunidade de superar expectativas.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:pl-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Por que escolher a Missão Design?
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Experiência comprovada no mercado português e internacional</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Soluções personalizadas para cada tipo de negócio</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Tecnologias mais avançadas do mercado</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Suporte contínuo e relatórios transparentes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>ROI comprovado em todos os nossos projetos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
