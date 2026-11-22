
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function PortalesNoticias() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Modern%20digital%20news%20portal%20interface%20with%20multiple%20screens%20showing%20breaking%20news%2C%20article%20layouts%2C%20media%20content%20management%2C%20journalism%20workspace%20with%20purple%20and%20yellow%20tech%20lighting%2C%20high-traffic%20website%20design&width=1920&height=800&seq=news-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight">
            Portales de Noticias
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Soluciones Robustas para Medios Digitales. Plataformas de alto tráfico, monetización inteligente y gestión avanzada de audiencia.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-7xl mx-auto">
          
          {/* Introducción */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
              📰 Plataformas de Medios Digitales
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Desarrollamos portales de noticias escalables que soportan miles de visitantes simultáneos. Incluimos sistemas de gestión editorial, monetización publicitaria, SEO avanzado y herramientas de engagement para maximizar el alcance y rentabilidad.
            </p>
          </div>

          {/* Servicios Principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-newspaper-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">CMS Editorial Avanzado</h3>
              <p className="text-gray-300 leading-relaxed">
                Sistema de gestión de contenidos especializado para medios con flujos de trabajo editoriales y publicación programada.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-speed-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Alto Rendimiento</h3>
              <p className="text-gray-300 leading-relaxed">
                Arquitectura optimizada para soportar picos de tráfico, CDN global y caching inteligente.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-money-dollar-circle-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Monetización Inteligente</h3>
              <p className="text-gray-300 leading-relaxed">
                Integración con Google AdSense, programática y sistemas de suscripción premium.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-search-2-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">SEO para Medios</h3>
              <p className="text-gray-300 leading-relaxed">
                Optimización específica para noticias, Google News, AMP y structured data para máxima visibilidad.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-group-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Gestión de Audiencia</h3>
              <p className="text-gray-300 leading-relaxed">
                Analytics avanzados, segmentación de lectores y herramientas de engagement y fidelización.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-share-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Distribución Social</h3>
              <p className="text-gray-300 leading-relaxed">
                Automatización de publicación en redes sociales y optimización para viralización de contenido.
              </p>
            </div>
          </div>

          {/* Características Técnicas */}
          <div className="bg-gradient-to-r from-purple-900/20 to-gray-900/20 p-12 rounded-3xl border border-purple-500/20 mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Características Técnicas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Funcionalidades Editoriales</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Editor WYSIWYG avanzado</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Gestión de multimedia (fotos, videos)</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Sistema de categorías y tags</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Flujo de aprobación editorial</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Programación de publicaciones</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Rendimiento y Escalabilidad</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>CDN global para imágenes y videos</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Caching multinivel inteligente</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Optimización para móviles (AMP)</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Balanceador de carga automático</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Monitoreo 24/7 de uptime</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Modelos de Monetización */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Modelos de Monetización</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-purple-500/20 text-center">
                <i className="ri-advertisement-line text-4xl text-yellow-400 mb-4"></i>
                <h4 className="text-xl font-bold text-white mb-3">Publicidad Display</h4>
                <p className="text-gray-300">Integración con Google AdSense, programática y venta directa de espacios publicitarios.</p>
              </div>
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-purple-500/20 text-center">
                <i className="ri-vip-crown-line text-4xl text-yellow-400 mb-4"></i>
                <h4 className="text-xl font-bold text-white mb-3">Suscripciones Premium</h4>
                <p className="text-gray-300">Contenido exclusivo, newsletters premium y acceso sin publicidad para suscriptores.</p>
              </div>
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-purple-500/20 text-center">
                <i className="ri-article-line text-4xl text-yellow-400 mb-4"></i>
                <h4 className="text-xl font-bold text-white mb-3">Contenido Patrocinado</h4>
                <p className="text-gray-300">Plataforma para branded content y artículos patrocinados con etiquetado transparente.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-8">
              ¿Listo para lanzar su medio digital o modernizar su portal existente?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacto"
                className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
              >
                Desarrollar Portal
              </Link>
              <Link 
                to="/casos-de-exito"
                className="border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all whitespace-nowrap"
              >
                Ver Casos de Éxito
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
