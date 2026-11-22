
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function ContentMarketing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Content%20marketing%20strategy%20workspace%20with%20articles%2C%20ebooks%2C%20whitepapers%2C%20SEO%20analytics%2C%20buyer%20persona%20research%2C%20content%20calendar%20planning%2C%20and%20digital%20marketing%20tools%20in%20purple%20and%20yellow%20tech%20aesthetic&width=1920&height=800&seq=content-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight">
            Content Marketing
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Creación de Valor Estratégico. Artículos, e-books y whitepapers alineados a estrategia SEO y buyer persona para generar leads cualificados.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-7xl mx-auto">
          
          {/* Introducción */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
              📝 Estrategia de Contenido de Alto Valor
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Desarrollamos contenido estratégico que educa, informa y convierte. Cada pieza está optimizada para SEO, diseñada para su buyer persona específico y alineada con el customer journey para maximizar la generación de leads y autoridad de marca.
            </p>
          </div>

          {/* Servicios Principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-article-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Artículos SEO</h3>
              <p className="text-gray-300 leading-relaxed">
                Contenido optimizado para motores de búsqueda con investigación de keywords y estructura semántica avanzada.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-book-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">E-books y Guías</h3>
              <p className="text-gray-300 leading-relaxed">
                Recursos descargables de alto valor para captura de leads y posicionamiento como experto en la industria.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-file-text-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Whitepapers</h3>
              <p className="text-gray-300 leading-relaxed">
                Documentos técnicos especializados para audiencias B2B y decisores de compra en sectores específicos.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-user-heart-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Buyer Persona Research</h3>
              <p className="text-gray-300 leading-relaxed">
                Investigación profunda de audiencia objetivo para crear contenido que resuene con sus necesidades específicas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-calendar-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Calendario Editorial</h3>
              <p className="text-gray-300 leading-relaxed">
                Planificación estratégica de contenido alineada con eventos de industria y ciclos de compra.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-line-chart-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Analytics y Optimización</h3>
              <p className="text-gray-300 leading-relaxed">
                Medición de performance, análisis de engagement y optimización continua basada en datos.
              </p>
            </div>
          </div>

          {/* Tipos de Contenido */}
          <div className="bg-gradient-to-r from-purple-900/20 to-gray-900/20 p-12 rounded-3xl border border-purple-500/20 mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Tipos de Contenido que Creamos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Contenido Educativo</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Tutoriales y guías paso a paso</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Artículos de tendencias de industria</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Comparativas de productos/servicios</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Estudios de caso detallados</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Contenido de Conversión</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Landing pages optimizadas</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Email marketing sequences</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Contenido para nurturing de leads</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Testimonios y casos de éxito</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Proceso de Creación */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Proceso de Creación de Contenido</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">1</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Investigación</h4>
                <p className="text-gray-300">Análisis de audiencia, keywords y competencia para definir temas relevantes.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">2</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Planificación</h4>
                <p className="text-gray-300">Desarrollo de calendario editorial y estructura de contenido optimizada.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">3</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Creación</h4>
                <p className="text-gray-300">Redacción profesional con optimización SEO y diseño visual atractivo.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">4</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Distribución</h4>
                <p className="text-gray-300">Publicación estratégica y promoción en canales relevantes.</p>
              </div>
            </div>
          </div>

          {/* Métricas de Éxito */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Métricas que Medimos</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gray-900/50 p-6 rounded-xl text-center border border-purple-500/20">
                <i className="ri-eye-line text-4xl text-yellow-400 mb-3"></i>
                <p className="text-white font-semibold">Tráfico Orgánico</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl text-center border border-purple-500/20">
                <i className="ri-time-line text-4xl text-yellow-400 mb-3"></i>
                <p className="text-white font-semibold">Tiempo en Página</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl text-center border border-purple-500/20">
                <i className="ri-user-add-line text-4xl text-yellow-400 mb-3"></i>
                <p className="text-white font-semibold">Generación de Leads</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl text-center border border-purple-500/20">
                <i className="ri-share-line text-4xl text-yellow-400 mb-3"></i>
                <p className="text-white font-semibold">Shares Sociales</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-8">
              ¿Listo para crear contenido que genere leads y posicione su marca como autoridad?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacto"
                className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
              >
                Crear Estrategia de Contenido
              </Link>
              <Link 
                to="/casos-de-exito"
                className="border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all whitespace-nowrap"
              >
                Ver Resultados
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
