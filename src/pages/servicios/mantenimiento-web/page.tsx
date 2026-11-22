
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function MantenimientoWeb() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://pixmedia.b-cdn.net/willy100fuegos_A_realistic_photograph_of_a_small_business_offic_06512fff-da89-4ffc-9bbd-5bd893116024%5B1%5D.png')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6 leading-tight">
              Mantenimiento Web
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Mantenimiento integral de sitios web incluyendo WordPress y plataformas personalizadas
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
                Mantenimiento Web Integral
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Mantenemos su sitio web actualizado, seguro y funcionando óptimamente. Servicios especializados para WordPress, e-commerce y aplicaciones web personalizadas con actualizaciones regulares, backup automático y monitoreo de seguridad.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-refresh-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Actualizaciones automáticas de CMS y plugins</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-shield-check-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Monitoreo de seguridad y malware</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-save-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Backup automático diario</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-speed-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Optimización de rendimiento continua</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Web%20developer%20performing%20website%20maintenance%20on%20multiple%20screens%20showing%20WordPress%20dashboard%2C%20security%20monitoring%2C%20and%20performance%20optimization%20tools%20in%20a%20modern%20office%20with%20purple%20and%20yellow%20lighting&width=600&height=400&seq=webmaint1&orientation=landscape"
                alt="Website Maintenance"
                className="w-full h-96 object-cover object-top rounded-lg"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-wordpress-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">WordPress Especializado</h3>
              <p className="text-gray-300">Mantenimiento completo de WordPress: actualizaciones, plugins, temas y optimización.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-shopping-cart-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">E-commerce</h3>
              <p className="text-gray-300">Mantenimiento de tiendas online: WooCommerce, Shopify, Magento y plataformas custom.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-code-s-slash-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Aplicaciones Custom</h3>
              <p className="text-gray-300">Mantenimiento de aplicaciones web personalizadas y sistemas a medida.</p>
            </div>
          </div>

          {/* Maintenance Process */}
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 p-12 rounded-lg border border-purple-700/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Proceso de Mantenimiento</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <i className="ri-search-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Auditoría</h4>
                <p className="text-gray-300 text-sm">Análisis completo del estado actual del sitio</p>
              </div>
              <div className="text-center">
                <i className="ri-calendar-check-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Planificación</h4>
                <p className="text-gray-300 text-sm">Cronograma de actualizaciones y mantenimiento</p>
              </div>
              <div className="text-center">
                <i className="ri-tools-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Ejecución</h4>
                <p className="text-gray-300 text-sm">Implementación de mejoras y actualizaciones</p>
              </div>
              <div className="text-center">
                <i className="ri-file-list-3-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Reporte</h4>
                <p className="text-gray-300 text-sm">Informe detallado de actividades realizadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
