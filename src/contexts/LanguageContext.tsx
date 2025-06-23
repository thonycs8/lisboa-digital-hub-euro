
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'es' | 'fr';

interface Translations {
  // Navigation
  nav: {
    home: string;
    services: string;
    about: string;
    pricing: string;
    contact: string;
  };
  
  // Hero section
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  
  // Services section
  services: {
    title: string;
    subtitle: string;
    button: string;
    marketing: {
      title: string;
      description: string;
    };
    social: {
      title: string;
      description: string;
    };
    apps: {
      title: string;
      description: string;
    };
    webdesign: {
      title: string;
      description: string;
    };
    branding: {
      title: string;
      description: string;
    };
    traffic: {
      title: string;
      description: string;
    };
    webdev: {
      title: string;
      description: string;
    };
    ai: {
      title: string;
      description: string;
    };
  };
  
  // About section
  about: {
    title: string;
    description1: string;
    description2: string;
    stats: {
      clients: string;
      projects: string;
      success: string;
      support: string;
    };
  };
  
  // Pricing section
  pricing: {
    title: string;
    subtitle: string;
    popular: string;
    choose: string;
    starter: {
      name: string;
      description: string;
    };
    professional: {
      name: string;
      description: string;
    };
    enterprise: {
      name: string;
      description: string;
    };
  };
  
  // Contact section
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      send: string;
    };
    info: {
      address: string;
      phone: string;
      email: string;
      hours: string;
    };
  };
  
  // Footer section
  footer: {
    description: string;
    services: {
      title: string;
      marketing: string;
      social: string;
      webdesign: string;
      webdev: string;
      branding: string;
      ai: string;
    };
    links: {
      title: string;
      services: string;
      about: string;
      pricing: string;
      contact: string;
      blog: string;
      privacy: string;
    };
    copyright: string;
    compliance: {
      gdpr: string;
      iso: string;
    };
  };
  
  // Common
  common: {
    month: string;
  };
}

const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      home: 'Início',
      services: 'Serviços',
      about: 'Sobre',
      pricing: 'Preços',
      contact: 'Contacto',
    },
    hero: {
      title: 'Missão Design',
      subtitle: 'Impulsione o crescimento da sua empresa com soluções em Marketing, Web Design e Inteligência Artificial',
      cta: 'Começar Agora',
    },
    services: {
      title: 'Os Nossos Serviços',
      subtitle: 'Soluções completas para transformar a sua presença digital',
      button: 'Saber Mais',
      marketing: {
        title: 'Marketing Digital',
        description: 'Estratégias completas de SEO, SEM e content marketing para aumentar a sua visibilidade online.',
      },
      social: {
        title: 'Gestão de Redes Sociais',
        description: 'Gestão profissional das suas redes sociais com conteúdo engaging e estratégico.',
      },
      apps: {
        title: 'Aplicações Low-Code',
        description: 'Desenvolvimento rápido de aplicações personalizadas usando plataformas low-code.',
      },
      webdesign: {
        title: 'Web Design',
        description: 'Websites modernos, responsivos e otimizados para conversão.',
      },
      branding: {
        title: 'Branding',
        description: 'Identidade visual completa para fortalecer a sua marca no mercado.',
      },
      traffic: {
        title: 'Tráfego Pago',
        description: 'Campanhas otimizadas no Google Ads e Facebook Ads para gerar leads qualificados.',
      },
      webdev: {
        title: 'Desenvolvimento Web',
        description: 'Soluções web personalizadas com as mais recentes tecnologias.',
      },
      ai: {
        title: 'Agentes de IA',
        description: 'Automação inteligente com chatbots e assistentes virtuais personalizados.',
      },
    },
    about: {
      title: 'Sobre a Missão Design',
      description1: 'Somos uma agência digital especializada em transformar negócios através de soluções inovadoras. Com foco em resultados mensuráveis, ajudamos empresas a crescer de forma sustentável no ambiente digital.',
      description2: 'A nossa missão é democratizar o acesso às melhores práticas de marketing digital e desenvolvimento web, oferecendo soluções personalizadas para cada tipo de negócio.',
      stats: {
        clients: 'Clientes Satisfeitos',
        projects: 'Projetos Concluídos',
        success: 'Taxa de Sucesso',
        support: 'Suporte',
      },
    },
    pricing: {
      title: 'Planos e Preços',
      subtitle: 'Escolha o plano ideal para o seu negócio',
      popular: 'Mais Popular',
      choose: 'Escolher',
      starter: {
        name: 'Starter',
        description: 'Ideal para pequenas empresas que estão a começar',
      },
      professional: {
        name: 'Professional',
        description: 'Perfeito para empresas em crescimento',
      },
      enterprise: {
        name: 'Enterprise',
        description: 'Solução completa para grandes empresas',
      },
    },
    contact: {
      title: 'Entre em Contacto',
      subtitle: 'Pronto para transformar o seu negócio? Vamos conversar!',
      form: {
        name: 'Nome',
        email: 'Email',
        company: 'Empresa',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
      },
      info: {
        address: 'Morada',
        phone: 'Telefone',
        email: 'Email',
        hours: 'Horário',
      },
    },
    footer: {
      description: 'Transformamos negócios através de soluções digitais inovadoras em Portugal. A sua missão é o nosso design.',
      services: {
        title: 'Serviços',
        marketing: 'Marketing Digital',
        social: 'Gestão de Redes Sociais',
        webdesign: 'Web Design',
        webdev: 'Desenvolvimento Web',
        branding: 'Branding',
        ai: 'Agentes de IA',
      },
      links: {
        title: 'Links Úteis',
        services: 'Serviços',
        about: 'Sobre',
        pricing: 'Preços',
        contact: 'Contacto',
        blog: 'Blog',
        privacy: 'Política de Privacidade',
      },
      copyright: '2024 Missão Design. Todos os direitos reservados. | NIF: XXX XXX XXX',
      compliance: {
        gdpr: 'GDPR Compliant',
        iso: 'ISO 27001',
      },
    },
    common: {
      month: '/mês',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      pricing: 'Pricing',
      contact: 'Contact',
    },
    hero: {
      title: 'Missão Design',
      subtitle: 'Boost your business growth with Marketing, Web Design and Artificial Intelligence solutions',
      cta: 'Get Started',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Complete solutions to transform your digital presence',
      button: 'Learn More',
      marketing: {
        title: 'Digital Marketing',
        description: 'Complete SEO, SEM and content marketing strategies to increase your online visibility.',
      },
      social: {
        title: 'Social Media Management',
        description: 'Professional management of your social networks with engaging and strategic content.',
      },
      apps: {
        title: 'Low-Code Applications',
        description: 'Rapid development of custom applications using low-code platforms.',
      },
      webdesign: {
        title: 'Web Design',
        description: 'Modern, responsive websites optimized for conversion.',
      },
      branding: {
        title: 'Branding',
        description: 'Complete visual identity to strengthen your brand in the market.',
      },
      traffic: {
        title: 'Paid Traffic',
        description: 'Optimized campaigns on Google Ads and Facebook Ads to generate qualified leads.',
      },
      webdev: {
        title: 'Web Development',
        description: 'Custom web solutions with the latest technologies.',
      },
      ai: {
        title: 'AI Agents',
        description: 'Intelligent automation with custom chatbots and virtual assistants.',
      },
    },
    about: {
      title: 'About Missão Design',
      description1: 'We are a digital agency specialized in transforming businesses through innovative solutions. Focused on measurable results, we help companies grow sustainably in the digital environment.',
      description2: 'Our mission is to democratize access to the best digital marketing and web development practices, offering customized solutions for each type of business.',
      stats: {
        clients: 'Satisfied Clients',
        projects: 'Completed Projects',
        success: 'Success Rate',
        support: 'Support',
      },
    },
    pricing: {
      title: 'Plans & Pricing',
      subtitle: 'Choose the ideal plan for your business',
      popular: 'Most Popular',
      choose: 'Choose',
      starter: {
        name: 'Starter',
        description: 'Ideal for small businesses getting started',
      },
      professional: {
        name: 'Professional',
        description: 'Perfect for growing companies',
      },
      enterprise: {
        name: 'Enterprise',
        description: 'Complete solution for large companies',
      },
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to transform your business? Let\'s talk!',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        message: 'Message',
        send: 'Send Message',
      },
      info: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        hours: 'Hours',
      },
    },
    footer: {
      description: 'We transform businesses through innovative digital solutions in Portugal. Your mission is our design.',
      services: {
        title: 'Services',
        marketing: 'Digital Marketing',
        social: 'Social Media Management',
        webdesign: 'Web Design',
        webdev: 'Web Development',
        branding: 'Branding',
        ai: 'AI Agents',
      },
      links: {
        title: 'Useful Links',
        services: 'Services',
        about: 'About',
        pricing: 'Pricing',
        contact: 'Contact',
        blog: 'Blog',
        privacy: 'Privacy Policy',
      },
      copyright: '2024 Missão Design. All rights reserved. | VAT: XXX XXX XXX',
      compliance: {
        gdpr: 'GDPR Compliant',
        iso: 'ISO 27001',
      },
    },
    common: {
      month: '/month',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Acerca',
      pricing: 'Precios',
      contact: 'Contacto',
    },
    hero: {
      title: 'Missão Design',
      subtitle: 'Impulsa el crecimiento de tu empresa con soluciones en Marketing, Diseño Web e Inteligencia Artificial',
      cta: 'Empezar Ahora',
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones completas para transformar tu presencia digital',
      button: 'Saber Más',
      marketing: {
        title: 'Marketing Digital',
        description: 'Estrategias completas de SEO, SEM y marketing de contenidos para aumentar tu visibilidad online.',
      },
      social: {
        title: 'Gestión de Redes Sociales',
        description: 'Gestión profesional de tus redes sociales con contenido atractivo y estratégico.',
      },
      apps: {
        title: 'Aplicaciones Low-Code',
        description: 'Desarrollo rápido de aplicaciones personalizadas usando plataformas low-code.',
      },
      webdesign: {
        title: 'Diseño Web',
        description: 'Sitios web modernos, responsivos y optimizados para conversión.',
      },
      branding: {
        title: 'Branding',
        description: 'Identidad visual completa para fortalecer tu marca en el mercado.',
      },
      traffic: {
        title: 'Tráfico Pagado',
        description: 'Campañas optimizadas en Google Ads y Facebook Ads para generar leads cualificados.',
      },
      webdev: {
        title: 'Desarrollo Web',
        description: 'Soluciones web personalizadas con las últimas tecnologías.',
      },
      ai: {
        title: 'Agentes de IA',
        description: 'Automatización inteligente con chatbots y asistentes virtuales personalizados.',
      },
    },
    about: {
      title: 'Acerca de Missão Design',
      description1: 'Somos una agencia digital especializada en transformar negocios a través de soluciones innovadoras. Enfocados en resultados medibles, ayudamos a las empresas a crecer de forma sostenible en el entorno digital.',
      description2: 'Nuestra misión es democratizar el acceso a las mejores prácticas de marketing digital y desarrollo web, ofreciendo soluciones personalizadas para cada tipo de negocio.',
      stats: {
        clients: 'Clientes Satisfechos',
        projects: 'Proyectos Completados',
        success: 'Tasa de Éxito',
        support: 'Soporte',
      },
    },
    pricing: {
      title: 'Planes y Precios',
      subtitle: 'Elige el plan ideal para tu negocio',
      popular: 'Más Popular',
      choose: 'Elegir',
      starter: {
        name: 'Starter',
        description: 'Ideal para pequeñas empresas que están empezando',
      },
      professional: {
        name: 'Professional',
        description: 'Perfecto para empresas en crecimiento',
      },
      enterprise: {
        name: 'Enterprise',
        description: 'Solución completa para grandes empresas',
      },
    },
    contact: {
      title: 'Ponte en Contacto',
      subtitle: '¿Listo para transformar tu negocio? ¡Hablemos!',
      form: {
        name: 'Nombre',
        email: 'Email',
        company: 'Empresa',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
      },
      info: {
        address: 'Dirección',
        phone: 'Teléfono',
        email: 'Email',
        hours: 'Horario',
      },
    },
    footer: {
      description: 'Transformamos negocios a través de soluciones digitales innovadoras en Portugal. Tu misión es nuestro diseño.',
      services: {
        title: 'Servicios',
        marketing: 'Marketing Digital',
        social: 'Gestión de Redes Sociales',
        webdesign: 'Diseño Web',
        webdev: 'Desarrollo Web',
        branding: 'Branding',
        ai: 'Agentes de IA',
      },
      links: {
        title: 'Enlaces Útiles',
        services: 'Servicios',
        about: 'Acerca',
        pricing: 'Precios',
        contact: 'Contacto',
        blog: 'Blog',
        privacy: 'Política de Privacidad',
      },
      copyright: '2024 Missão Design. Todos los derechos reservados. | NIF: XXX XXX XXX',
      compliance: {
        gdpr: 'GDPR Compliant',
        iso: 'ISO 27001',
      },
    },
    common: {
      month: '/mes',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      about: 'À propos',
      pricing: 'Prix',
      contact: 'Contact',
    },
    hero: {
      title: 'Missão Design',
      subtitle: 'Boostez la croissance de votre entreprise avec des solutions en Marketing, Web Design et Intelligence Artificielle',
      cta: 'Commencer',
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Solutions complètes pour transformer votre présence digitale',
      button: 'En savoir plus',
      marketing: {
        title: 'Marketing Digital',
        description: 'Stratégies complètes de SEO, SEM et marketing de contenu pour augmenter votre visibilité en ligne.',
      },
      social: {
        title: 'Gestion des Réseaux Sociaux',
        description: 'Gestion professionnelle de vos réseaux sociaux avec du contenu engageant et stratégique.',
      },
      apps: {
        title: 'Applications Low-Code',
        description: 'Développement rapide d\'applications personnalisées utilisant des plateformes low-code.',
      },
      webdesign: {
        title: 'Web Design',
        description: 'Sites web modernes, responsifs et optimisés pour la conversion.',
      },
      branding: {
        title: 'Branding',
        description: 'Identité visuelle complète pour renforcer votre marque sur le marché.',
      },
      traffic: {
        title: 'Trafic Payant',
        description: 'Campagnes optimisées sur Google Ads et Facebook Ads pour générer des leads qualifiés.',
      },
      webdev: {
        title: 'Développement Web',
        description: 'Solutions web personnalisées avec les dernières technologies.',
      },
      ai: {
        title: 'Agents IA',
        description: 'Automatisation intelligente avec des chatbots et assistants virtuels personnalisés.',
      },
    },
    about: {
      title: 'À propos de Missão Design',
      description1: 'Nous sommes une agence digitale spécialisée dans la transformation des entreprises grâce à des solutions innovantes. Axés sur des résultats mesurables, nous aidons les entreprises à croître de manière durable dans l\'environnement digital.',
      description2: 'Notre mission est de démocratiser l\'accès aux meilleures pratiques de marketing digital et de développement web, en offrant des solutions personnalisées pour chaque type d\'entreprise.',
      stats: {
        clients: 'Clients Satisfaits',
        projects: 'Projets Complétés',
        success: 'Taux de Succès',
        support: 'Support',
      },
    },
    pricing: {
      title: 'Plans et Prix',
      subtitle: 'Choisissez le plan idéal pour votre entreprise',
      popular: 'Le Plus Populaire',
      choose: 'Choisir',
      starter: {
        name: 'Starter',
        description: 'Idéal pour les petites entreprises qui commencent',
      },
      professional: {
        name: 'Professional',
        description: 'Parfait pour les entreprises en croissance',
      },
      enterprise: {
        name: 'Enterprise',
        description: 'Solution complète pour les grandes entreprises',
      },
    },
    contact: {
      title: 'Entrer en Contact',
      subtitle: 'Prêt à transformer votre entreprise ? Parlons-en !',
      form: {
        name: 'Nom',
        email: 'Email',
        company: 'Entreprise',
        message: 'Message',
        send: 'Envoyer le Message',
      },
      info: {
        address: 'Adresse',
        phone: 'Téléphone',
        email: 'Email',
        hours: 'Horaires',
      },
    },
    footer: {
      description: 'Nous transformons les entreprises grâce à des solutions digitales innovantes au Portugal. Votre mission est notre design.',
      services: {
        title: 'Services',
        marketing: 'Marketing Digital',
        social: 'Gestion des Réseaux Sociaux',
        webdesign: 'Web Design',
        webdev: 'Développement Web',
        branding: 'Branding',
        ai: 'Agents IA',
      },
      links: {
        title: 'Liens Utiles',
        services: 'Services',
        about: 'À propos',
        pricing: 'Prix',
        contact: 'Contact',
        blog: 'Blog',
        privacy: 'Politique de Confidentialité',
      },
      copyright: '2024 Missão Design. Tous droits réservés. | TVA : XXX XXX XXX',
      compliance: {
        gdpr: 'GDPR Compliant',
        iso: 'ISO 27001',
      },
    },
    common: {
      month: '/mois',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
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
