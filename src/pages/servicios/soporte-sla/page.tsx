
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function SoporteSLA() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://www.doonamis.com/wp-content/uploads/2022/10/Software-de-Mantenimiento-CMMS-1024x536-1.jpg')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6 leading-tight">
              Soporte SLA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Planes de soporte recurrente con acuerdos de nivel de servicio garantizados
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Planes de Soporte Recurrente y SLA
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Ofrecemos planes de soporte técnico integral con acuerdos de nivel de servicio (SLA) que garantizan tiempos de respuesta, disponibilidad y resolución de incidencias. Soporte proactivo 24/7 para mantener sus sistemas funcionando óptimamente.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-customer-service-2-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Soporte técnico 24/7/365</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-time-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Tiempos de respuesta garantizados</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-tools-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Mantenimiento preventivo programado</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-line-chart-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Monitoreo proactivo de sistemas</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20IT%20support%20team%20working%20in%20a%20modern%20help%20desk%20environment%20with%20multiple%20monitors%20showing%20system%20status%2C%20support%20tickets%2C%20and%20SLA%20metrics%20in%20dark%20setting%20with%20purple%20and%20yellow%20accents&width=600&height=400&seq=support1&orientation=landscape"
                alt="IT Support Team"
                className="w-full h-96 object-cover object-top rounded-lg"
              />
            </div>
          </div>

          {/* SLA Plans */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Básico</h3>
                <div className="text-yellow-400 text-3xl font-bold">8x5</div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <i className="ri-check-line text-yellow-400"></i>
                  <span>Horario laboral (8AM-6PM)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="ri-check-line text-yellow-400"></i>
                  <span>Respuesta en 4 horas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="ri-check-line text-yellow-400"></i>
                  <span>Soporte por email y teléfono</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="ri-check-line text-yellow-400"></i>
                  <span>Mantenimiento mensual</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-400/20 to-purple-800/30 p-8 rounded-lg border border-yellow-400/50">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Profesional</h3>
                <div className="text-yellow-400 text-3xl font-bold">24x7</div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <i className="ri-check-line text-yellow-400"></i>
                  <span>Soporte 24/7</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="ri-check-line text-yellow-400"></i>
                  <span>Respuesta en 1 hora</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="ri-check-line text-yellow-400"></i>
                  <span>Acceso remoto prioritario</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="ri-check-line text-yellow-400"></i>
                  <span>Monitoreo proactivo</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <div className="text-yellow-400 text-3xl font-bold">Premium</div>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <i className="ri-check-line text-yellow-400"></i>
                  <span>Ingeniero dedicado</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="ri-check-line text-yellow-400"></i>
                  <span>Respuesta en 15 minutos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="ri-check-line text-yellow-400"></i>
                  <span>Soporte on-site disponible</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="ri-check-line text-yellow-400"></i>
                  <span>SLA personalizado</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SLA Metrics */}
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 p-12 rounded-lg border border-purple-700/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Métricas de SLA Garantizadas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <i className="ri-time-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Tiempo de Respuesta</h4>
                <p className="text-gray-300 text-sm">15 min - 4 horas según plan</p>
              </div>
              <div className="text-center">
                <i className="ri-check-double-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Disponibilidad</h4>
                <p className="text-gray-300 text-sm">99.9% uptime garantizado</p>
              </div>
              <div className="text-center">
                <i className="ri-tools-fill text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Resolución</h4>
                <p className="text-gray-300 text-sm">95% incidentes resueltos en primer contacto</p>
              </div>
              <div className="text-center">
                <i className="ri-customer-service-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Satisfacción</h4>
                <p className="text-gray-300 text-sm">98% satisfacción del cliente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
