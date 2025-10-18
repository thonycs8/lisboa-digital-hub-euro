import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {t('privacy.title')}
          </h1>
          <p className="text-gray-600 mb-8">
            {t('privacy.lastUpdated')}: 18 de Outubro de 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">{t('privacy.intro.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('privacy.intro.description')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">{t('privacy.dataCollection.title')}</h2>
              <p className="text-gray-700 mb-4">{t('privacy.dataCollection.description')}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Informações de Identificação Pessoal:</strong> Nome, email, telefone, endereço</li>
                <li><strong>Informações da Empresa:</strong> Nome da empresa, NIPC/NIF, setor de atividade</li>
                <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas</li>
                <li><strong>Cookies e Tecnologias Similares:</strong> Conforme descrito na nossa Política de Cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">{t('privacy.dataUsage.title')}</h2>
              <p className="text-gray-700 mb-4">{t('privacy.dataUsage.description')}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Fornecer, manter e melhorar nossos serviços</li>
                <li>Processar transações e enviar notificações relacionadas</li>
                <li>Comunicar ofertas, atualizações e conteúdo promocional</li>
                <li>Personalizar sua experiência e recomendar serviços relevantes</li>
                <li>Monitorar e analisar tendências, uso e atividades</li>
                <li>Detectar, prevenir e resolver problemas técnicos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">{t('privacy.gdpr.title')}</h2>
              <p className="text-gray-700 mb-4">{t('privacy.gdpr.description')}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Direito de Acesso:</strong> Pode solicitar cópias dos seus dados pessoais</li>
                <li><strong>Direito de Retificação:</strong> Pode solicitar a correção de informações imprecisas</li>
                <li><strong>Direito ao Apagamento:</strong> Pode solicitar a exclusão dos seus dados pessoais</li>
                <li><strong>Direito de Restrição:</strong> Pode solicitar a limitação do processamento</li>
                <li><strong>Direito à Portabilidade:</strong> Pode solicitar a transferência dos seus dados</li>
                <li><strong>Direito de Oposição:</strong> Pode opor-se ao processamento dos seus dados</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Para exercer qualquer destes direitos, contacte-nos através de: <a href="mailto:contato@missaodesign.com" className="text-blue-600 hover:underline">contato@missaodesign.com</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">{t('privacy.dataSecurity.title')}</h2>
              <p className="text-gray-700 mb-4">
                Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados pessoais, incluindo:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Criptografia SSL/TLS para transmissão de dados</li>
                <li>Armazenamento seguro em servidores protegidos</li>
                <li>Controle de acesso restrito aos dados</li>
                <li>Monitorização regular de segurança</li>
                <li>Formação de equipe sobre proteção de dados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">{t('privacy.dataSharing.title')}</h2>
              <p className="text-gray-700 mb-4">
                Não vendemos os seus dados pessoais. Podemos partilhar informações apenas com:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Prestadores de Serviços:</strong> Empresas que nos ajudam a operar o negócio (hosting, analytics, email marketing)</li>
                <li><strong>Parceiros de Negócios:</strong> Com o seu consentimento explícito</li>
                <li><strong>Requisitos Legais:</strong> Quando exigido por lei ou ordem judicial</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">{t('privacy.retention.title')}</h2>
              <p className="text-gray-700 mb-4">
                Retemos os seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">{t('privacy.contact.title')}</h2>
              <p className="text-gray-700 mb-4">
                Para questões sobre esta Política de Privacidade ou sobre os seus dados pessoais:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Missão Design</strong></p>
                <p className="text-gray-700">Av D Afonso Henriques n7 3dto</p>
                <p className="text-gray-700">2800-011 Almada, Portugal</p>
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

export default PrivacyPolicy;
