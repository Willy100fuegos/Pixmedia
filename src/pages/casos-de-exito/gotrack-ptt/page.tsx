import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function GotrackPttCaseStudy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 via-gray-900 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  DESARROLLO WEB
                </span>
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                  PLATAFORMA PTT
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black text-yellow-400 mb-6 leading-tight">
                GoTrack PTT
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Plataforma Web Avanzada de Push-to-Talk (PTT) con Comunicación Instantánea, Geolocalización en Tiempo Real y Sistema de Gestión de Flotas Vehiculares.
              </p>
              
              <div className="bg-gradient-to-r from-purple-600/20 to-yellow-400/20 p-6 rounded-2xl border border-purple-500/30">
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-400 mb-2">92%</div>
                  <div className="text-gray-300 font-semibold">Mejora en Comunicación de Equipos</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20PTT%20push%20to%20talk%20communication%20platform%20dashboard%20interface%20with%20real-time%20GPS%20tracking%2C%20fleet%20management%20system%2C%20modern%20dark%20UI%20design%2C%20communication%20devices%2C%20radio%20waves%20visualization%2C%20corporate%20technology%20solution%2C%20high-tech%20control%20center&width=600&height=400&seq=gotrack-ptt-hero&orientation=landscape"
                  alt="GoTrack PTT - Plataforma de Comunicación"
                  className="max-w-full h-auto rounded-2xl shadow-2xl border border-purple-500/30"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-yellow-400/20 rounded-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-yellow-400 mb-12 text-center">
            El Desafío
          </h2>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/50 p-8 rounded-2xl border border-purple-500/20">
            <p className="text-xl text-gray-300 leading-relaxed text-center">
              La empresa necesitaba una solución de comunicación instantánea tipo Push-to-Talk (PTT) 
              integrada con rastreo GPS en tiempo real para mejorar la coordinación de equipos de trabajo 
              en campo y optimizar la gestión de flotas vehiculares con comunicación eficiente.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-yellow-400 mb-16 text-center">
            Nuestra Solución
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "ri-radio-line",
                title: "Sistema PTT Avanzado",
                description: "Plataforma web de comunicación Push-to-Talk con canales privados, grupos de trabajo y comunicación instantánea de alta calidad."
              },
              {
                icon: "ri-map-pin-line",
                title: "Geolocalización en Tiempo Real",
                description: "Integración GPS para rastreo de ubicación en tiempo real de todos los usuarios conectados al sistema PTT."
              },
              {
                icon: "ri-dashboard-line",
                title: "Panel de Control Centralizado",
                description: "Dashboard administrativo para gestión de usuarios, canales de comunicación, historial de llamadas y reportes de actividad."
              },
              {
                icon: "ri-car-line",
                title: "Gestión de Flotas",
                description: "Sistema integrado para monitoreo de vehículos, rutas optimizadas y comunicación directa con conductores en campo."
              }
            ].map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-2xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${solution.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">{solution.title}</h3>
                <p className="text-gray-300 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-yellow-400 mb-16 text-center">
            Características Técnicas
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "ri-mic-line",
                title: "Audio HD",
                description: "Comunicación de alta definición con cancelación de ruido y compresión optimizada"
              },
              {
                icon: "ri-shield-check-line",
                title: "Seguridad Avanzada",
                description: "Encriptación end-to-end y protocolos de seguridad para comunicaciones confidenciales"
              },
              {
                icon: "ri-smartphone-line",
                title: "Multi-Dispositivo",
                description: "Compatible con navegadores web, tablets y dispositivos móviles para máxima flexibilidad"
              },
              {
                icon: "ri-history-line",
                title: "Historial Completo",
                description: "Registro detallado de todas las comunicaciones con timestamps y geolocalización"
              },
              {
                icon: "ri-notification-line",
                title: "Alertas Inteligentes",
                description: "Sistema de notificaciones automáticas para emergencias y eventos críticos"
              },
              {
                icon: "ri-cloud-line",
                title: "Infraestructura Cloud",
                description: "Plataforma escalable en la nube con alta disponibilidad y respaldo automático"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/20 to-gray-900/30 p-6 rounded-2xl border border-purple-500/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${feature.icon} text-xl text-black`}></i>
                </div>
                <h3 className="text-lg font-bold text-yellow-400 mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-yellow-400 mb-16 text-center">
            Resultados Obtenidos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                metric: "92%",
                label: "Mejora en Comunicación",
                description: "Eficiencia en coordinación de equipos"
              },
              {
                metric: "78%",
                label: "Reducción de Tiempos",
                description: "Optimización en respuesta a emergencias"
              },
              {
                metric: "100%",
                label: "Cobertura GPS",
                description: "Rastreo preciso en tiempo real"
              }
            ].map((result, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
                <div className="text-5xl font-black text-yellow-400 mb-4">{result.metric}</div>
                <div className="text-xl font-bold text-white mb-3">{result.label}</div>
                <div className="text-gray-400">{result.description}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-purple-600/20 to-yellow-400/20 p-8 rounded-2xl border border-purple-500/30 text-center">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Impacto Operacional</h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              La implementación de GoTrack PTT ha revolucionado la comunicación empresarial, 
              proporcionando una solución integral que combina comunicación instantánea con 
              rastreo GPS avanzado, mejorando significativamente la coordinación de equipos 
              y la eficiencia operativa en campo.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <i className="ri-double-quotes-l text-6xl text-yellow-400 opacity-50"></i>
          </div>
          <blockquote className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed">
            "GoTrack PTT ha transformado completamente nuestra operación. La comunicación 
            instantánea combinada con el rastreo GPS nos ha dado un control total sobre 
            nuestros equipos en campo. Es exactamente lo que necesitábamos."
          </blockquote>
          <div className="text-yellow-400 font-semibold text-xl">
            Director de Operaciones - Cliente GoTrack PTT
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
            ¿Necesita una Solución PTT Personalizada?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Desarrollamos plataformas de comunicación avanzadas adaptadas a las necesidades 
            específicas de su empresa con tecnología de vanguardia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5219211453200"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
            >
              <i className="ri-whatsapp-line mr-2"></i>
              Solicitar Consultoría PTT
            </a>
            <Link 
              to="/casos-de-exito"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all whitespace-nowrap"
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