
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Missão Design</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Transformamos negócios através de soluções digitais inovadoras em Portugal. 
              A sua missão é o nosso design.
            </p>
            <div className="text-gray-400 mb-4">
              <p>Av D Afonso Henriques n7 3dto</p>
              <p>2800-011 Almada, Portugal</p>
              <p>+351 928 294 048</p>
              <p>contato@missaodesign.com</p>
              <p>missaodesign.com</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                Almada
              </Badge>
              <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                Portugal
              </Badge>
              <Badge variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                União Europeia
              </Badge>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Marketing Digital</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Gestão de Redes Sociais</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Web Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Branding</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Agentes de IA</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Links Úteis</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Preços</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Missão Design. Todos os direitos reservados. | NIF: XXX XXX XXX</p>
          <div className="mt-4 flex justify-center gap-4">
            <Badge variant="outline" className="border-gray-600 text-gray-400">
              GDPR Compliant
            </Badge>
            <Badge variant="outline" className="border-gray-600 text-gray-400">
              ISO 27001
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
