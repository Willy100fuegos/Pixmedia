import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function MarketingDigital() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Digital%20marketing%20analytics%20dashboard%20with%20SEO%20metrics%2C%20Google%20Ads%20campaigns%2C%20social%20media%20performance%20charts%2C%20conversion%20rate%20optimization%20graphs%2C%20and%20marketing%20automation%20tools%20displayed%20on%20multiple%20screens%20in%20a%20modern%20marketing%20agency%20with%20purple%20and%20yellow%20lighting&width=1920&height=800&seq=marketing-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight">
            Marketing Digital
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Estrategias integrales de marketing digital, optimización para motores de búsqueda y mejora de tasas de conversión.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-4xl font-black text-yellow-400 mb-8">
                Crecimiento Digital Medible
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Desarrollamos estrategias de marketing digital basadas en datos que generan resultados tangibles. Desde SEO técnico hasta campañas de paid media, optimizamos cada punto de contacto para maximizar su ROI.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="ri-check-line text-yellow-400 text-xl mr-4"></i>
                  <span className="text-gray-300">SEO técnico y de contenido</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-yellow-400 text-xl mr-4"></i>
                  <span className="text-gray-300">Google Ads y Facebook Ads</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-yellow-400 text-xl mr-4"></i>
                  <span className="text-gray-300">Optimización de conversión (CRO)</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Servicios Incluidos</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="ri-search-line text-yellow-400 text-lg mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">SEO Integral:</strong>
                    <span className="text-gray-300"> Técnico, on-page y link building</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-advertisement-line text-yellow-400 text-lg mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">Paid Media:</strong>
                    <span className="text-gray-300"> Google, Facebook, LinkedIn Ads</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-line-chart-line text-yellow-400 text-lg mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">Analytics Avanzado:</strong>
                    <span className="text-gray-300"> GA4, GTM, reportes personalizados</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-mail-line text-yellow-400 text-lg mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">Email Marketing:</strong>
                    <span className="text-gray-300"> Automatización y segmentación</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Servicios Detallados */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Nuestros Servicios de Marketing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO */}
              <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-6 rounded-xl border border-purple-500/20">
                <i className="ri-search-2-line text-4xl text-yellow-400 mb-4"></i>
                <h4 className="text-xl font-bold text-white mb-3">SEO Técnico</h4>
                <p className="text-gray-300 mb-4">Optimización completa para motores de búsqueda</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Auditoría técnica completa</li>
                  <li>• Optimización Core Web Vitals</li>
                  <li>• Estrategia de contenido</li>
                  <li>• Link building de calidad</li>
                </ul>
              </div>

              {/* PPC */}
              <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-6 rounded-xl border border-purple-500/20">
                <i className="ri-megaphone-line text-4xl text-yellow-400 mb-4"></i>
                <h4 className="text-xl font-bold text-white mb-3">Publicidad PPC</h4>
                <p className="text-gray-300 mb-4">Campañas de pago por clic optimizadas</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Google Ads (Search, Display)</li>
                  <li>• Facebook e Instagram Ads</li>
                  <li>• LinkedIn Ads B2B</li>
                  <li>• Optimización de conversiones</li>
                </ul>
              </div>

              {/* CRO */}
              <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-6 rounded-xl border border-purple-500/20">
                <i className="ri-bar-chart-grouped-line text-4xl text-yellow-400 mb-4"></i>
                <h4 className="text-xl font-bold text-white mb-3">CRO</h4>
                <p className="text-gray-300 mb-4">Optimización de tasas de conversión</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• A/B testing avanzado</li>
                  <li>• Análisis de embudo</li>
                  <li>• Heatmaps y grabaciones</li>
                  <li>• Optimización UX/UI</li>
                </ul>
              </div>

              {/* Content Marketing */}
              <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-6 rounded-xl border border-purple-500/20">
                <i className="ri-article-line text-4xl text-yellow-400 mb-4"></i>
                <h4 className="text-xl font-bold text-white mb-3">Content Marketing</h4>
                <p className="text-gray-300 mb-4">Estrategia de contenido que convierte</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Estrategia de contenido</li>
                  <li>• Blog corporativo</li>
                  <li>• Contenido para redes sociales</li>
                  <li>• Video marketing</li>
                </ul>
              </div>

              {/* Email Marketing */}
              <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-6 rounded-xl border border-purple-500/20">
                <i className="ri-mail-send-line text-4xl text-yellow-400 mb-4"></i>
                <h4 className="text-xl font-bold text-white mb-3">Email Marketing</h4>
                <p className="text-gray-300 mb-4">Automatización y nurturing de leads</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Automatización de emails</li>
                  <li>• Segmentación avanzada</li>
                  <li>• Newsletters personalizados</li>
                  <li>• Lead nurturing</li>
                </ul>
              </div>

              {/* Analytics */}
              <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-6 rounded-xl border border-purple-500/20">
                <i className="ri-pie-chart-line text-4xl text-yellow-400 mb-4"></i>
                <h4 className="text-xl font-bold text-white mb-3">Analytics</h4>
                <p className="text-gray-300 mb-4">Medición y análisis de resultados</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Google Analytics 4</li>
                  <li>• Google Tag Manager</li>
                  <li>• Dashboards personalizados</li>
                  <li>• Reportes automatizados</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Proceso */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Nuestro Proceso de Marketing</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">1</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Auditoría</h4>
                <p className="text-gray-300 text-sm">Análisis completo de su presencia digital actual</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">2</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Estrategia</h4>
                <p className="text-gray-300 text-sm">Desarrollo de plan de marketing personalizado</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">3</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Ejecución</h4>
                <p className="text-gray-300 text-sm">Implementación de campañas y optimizaciones</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">4</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Optimización</h4>
                <p className="text-gray-300 text-sm">Mejora continua basada en datos</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-700/30 p-12 rounded-3xl border border-purple-500/20 text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">¿Listo para Acelerar su Crecimiento Digital?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Obtenga una auditoría gratuita de su presencia digital y descubra oportunidades de crecimiento inmediatas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacto"
                className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
              >
                Auditoría Digital Gratuita
              </Link>
              <Link 
                to="/casos-de-exito"
                className="border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all whitespace-nowrap"
              >
                Ver Resultados Obtenidos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}