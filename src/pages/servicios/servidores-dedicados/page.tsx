
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function ServidoresDedicados() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://www.sysadminok.es/wp-content/uploads/2022/06/servicio-de-administracion-de-servidores.jpg')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6 leading-tight">
              Servidores Dedicados
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Infraestructura dedicada, cloud híbrido y migración de hosting profesional
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
                Servidores Dedicados, Cloud & Migración de Hosting
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Proporcionamos soluciones de hosting de alto rendimiento con servidores dedicados, arquitecturas cloud híbridas y servicios de migración sin tiempo de inactividad. Infraestructura escalable y segura para aplicaciones críticas.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-server-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Servidores dedicados de alto rendimiento</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-cloud-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Arquitecturas cloud híbridas</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-download-cloud-2-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Migración sin tiempo de inactividad</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-shield-check-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Backup automático y redundancia</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20data%20center%20with%20dedicated%20servers%2C%20cloud%20infrastructure%2C%20and%20network%20equipment%20in%20a%20professional%20server%20room%20with%20purple%20and%20yellow%20lighting%2C%20high-tech%20hosting%20environment%20with%20monitoring%20displays&width=600&height=400&seq=servers1&orientation=landscape"
                alt="Dedicated Servers Data Center"
                className="w-full h-96 object-cover object-top rounded-lg"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-hard-drive-2-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Servidores Bare Metal</h3>
              <p className="text-gray-300">Hardware dedicado con configuraciones personalizadas para máximo rendimiento.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-cloud-off-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Cloud Híbrido</h3>
              <p className="text-gray-300">Combinación óptima de recursos on-premise y cloud público.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-exchange-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Migración de Hosting</h3>
              <p className="text-gray-300">Transferencia segura de aplicaciones y datos sin interrupciones.</p>
            </div>
          </div>

          {/* Specifications Section */}
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 p-12 rounded-lg border border-purple-700/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Especificaciones Técnicas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <i className="ri-cpu-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">CPU</h4>
                <p className="text-gray-300 text-sm">Intel Xeon/AMD EPYC hasta 64 cores</p>
              </div>
              <div className="text-center">
                <i className="ri-database-2-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">RAM</h4>
                <p className="text-gray-300 text-sm">Hasta 1TB DDR4/DDR5 ECC</p>
              </div>
              <div className="text-center">
                <i className="ri-hard-drive-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Storage</h4>
                <p className="text-gray-300 text-sm">NVMe SSD, RAID configuraciones</p>
              </div>
              <div className="text-center">
                <i className="ri-wifi-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Network</h4>
                <p className="text-gray-300 text-sm">10Gbps dedicado, redundancia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
