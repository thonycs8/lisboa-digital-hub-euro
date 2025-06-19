import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "€299",
      period: "/mês",
      description: "Perfeito para pequenas empresas que querem começar",
      features: [
        "Website responsivo (até 5 páginas)",
        "SEO básico",
        "Consultoria de marketing inicial",
        "Suporte por email",
        "Analytics mensais"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "€599",
      period: "/mês", 
      description: "Ideal para empresas em crescimento",
      features: [
        "Website completo (até 15 páginas)",
        "SEO avançado",
        "Gestão de 2 redes sociais",
        "Tráfego pago (€200 incluídos)",
        "Chatbot básico",
        "Suporte prioritário",
        "Analytics semanais"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "€1299",
      period: "/mês",
      description: "Solução completa para grandes empresas",
      features: [
        "Website/App personalizado",
        "SEO + SEM completo",
        "Gestão completa de redes sociais",
        "Tráfego pago (€500 incluídos)",
        "Agentes de IA avançados",
        "Branding completo",
        "Suporte 24/7",
        "Analytics em tempo real"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Planos e Preços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para o seu negócio. Todos os preços em euros, sem taxas ocultas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-2 hover:shadow-xl transition-all duration-300 ${
              plan.popular 
                ? 'border-black bg-black text-white scale-105' 
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-white text-black px-4 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-black'}`}>
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-black'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>
                <CardDescription className={`mt-4 ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 mt-0.5 ${plan.popular ? 'text-white' : 'text-black'}`} />
                      <span className={`${plan.popular ? 'text-gray-100' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-6 text-lg font-bold ${
                    plan.popular 
                      ? 'bg-white text-black hover:bg-gray-100' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                  onClick={scrollToContact}
                >
                  Escolher {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
