
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
    'services.subtitle': 'Oferecemos soluções digitais completas para elevar o seu negócio ao próximo nível.',
    'services.marketing.title': 'Marketing Digital',
    'services.marketing.description': 'Estratégias digitais completas para aumentar a sua presença online e atrair mais clientes.',
    'services.social.title': 'Gestão de Redes Sociais',
    'services.social.description': 'Gestão profissional das suas redes sociais com conteúdo engaging e estratégico.',
    'services.apps.title': 'Apps Low Code',
    'services.apps.description': 'Desenvolvimento rápido de aplicações móveis e web sem complexidade técnica.',
    'services.webdesign.title': 'Web Design',
    'services.webdesign.description': 'Websites modernos, responsivos e otimizados para conversão.',
    'services.branding.title': 'Branding',
    'services.branding.description': 'Identidade visual completa que diferencia a sua marca no mercado.',
    'services.traffic.title': 'Tráfego Pago',
    'services.traffic.description': 'Campanhas publicitárias eficazes no Google Ads, Facebook Ads e outras plataformas.',
    'services.webdev.title': 'Desenvolvimento Web',
    'services.webdev.description': 'Desenvolvimento de websites e aplicações web personalizadas e escaláveis.',
    'services.ai.title': 'Agentes de IA',
    'services.ai.description': 'Implementação de chatbots e assistentes virtuais para automatizar atendimento.',
    'services.button': 'Saber Mais',
    
    // About
    'about.title': 'Sobre a Missão Design',
    'about.description1': 'Somos uma agência digital baseada em Lisboa, especializada em transformar negócios através de soluções digitais inovadoras e estratégias de marketing eficazes.',
    'about.description2': 'A nossa missão é ajudar empresas a crescer no mundo digital, oferecendo serviços personalizados que geram resultados reais e mensuráveis.',
    'about.stats.clients': 'Clientes Satisfeitos',
    'about.stats.projects': 'Projetos Concluídos',
    'about.stats.success': 'Taxa de Sucesso',
    'about.stats.support': 'Suporte Disponível',
    
    // Pricing
    'pricing.title': 'Planos e Preços',
    'pricing.subtitle': 'Escolha o plano ideal para o seu negócio. Todos os preços em euros, sem taxas ocultas.',
    'pricing.starter.name': 'Starter',
    'pricing.starter.description': 'Perfeito para pequenas empresas que querem começar',
    'pricing.professional.name': 'Professional',
    'pricing.professional.description': 'Ideal para empresas em crescimento',
    'pricing.enterprise.name': 'Enterprise',
    'pricing.enterprise.description': 'Solução completa para grandes empresas',
    'pricing.popular': 'Mais Popular',
    'pricing.choose': 'Escolher',
    
    // Contact
    'contact.title': 'Vamos Conversar',
    'contact.subtitle': 'Pronto para transformar o seu negócio? Entre em contacto connosco e descubra como podemos ajudar.',
    'contact.form.title': 'Envie-nos uma mensagem',
    'contact.form.subtitle': 'Preencha o formulário e entraremos em contacto em 24 horas',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.company': 'Empresa',
    'contact.form.service': 'Serviço de Interesse',
    'contact.form.message': 'Mensagem',
    'contact.form.submit': 'Enviar Mensagem',
    'contact.info.title': 'Informações de Contacto',
    'contact.info.address': 'Endereço',
    'contact.info.phone': 'Telefone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Horário',
    'contact.why.title': 'Porquê escolher-nos?',
    
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
    'services.subtitle': 'We offer complete digital solutions to take your business to the next level.',
    'services.marketing.title': 'Digital Marketing',
    'services.marketing.description': 'Complete digital strategies to increase your online presence and attract more customers.',
    'services.social.title': 'Social Media Management',
    'services.social.description': 'Professional management of your social media with engaging and strategic content.',
    'services.apps.title': 'Low Code Apps',
    'services.apps.description': 'Rapid development of mobile and web applications without technical complexity.',
    'services.webdesign.title': 'Web Design',
    'services.webdesign.description': 'Modern, responsive websites optimized for conversion.',
    'services.branding.title': 'Branding',
    'services.branding.description': 'Complete visual identity that differentiates your brand in the market.',
    'services.traffic.title': 'Paid Traffic',
    'services.traffic.description': 'Effective advertising campaigns on Google Ads, Facebook Ads and other platforms.',
    'services.webdev.title': 'Web Development',
    'services.webdev.description': 'Development of custom and scalable websites and web applications.',
    'services.ai.title': 'AI Agents',
    'services.ai.description': 'Implementation of chatbots and virtual assistants to automate customer service.',
    'services.button': 'Learn More',
    
    // About
    'about.title': 'About Mission Design',
    'about.description1': 'We are a digital agency based in Lisbon, specialized in transforming businesses through innovative digital solutions and effective marketing strategies.',
    'about.description2': 'Our mission is to help companies grow in the digital world, offering personalized services that generate real and measurable results.',
    'about.stats.clients': 'Satisfied Clients',
    'about.stats.projects': 'Completed Projects',
    'about.stats.success': 'Success Rate',
    'about.stats.support': 'Available Support',
    
    // Pricing
    'pricing.title': 'Plans and Pricing',
    'pricing.subtitle': 'Choose the ideal plan for your business. All prices in euros, no hidden fees.',
    'pricing.starter.name': 'Starter',
    'pricing.starter.description': 'Perfect for small businesses that want to start',
    'pricing.professional.name': 'Professional',
    'pricing.professional.description': 'Ideal for growing businesses',
    'pricing.enterprise.name': 'Enterprise',
    'pricing.enterprise.description': 'Complete solution for large enterprises',
    'pricing.popular': 'Most Popular',
    'pricing.choose': 'Choose',
    
    // Contact
    'contact.title': 'Let\'s Talk',
    'contact.subtitle': 'Ready to transform your business? Contact us and discover how we can help.',
    'contact.form.title': 'Send us a message',
    'contact.form.subtitle': 'Fill out the form and we\'ll get back to you within 24 hours',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.service': 'Service of Interest',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Hours',
    'contact.why.title': 'Why choose us?',
    
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
    'services.subtitle': 'Ofrecemos soluciones digitales completas para llevar tu negocio al siguiente nivel.',
    'services.marketing.title': 'Marketing Digital',
    'services.marketing.description': 'Estrategias digitales completas para aumentar tu presencia online y atraer más clientes.',
    'services.social.title': 'Gestión de Redes Sociales',
    'services.social.description': 'Gestión profesional de tus redes sociales con contenido atractivo y estratégico.',
    'services.apps.title': 'Apps Low Code',
    'services.apps.description': 'Desarrollo rápido de aplicaciones móviles y web sin complejidad técnica.',
    'services.webdesign.title': 'Diseño Web',
    'services.webdesign.description': 'Sitios web modernos, responsivos y optimizados para conversión.',
    'services.branding.title': 'Branding',
    'services.branding.description': 'Identidad visual completa que diferencia tu marca en el mercado.',
    'services.traffic.title': 'Tráfico Pagado',
    'services.traffic.description': 'Campañas publicitarias efectivas en Google Ads, Facebook Ads y otras plataformas.',
    'services.webdev.title': 'Desarrollo Web',
    'services.webdev.description': 'Desarrollo de sitios web y aplicaciones web personalizadas y escalables.',
    'services.ai.title': 'Agentes de IA',
    'services.ai.description': 'Implementación de chatbots y asistentes virtuales para automatizar atención al cliente.',
    'services.button': 'Saber Más',
    
    // About
    'about.title': 'Acerca de Misión Design',
    'about.description1': 'Somos una agencia digital con sede en Lisboa, especializada en transformar negocios a través de soluciones digitales innovadoras y estrategias de marketing efectivas.',
    'about.description2': 'Nuestra misión es ayudar a las empresas a crecer en el mundo digital, ofreciendo servicios personalizados que generan resultados reales y medibles.',
    'about.stats.clients': 'Clientes Satisfechos',
    'about.stats.projects': 'Proyectos Completados',
    'about.stats.success': 'Tasa de Éxito',
    'about.stats.support': 'Soporte Disponible',
    
    // Pricing
    'pricing.title': 'Planes y Precios',
    'pricing.subtitle': 'Elige el plan ideal para tu negocio. Todos los precios en euros, sin tarifas ocultas.',
    'pricing.starter.name': 'Starter',
    'pricing.starter.description': 'Perfecto para pequeñas empresas que quieren empezar',
    'pricing.professional.name': 'Professional',
    'pricing.professional.description': 'Ideal para empresas en crecimiento',
    'pricing.enterprise.name': 'Enterprise',
    'pricing.enterprise.description': 'Solución completa para grandes empresas',
    'pricing.popular': 'Más Popular',
    'pricing.choose': 'Elegir',
    
    // Contact
    'contact.title': 'Hablemos',
    'contact.subtitle': '¿Listo para transformar tu negocio? Contáctanos y descubre cómo podemos ayudar.',
    'contact.form.title': 'Envíanos un mensaje',
    'contact.form.subtitle': 'Completa el formulario y nos pondremos en contacto en 24 horas',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.company': 'Empresa',
    'contact.form.service': 'Servicio de Interés',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.info.title': 'Información de Contacto',
    'contact.info.address': 'Dirección',
    'contact.info.phone': 'Teléfono',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Horario',
    'contact.why.title': '¿Por qué elegirnos?',
    
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
    'services.subtitle': 'Nous offrons des solutions numériques complètes pour amener votre entreprise au niveau supérieur.',
    'services.marketing.title': 'Marketing Digital',
    'services.marketing.description': 'Stratégies numériques complètes pour augmenter votre présence en ligne et attirer plus de clients.',
    'services.social.title': 'Gestion des Réseaux Sociaux',
    'services.social.description': 'Gestion professionnelle de vos réseaux sociaux avec du contenu engageant et stratégique.',
    'services.apps.title': 'Apps Low Code',
    'services.apps.description': 'Développement rapide d\'applications mobiles et web sans complexité technique.',
    'services.webdesign.title': 'Design Web',
    'services.webdesign.description': 'Sites web modernes, responsifs et optimisés pour la conversion.',
    'services.branding.title': 'Branding',
    'services.branding.description': 'Identité visuelle complète qui différencie votre marque sur le marché.',
    'services.traffic.title': 'Trafic Payant',
    'services.traffic.description': 'Campagnes publicitaires efficaces sur Google Ads, Facebook Ads et autres plateformes.',
    'services.webdev.title': 'Développement Web',
    'services.webdev.description': 'Développement de sites web et applications web personnalisés et évolutifs.',
    'services.ai.title': 'Agents IA',
    'services.ai.description': 'Implémentation de chatbots et assistants virtuels pour automatiser le service client.',
    'services.button': 'En Savoir Plus',
    
    // About
    'about.title': 'À propos de Mission Design',
    'about.description1': 'Nous sommes une agence numérique basée à Lisbonne, spécialisée dans la transformation des entreprises grâce à des solutions numériques innovantes et des stratégies marketing efficaces.',
    'about.description2': 'Notre mission est d\'aider les entreprises à croître dans le monde numérique, en offrant des services personnalisés qui génèrent des résultats réels et mesurables.',
    'about.stats.clients': 'Clients Satisfaits',
    'about.stats.projects': 'Projets Terminés',
    'about.stats.success': 'Taux de Réussite',
    'about.stats.support': 'Support Disponible',
    
    // Pricing
    'pricing.title': 'Plans et Tarifs',
    'pricing.subtitle': 'Choisissez le plan idéal pour votre entreprise. Tous les prix en euros, sans frais cachés.',
    'pricing.starter.name': 'Starter',
    'pricing.starter.description': 'Parfait pour les petites entreprises qui veulent commencer',
    'pricing.professional.name': 'Professional',
    'pricing.professional.description': 'Idéal pour les entreprises en croissance',
    'pricing.enterprise.name': 'Enterprise',
    'pricing.enterprise.description': 'Solution complète pour les grandes entreprises',
    'pricing.popular': 'Le Plus Populaire',
    'pricing.choose': 'Choisir',
    
    // Contact
    'contact.title': 'Parlons',
    'contact.subtitle': 'Prêt à transformer votre entreprise ? Contactez-nous et découvrez comment nous pouvons vous aider.',
    'contact.form.title': 'Envoyez-nous un message',
    'contact.form.subtitle': 'Remplissez le formulaire et nous vous recontacterons dans 24 heures',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.company': 'Entreprise',
    'contact.form.service': 'Service d\'Intérêt',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer le Message',
    'contact.info.title': 'Informations de Contact',
    'contact.info.address': 'Adresse',
    'contact.info.phone': 'Téléphone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Horaires',
    'contact.why.title': 'Pourquoi nous choisir ?',
    
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
