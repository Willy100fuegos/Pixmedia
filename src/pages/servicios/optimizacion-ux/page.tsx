
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function OptimizacionUX() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6 leading-tight">
              Optimización UX
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Optimización de velocidad y experiencia de usuario para máxima conversión
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
                Optimización de Velocidad & Experiencia de Usuario
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Mejoramos la velocidad de carga, usabilidad y experiencia de usuario de su sitio web para aumentar conversiones y satisfacción del cliente. Análisis UX/UI, optimización técnica y testing A/B para resultados medibles.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-speed-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Optimización de velocidad de carga</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-user-heart-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Mejora de experiencia de usuario (UX)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-line-chart-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Testing A/B y análisis de conversión</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-smartphone-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Optimización móvil y responsive</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=UX%20designer%20analyzing%20website%20performance%20metrics%2C%20user%20experience%20optimization%2C%20and%20conversion%20rate%20data%20on%20multiple%20screens%20in%20a%20modern%20workspace%20with%20purple%20and%20yellow%20lighting%2C%20professional%20web%20optimization%20environment&width=600&height=400&seq=ux1&orientation=landscape"
                alt="UX Optimization"
                className="w-full h-96 object-cover object-top rounded-lg"
              />
            </div>
          </div>

          {/* Optimization Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-dashboard-3-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Performance</h3>
              <p className="text-gray-300">Optimización de Core Web Vitals, tiempo de carga y métricas de rendimiento.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-layout-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">UI/UX Design</h3>
              <p className="text-gray-300">Rediseño de interfaces para mejorar usabilidad y flujos de usuario.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-bar-chart-box-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Conversión</h3>
              <p className="text-gray-300">Optimización de embudos de conversión y call-to-actions efectivos.</p>
            </div>
          </div>

          {/* Metrics & Results */}
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 p-12 rounded-lg border border-purple-700/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Métricas de Optimización</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <i className="ri-timer-flash-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Velocidad</h4>
                <p className="text-gray-300 text-sm">&lt; 3 segundos tiempo de carga</p>
              </div>
              <div className="text-center">
                <i className="ri-smartphone-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Mobile Score</h4>
                <p className="text-gray-300 text-sm">&gt; 90 puntos PageSpeed Mobile</p>
              </div>
              <div className="text-center">
                <i className="ri-arrow-up-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Conversión</h4>
                <p className="text-gray-300 text-sm">+25% mejora promedio en conversiones</p>
              </div>
              <div className="text-center">
                <i className="ri-user-smile-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Satisfacción</h4>
                <p className="text-gray-300 text-sm">+40% mejora en métricas UX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
