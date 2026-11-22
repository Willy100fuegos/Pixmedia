
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function PruebasPenetracion() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://www.bernanetwork.com/img/20230505_6454e7b3ba893.jpg')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6 leading-tight">
              Pruebas de Penetración
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Auditorías de seguridad exhaustivas que identifican vulnerabilidades antes que los atacantes
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
                Pentesting Profesional y Auditorías de Seguridad
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Nuestras pruebas de penetración simulan ataques reales para identificar vulnerabilidades críticas en su infraestructura, aplicaciones web y redes. Utilizamos metodologías reconocidas internacionalmente como OWASP, NIST y PTES.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-shield-check-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Pentesting de aplicaciones web y móviles</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-wifi-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Auditorías de redes e infraestructura</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-user-settings-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Ingeniería social y phishing controlado</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-file-shield-2-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Reportes ejecutivos y técnicos detallados</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Cybersecurity%20professional%20conducting%20penetration%20testing%20on%20multiple%20computer%20screens%20showing%20code%20and%20security%20analysis%20in%20a%20dark%20high-tech%20environment%20with%20purple%20and%20yellow%20accent%20lighting%2C%20modern%20security%20operations%20center%20atmosphere&width=600&height=400&seq=pentest1&orientation=landscape"
                alt="Pentesting Professional"
                className="w-full h-96 object-cover object-top rounded-lg"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-bug-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Pentesting Web</h3>
              <p className="text-gray-300">Identificación de vulnerabilidades OWASP Top 10, inyecciones SQL, XSS y fallas de autenticación.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-smartphone-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Pentesting Móvil</h3>
              <p className="text-gray-300">Análisis de seguridad en aplicaciones iOS y Android, incluyendo almacenamiento y comunicaciones.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-server-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Pentesting Infraestructura</h3>
              <p className="text-gray-300">Evaluación de servidores, redes internas, Active Directory y servicios críticos.</p>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 p-12 rounded-lg border border-purple-700/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Metodología de Pentesting</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">1</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Reconocimiento</h4>
                <p className="text-gray-300 text-sm">Recopilación de información y mapeo de superficie de ataque</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">2</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Escaneo</h4>
                <p className="text-gray-300 text-sm">Identificación de servicios, puertos y tecnologías vulnerables</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">3</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Explotación</h4>
                <p className="text-gray-300 text-sm">Pruebas controladas de vulnerabilidades identificadas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">4</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Reporte</h4>
                <p className="text-gray-300 text-sm">Documentación detallada con recomendaciones de remediación</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
