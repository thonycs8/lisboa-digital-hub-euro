
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem Enviada!",
      description: "Entraremos em contacto consigo nas próximas 24 horas.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para transformar o seu negócio? Entre em contacto connosco e receba uma proposta personalizada.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Solicite um Orçamento</CardTitle>
              <CardDescription>
                Preencha o formulário e receberá uma resposta em menos de 24 horas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome *</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      placeholder="O seu nome completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+351 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Empresa</Label>
                    <Input 
                      id="company" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="service">Serviço de Interesse</Label>
                  <select 
                    id="service" 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="marketing-digital">Marketing Digital</option>
                    <option value="redes-sociais">Gestão de Redes Sociais</option>
                    <option value="app-lowcode">Criação de App Low Code</option>
                    <option value="webdesign">Web Design</option>
                    <option value="branding">Branding</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="desenvolvimento-web">Desenvolvimento Web</option>
                    <option value="trafego-pago">Tráfego Pago</option>
                    <option value="agentes-ia">Agentes de IA</option>
                    <option value="pacote-completo">Pacote Completo</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                    placeholder="Conte-nos mais sobre o seu projeto..."
                  />
                </div>
                
                <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Informações de Contacto</h3>
                <div className="space-y-3 text-gray-600">
                  <div>
                    <strong>Morada:</strong><br />
                    Avenida da Liberdade, 123<br />
                    1250-096 Lisboa, Portugal
                  </div>
                  <div>
                    <strong>Telefone:</strong><br />
                    +351 21 XXX XXXX
                  </div>
                  <div>
                    <strong>Email:</strong><br />
                    info@missaodesign.pt
                  </div>
                  <div>
                    <strong>Horário:</strong><br />
                    Segunda a Sexta: 9h00 - 18h00<br />
                    Sábado: 10h00 - 14h00
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-blue-900 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Consulta Gratuita</h3>
                <p className="mb-4">
                  Agende uma consulta gratuita de 30 minutos para discutir o seu projeto 
                  e descobrir como podemos ajudar o seu negócio a crescer.
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Agendar Consulta
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
