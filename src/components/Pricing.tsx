
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Euro } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Starter",
      price: "599",
      period: "mês",
      description: "Perfeito para pequenos negócios que querem começar online",
      features: [
        "Gestão de 2 redes sociais",
        "3 posts por semana",
        "Relatório mensal",
        "Suporte via email",
        "Design básico de posts"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "1.299",
      period: "mês",
      description: "A escolha ideal para empresas em crescimento",
      features: [
        "Gestão de 4 redes sociais",
        "5 posts por semana",
        "Stories e reels",
        "Campanhas de tráfego pago",
        "Relatórios semanais",
        "Suporte prioritário",
        "Design premium",
        "Consultoria mensal"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "2.999",
      period: "mês",
      description: "Solução completa para grandes empresas",
      features: [
        "Gestão ilimitada de redes",
        "Posting diário",
        "Vídeos profissionais",
        "Múltiplas campanhas pagas",
        "Agente de IA personalizado",
        "Relatórios em tempo real",
        "Suporte 24/7",
        "Consultoria semanal",
        "Desenvolvimento web incluído"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pacotes e Preços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para o seu negócio. Todos os preços em euros e sem contratos de permanência.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.popular ? 'border-yellow-500 border-2 shadow-xl' : 'border-gray-200'}`}>
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black font-bold">
                  MAIS POPULAR
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">{pkg.name}</CardTitle>
                <CardDescription className="text-gray-600">{pkg.description}</CardDescription>
                <div className="flex items-center justify-center mt-4">
                  <Euro className="w-6 h-6 text-gray-600" />
                  <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                  <span className="text-gray-600 ml-2">/{pkg.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full font-bold ${pkg.popular ? 'bg-yellow-500 hover:bg-yellow-600 text-black' : 'bg-blue-900 hover:bg-blue-800 text-white'}`}
                  onClick={scrollToContact}
                >
                  Começar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Precisa de algo personalizado? Temos soluções à medida para o seu negócio.
          </p>
          <Button variant="outline" size="lg" onClick={scrollToContact}>
            Solicitar Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
