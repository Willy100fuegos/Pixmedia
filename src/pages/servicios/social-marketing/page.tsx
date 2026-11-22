
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function SocialMarketing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Professional%20social%20media%20marketing%20workspace%20with%20LinkedIn%20and%20Instagram%20analytics%2C%20community%20management%20tools%2C%20engagement%20metrics%2C%20content%20calendar%2C%20and%20social%20media%20strategy%20planning%20in%20purple%20and%20yellow%20tech%20aesthetic&width=1920&height=800&seq=social-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight">
            Social Marketing
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Gestión Profesional de Comunidades. Estrategias especializadas para LinkedIn e Instagram con análisis de interacción y crecimiento orgánico.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-7xl mx-auto">
          
          {/* Introducción */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
              📱 Estrategia Social Profesional
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Desarrollamos presencia social estratégica que genera engagement auténtico y conversiones. Nos especializamos en LinkedIn para B2B e Instagram para B2C, con enfoque en community building, contenido de valor y análisis de performance.
            </p>
          </div>

          {/* Plataformas Principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-900/30 to-gray-900/30 p-8 rounded-2xl border border-blue-500/20">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-linkedin-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">LinkedIn B2B Strategy</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Posicionamiento profesional, generación de leads B2B y networking estratégico.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center"><i className="ri-check-line text-blue-400 mr-3"></i>Optimización de perfil corporativo</li>
                <li className="flex items-center"><i className="ri-check-line text-blue-400 mr-3"></i>Content marketing profesional</li>
                <li className="flex items-center"><i className="ri-check-line text-blue-400 mr-3"></i>LinkedIn Ads y lead generation</li>
                <li className="flex items-center"><i className="ri-check-line text-blue-400 mr-3"></i>Networking y outreach estratégico</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-900/30 to-gray-900/30 p-8 rounded-2xl border border-pink-500/20">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-6">
                <i className="ri-instagram-fill text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Instagram B2C Growth</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Crecimiento orgánico, engagement auténtico y conversión de seguidores en clientes.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center"><i className="ri-check-line text-pink-400 mr-3"></i>Estrategia de contenido visual</li>
                <li className="flex items-center"><i className="ri-check-line text-pink-400 mr-3"></i>Stories y Reels optimizados</li>
                <li className="flex items-center"><i className="ri-check-line text-pink-400 mr-3"></i>Influencer partnerships</li>
                <li className="flex items-center"><i className="ri-check-line text-pink-400 mr-3"></i>Instagram Shopping integration</li>
              </ul>
            </div>
          </div>

          {/* Servicios Principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-group-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Community Management</h3>
              <p className="text-gray-300 leading-relaxed">
                Gestión diaria de comunidades, respuesta a comentarios y construcción de relaciones auténticas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-image-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Creación de Contenido</h3>
              <p className="text-gray-300 leading-relaxed">
                Diseño gráfico, fotografía profesional, videos y copy optimizado para cada plataforma.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-line-chart-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Analytics y Reporting</h3>
              <p className="text-gray-300 leading-relaxed">
                Análisis profundo de métricas, insights de audiencia y reportes de performance mensual.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-advertisement-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Social Media Ads</h3>
              <p className="text-gray-300 leading-relaxed">
                Campañas publicitarias optimizadas para conversión con targeting avanzado y A/B testing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-user-star-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Influencer Marketing</h3>
              <p className="text-gray-300 leading-relaxed">
                Identificación y gestión de colaboraciones con influencers relevantes para su nicho.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-customer-service-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Social Listening</h3>
              <p className="text-gray-300 leading-relaxed">
                Monitoreo de menciones de marca, análisis de sentimiento y gestión de reputación online.
              </p>
            </div>
          </div>

          {/* Estrategia de Contenido */}
          <div className="bg-gradient-to-r from-purple-900/20 to-gray-900/20 p-12 rounded-3xl border border-purple-500/20 mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Estrategia de Contenido Social</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-lightbulb-line text-2xl text-black"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Contenido Educativo</h4>
                <p className="text-gray-300">Tips, tutoriales y contenido de valor que posiciona como experto en la industria.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-heart-line text-2xl text-black"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Contenido Emocional</h4>
                <p className="text-gray-300">Historias, behind-the-scenes y contenido que genera conexión emocional con la audiencia.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shopping-cart-line text-2xl text-black"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Contenido Comercial</h4>
                <p className="text-gray-300">Promociones estratégicas, lanzamientos de productos y calls-to-action optimizados.</p>
              </div>
            </div>
          </div>

          {/* Métricas de Éxito */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Métricas que Optimizamos</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gray-900/50 p-6 rounded-xl text-center border border-purple-500/20">
                <i className="ri-heart-line text-4xl text-yellow-400 mb-3"></i>
                <p className="text-white font-semibold">Engagement Rate</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl text-center border border-purple-500/20">
                <i className="ri-user-add-line text-4xl text-yellow-400 mb-3"></i>
                <p className="text-white font-semibold">Follower Growth</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl text-center border border-purple-500/20">
                <i className="ri-eye-line text-4xl text-yellow-400 mb-3"></i>
                <p className="text-white font-semibold">Reach & Impressions</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl text-center border border-purple-500/20">
                <i className="ri-arrow-right-line text-4xl text-yellow-400 mb-3"></i>
                <p className="text-white font-semibold">Click-Through Rate</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-8">
              ¿Listo para construir una comunidad sólida y generar resultados reales en redes sociales?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacto"
                className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
              >
                Crear Estrategia Social
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
