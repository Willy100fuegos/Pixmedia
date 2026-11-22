
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function CiberseguridadGestionada() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://pixmedia.b-cdn.net/willy100fuegos_Una_fotografia_ultrarrealista_de_un_sitio_web_pr_622cfa44-3a7d-453f-b7fe-826d8f3fe480%5B1%5D.webp')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6 leading-tight">
              Ciberseguridad Gestionada
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Protección 24/7 con monitoreo proactivo y respuesta inmediata ante amenazas
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
                Servicios de Ciberseguridad Gestionada (MSS)
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Nuestro SOC (Security Operations Center) proporciona monitoreo continuo, detección de amenazas avanzadas y respuesta inmediata a incidentes. Incluye limpieza de malware, gestión de vulnerabilidades y cumplimiento normativo.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-eye-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Monitoreo 24/7 con SOC especializado</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-virus-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Detección y limpieza de malware avanzado</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-alarm-warning-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Respuesta automática a incidentes</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-shield-check-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Gestión de vulnerabilidades y parches</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20cybersecurity%20operations%20center%20with%20multiple%20monitors%20displaying%20security%20dashboards%2C%20threat%20detection%20systems%2C%20and%20network%20monitoring%20in%20a%20dark%20environment%20with%20purple%20and%20yellow%20lighting%2C%20professional%20security%20analysts%20working&width=600&height=400&seq=soc1&orientation=landscape"
                alt="SOC Operations Center"
                className="w-full h-96 object-cover object-top rounded-lg"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-radar-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">SIEM/SOAR</h3>
              <p className="text-gray-300">Correlación de eventos de seguridad y orquestación automatizada de respuestas.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-bug-2-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Threat Hunting</h3>
              <p className="text-gray-300">Búsqueda proactiva de amenazas avanzadas y persistentes (APT).</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-first-aid-kit-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Incident Response</h3>
              <p className="text-gray-300">Respuesta rápida y contención de incidentes de seguridad críticos.</p>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 p-12 rounded-lg border border-purple-700/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Capacidades del SOC</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <i className="ri-time-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">24/7/365</h4>
                <p className="text-gray-300 text-sm">Monitoreo continuo sin interrupciones</p>
              </div>
              <div className="text-center">
                <i className="ri-speed-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">&lt; 15 min</h4>
                <p className="text-gray-300 text-sm">Tiempo de respuesta a incidentes críticos</p>
              </div>
              <div className="text-center">
                <i className="ri-team-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Expertos</h4>
                <p className="text-gray-300 text-sm">Analistas certificados en ciberseguridad</p>
              </div>
              <div className="text-center">
                <i className="ri-file-shield-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Compliance</h4>
                <p className="text-gray-300 text-sm">Cumplimiento ISO 27001, NIST, PCI-DSS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
