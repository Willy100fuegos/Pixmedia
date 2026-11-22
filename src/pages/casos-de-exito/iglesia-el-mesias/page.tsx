import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function IglesiaElMesiasPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Modern%20church%20website%20design%20with%20digital%20community%20connection%2C%20religious%20institution%20online%20presence%2C%20spiritual%20community%20engagement%2C%20purple%20and%20yellow%20branding%20colors&width=1920&height=800&seq=iglesia-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-yellow-400 mb-6 leading-tight">
                Iglesia el Mesías
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Portal Institucional y Estrategia SEO para conectar con la comunidad y atraer nuevos visitantes.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  CORPORATIVO
                </span>
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  OPTIMIZACIÓN
                </span>
              </div>
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-black p-6 rounded-2xl">
                <div className="text-2xl font-black mb-2">Aumento de Visitantes Online</div>
                <div className="text-4xl font-black">180%</div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://pixmedia.b-cdn.net/wp-content/uploads/2025/09/elmesias-760x750.png"
                alt="Portal Iglesia el Mesías"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-yellow-400 mb-8">
                El Desafío
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                La Iglesia el Mesías necesitaba una presencia digital sólida para conectar mejor con su comunidad existente y atraer nuevos visitantes. La institución religiosa carecía de una plataforma online que reflejara sus valores y facilitara la comunicación con los fieles.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                El objetivo era crear un portal institucional moderno que sirviera como punto de encuentro digital para la comunidad religiosa, con información actualizada sobre servicios, eventos y actividades espirituales.
              </p>
            </div>
            <div 
              className="h-96 bg-cover bg-center bg-no-repeat rounded-2xl"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Church%20community%20challenge%2C%20religious%20institution%20needing%20digital%20presence%2C%20spiritual%20community%20connection%20needs%2C%20modern%20church%20technology%20requirements&width=600&height=400&seq=iglesia-challenge&orientation=landscape')`
              }}
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
              Nuestra Solución
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Desarrollamos un portal institucional completo con estrategia SEO especializada para instituciones religiosas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-global-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Portal Institucional</h3>
              <p className="text-gray-400">
                Sitio web moderno y responsivo que refleja los valores y misión de la institución religiosa.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-search-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Estrategia SEO</h3>
              <p className="text-gray-400">
                Optimización especializada para instituciones religiosas con palabras clave relevantes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-community-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Conexión Comunitaria</h3>
              <p className="text-gray-400">
                Herramientas para fortalecer la comunicación y conexión con la comunidad religiosa.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-user-add-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Atracción de Visitantes</h3>
              <p className="text-gray-400">
                Sistema optimizado para atraer nuevos visitantes y fortalecer la comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
              Resultados Medibles
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              La implementación del portal institucional generó un impacto significativo en la conexión comunitaria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-black text-yellow-400 mb-4">180%</div>
              <div className="text-xl font-semibold text-white mb-2">Aumento de Visitantes Online</div>
              <div className="text-gray-400">Incremento significativo en visitas al sitio web</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-yellow-400 mb-4">95%</div>
              <div className="text-xl font-semibold text-white mb-2">Mejora en Engagement</div>
              <div className="text-gray-400">Mayor interacción de la comunidad online</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-yellow-400 mb-4">24/7</div>
              <div className="text-xl font-semibold text-white mb-2">Disponibilidad</div>
              <div className="text-gray-400">Acceso constante a información y recursos</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Características Implementadas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-check-line text-black text-sm"></i>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Información de Servicios</div>
                  <div className="text-gray-400 text-sm">Horarios, eventos y actividades actualizadas</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-check-line text-black text-sm"></i>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Recursos Espirituales</div>
                  <div className="text-gray-400 text-sm">Biblioteca digital de contenido religioso</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-check-line text-black text-sm"></i>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Formularios de Contacto</div>
                  <div className="text-gray-400 text-sm">Comunicación directa con la comunidad</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-check-line text-black text-sm"></i>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Optimización SEO</div>
                  <div className="text-gray-400 text-sm">Mejor visibilidad en búsquedas locales</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <i className="ri-double-quotes-l text-6xl text-yellow-400"></i>
          </div>
          <blockquote className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed">
            "El portal web ha transformado completamente nuestra conexión con la comunidad. Ahora tenemos una presencia digital sólida que refleja nuestros valores y nos permite llegar a más personas que buscan una comunidad espiritual."
          </blockquote>
          <div className="text-yellow-400 font-semibold text-lg">
            Pastor Principal - Iglesia el Mesías
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
            ¿Necesita una Presencia Digital para su Institución?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Desarrollamos portales institucionales que conectan comunidades y fortalecen la presencia digital de organizaciones religiosas y sociales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5219211453200"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all"
            >
              <i className="ri-whatsapp-line mr-2"></i>
              Consulta Gratuita
            </a>
            <Link 
              to="/casos-de-exito"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all"
            >
              Ver Más Casos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}