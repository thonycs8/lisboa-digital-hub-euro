import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after 2 seconds
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-in-bottom">
      <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-lg border-2 border-gray-200 shadow-2xl">
        <div className="p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
              <Cookie className="w-6 h-6 text-white" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-black mb-2">
                {t('cookieConsent.title')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('cookieConsent.description')}{' '}
                <Link to="/cookie-policy" className="text-blue-600 hover:underline font-semibold">
                  {t('cookieConsent.learnMore')}
                </Link>
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={acceptCookies}
                  className="bg-black hover:bg-gray-800 text-white"
                >
                  {t('cookieConsent.accept')}
                </Button>
                <Button 
                  onClick={rejectCookies}
                  variant="outline"
                  className="border-gray-300"
                >
                  {t('cookieConsent.reject')}
                </Button>
                <Link to="/cookie-policy">
                  <Button variant="ghost" className="text-gray-600">
                    {t('cookieConsent.customize')}
                  </Button>
                </Link>
              </div>
            </div>
            
            <button
              onClick={rejectCookies}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;
