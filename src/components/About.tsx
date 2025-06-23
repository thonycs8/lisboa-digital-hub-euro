
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, number: "50+", label: t('about.stats.clients') },
    { icon: Award, number: "100+", label: t('about.stats.projects') },
    { icon: CheckCircle, number: "98%", label: t('about.stats.success') },
    { icon: Clock, number: "24/7", label: t('about.stats.support') }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('about.description1')}
            </p>
            <p className="text-lg text-gray-600 mb-8">
              {t('about.description2')}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge className="bg-black text-white hover:bg-gray-800">Digital First</Badge>
              <Badge className="bg-black text-white hover:bg-gray-800">Results Driven</Badge>
              <Badge className="bg-black text-white hover:bg-gray-800">Lisboa Based</Badge>
              <Badge className="bg-black text-white hover:bg-gray-800">Full Service</Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-gray-200 bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
