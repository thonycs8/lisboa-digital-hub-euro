import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { X, Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const { t } = useLanguage();
  
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    const consentData = {
      timestamp: new Date().toISOString(),
      preferences: prefs,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    toast({
      title: "Preferências salvas",
      description: "Suas preferências de cookies foram atualizadas.",
    });
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
    setShowBanner(false);
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    savePreferences(onlyNecessary);
    setShowBanner(false);
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
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

              {showCustomize ? (
                <div className="space-y-4 mb-4">
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Checkbox
                      id="necessary"
                      checked={preferences.necessary}
                      disabled
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label htmlFor="necessary" className="font-semibold text-black">
                        Cookies Necessários
                      </Label>
                      <p className="text-sm text-gray-600">
                        Essenciais para o funcionamento do site. Sempre ativos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Checkbox
                      id="functional"
                      checked={preferences.functional}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, functional: !!checked })
                      }
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label htmlFor="functional" className="font-semibold text-black cursor-pointer">
                        Cookies Funcionais
                      </Label>
                      <p className="text-sm text-gray-600">
                        Permitem funcionalidades melhoradas e personalização.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Checkbox
                      id="analytics"
                      checked={preferences.analytics}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, analytics: !!checked })
                      }
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label htmlFor="analytics" className="font-semibold text-black cursor-pointer">
                        Cookies de Análise
                      </Label>
                      <p className="text-sm text-gray-600">
                        Ajudam-nos a entender como os visitantes usam o site.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Checkbox
                      id="marketing"
                      checked={preferences.marketing}
                      onCheckedChange={(checked) =>
                        setPreferences({ ...preferences, marketing: !!checked })
                      }
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label htmlFor="marketing" className="font-semibold text-black cursor-pointer">
                        Cookies de Marketing
                      </Label>
                      <p className="text-sm text-gray-600">
                        Utilizados para mostrar anúncios relevantes.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}
              
              <div className="flex flex-wrap gap-3">
                {showCustomize ? (
                  <>
                    <Button 
                      onClick={saveCustomPreferences}
                      className="bg-black hover:bg-gray-800 text-white"
                    >
                      Salvar Preferências
                    </Button>
                    <Button 
                      onClick={() => setShowCustomize(false)}
                      variant="outline"
                      className="border-gray-300"
                    >
                      Voltar
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      onClick={acceptAll}
                      className="bg-black hover:bg-gray-800 text-white"
                    >
                      {t('cookieConsent.accept')}
                    </Button>
                    <Button 
                      onClick={rejectAll}
                      variant="outline"
                      className="border-gray-300"
                    >
                      {t('cookieConsent.reject')}
                    </Button>
                    <Button 
                      onClick={() => setShowCustomize(true)}
                      variant="ghost" 
                      className="text-gray-600"
                    >
                      {t('cookieConsent.customize')}
                    </Button>
                  </>
                )}
              </div>
            </div>
            
            <button
              onClick={rejectAll}
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
