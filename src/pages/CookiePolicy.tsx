import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const CookiePolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {t('cookies.title')}
          </h1>
          <p className="text-gray-600 mb-8">
            {t('cookies.lastUpdated')}: 18 de Outubro de 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">{t('cookies.intro.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('cookies.intro.description')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">{t('cookies.whatAre.title')}</h2>
              <p className="text-gray-700 mb-4">
                Cookies são pequenos ficheiros de texto que são colocados no seu dispositivo quando visita o nosso website. São amplamente utilizados para fazer com que os websites funcionem de forma mais eficiente e para fornecer informações aos proprietários do site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">{t('cookies.types.title')}</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-black mb-3">1. Cookies Estritamente Necessários</h3>
                <p className="text-gray-700 mb-2">
                  Estes cookies são essenciais para o funcionamento do website e não podem ser desativados nos nossos sistemas.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Cookies de sessão de utilizador</li>
                  <li>Cookies de segurança</li>
                  <li>Cookies de funcionalidade básica</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-black mb-3">2. Cookies de Desempenho e Analytics</h3>
                <p className="text-gray-700 mb-2">
                  Permitem-nos contar visitas e fontes de tráfego para medir e melhorar o desempenho do nosso site.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Google Analytics</li>
                  <li>Hotjar (mapas de calor e gravações)</li>
                  <li>Métricas de desempenho</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-black mb-3">3. Cookies de Funcionalidade</h3>
                <p className="text-gray-700 mb-2">
                  Permitem que o website se lembre de escolhas que faz e forneça recursos melhorados e mais personalizados.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Preferências de idioma</li>
                  <li>Configurações de visualização</li>
                  <li>Estado de login</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-black mb-3">4. Cookies de Marketing e Publicidade</h3>
                <p className="text-gray-700 mb-2">
                  Usados para rastrear visitantes através de websites e exibir anúncios relevantes e envolventes.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Google Ads</li>
                  <li>Facebook Pixel</li>
                  <li>LinkedIn Insight Tag</li>
                  <li>TikTok Pixel</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">{t('cookies.thirdParty.title')}</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos os seguintes serviços de terceiros que podem colocar cookies no seu dispositivo:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div>
                  <p className="font-bold text-black">Google Analytics</p>
                  <p className="text-gray-700 text-sm">Para análise de tráfego e comportamento dos utilizadores</p>
                </div>
                <div>
                  <p className="font-bold text-black">Google Ads & Tag Manager</p>
                  <p className="text-gray-700 text-sm">Para publicidade direcionada e remarketing</p>
                </div>
                <div>
                  <p className="font-bold text-black">Meta Platforms (Facebook/Instagram)</p>
                  <p className="text-gray-700 text-sm">Para campanhas publicitárias e remarketing</p>
                </div>
                <div>
                  <p className="font-bold text-black">TikTok</p>
                  <p className="text-gray-700 text-sm">Para publicidade na plataforma TikTok</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">{t('cookies.management.title')}</h2>
              <p className="text-gray-700 mb-4">
                Você pode controlar e/ou eliminar cookies conforme desejar. Pode eliminar todos os cookies que já estão no seu dispositivo e pode configurar a maioria dos navegadores para impedir que sejam colocados.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Como gerir cookies no seu navegador:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Chrome:</strong> Definições → Privacidade e Segurança → Cookies</li>
                <li><strong>Firefox:</strong> Opções → Privacidade e Segurança → Cookies</li>
                <li><strong>Safari:</strong> Preferências → Privacidade → Cookies</li>
                <li><strong>Edge:</strong> Definições → Privacidade → Cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">{t('cookies.consent.title')}</h2>
              <p className="text-gray-700 mb-4">
                Ao continuar a navegar no nosso website, você concorda com o uso de cookies conforme descrito nesta política. Pode retirar o seu consentimento a qualquer momento através das definições do seu navegador ou contactando-nos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">{t('cookies.contact.title')}</h2>
              <p className="text-gray-700 mb-4">
                Para questões sobre esta Política de Cookies:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Missão Design</strong></p>
                <p className="text-gray-700">Email: <a href="mailto:contato@missaodesign.com" className="text-blue-600 hover:underline">contato@missaodesign.com</a></p>
                <p className="text-gray-700">Telefone: +351 928 294 048</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
