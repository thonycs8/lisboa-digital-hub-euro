
import React, { createContext, useContext, useState } from 'react';

type Language = 'pt' | 'en' | 'es' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.about': 'Sobre',
    'nav.pricing': 'Preços',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Missão Design',
    'hero.subtitle': 'Transformamos a sua presença digital em Lisboa e além',
    'hero.description': 'Marketing Digital • Gestão de Redes Sociais • Apps Low Code • Web Design • Branding • Consultoria • Desenvolvimento Web • Tráfego Pago • Agentes de IA',
    'hero.cta.start': 'Comece Hoje',
    'hero.cta.pricing': 'Ver Preços',
    
    // Services
    'services.title': 'Os Nossos Serviços',
    'services.marketing.title': 'Marketing Digital',
    'services.marketing.description': 'Estratégias completas de marketing digital para aumentar a sua presença online e gerar mais vendas.',
    'services.social.title': 'Gestão de Redes Sociais',
    'services.social.description': 'Criação e gestão de conteúdo para redes sociais, aumentando o engagement e a visibilidade da sua marca.',
    'services.button': 'Saber Mais',
    
    // Common
    'common.from': 'A partir de',
    'common.month': '/mês',
    'common.back': 'Voltar ao Início',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Mission Design',
    'hero.subtitle': 'We transform your digital presence in Lisbon and beyond',
    'hero.description': 'Digital Marketing • Social Media Management • Low Code Apps • Web Design • Branding • Consulting • Web Development • Paid Traffic • AI Agents',
    'hero.cta.start': 'Start Today',
    'hero.cta.pricing': 'View Pricing',
    
    // Services
    'services.title': 'Our Services',
    'services.marketing.title': 'Digital Marketing',
    'services.marketing.description': 'Complete digital marketing strategies to increase your online presence and generate more sales.',
    'services.social.title': 'Social Media Management',
    'services.social.description': 'Creation and management of social media content, increasing engagement and brand visibility.',
    'services.button': 'Learn More',
    
    // Common
    'common.from': 'From',
    'common.month': '/month',
    'common.back': 'Back to Home',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Acerca',
    'nav.pricing': 'Precios',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Misión Design',
    'hero.subtitle': 'Transformamos tu presencia digital en Lisboa y más allá',
    'hero.description': 'Marketing Digital • Gestión de Redes Sociales • Apps Low Code • Diseño Web • Branding • Consultoría • Desarrollo Web • Tráfico Pagado • Agentes de IA',
    'hero.cta.start': 'Empezar Hoy',
    'hero.cta.pricing': 'Ver Precios',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.marketing.title': 'Marketing Digital',
    'services.marketing.description': 'Estrategias completas de marketing digital para aumentar tu presencia online y generar más ventas.',
    'services.social.title': 'Gestión de Redes Sociales',
    'services.social.description': 'Creación y gestión de contenido para redes sociales, aumentando el engagement y la visibilidad de tu marca.',
    'services.button': 'Saber Más',
    
    // Common
    'common.from': 'Desde',
    'common.month': '/mes',
    'common.back': 'Volver al Inicio',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.pricing': 'Tarifs',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Mission Design',
    'hero.subtitle': 'Nous transformons votre présence numérique à Lisbonne et au-delà',
    'hero.description': 'Marketing Digital • Gestion des Réseaux Sociaux • Apps Low Code • Design Web • Branding • Conseil • Développement Web • Trafic Payant • Agents IA',
    'hero.cta.start': 'Commencer Aujourd\'hui',
    'hero.cta.pricing': 'Voir les Tarifs',
    
    // Services
    'services.title': 'Nos Services',
    'services.marketing.title': 'Marketing Digital',
    'services.marketing.description': 'Stratégies complètes de marketing digital pour augmenter votre présence en ligne et générer plus de ventes.',
    'services.social.title': 'Gestion des Réseaux Sociaux',
    'services.social.description': 'Création et gestion de contenu pour les réseaux sociaux, augmentant l\'engagement et la visibilité de votre marque.',
    'services.button': 'En Savoir Plus',
    
    // Common
    'common.from': 'À partir de',
    'common.month': '/mois',
    'common.back': 'Retour à l\'Accueil',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
