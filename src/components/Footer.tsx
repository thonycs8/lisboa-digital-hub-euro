
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Missão Design</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              {t('footer.description')}
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
            <h4 className="text-lg font-bold mb-4 text-white">{t('footer.services.title')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">{t('footer.services.marketing')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('footer.services.social')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('footer.services.webdesign')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('footer.services.webdev')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('footer.services.branding')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('footer.services.ai')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">{t('footer.links.title')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">{t('footer.links.services')}</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">{t('footer.links.about')}</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">{t('footer.links.pricing')}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t('footer.links.contact')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.blog')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.privacy')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {t('footer.copyright')}</p>
          <div className="mt-4 flex justify-center gap-4">
            <Badge variant="outline" className="border-gray-600 text-gray-400">
              {t('footer.compliance.gdpr')}
            </Badge>
            <Badge variant="outline" className="border-gray-600 text-gray-400">
              {t('footer.compliance.iso')}
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
