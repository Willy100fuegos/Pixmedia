import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function GoratrackCaseStudy() {
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
                  PLATAFORMA WEB
                </span>
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                  TRACKING GPS
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black text-yellow-400 mb-6 leading-tight">
                Goratrack
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Plataforma Web Avanzada de Rastreo GPS con Monitoreo en Tiempo Real, Geofencing Inteligente y Reportes Analíticos. Sistema integral de gestión vehicular empresarial.
              </p>
              
              <div className="bg-gradient-to-r from-purple-600/20 to-yellow-400/20 p-6 rounded-2xl border border-purple-500/30">
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-400 mb-2">98%</div>
                  <div className="text-gray-300 font-semibold">Precisión en Rastreo GPS</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20GPS%20tracking%20dashboard%20interface%20with%20real-time%20vehicle%20monitoring%2C%20dark%20theme%20with%20purple%20and%20yellow%20accents%2C%20multiple%20vehicle%20markers%20on%20map%2C%20analytics%20charts%2C%20professional%20web%20platform%20design%2C%20high-tech%20appearance%2C%20clean%20UI%20elements&width=600&height=400&seq=goratrack-hero&orientation=landscape"
                  alt="Goratrack - Plataforma de Rastreo GPS"
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
              Desarrollar una plataforma web robusta para rastreo GPS que permitiera a las empresas 
              monitorear sus flotas vehiculares en tiempo real, con funcionalidades avanzadas de 
              geofencing, alertas automáticas y reportes detallados para optimizar la gestión operativa.
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
                icon: "ri-map-pin-line",
                title: "Rastreo GPS en Tiempo Real",
                description: "Sistema de monitoreo continuo con actualización cada 30 segundos, visualización en mapas interactivos y historial de rutas completo."
              },
              {
                icon: "ri-shield-check-line",
                title: "Geofencing Inteligente",
                description: "Creación de zonas virtuales personalizadas con alertas automáticas de entrada y salida, optimizando la seguridad vehicular."
              },
              {
                icon: "ri-bar-chart-line",
                title: "Reportes Analíticos",
                description: "Dashboard con métricas de rendimiento, consumo de combustible, velocidades y análisis de comportamiento de conductores."
              },
              {
                icon: "ri-notification-line",
                title: "Sistema de Alertas",
                description: "Notificaciones instantáneas por SMS y email para eventos críticos como exceso de velocidad, pánico y mantenimiento."
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

      {/* Results Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-yellow-400 mb-16 text-center">
            Resultados Obtenidos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                metric: "98%",
                label: "Precisión en Rastreo GPS",
                description: "Monitoreo exacto en tiempo real"
              },
              {
                metric: "85%",
                label: "Reducción en Costos Operativos",
                description: "Optimización de rutas y combustible"
              },
              {
                metric: "24/7",
                label: "Monitoreo Continuo",
                description: "Vigilancia ininterrumpida de flota"
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
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Transformación Digital Vehicular</h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Goratrack ha revolucionado la gestión de flotas vehiculares, proporcionando una plataforma 
              integral que combina tecnología GPS avanzada con análisis inteligente, permitiendo a las 
              empresas optimizar sus operaciones y reducir significativamente sus costos operativos.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-yellow-400 mb-16 text-center">
            Características Técnicas
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "ri-smartphone-line",
                title: "App Móvil",
                description: "Aplicación nativa para iOS y Android"
              },
              {
                icon: "ri-cloud-line",
                title: "Cloud Computing",
                description: "Infraestructura escalable en la nube"
              },
              {
                icon: "ri-database-line",
                title: "Big Data",
                description: "Procesamiento de grandes volúmenes de datos"
              },
              {
                icon: "ri-lock-line",
                title: "Seguridad SSL",
                description: "Encriptación de datos de extremo a extremo"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/20 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${feature.icon} text-xl text-black`}></i>
                </div>
                <h3 className="text-lg font-bold text-yellow-400 mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
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
            "Goratrack ha transformado completamente nuestra gestión de flota. La precisión del rastreo 
            y la facilidad de uso de la plataforma nos han permitido optimizar rutas y reducir costos 
            operativos de manera significativa."
          </blockquote>
          <div className="text-yellow-400 font-semibold text-xl">
            Director de Operaciones - Cliente Empresarial
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
            ¿Necesita una Plataforma de Rastreo?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Desarrollamos soluciones de rastreo GPS personalizadas para optimizar 
            la gestión de su flota vehicular y reducir costos operativos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5219211453200"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
            >
              <i className="ri-whatsapp-line mr-2"></i>
              Solicitar Cotización
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