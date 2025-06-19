
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Megaphone, 
  Users, 
  Smartphone, 
  Palette, 
  Target, 
  TrendingUp, 
  Code, 
  Bot 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Marketing Digital",
      description: "Estratégias digitais completas para aumentar a sua presença online e atrair mais clientes.",
      features: ["SEO/SEM", "Content Marketing", "Email Marketing"]
    },
    {
      icon: Users,
      title: "Gestão de Redes Sociais",
      description: "Gestão profissional das suas redes sociais com conteúdo engaging e estratégico.",
      features: ["Instagram", "Facebook", "LinkedIn"]
    },
    {
      icon: Smartphone,
      title: "Apps Low Code",
      description: "Desenvolvimento rápido de aplicações móveis e web sem complexidade técnica.",
      features: ["Bubble", "Webflow", "Zapier"]
    },
    {
      icon: Palette,
      title: "Web Design",
      description: "Websites modernos, responsivos e otimizados para conversão.",
      features: ["UI/UX", "Responsive", "Performance"]
    },
    {
      icon: Target,
      title: "Branding",
      description: "Identidade visual completa que diferencia a sua marca no mercado.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity"]
    },
    {
      icon: TrendingUp,
      title: "Tráfego Pago",
      description: "Campanhas publicitárias eficazes no Google Ads, Facebook Ads e outras plataformas.",
      features: ["Google Ads", "Facebook Ads", "Analytics"]
    },
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Desenvolvimento de websites e aplicações web personalizadas e escaláveis.",
      features: ["React", "Node.js", "Database"]
    },
    {
      icon: Bot,
      title: "Agentes de IA",
      description: "Implementação de chatbots e assistentes virtuais para automatizar atendimento.",
      features: ["ChatGPT", "Automation", "Integration"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Os Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções digitais completas para elevar o seu negócio ao próximo nível.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-bold text-black">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  {service.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                      {feature}
                    </Badge>
                  ))}
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
