
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function EvaluacionTecnologica() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://pixmedia.b-cdn.net/a-futuristic-scene-in-a-contact-center-where-advan-glJ67HoSQ7O1HTvzCNO9Ww-3kyUAwT0Q4uNSheL5zHDTQ%5B1%5D.jpeg')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6 leading-tight">
              Evaluación Tecnológica
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Análisis de madurez tecnológica y hoja de ruta digital estratégica
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
                Evaluación de Madurez Tecnológica y Hoja de Ruta Digital
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Realizamos un análisis exhaustivo de su estado tecnológico actual, identificamos gaps críticos y diseñamos una hoja de ruta digital estratégica. Incluye evaluación de infraestructura, procesos, seguridad y planificación de inversión plurianual.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-search-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Análisis de estado actual de TI</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-gap-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Identificación de gaps tecnológicos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-road-map-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Hoja de ruta digital estratégica</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-money-dollar-circle-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Planificación de inversión plurianual</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Technology%20assessment%20consultant%20analyzing%20digital%20infrastructure%20maturity%20with%20charts%2C%20roadmaps%2C%20and%20strategic%20planning%20documents%20in%20a%20modern%20office%20environment%20with%20purple%20and%20yellow%20lighting%2C%20professional%20IT%20consulting%20atmosphere&width=600&height=400&seq=techeval1&orientation=landscape"
                alt="Technology Assessment"
                className="w-full h-96 object-cover object-top rounded-lg"
              />
            </div>
          </div>

          {/* Assessment Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-server-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Infraestructura</h3>
              <p className="text-gray-300">Evaluación de servidores, redes, cloud y capacidad de escalabilidad.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-shield-check-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Seguridad</h3>
              <p className="text-gray-300">Análisis de vulnerabilidades, compliance y postura de ciberseguridad.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-flow-chart text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Procesos</h3>
              <p className="text-gray-300">Evaluación de workflows, automatización y eficiencia operacional.</p>
            </div>
          </div>

          {/* Methodology */}
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 p-12 rounded-lg border border-purple-700/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Metodología de Evaluación</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">1</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Descubrimiento</h4>
                <p className="text-gray-300 text-sm">Inventario completo de activos tecnológicos</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">2</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Análisis</h4>
                <p className="text-gray-300 text-sm">Evaluación de madurez y benchmarking</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">3</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Estrategia</h4>
                <p className="text-gray-300 text-sm">Diseño de hoja de ruta y priorización</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">4</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Implementación</h4>
                <p className="text-gray-300 text-sm">Plan de ejecución y seguimiento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
