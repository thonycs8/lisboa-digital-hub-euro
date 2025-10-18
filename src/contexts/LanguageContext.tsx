import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'es' | 'fr';

interface Translations {
  // Navigation
  nav: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    pricing: string;
    contact: string;
  };
  
  // Hero section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: {
      start: string;
      pricing: string;
    };
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
      title: string;
      subtitle: string;
      name: string;
      email: string;
      company: string;
      service: string;
      message: string;
      submit: string;
    };
    info: {
      title: string;
      address: string;
      phone: string;
      email: string;
      hours: string;
    };
    why: {
      title: string;
    };
  };
  
  // Portfolio section
  portfolio: {
    title: string;
    subtitle: string;
    filters: {
      all: string;
      webdesign: string;
      marketing: string;
      ecommerce: string;
      ai: string;
    };
    projects: {
      missaogracaepaz: { description: string; };
      andressamoura: { description: string; };
      soneghet: { description: string; };
      alvesengenharia: { description: string; };
    };
    buttons: {
      live: string;
      code: string;
    };
    cta: {
      text: string;
      button: string;
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
      cookies: string;
      affiliates: string;
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

  // Privacy Policy
  privacy: {
    title: string;
    lastUpdated: string;
    intro: { title: string; description: string; };
    dataCollection: { title: string; description: string; };
    dataUsage: { title: string; description: string; };
    gdpr: { title: string; description: string; };
    dataSecurity: { title: string; };
    dataSharing: { title: string; };
    retention: { title: string; };
    contact: { title: string; };
  };

  // Cookie Policy
  cookies: {
    title: string;
    lastUpdated: string;
    intro: { title: string; description: string; };
    whatAre: { title: string; };
    types: { title: string; };
    thirdParty: { title: string; };
    management: { title: string; };
    consent: { title: string; };
    contact: { title: string; };
  };

  // Cookie Consent Banner
  cookieConsent: {
    title: string;
    description: string;
    accept: string;
    reject: string;
    customize: string;
    learnMore: string;
  };

  // Affiliates
  affiliates: {
    badge: string;
    title: string;
    subtitle: string;
    benefits: { title: string; subtitle: string; };
    howItWorks: { title: string; subtitle: string; };
    commission: { title: string; };
    cta: { title: string; subtitle: string; };
  };
}

const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      home: 'Início',
      services: 'Serviços',
      portfolio: 'Portfólio',
      about: 'Sobre',
      pricing: 'Preços',
      contact: 'Contacto',
    },
    hero: {
      title: 'Missão Design',
      subtitle: 'Impulsione o crescimento da sua empresa com soluções em Marketing, Web Design e Inteligência Artificial',
      description: 'A Missão Design oferece estratégias personalizadas para ajudar a sua empresa a crescer de forma previsível, automática e eficiente. Está na hora de levar a sua empresa ao próximo nível.',
      cta: {
        start: 'Começar Agora',
        pricing: 'Ver Preços',
      },
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
        title: 'Envie-nos uma Mensagem',
        subtitle: 'Preencha o formulário e entraremos em contacto em breve.',
        name: 'Nome',
        email: 'Email',
        company: 'Empresa',
        service: 'Serviço de Interesse',
        message: 'Mensagem',
        submit: 'Enviar Mensagem',
      },
      info: {
        title: 'Informações de Contacto',
        address: 'Morada',
        phone: 'Telefone',
        email: 'Email',
        hours: 'Horário',
      },
      why: {
        title: 'Porquê Escolher-nos?',
      },
    },
    portfolio: {
      title: 'Nosso Portfólio',
      subtitle: 'Conheça alguns dos projetos que transformaram negócios',
      filters: {
        all: 'Todos',
        webdesign: 'Web Design',
        marketing: 'Marketing',
        ecommerce: 'E-commerce',
        ai: 'Inteligência Artificial',
      },
      projects: {
        missaogracaepaz: { description: 'Site institucional de igreja com transmissões ao vivo, gestão de conteúdo e integração com redes sociais' },
        andressamoura: { description: 'Landing page de alta conversão para curso de Lash Designer com integração WhatsApp e formulários otimizados' },
        soneghet: { description: 'Website corporativo para empresa de telhados com formulários de orçamento, galeria de projetos e SEO otimizado' },
        alvesengenharia: { description: 'Plataforma completa para engenharia civil com sistema de orçamentos, gestão de projetos e portfólio de obras' },
      },
      buttons: {
        live: 'Ver Online',
        code: 'Ver Código',
      },
      cta: {
        text: 'Tem um projeto em mente? Vamos transformá-lo em realidade.',
        button: 'Iniciar Projeto',
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
        cookies: 'Política de Cookies',
        affiliates: 'Programa de Afiliados',
      },
      copyright: '2024 Missão Design. Todos os direitos reservados.',
      compliance: {
        gdpr: 'GDPR Compliant',
        iso: 'ISO 27001',
      },
    },
    common: {
      month: '/mês',
    },
    privacy: {
      title: 'Política de Privacidade',
      lastUpdated: 'Última atualização',
      intro: {
        title: 'Introdução',
        description: 'A Missão Design está comprometida em proteger a sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos as suas informações pessoais de acordo com o Regulamento Geral de Proteção de Dados (GDPR).'
      },
      dataCollection: {
        title: 'Dados Que Coletamos',
        description: 'Podemos coletar e processar os seguintes tipos de dados:'
      },
      dataUsage: {
        title: 'Como Utilizamos os Seus Dados',
        description: 'Utilizamos as informações coletadas para:'
      },
      gdpr: {
        title: 'Seus Direitos (GDPR)',
        description: 'De acordo com o GDPR, você tem os seguintes direitos:'
      },
      dataSecurity: { title: 'Segurança dos Dados' },
      dataSharing: { title: 'Partilha de Dados' },
      retention: { title: 'Retenção de Dados' },
      contact: { title: 'Contacte-nos' },
    },
    cookies: {
      title: 'Política de Cookies',
      lastUpdated: 'Última atualização',
      intro: {
        title: 'Sobre Esta Política',
        description: 'Esta Política de Cookies explica o que são cookies, como os utilizamos e as suas opções relativamente ao uso de cookies no nosso website.'
      },
      whatAre: { title: 'O Que São Cookies?' },
      types: { title: 'Tipos de Cookies Que Utilizamos' },
      thirdParty: { title: 'Cookies de Terceiros' },
      management: { title: 'Gestão de Cookies' },
      consent: { title: 'Consentimento' },
      contact: { title: 'Contacte-nos' },
    },
    cookieConsent: {
      title: '🍪 Utilizamos Cookies',
      description: 'Utilizamos cookies para melhorar a sua experiência, analisar o tráfego e personalizar conteúdo.',
      accept: 'Aceitar Todos',
      reject: 'Rejeitar',
      customize: 'Personalizar',
      learnMore: 'Saiba mais',
    },
    affiliates: {
      badge: 'Programa de Parceiros',
      title: 'Programa de Afiliados Missão Design',
      subtitle: 'Ganhe comissões recorrentes indicando os nossos serviços premium de marketing digital, web design e IA.',
      benefits: {
        title: 'Por Que Se Tornar Afiliado?',
        subtitle: 'Benefícios exclusivos para parceiros comprometidos'
      },
      howItWorks: {
        title: 'Como Funciona?',
        subtitle: 'Simples, transparente e lucrativo'
      },
      commission: { title: 'Estrutura de Comissões' },
      cta: {
        title: 'Pronto Para Começar?',
        subtitle: 'Inscreva-se hoje e comece a ganhar comissões recorrentes!'
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      pricing: 'Pricing',
      contact: 'Contact',
    },
    hero: {
      title: 'Missão Design',
      subtitle: 'Boost your business growth with Marketing, Web Design and Artificial Intelligence solutions',
      description: 'Missão Design offers personalized strategies to help your business grow in a predictable, automatic and efficient way. It\'s time to take your business to the next level.',
      cta: {
        start: 'Get Started',
        pricing: 'View Pricing',
      },
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
        title: 'Send us a Message',
        subtitle: 'Fill out the form and we\'ll get back to you soon.',
        name: 'Name',
        email: 'Email',
        company: 'Company',
        service: 'Service of Interest',
        message: 'Message',
        submit: 'Send Message',
      },
      info: {
        title: 'Contact Information',
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        hours: 'Hours',
      },
      why: {
        title: 'Why Choose Us?',
      },
    },
    portfolio: {
      title: 'Our Portfolio',
      subtitle: 'Discover some of the projects that transformed businesses',
      filters: {
        all: 'All',
        webdesign: 'Web Design',
        marketing: 'Marketing',
        ecommerce: 'E-commerce',
        ai: 'Artificial Intelligence',
      },
      projects: {
        missaogracaepaz: { description: 'Church institutional website with live streaming, content management and social media integration' },
        andressamoura: { description: 'High conversion landing page for Lash Designer course with WhatsApp integration and optimized forms' },
        soneghet: { description: 'Corporate website for roofing company with quote forms, project gallery and optimized SEO' },
        alvesengenharia: { description: 'Complete platform for civil engineering with quote system, project management and works portfolio' },
      },
      buttons: {
        live: 'View Live',
        code: 'View Code',
      },
      cta: {
        text: 'Have a project in mind? Let\'s turn it into reality.',
        button: 'Start Project',
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
        cookies: 'Cookie Policy',
        affiliates: 'Affiliate Program',
      },
      copyright: '2024 Missão Design. All rights reserved.',
      compliance: {
        gdpr: 'GDPR Compliant',
        iso: 'ISO 27001',
      },
    },
    common: {
      month: '/month',
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated',
      intro: {
        title: 'Introduction',
        description: 'Missão Design is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose and protect your personal information in accordance with the General Data Protection Regulation (GDPR).'
      },
      dataCollection: {
        title: 'Data We Collect',
        description: 'We may collect and process the following types of data:'
      },
      dataUsage: {
        title: 'How We Use Your Data',
        description: 'We use the collected information to:'
      },
      gdpr: {
        title: 'Your Rights (GDPR)',
        description: 'Under GDPR, you have the following rights:'
      },
      dataSecurity: { title: 'Data Security' },
      dataSharing: { title: 'Data Sharing' },
      retention: { title: 'Data Retention' },
      contact: { title: 'Contact Us' },
    },
    cookies: {
      title: 'Cookie Policy',
      lastUpdated: 'Last updated',
      intro: {
        title: 'About This Policy',
        description: 'This Cookie Policy explains what cookies are, how we use them and your choices regarding the use of cookies on our website.'
      },
      whatAre: { title: 'What Are Cookies?' },
      types: { title: 'Types of Cookies We Use' },
      thirdParty: { title: 'Third-Party Cookies' },
      management: { title: 'Cookie Management' },
      consent: { title: 'Consent' },
      contact: { title: 'Contact Us' },
    },
    cookieConsent: {
      title: '🍪 We Use Cookies',
      description: 'We use cookies to improve your experience, analyze traffic and personalize content.',
      accept: 'Accept All',
      reject: 'Reject',
      customize: 'Customize',
      learnMore: 'Learn more',
    },
    affiliates: {
      badge: 'Partner Program',
      title: 'Missão Design Affiliate Program',
      subtitle: 'Earn recurring commissions by referring our premium digital marketing, web design and AI services.',
      benefits: {
        title: 'Why Become an Affiliate?',
        subtitle: 'Exclusive benefits for committed partners'
      },
      howItWorks: {
        title: 'How It Works?',
        subtitle: 'Simple, transparent and profitable'
      },
      commission: { title: 'Commission Structure' },
      cta: {
        title: 'Ready to Start?',
        subtitle: 'Sign up today and start earning recurring commissions!'
      },
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      portfolio: 'Portafolio',
      about: 'Acerca',
      pricing: 'Precios',
      contact: 'Contacto',
    },
    hero: {
      title: 'Missão Design',
      subtitle: 'Impulsa el crecimiento de tu empresa con soluciones en Marketing, Diseño Web e Inteligencia Artificial',
      description: 'Missão Design ofrece estrategias personalizadas para ayudar a tu empresa a crecer de forma predecible, automática y eficiente. Es hora de llevar tu empresa al siguiente nivel.',
      cta: {
        start: 'Empezar Ahora',
        pricing: 'Ver Precios',
      },
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
        title: 'Envíanos un Mensaje',
        subtitle: 'Completa el formulario y nos pondremos en contacto pronto.',
        name: 'Nombre',
        email: 'Email',
        company: 'Empresa',
        service: 'Servicio de Interés',
        message: 'Mensaje',
        submit: 'Enviar Mensaje',
      },
      info: {
        title: 'Información de Contacto',
        address: 'Dirección',
        phone: 'Teléfono',
        email: 'Email',
        hours: 'Horario',
      },
      why: {
        title: '¿Por qué Elegirnos?',
      },
    },
    portfolio: {
      title: 'Nuestro Portafolio',
      subtitle: 'Descubre algunos de los proyectos que transformaron negocios',
      filters: {
        all: 'Todos',
        webdesign: 'Diseño Web',
        marketing: 'Marketing',
        ecommerce: 'E-commerce',
        ai: 'Inteligencia Artificial',
      },
      projects: {
        missaogracaepaz: { description: 'Sitio institucional de iglesia con transmisiones en vivo, gestión de contenido e integración con redes sociales' },
        andressamoura: { description: 'Landing page de alta conversión para curso de Lash Designer con integración WhatsApp y formularios optimizados' },
        soneghet: { description: 'Sitio web corporativo para empresa de techos con formularios de presupuesto, galería de proyectos y SEO optimizado' },
        alvesengenharia: { description: 'Plataforma completa para ingeniería civil con sistema de presupuestos, gestión de proyectos y portafolio de obras' },
      },
      buttons: {
        live: 'Ver En Vivo',
        code: 'Ver Código',
      },
      cta: {
        text: '¿Tienes un proyecto en mente? Vamos a convertirlo en realidad.',
        button: 'Iniciar Proyecto',
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
        cookies: 'Política de Cookies',
        affiliates: 'Programa de Afiliados',
      },
      copyright: '2024 Missão Design. Todos los derechos reservados.',
      compliance: {
        gdpr: 'GDPR Compliant',
        iso: 'ISO 27001',
      },
    },
    common: {
      month: '/mes',
    },
    privacy: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización',
      intro: {
        title: 'Introducción',
        description: 'Missão Design está comprometida a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información personal de acuerdo con el Reglamento General de Protección de Datos (GDPR).'
      },
      dataCollection: {
        title: 'Datos Que Recopilamos',
        description: 'Podemos recopilar y procesar los siguientes tipos de datos:'
      },
      dataUsage: {
        title: 'Cómo Utilizamos Sus Datos',
        description: 'Utilizamos la información recopilada para:'
      },
      gdpr: {
        title: 'Sus Derechos (GDPR)',
        description: 'Según el GDPR, tiene los siguientes derechos:'
      },
      dataSecurity: { title: 'Seguridad de Datos' },
      dataSharing: { title: 'Compartir Datos' },
      retention: { title: 'Retención de Datos' },
      contact: { title: 'Contáctenos' },
    },
    cookies: {
      title: 'Política de Cookies',
      lastUpdated: 'Última actualización',
      intro: {
        title: 'Sobre Esta Política',
        description: 'Esta Política de Cookies explica qué son las cookies, cómo las utilizamos y sus opciones con respecto al uso de cookies en nuestro sitio web.'
      },
      whatAre: { title: '¿Qué Son Las Cookies?' },
      types: { title: 'Tipos de Cookies Que Utilizamos' },
      thirdParty: { title: 'Cookies de Terceros' },
      management: { title: 'Gestión de Cookies' },
      consent: { title: 'Consentimiento' },
      contact: { title: 'Contáctenos' },
    },
    cookieConsent: {
      title: '🍪 Utilizamos Cookies',
      description: 'Utilizamos cookies para mejorar su experiencia, analizar el tráfico y personalizar el contenido.',
      accept: 'Aceptar Todas',
      reject: 'Rechazar',
      customize: 'Personalizar',
      learnMore: 'Más información',
    },
    affiliates: {
      badge: 'Programa de Socios',
      title: 'Programa de Afiliados Missão Design',
      subtitle: 'Gane comisiones recurrentes recomendando nuestros servicios premium de marketing digital, diseño web e IA.',
      benefits: {
        title: '¿Por Qué Ser Afiliado?',
        subtitle: 'Beneficios exclusivos para socios comprometidos'
      },
      howItWorks: {
        title: '¿Cómo Funciona?',
        subtitle: 'Simple, transparente y rentable'
      },
      commission: { title: 'Estructura de Comisiones' },
      cta: {
        title: '¿Listo Para Empezar?',
        subtitle: '¡Regístrate hoy y empieza a ganar comisiones recurrentes!'
      },
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'À Propos',
      pricing: 'Tarifs',
      contact: 'Contact',
    },
    hero: {
      title: 'Missão Design',
      subtitle: 'Boostez la croissance de votre entreprise avec des solutions en Marketing, Web Design et Intelligence Artificielle',
      description: 'Missão Design offre des stratégies personnalisées pour aider votre entreprise à croître de manière prévisible, automatique et efficace. Il est temps d\'amener votre entreprise au niveau supérieur.',
      cta: {
        start: 'Commencer',
        pricing: 'Voir les Prix',
      },
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
        title: 'Envoyez-nous un Message',
        subtitle: 'Remplissez le formulaire et nous vous recontacterons bientôt.',
        name: 'Nom',
        email: 'Email',
        company: 'Entreprise',
        service: 'Service d\'Intérêt',
        message: 'Message',
        submit: 'Envoyer le Message',
      },
      info: {
        title: 'Informations de Contact',
        address: 'Adresse',
        phone: 'Téléphone',
        email: 'Email',
        hours: 'Horaires',
      },
      why: {
        title: 'Pourquoi Nous Choisir ?',
      },
    },
    portfolio: {
      title: 'Notre Portfolio',
      subtitle: 'Découvrez quelques-uns des projets qui ont transformé des entreprises',
      filters: {
        all: 'Tous',
        webdesign: 'Web Design',
        marketing: 'Marketing',
        ecommerce: 'E-commerce',
        ai: 'Intelligence Artificielle',
      },
      projects: {
        missaogracaepaz: { description: 'Site institutionnel d\'église avec diffusions en direct, gestion de contenu et intégration aux réseaux sociaux' },
        andressamoura: { description: 'Landing page à haute conversion pour cours de Lash Designer avec intégration WhatsApp et formulaires optimisés' },
        soneghet: { description: 'Site web corporatif pour entreprise de toitures avec formulaires de devis, galerie de projets et SEO optimisé' },
        alvesengenharia: { description: 'Plateforme complète pour génie civil avec système de devis, gestion de projets et portfolio de travaux' },
      },
      buttons: {
        live: 'Voir En Direct',
        code: 'Voir le Code',
      },
      cta: {
        text: 'Vous avez un projet en tête ? Transformons-le en réalité.',
        button: 'Démarrer le Projet',
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
        cookies: 'Politique de Cookies',
        affiliates: 'Programme d\'Affiliation',
      },
      copyright: '2024 Missão Design. Tous droits réservés.',
      compliance: {
        gdpr: 'GDPR Compliant',
        iso: 'ISO 27001',
      },
    },
    common: {
      month: '/mois',
    },
    privacy: {
      title: 'Politique de Confidentialité',
      lastUpdated: 'Dernière mise à jour',
      intro: {
        title: 'Introduction',
        description: 'Missão Design s\'engage à protéger votre vie privée. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD).'
      },
      dataCollection: {
        title: 'Données Que Nous Collectons',
        description: 'Nous pouvons collecter et traiter les types de données suivants:'
      },
      dataUsage: {
        title: 'Comment Nous Utilisons Vos Données',
        description: 'Nous utilisons les informations collectées pour:'
      },
      gdpr: {
        title: 'Vos Droits (RGPD)',
        description: 'Conformément au RGPD, vous disposez des droits suivants:'
      },
      dataSecurity: { title: 'Sécurité des Données' },
      dataSharing: { title: 'Partage de Données' },
      retention: { title: 'Conservation des Données' },
      contact: { title: 'Contactez-nous' },
    },
    cookies: {
      title: 'Politique de Cookies',
      lastUpdated: 'Dernière mise à jour',
      intro: {
        title: 'À Propos de Cette Politique',
        description: 'Cette Politique de Cookies explique ce que sont les cookies, comment nous les utilisons et vos choix concernant l\'utilisation des cookies sur notre site Web.'
      },
      whatAre: { title: 'Qu\'est-ce Que Les Cookies ?' },
      types: { title: 'Types de Cookies Que Nous Utilisons' },
      thirdParty: { title: 'Cookies Tiers' },
      management: { title: 'Gestion des Cookies' },
      consent: { title: 'Consentement' },
      contact: { title: 'Contactez-nous' },
    },
    cookieConsent: {
      title: '🍪 Nous Utilisons des Cookies',
      description: 'Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu.',
      accept: 'Accepter Tout',
      reject: 'Refuser',
      customize: 'Personnaliser',
      learnMore: 'En savoir plus',
    },
    affiliates: {
      badge: 'Programme Partenaire',
      title: 'Programme d\'Affiliation Missão Design',
      subtitle: 'Gagnez des commissions récurrentes en recommandant nos services premium de marketing digital, conception web et IA.',
      benefits: {
        title: 'Pourquoi Devenir Affilié ?',
        subtitle: 'Avantages exclusifs pour les partenaires engagés'
      },
      howItWorks: {
        title: 'Comment Ça Marche ?',
        subtitle: 'Simple, transparent et rentable'
      },
      commission: { title: 'Structure de Commissions' },
      cta: {
        title: 'Prêt à Commencer ?',
        subtitle: 'Inscrivez-vous aujourd\'hui et commencez à gagner des commissions récurrentes !'
      },
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
