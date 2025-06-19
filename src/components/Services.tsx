
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      title: "Marketing Digital",
      description: "Estratégias completas para aumentar a sua presença online e gerar mais leads.",
      features: ["SEO/SEM", "Content Marketing", "Email Marketing", "Analytics"],
      price: "A partir de €800/mês"
    },
    {
      title: "Gestão de Redes Sociais",
      description: "Criação de conteúdo e gestão profissional das suas redes sociais.",
      features: ["Criação de Conteúdo", "Posting Schedule", "Community Management", "Relatórios"],
      price: "A partir de €500/mês"
    },
    {
      title: "Apps Low Code",
      description: "Desenvolvimento rápido de aplicações sem programação complexa.",
      features: ["Prototipagem", "MVP Development", "Integração APIs", "Manutenção"],
      price: "A partir de €1.200"
    },
    {
      title: "Web Design",
      description: "Sites modernos, responsivos e otimizados para conversão.",
      features: ["Design Responsivo", "UX/UI", "Otimização", "CMS"],
      price: "A partir de €800"
    },
    {
      title: "Branding",
      description: "Criação de identidade visual única para a sua marca.",
      features: ["Logo Design", "Manual de Marca", "Materiais Gráficos", "Consultoria"],
      price: "A partir de €600"
    },
    {
      title: "Consultoria",
      description: "Consultoria estratégica para acelerar o crescimento do seu negócio.",
      features: ["Análise de Mercado", "Estratégia Digital", "Plano de Ação", "Mentoria"],
      price: "€150/hora"
    },
    {
      title: "Desenvolvimento Web",
      description: "Desenvolvimento de websites e aplicações web personalizadas.",
      features: ["Frontend/Backend", "E-commerce", "APIs", "Manutenção"],
      price: "A partir de €1.500"
    },
    {
      title: "Tráfego Pago",
      description: "Campanhas otimizadas no Google Ads, Facebook Ads e LinkedIn.",
      features: ["Google Ads", "Facebook/Instagram", "LinkedIn Ads", "Otimização"],
      price: "€300 + 15% budget"
    },
    {
      title: "Agentes de IA",
      description: "Implementação de chatbots e automações inteligentes.",
      features: ["Chatbots", "Automação", "Integração", "Training"],
      price: "A partir de €900"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Os Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas de marketing digital para fazer crescer o seu negócio em Lisboa e além
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-lg font-bold text-yellow-600">
                    {service.price}
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

export default Services;
