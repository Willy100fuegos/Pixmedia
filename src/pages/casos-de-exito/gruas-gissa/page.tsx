import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function GruasGissaPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Industrial%20crane%20services%20company%20website%20showcase%2C%20heavy%20machinery%20operations%2C%20construction%20equipment%2C%20professional%20industrial%20setting%20with%20yellow%20and%20black%20corporate%20colors&width=1920&height=800&seq=gruas-gissa-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6 leading-tight">
                Grúas Gissa
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Estrategia Digital Integral para Grúas Industriales
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  CORPORATIVO
                </span>
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  OPTIMIZACIÓN
                </span>
              </div>
              <div className="bg-yellow-400/20 border border-yellow-400 rounded-2xl p-6">
                <h3 className="text-yellow-400 font-bold text-lg mb-2">Resultado Clave</h3>
                <p className="text-3xl font-black text-white">190% Captación de Clientes Locales</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://pixmedia.b-cdn.net/wp-content/uploads/2024/03/mockuper.png"
                alt="Grúas Gissa Website"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-black text-yellow-400 mb-8">El Desafío</h2>
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Grúas Gissa, empresa especializada en servicios de grúas industriales en Coatzacoalcos, 
                  necesitaba mayor visibilidad en su área geográfica para captar más clientela local y 
                  competir efectivamente en el mercado de servicios industriales pesados.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black text-yellow-400 mb-8">La Solución</h2>
              <div className="bg-purple-900/30 rounded-2xl p-8 border border-purple-500/30">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Desarrollamos un sitio web en WordPress optimizado con estrategia SEO local específica 
                  para Coatzacoalcos y áreas circundantes, incluyendo diseño responsivo y sistema de 
                  captación de leads para maximizar las oportunidades de negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Metrics */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-black text-yellow-400 mb-16">Resultados Medibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl p-8 border border-yellow-400/30">
              <div className="text-4xl font-black text-yellow-400 mb-4">190%</div>
              <div className="text-lg font-semibold text-white">Captación de Clientes Locales</div>
            </div>
            <div className="bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-2xl p-8 border border-purple-400/30">
              <div className="text-4xl font-black text-purple-400 mb-4">85%</div>
              <div className="text-lg font-semibold text-white">Mejora en Posicionamiento Regional</div>
            </div>
            <div className="bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-2xl p-8 border border-green-400/30">
              <div className="text-4xl font-black text-green-400 mb-4">95%</div>
              <div className="text-lg font-semibold text-white">Satisfacción del Cliente</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-yellow-400 mb-16 text-center">Características Implementadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-wordpress-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Sitio Web en WordPress</h3>
              <p className="text-gray-400">Plataforma robusta y fácil de gestionar para contenido empresarial.</p>
            </div>
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-search-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Estrategia SEO Local</h3>
              <p className="text-gray-400">Optimización específica para Coatzacoalcos y áreas circundantes.</p>
            </div>
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-smartphone-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Optimización para Móviles</h3>
              <p className="text-gray-400">Diseño responsivo para acceso desde cualquier dispositivo.</p>
            </div>
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-customer-service-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Captación de Leads</h3>
              <p className="text-gray-400">Sistema optimizado para generar oportunidades de negocio.</p>
            </div>
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-image-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Galería de Servicios</h3>
              <p className="text-gray-400">Showcase visual de equipos y servicios industriales.</p>
            </div>
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-map-pin-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cobertura Geográfica</h3>
              <p className="text-gray-400">Información clara de áreas de servicio y contacto local.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <div className="bg-black/30 rounded-3xl p-12 border border-purple-400/30">
            <div className="text-6xl text-yellow-400 mb-8">"</div>
            <p className="text-2xl text-white mb-8 leading-relaxed italic">
              Pixmedia transformó completamente nuestra presencia digital. Ahora somos la empresa de grúas 
              más visible en Coatzacoalcos y hemos incrementado significativamente nuestros clientes locales.
            </p>
            <div className="flex items-center justify-center">
              <div>
                <div className="text-xl font-bold text-yellow-400">Ing. Roberto Gissa</div>
                <div className="text-purple-300">Director General, Grúas Gissa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
            ¿Listo para Dominar Tu Mercado Local?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Únete a Grúas Gissa y otras empresas que han transformado su presencia digital con nuestras estrategias especializadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5219211453200"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all"
            >
              <i className="ri-whatsapp-line mr-2"></i>
              Iniciar Mi Proyecto
            </a>
            <Link 
              to="/casos-de-exito"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all"
            >
              Ver Más Casos de Éxito
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}