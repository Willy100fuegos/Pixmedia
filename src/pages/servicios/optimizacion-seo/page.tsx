
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function OptimizacionSEO() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=SEO%20optimization%20workspace%20with%20Google%20Analytics%20dashboards%2C%20keyword%20research%20tools%2C%20technical%20SEO%20audits%2C%20link%20building%20strategies%2C%20and%20search%20engine%20ranking%20analytics%20in%20purple%20and%20yellow%20tech%20aesthetic&width=1920&height=800&seq=seo-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight">
            Optimización SEO
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Posicionamiento Orgánico Estratégico. Auditorías SEO técnicas, optimización de velocidad, Schema Markup y link building para dominar los resultados de búsqueda.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-7xl mx-auto">
          
          {/* Introducción */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
              🔍 SEO Técnico y Estratégico
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Implementamos estrategias SEO integrales que combinan optimización técnica, contenido de calidad y autoridad de dominio. Nuestro enfoque data-driven garantiza mejoras medibles en rankings, tráfico orgánico y conversiones.
            </p>
          </div>

          {/* Servicios Principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-search-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Auditoría SEO Técnica</h3>
              <p className="text-gray-300 leading-relaxed">
                Análisis completo de factores técnicos: crawlability, indexabilidad, estructura de URLs y errores críticos.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-key-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Investigación de Keywords</h3>
              <p className="text-gray-300 leading-relaxed">
                Análisis de palabras clave de alto valor, intención de búsqueda y oportunidades de ranking.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-speed-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Optimización de Velocidad</h3>
              <p className="text-gray-300 leading-relaxed">
                Mejora de Core Web Vitals, compresión de imágenes, minificación de código y optimización de servidor.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-code-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Schema Markup</h3>
              <p className="text-gray-300 leading-relaxed">
                Implementación de datos estructurados para rich snippets, featured snippets y mejor comprensión por buscadores.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-links-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Link Building</h3>
              <p className="text-gray-300 leading-relaxed">
                Estrategias de construcción de autoridad con backlinks de calidad, guest posting y relaciones públicas digitales.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-map-pin-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">SEO Local</h3>
              <p className="text-gray-300 leading-relaxed">
                Optimización para búsquedas locales, Google My Business, citations y reseñas para negocios físicos.
              </p>
            </div>
          </div>

          {/* Proceso de Optimización */}
          <div className="bg-gradient-to-r from-purple-900/20 to-gray-900/20 p-12 rounded-3xl border border-purple-500/20 mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Proceso de Optimización SEO</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">1</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Auditoría Inicial</h4>
                <p className="text-gray-300">Análisis completo del estado actual del sitio y identificación de oportunidades.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">2</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Estrategia</h4>
                <p className="text-gray-300">Desarrollo de plan de acción basado en objetivos y análisis competitivo.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">3</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Implementación</h4>
                <p className="text-gray-300">Ejecución de optimizaciones técnicas, contenido y link building.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">4</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Monitoreo</h4>
                <p className="text-gray-300">Seguimiento continuo de rankings, tráfico y ajustes estratégicos.</p>
              </div>
            </div>
          </div>

          {/* Factores de Ranking */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Factores de Ranking que Optimizamos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-purple-500/20">
                <h4 className="text-xl font-bold text-white mb-4">SEO Técnico</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Core Web Vitals (LCP, FID, CLS)</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Mobile-first indexing</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>HTTPS y seguridad del sitio</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Arquitectura de información</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>XML Sitemaps y robots.txt</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-purple-500/20">
                <h4 className="text-xl font-bold text-white mb-4">SEO de Contenido</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Optimización de títulos y meta descriptions</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Estructura de headings (H1-H6)</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Densidad y distribución de keywords</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Optimización de imágenes (alt text)</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Internal linking strategy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Herramientas que Utilizamos */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Herramientas Profesionales</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gray-900/50 p-6 rounded-xl text-center border border-purple-500/20">
                <i className="ri-google-line text-4xl text-yellow-400 mb-3"></i>
                <p className="text-white font-semibold">Google Analytics</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl text-center border border-purple-500/20">
                <i className="ri-search-line text-4xl text-yellow-400 mb-3"></i>
                <p className="text-white font-semibold">Search Console</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl text-center border border-purple-500/20">
                <i className="ri-bar-chart-line text-4xl text-yellow-400 mb-3"></i>
                <p className="text-white font-semibold">SEMrush</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl text-center border border-purple-500/20">
                <i className="ri-links-line text-4xl text-yellow-400 mb-3"></i>
                <p className="text-white font-semibold">Ahrefs</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-8">
              ¿Listo para dominar los resultados de búsqueda y aumentar su tráfico orgánico?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacto"
                className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
              >
                Solicitar Auditoría SEO
              </Link>
              <Link 
                to="/casos-de-exito"
                className="border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all whitespace-nowrap"
              >
                Ver Resultados SEO
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
