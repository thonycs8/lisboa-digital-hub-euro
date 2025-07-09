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
      title: "E-commerce Premium",
      description: t('portfolio.projects.ecommerce.description'),
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
      tags: ["React", "Node.js", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Campanha Marketing Digital",
      description: t('portfolio.projects.marketing.description'),
      category: "marketing",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&crop=center",
      tags: ["Google Ads", "Facebook Ads", "Analytics"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Website Corporativo",
      description: t('portfolio.projects.website.description'),
      category: "webdesign",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop&crop=center",
      tags: ["React", "Tailwind", "Responsive"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Chatbot IA",
      description: t('portfolio.projects.chatbot.description'),
      category: "ai",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop&crop=center",
      tags: ["OpenAI", "Python", "Automation"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "App Mobile Restaurante",
      description: t('portfolio.projects.app.description'),
      category: "webdesign",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop&crop=center",
      tags: ["React Native", "Firebase", "Payments"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Dashboard Unisyst",
      description: t('portfolio.projects.dashboard.description'),
      category: "CRM",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
      tags: ["React", "D3.js", "API Integration"],
      liveUrl: "https://unisyst.com.br/",
      githubUrl: "https://github.com/thonycs8/dashboard"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('portfolio.subtitle')}
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 transition-all duration-300 ${
                  activeFilter === category.id 
                    ? "bg-black text-white hover:bg-gray-800" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-gray-200 hover:shadow-xl transition-all duration-300 bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('portfolio.buttons.live')}
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Github className="w-4 h-4 mr-2" />
                    {t('portfolio.buttons.code')}
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs"
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
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            {t('portfolio.cta.text')}
          </p>
          <Button 
            size="lg" 
            className="bg-black hover:bg-gray-800 text-white px-8 py-3"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('portfolio.cta.button')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;