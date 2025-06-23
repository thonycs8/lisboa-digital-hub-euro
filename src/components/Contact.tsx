
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-gray-200 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black">{t('contact.form.title')}</CardTitle>
              <CardDescription className="text-gray-600">
                {t('contact.form.subtitle')}
              </CardDescription>
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
                
                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 py-3 text-lg font-bold">
                  {t('contact.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black">{t('contact.info.title')}</CardTitle>
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
            
            <Card className="border-gray-200 bg-black text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">{t('contact.why.title')}</h3>
                <div className="space-y-3">
                  <Badge className="bg-white text-black">Baseados em Almada</Badge>
                  <Badge className="bg-white text-black">Resultados Garantidos</Badge>
                  <Badge className="bg-white text-black">Suporte 24/7</Badge>
                  <Badge className="bg-white text-black">Preços Transparentes</Badge>
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
