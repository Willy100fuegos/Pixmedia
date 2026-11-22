import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function OlimarCaseStudy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Corporate%20email%20migration%20success%2C%20professional%20business%20communication%2C%20Outlook%20configuration%2C%20email%20servers%2C%20IT%20consulting%20services%2C%20modern%20office%20technology&width=1920&height=800&seq=olimar-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://pixmedia.b-cdn.net/olimarwebn.png"
                  alt="OLIMAR Logo"
                  className="h-16 w-auto object-contain"
                />
                <div>
                  <h1 className="text-4xl md:text-6xl font-black text-yellow-400 leading-tight">
                    OLIMAR
                  </h1>
                  <p className="text-xl text-purple-300 font-semibold">
                    Consultoría IT de Correo Corporativo
                  </p>
                </div>
              </div>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Migración completa de correo corporativo y configuración profesional de Outlook para eliminar problemas de servicio y optimizar comunicaciones empresariales.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  CONSULTORÍA IT
                </span>
                <span className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-sm font-semibold">
                  MIGRACIÓN DE CORREO
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Resultados Clave</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Mejora en Comunicación:</span>
                  <span className="text-3xl font-bold text-yellow-400">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Problemas Eliminados:</span>
                  <span className="text-3xl font-bold text-green-400">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Tiempo de Migración:</span>
                  <span className="text-2xl font-bold text-blue-400">24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-yellow-400 mb-6">
                El Desafío
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                OLIMAR enfrentaba problemas constantes con su servicio de correo corporativo que afectaban significativamente la productividad empresarial y la comunicación interna.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="ri-close-circle-line text-red-400 text-xl mt-1"></i>
                  <span>Interrupciones frecuentes del servicio de correo</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-close-circle-line text-red-400 text-xl mt-1"></i>
                  <span>Configuración inadecuada de Outlook</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-close-circle-line text-red-400 text-xl mt-1"></i>
                  <span>Pérdida de productividad empresarial</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-close-circle-line text-red-400 text-xl mt-1"></i>
                  <span>Comunicación interna deficiente</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Email%20server%20problems%2C%20corporate%20communication%20issues%2C%20Outlook%20configuration%20errors%2C%20IT%20support%20challenges%2C%20business%20productivity%20loss%2C%20email%20downtime&width=600&height=400&seq=olimar-challenge&orientation=landscape"
                alt="Desafíos de Correo Corporativo"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20email%20migration%2C%20Outlook%20configuration%20success%2C%20corporate%20email%20setup%2C%20IT%20consulting%20solution%2C%20business%20communication%20optimization%2C%20email%20server%20management&width=600&height=400&seq=olimar-solution&orientation=landscape"
                alt="Solución de Migración de Correo"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-black text-yellow-400 mb-6">
                Nuestra Solución
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Implementamos una migración completa del sistema de correo corporativo con configuración profesional de Outlook para uso empresarial.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="ri-check-circle-line text-green-400 text-xl mt-1"></i>
                  <span>Migración completa de correo corporativo</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-circle-line text-green-400 text-xl mt-1"></i>
                  <span>Configuración profesional de Outlook</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-circle-line text-green-400 text-xl mt-1"></i>
                  <span>Eliminación total de problemas de servicio</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-circle-line text-green-400 text-xl mt-1"></i>
                  <span>Optimización de comunicaciones empresariales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-yellow-400 text-center mb-16">
            Características Técnicas Implementadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-mail-line text-black text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Migración de Correo</h3>
              <p className="text-gray-300">
                Transferencia completa de datos de correo sin pérdida de información histórica.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-settings-3-line text-black text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Configuración Outlook</h3>
              <p className="text-gray-300">
                Setup profesional de Microsoft Outlook para uso empresarial optimizado.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-black text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Seguridad Mejorada</h3>
              <p className="text-gray-300">
                Implementación de protocolos de seguridad avanzados para correo corporativo.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-speed-line text-black text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Optimización</h3>
              <p className="text-gray-300">
                Mejora significativa en velocidad y confiabilidad del servicio de correo.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-customer-service-2-line text-black text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Soporte Técnico</h3>
              <p className="text-gray-300">
                Asistencia técnica especializada durante y después de la migración.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-team-line text-black text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Capacitación</h3>
              <p className="text-gray-300">
                Entrenamiento del personal en el uso del nuevo sistema de correo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-yellow-400 text-center mb-16">
            Resultados Obtenidos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-yellow-400 mb-4">100%</div>
              <div className="text-xl font-semibold text-white mb-2">Mejora en Comunicación</div>
              <div className="text-gray-400">Eliminación total de problemas de correo</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-green-400 mb-4">0</div>
              <div className="text-xl font-semibold text-white mb-2">Interrupciones</div>
              <div className="text-gray-400">Servicio estable y confiable</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-blue-400 mb-4">24h</div>
              <div className="text-xl font-semibold text-white mb-2">Tiempo de Migración</div>
              <div className="text-gray-400">Proceso rápido y eficiente</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-purple-400 mb-4">100%</div>
              <div className="text-xl font-semibold text-white mb-2">Satisfacción</div>
              <div className="text-gray-400">Cliente completamente satisfecho</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-12 border border-purple-500/20">
            <div className="text-6xl text-yellow-400 mb-6">"</div>
            <blockquote className="text-2xl text-gray-200 mb-8 leading-relaxed italic">
              Pixmedia solucionó completamente nuestros problemas de correo corporativo. La migración fue perfecta y ahora tenemos un sistema de comunicación empresarial confiable y profesional.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">O</span>
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-white">Equipo OLIMAR</div>
                <div className="text-purple-300">Dirección General</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
            ¿Problemas con su Correo Corporativo?
          </h2>
          <p className="text-xl text-white mb-10 leading-relaxed">
            Migre a un sistema de correo confiable y profesional. Eliminamos los problemas de comunicación empresarial de forma definitiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5219211453200?text=Hola, necesito consultoría para migración de correo corporativo como el caso de OLIMAR"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
            >
              <i className="ri-whatsapp-line mr-2"></i>
              Migrar Mi Correo Corporativo
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