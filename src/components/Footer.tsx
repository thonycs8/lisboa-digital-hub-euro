
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Missão Design</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Transformamos negócios através de soluções digitais inovadoras em Lisboa. 
              A sua missão é o nosso design.
            </p>
            <div className="text-gray-400">
              <p>Avenida da Liberdade, 123</p>
              <p>1250-096 Lisboa, Portugal</p>
              <p>+351 21 XXX XXXX</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Marketing Digital</li>
              <li>Gestão de Redes Sociais</li>
              <li>Web Design</li>
              <li>Desenvolvimento Web</li>
              <li>Branding</li>
              <li>Agentes de IA</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-yellow-400">Serviços</a></li>
              <li><a href="#about" className="hover:text-yellow-400">Sobre</a></li>
              <li><a href="#pricing" className="hover:text-yellow-400">Preços</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contacto</a></li>
              <li><a href="#" className="hover:text-yellow-400">Blog</a></li>
              <li><a href="#" className="hover:text-yellow-400">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Missão Design. Todos os direitos reservados. | NIF: XXX XXX XXX</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
