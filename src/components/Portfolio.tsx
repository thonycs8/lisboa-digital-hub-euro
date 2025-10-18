import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Portfolio = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: t('portfolio.filters.all') },
    { id: "webdesign", label: t('portfolio.filters.webdesign') },
    { id: "marketing", label: t('portfolio.filters.marketing') },
    { id: "ecommerce", label: t('portfolio.filters.ecommerce') },
    { id: "ai", label: t('portfolio.filters.ai') }
  ];

  const projects = [
    {
      id: 1,
      title: "Missão Graça e Paz",
      description: t('portfolio.projects.missaogracaepaz.description'),
      category: "webdesign",
      image: "/portfolio/missaogracaepaz.png",
      tags: ["WordPress", "Streaming", "Responsive"],
      liveUrl: "https://missaogracaepaz.com",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Andressa Moura - Lash Designer",
      description: t('portfolio.projects.andressamoura.description'),
      category: "marketing",
      image: "/portfolio/andressamoura.png",
      tags: ["Landing Page", "WordPress", "Conversão"],
      liveUrl: "https://andressamoura.pt",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Soneghet Telhados",
      description: t('portfolio.projects.soneghet.description'),
      category: "webdesign",
      image: "/portfolio/soneghet.png",
      tags: ["WordPress", "SEO", "Formulários"],
      liveUrl: "https://soneghet.pt",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Alves Engenharia",
      description: t('portfolio.projects.alvesengenharia.description'),
      category: "webdesign",
      image: "/portfolio/alvesengenharia.png",
      tags: ["WordPress", "Orçamentos", "Responsive"],
      liveUrl: "https://alvesengenharia.com",
      githubUrl: "#"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-block mb-4">
            <Badge className="bg-black text-white text-sm px-4 py-1">Nosso Portfólio</Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('portfolio.subtitle')}
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 transition-all duration-300 scale-hover ${
                  activeFilter === category.id 
                    ? "bg-black text-white hover:bg-gray-800 shadow-lg" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-black"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden border-gray-200 hover:shadow-2xl transition-all duration-500 bg-white hover-lift scroll-reveal"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" className="bg-white hover:bg-gray-100 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('portfolio.buttons.live')}
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white hover:bg-gray-100 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    <Github className="w-4 h-4 mr-2" />
                    {t('portfolio.buttons.code')}
                  </Button>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-black/80 backdrop-blur-sm text-white">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="bg-gray-100 text-gray-800 hover:bg-black hover:text-white transition-colors text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="inline-block p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
            <p className="text-lg text-gray-600 mb-6">
              {t('portfolio.cta.text')}
            </p>
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg shake-on-hover pulse-glow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('portfolio.cta.button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;