import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, TrendingUp, Users, Percent, Gift } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Affiliates = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Percent,
      title: "20% de Comissão Recorrente",
      description: "Ganhe 20% de comissão sobre todos os pagamentos recorrentes dos clientes que indicar"
    },
    {
      icon: Gift,
      title: "Bónus de Performance",
      description: "Bónus adicionais ao atingir metas mensais de vendas"
    },
    {
      icon: TrendingUp,
      title: "Cookie de 90 Dias",
      description: "Receba comissão por vendas realizadas até 90 dias após o clique no seu link"
    },
    {
      icon: Users,
      title: "Suporte Dedicado",
      description: "Equipe dedicada para ajudar você a converter mais leads"
    }
  ];

  const howItWorks = [
    "Inscreva-se gratuitamente no programa de afiliados",
    "Receba seu link único de afiliado e materiais promocionais",
    "Compartilhe com sua audiência através de blog, redes sociais, email",
    "Ganhe comissão por cada venda realizada através do seu link",
    "Acompanhe seus ganhos em tempo real no painel de afiliado"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <div className="container mx-auto px-6 text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              {t('affiliates.badge')}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('affiliates.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {t('affiliates.subtitle')}
            </p>
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg"
              onClick={() => window.open('https://wa.me/+351928294048?text=Olá! Gostaria de me inscrever no Programa de Afiliados', '_blank')}
            >
              Inscrever-se Agora
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                {t('affiliates.benefits.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('affiliates.benefits.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                {t('affiliates.howItWorks.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('affiliates.howItWorks.subtitle')}
              </p>
            </div>

            <div className="space-y-6">
              {howItWorks.map((step, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-lg">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commission Structure */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                {t('affiliates.commission.title')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-center">Starter</CardTitle>
                  <p className="text-center text-3xl font-bold text-black mt-4">€60</p>
                  <p className="text-center text-gray-600">por venda/mês</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">20% do plano €299</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Comissão recorrente</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-black scale-105 shadow-xl">
                <CardHeader>
                  <Badge className="mb-2 bg-black text-white">Mais Popular</Badge>
                  <CardTitle className="text-center">Professional</CardTitle>
                  <p className="text-center text-3xl font-bold text-black mt-4">€120</p>
                  <p className="text-center text-gray-600">por venda/mês</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">20% do plano €599</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Comissão recorrente</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Bónus de performance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-center">Enterprise</CardTitle>
                  <p className="text-center text-3xl font-bold text-black mt-4">€260</p>
                  <p className="text-center text-gray-600">por venda/mês</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">20% do plano €1299</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Comissão recorrente</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Bónus premium</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('affiliates.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              {t('affiliates.cta.subtitle')}
            </p>
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg"
              onClick={() => window.open('https://wa.me/+351928294048?text=Olá! Gostaria de me inscrever no Programa de Afiliados', '_blank')}
            >
              Começar Agora
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Affiliates;
