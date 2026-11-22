
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function SeguridadPerimetral() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://www.mndelgolfo.com/blog/wp-content/uploads/2021/02/Sabes-como-instalar-camaras-de-circuito-cerrado1.jpg')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6 leading-tight">
              Seguridad Perimetral
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Protección física integral con CCTV, alarmas y control de acceso automatizado
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
                Seguridad Física y Automatización Inteligente
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Implementamos sistemas integrados de seguridad perimetral que combinan videovigilancia avanzada, sistemas de alarmas inteligentes y control de acceso biométrico. Protección completa para instalaciones críticas.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-camera-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">CCTV con análisis de video inteligente</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-alarm-warning-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Sistemas de alarmas perimetrales</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-fingerprint-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Control de acceso biométrico</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-smartphone-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Monitoreo remoto y notificaciones móviles</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20security%20perimeter%20system%20with%20CCTV%20cameras%2C%20access%20control%20panels%2C%20and%20alarm%20systems%20in%20a%20corporate%20building%20entrance%2C%20high-tech%20security%20infrastructure%20with%20purple%20and%20yellow%20accent%20lighting%2C%20professional%20installation&width=600&height=400&seq=perimeter1&orientation=landscape"
                alt="Perimeter Security System"
                className="w-full h-96 object-cover object-top rounded-lg"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-camera-2-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">CCTV Inteligente</h3>
              <p className="text-gray-300">Cámaras 4K con IA para detección de intrusos, reconocimiento facial y análisis comportamental.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-door-lock-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Control de Acceso</h3>
              <p className="text-gray-300">Sistemas biométricos, tarjetas RFID y códigos PIN con registro de eventos.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-sensor-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Sensores Perimetrales</h3>
              <p className="text-gray-300">Detectores de movimiento, barreras infrarrojas y sensores de vibración.</p>
            </div>
          </div>

          {/* Integration Section */}
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 p-12 rounded-lg border border-purple-700/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Integración y Automatización</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <i className="ri-brain-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">IA Integrada</h4>
                <p className="text-gray-300 text-sm">Análisis inteligente de patrones y comportamientos</p>
              </div>
              <div className="text-center">
                <i className="ri-notification-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Alertas Inmediatas</h4>
                <p className="text-gray-300 text-sm">Notificaciones en tiempo real vía móvil y email</p>
              </div>
              <div className="text-center">
                <i className="ri-cloud-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Cloud Storage</h4>
                <p className="text-gray-300 text-sm">Almacenamiento seguro en la nube con backup</p>
              </div>
              <div className="text-center">
                <i className="ri-remote-control-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Control Remoto</h4>
                <p className="text-gray-300 text-sm">Gestión completa desde cualquier dispositivo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
