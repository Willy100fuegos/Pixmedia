
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function OptimizacionProcesos() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://opticore360.es/wp-content/uploads/2024/07/iStock-1830042746-scaled-e1726234160843.jpg')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6 leading-tight">
              Optimización de Procesos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Optimización digital de procesos y automatización robótica para reducir costos operativos
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
                Optimización Digital de Procesos
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Analizamos y optimizamos sus procesos empresariales mediante mapeo detallado, identificación de ineficiencias y implementación de automatización robótica (RPA). Reducimos costos operativos y mejoramos la productividad significativamente.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-flow-chart text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Mapeo detallado de procesos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-search-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Identificación de ineficiencias</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-robot-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Automatización robótica (RPA)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-money-dollar-circle-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Reducción de costos operativos</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Business%20process%20optimization%20with%20workflow%20diagrams%2C%20automation%20systems%2C%20and%20efficiency%20metrics%20displayed%20on%20screens%20in%20a%20modern%20consulting%20office%20with%20purple%20and%20yellow%20lighting%2C%20professional%20process%20improvement%20environment&width=600&height=400&seq=process1&orientation=landscape"
                alt="Process Optimization"
                className="w-full h-96 object-cover object-top rounded-lg"
              />
            </div>
          </div>

          {/* Optimization Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-git-branch-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Mapeo de Procesos</h3>
              <p className="text-gray-300">Documentación visual de workflows actuales y identificación de cuellos de botella.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-settings-3-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">RPA Implementation</h3>
              <p className="text-gray-300">Automatización de tareas repetitivas con UiPath, Blue Prism y herramientas custom.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-line-chart-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">KPI Monitoring</h3>
              <p className="text-gray-300">Métricas de rendimiento y dashboards de seguimiento continuo.</p>
            </div>
          </div>

          {/* Methodology */}
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 p-12 rounded-lg border border-purple-700/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Metodología de Optimización</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">1</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Análisis</h4>
                <p className="text-gray-300 text-sm">Mapeo y documentación de procesos actuales</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">2</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Identificación</h4>
                <p className="text-gray-300 text-sm">Detección de ineficiencias y oportunidades</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">3</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Automatización</h4>
                <p className="text-gray-300 text-sm">Implementación de RPA y optimizaciones</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">4</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Monitoreo</h4>
                <p className="text-gray-300 text-sm">Seguimiento de KPIs y mejora continua</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
