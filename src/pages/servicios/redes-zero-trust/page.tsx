import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function RedesZeroTrust() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://onug.net/wp-content/uploads/2023/06/People-Get-Ready-Mapping-Zero-Trust-Principles-to-Zero-Day-Realities.jpg')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6 leading-tight">
              Redes Zero Trust
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Arquitectura de seguridad que verifica cada conexión antes de otorgar acceso
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
                Diseño e Implementación de Redes Zero Trust
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Implementamos el modelo de seguridad "nunca confíes, siempre verifica" que protege su red mediante autenticación continua, microsegmentación y acceso condicional basado en contexto y riesgo.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-shield-user-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Autenticación multifactor adaptativa</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-git-branch-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Microsegmentación de red</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-eye-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Monitoreo continuo de comportamiento</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-key-2-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Acceso privilegiado gestionado (PAM)</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Zero%20trust%20network%20architecture%20diagram%20showing%20secure%20connections%2C%20identity%20verification%2C%20and%20network%20segmentation%20with%20modern%20cybersecurity%20elements%20in%20dark%20environment%20with%20purple%20and%20yellow%20highlights%2C%20professional%20network%20security%20visualization&width=600&height=400&seq=zerotrust1&orientation=landscape"
                alt="Zero Trust Network Architecture"
                className="w-full h-96 object-cover object-top rounded-lg"
              />
            </div>
          </div>

          {/* Principles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-user-search-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Verificación de Identidad</h3>
              <p className="text-gray-300">Autenticación robusta de usuarios, dispositivos y aplicaciones antes del acceso.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-scissors-cut-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Microsegmentación</h3>
              <p className="text-gray-300">División de la red en zonas pequeñas para limitar el movimiento lateral de amenazas.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-lock-2-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Acceso Mínimo</h3>
              <p className="text-gray-300">Principio de menor privilegio aplicado a todos los recursos y conexiones.</p>
            </div>
          </div>

          {/* Implementation Process */}
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 p-12 rounded-lg border border-purple-700/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Proceso de Implementación</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">1</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Evaluación</h4>
                <p className="text-gray-300 text-sm">Análisis de infraestructura y flujos de datos actuales</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">2</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Diseño</h4>
                <p className="text-gray-300 text-sm">Arquitectura Zero Trust personalizada para su organización</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">3</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Implementación</h4>
                <p className="text-gray-300 text-sm">Despliegue gradual con mínima interrupción del negocio</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">4</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Optimización</h4>
                <p className="text-gray-300 text-sm">Monitoreo continuo y ajustes de políticas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
