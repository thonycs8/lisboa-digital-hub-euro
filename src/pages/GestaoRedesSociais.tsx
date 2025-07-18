
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GestaoRedesSociais = () => {
  const features = [
    "Gestão completa do Instagram, Facebook e LinkedIn",
    "Criação de conteúdo visual profissional",
    "Estratégia de posting otimizada",
    "Engagement com a comunidade",
    "Stories e Reels criativos",
    "Análise de métricas e performance",
    "Campanhas de awareness orgânica"
  ];

  const packages = [
    {
      name: "Básico",
      price: "€199/mês",
      description: "1 rede social",
      features: ["12 posts/mês", "4 stories/mês", "Engagement básico", "Relatório mensal"]
    },
    {
      name: "Professional",
      price: "€399/mês",
      description: "2 redes sociais",
      features: ["24 posts/mês", "8 stories/mês", "4 reels/mês", "Engagement ativo", "Relatórios quinzenais"]
    },
    {
      name: "Enterprise",
      price: "€699/mês",
      description: "3+ redes sociais",
      features: ["Posts ilimitados", "Stories diárias", "8 reels/mês", "Gestão completa", "Relatórios semanais"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Gestão de Redes Sociais
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Gestão profissional das suas redes sociais com conteúdo engaging e estratégico
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white">Instagram</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">Facebook</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">LinkedIn</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">O que inclui o nosso serviço</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Escolha o seu plano</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'border-black shadow-lg scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-black text-white">Mais Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="text-3xl font-bold text-black mt-4">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                    Começar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para crescer nas redes sociais?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contacto connosco e descubra como podemos fazer a sua marca brilhar nas redes sociais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Contactar Agora <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Ver Outros Serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GestaoRedesSociais;
