import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const affiliateSchema = z.object({
  name: z.string().trim().min(1, { message: "Nome é obrigatório" }).max(100),
  email: z.string().trim().email({ message: "Email inválido" }).max(255),
  phone: z.string().trim().min(1, { message: "Telefone é obrigatório" }).max(20),
  website: z.string().trim().max(255),
  experience: z.string().trim().max(1000)
});

const AffiliateForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    experience: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validated = affiliateSchema.parse(formData);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Inscrição Enviada!",
        description: "Entraremos em contato em breve para finalizar sua inscrição no programa de afiliados.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        experience: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro no formulário",
          description: error.errors[0].message,
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Inscrição no Programa de Afiliados</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={100}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={255}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              maxLength={20}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Website/Rede Social</Label>
            <Input
              id="website"
              name="website"
              type="url"
              placeholder="https://..."
              value={formData.website}
              onChange={handleChange}
              maxLength={255}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Conte-nos sobre sua experiência em marketing digital</Label>
            <Textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              rows={4}
              placeholder="Ex: blogs, redes sociais, email marketing..."
              maxLength={1000}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-black hover:bg-gray-800 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Inscrever-se Agora"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AffiliateForm;