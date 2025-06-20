
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const menuItems = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.services'), path: "#services" },
    { name: t('nav.about'), path: "#about" },
    { name: t('nav.pricing'), path: "#pricing" },
    { name: t('nav.contact'), path: "#contact" },
  ];

  const scrollToSection = (path: string) => {
    // Se é uma rota normal (sem #), navega normalmente
    if (!path.startsWith("#")) {
      setIsMenuOpen(false);
      return;
    }
    
    // Se não estamos na página inicial, redireciona para lá primeiro
    if (location.pathname !== "/") {
      window.location.href = `/${path}`;
      return;
    }
    
    // Scroll para a seção na página atual
    const sectionId = path.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-white">
            {t('hero.title')}
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              item.path.startsWith("#") ? (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.path)}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
            <LanguageSelector />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                item.path.startsWith("#") ? (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.path)}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-2">
                <LanguageSelector />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
