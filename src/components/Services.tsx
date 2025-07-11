
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Megaphone, 
  Users, 
  Smartphone, 
  Palette, 
  Target, 
  TrendingUp, 
  Code, 
  Bot,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Megaphone,
      title: t('services.marketing.title'),
      description: t('services.marketing.description'),
      features: ["SEO/SEM", "Content Marketing", "Email Marketing"],
      link: "/marketing-digital"
    },
    {
      icon: Users,
      title: t('services.social.title'),
      description: t('services.social.description'),
      features: ["Instagram", "Facebook", "LinkedIn"],
      link: "/gestao-redes-sociais"
    },
    {
      icon: Smartphone,
      title: t('services.apps.title'),
      description: t('services.apps.description'),
      features: ["Bubble", "Webflow", "Zapier"],
      link: "#contact"
    },
    {
      icon: Palette,
      title: t('services.webdesign.title'),
      description: t('services.webdesign.description'),
      features: ["UI/UX", "Responsive", "Performance"],
      link: "#contact"
    },
    {
      icon: Target,
      title: t('services.branding.title'),
      description: t('services.branding.description'),
      features: ["Logo Design", "Brand Guidelines", "Visual Identity"],
      link: "#contact"
    },
    {
      icon: TrendingUp,
      title: t('services.traffic.title'),
      description: t('services.traffic.description'),
      features: ["Google Ads", "Facebook Ads", "Analytics"],
      link: "#contact"
    },
    {
      icon: Code,
      title: t('services.webdev.title'),
      description: t('services.webdev.description'),
      features: ["React", "Node.js", "Database"],
      link: "#contact"
    },
    {
      icon: Bot,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      features: ["ChatGPT", "Automation", "Integration"],
      link: "#contact"
    }
  ];

  const handleServiceClick = (link: string) => {
    if (link.startsWith("#")) {
      document.getElementById(link.substring(1))?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-bold text-black">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  {service.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                      {feature}
                    </Badge>
                  ))}
                </div>
                {service.link.startsWith("#") ? (
                  <Button 
                    className="w-full bg-black hover:bg-gray-800 text-white"
                    onClick={() => handleServiceClick(service.link)}
                  >
                    {t('services.button')} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                ) : (
                  <Link to={service.link} className="w-full">
                    <Button className="w-full bg-black hover:bg-gray-800 text-white">
                      {t('services.button')} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
