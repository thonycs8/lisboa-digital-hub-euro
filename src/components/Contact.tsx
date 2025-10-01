
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Obrigado! Entraremos em contacto em breve.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-black/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-block mb-4">
            <Badge className="bg-black text-white text-sm px-4 py-1">Contacte-nos</Badge>
          </div>
          
          {/* Urgency element */}
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-green-700 font-semibold">🎁 Consultoria Grátis - Vagas Limitadas!</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
              <span>Resposta em 24h</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
              <span>100% Confidencial</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-gray-200 bg-white shadow-2xl hover-lift scroll-reveal scroll-reveal-delay-1">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black flex items-center gap-2">
                {t('contact.form.title')}
                <span className="text-xl">🚀</span>
              </CardTitle>
              <CardDescription className="text-gray-600">
                {t('contact.form.subtitle')}
              </CardDescription>
              
              {/* Limited time offer */}
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm font-semibold text-yellow-800">⚡ Oferta por tempo limitado!</p>
                <p className="text-xs text-yellow-700 mt-1">Primeiros 10 clientes recebem 20% desconto</p>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-black font-medium">{t('contact.form.name')} *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 border-gray-300 focus:border-black"
                      placeholder="O seu nome"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-black font-medium">{t('contact.form.email')} *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 border-gray-300 focus:border-black"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-black font-medium">{t('contact.form.company')}</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 border-gray-300 focus:border-black"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                
                <div>
                  <Label htmlFor="service" className="text-black font-medium">{t('contact.form.service')}</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:border-black focus:outline-none"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="marketing-digital">Marketing Digital</option>
                    <option value="redes-sociais">Gestão de Redes Sociais</option>
                    <option value="web-design">Web Design</option>
                    <option value="branding">Branding</option>
                    <option value="trafego-pago">Tráfego Pago</option>
                    <option value="agentes-ia">Agentes de IA</option>
                    <option value="consultoria">Consultoria</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-black font-medium">{t('contact.form.message')} *</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:border-black focus:outline-none"
                    placeholder="Conte-nos sobre o seu projeto..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-black text-white hover:bg-gray-800 py-3 text-lg font-bold shake-on-hover pulse-glow group"
                >
                  {t('contact.form.submit')}
                  <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Trust indicators below button */}
                <div className="text-center text-xs text-gray-500 space-y-1 mt-4">
                  <p>🔒 Os seus dados estão seguros connosco</p>
                  <p>📞 Respondemos em menos de 24 horas</p>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8 scroll-reveal scroll-reveal-delay-2">
            <Card className="border-gray-200 bg-white shadow-xl hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black flex items-center gap-2">
                  {t('contact.info.title')}
                  <span className="text-xl">📍</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">{t('contact.info.address')}</h4>
                    <p className="text-gray-600">Av D Afonso Henriques n7 3dto<br />2800-011 Almada, Portugal</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">{t('contact.info.phone')}</h4>
                    <p className="text-gray-600">+351 928 294 048</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">{t('contact.info.email')}</h4>
                    <p className="text-gray-600">contato@missaodesign.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black">{t('contact.info.hours')}</h4>
                    <p className="text-gray-600">Segunda - Sexta: 9h - 18h<br />Sábado: 9h - 13h</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 bg-gradient-to-br from-black to-gray-900 text-white shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  {t('contact.why.title')}
                  <span className="text-2xl">⭐</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                    <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold">✓</div>
                    <span className="font-medium">Baseados em Almada</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                    <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold">✓</div>
                    <span className="font-medium">Resultados Garantidos</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                    <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold">✓</div>
                    <span className="font-medium">Suporte 24/7</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors">
                    <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold">✓</div>
                    <span className="font-medium">Preços Transparentes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
