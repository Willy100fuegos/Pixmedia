
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function IAEmpresas() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://www.esic.edu/sites/default/files/2024-04/inteligencia%20artificial%20marketing%20%282%29.jpeg')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6 leading-tight">
              IA para Empresas
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Integración de inteligencia artificial, chatbots y automatización empresarial
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
                Inteligencia Artificial para Empresas
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Implementamos soluciones de IA empresarial que incluyen chatbots inteligentes, automatización de procesos, integración de LLMs y sistemas de atención al cliente automatizados. Transformamos sus operaciones con tecnología de vanguardia.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-robot-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Chatbots inteligentes con LLMs</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-settings-3-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Automatización de procesos internos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-customer-service-2-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Bots de atención al cliente 24/7</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-brain-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Análisis predictivo y machine learning</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Artificial%20intelligence%20implementation%20in%20business%20environment%20with%20chatbots%2C%20automation%20systems%2C%20and%20machine%20learning%20interfaces%20on%20multiple%20screens%20in%20a%20modern%20office%20with%20purple%20and%20yellow%20lighting%2C%20professional%20AI%20consulting%20setup&width=600&height=400&seq=ai1&orientation=landscape"
                alt="AI for Business"
                className="w-full h-96 object-cover object-top rounded-lg"
              />
            </div>
          </div>

          {/* AI Solutions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-chat-3-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Chatbots Empresariales</h3>
              <p className="text-gray-300">Asistentes virtuales con GPT-4, Claude y modelos personalizados para atención al cliente.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-loop-right-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">RPA Inteligente</h3>
              <p className="text-gray-300">Automatización robótica de procesos con capacidades de IA y aprendizaje.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-line-chart-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Análisis Predictivo</h3>
              <p className="text-gray-300">Modelos de machine learning para predicción de tendencias y comportamientos.</p>
            </div>
          </div>

          {/* Implementation Process */}
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 p-12 rounded-lg border border-purple-700/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Proceso de Implementación de IA</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <i className="ri-search-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Análisis</h4>
                <p className="text-gray-300 text-sm">Identificación de casos de uso y ROI potencial</p>
              </div>
              <div className="text-center">
                <i className="ri-draft-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Diseño</h4>
                <p className="text-gray-300 text-sm">Arquitectura de IA personalizada para su negocio</p>
              </div>
              <div className="text-center">
                <i className="ri-code-s-slash-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Desarrollo</h4>
                <p className="text-gray-300 text-sm">Implementación y entrenamiento de modelos</p>
              </div>
              <div className="text-center">
                <i className="ri-rocket-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Despliegue</h4>
                <p className="text-gray-300 text-sm">Lanzamiento y optimización continua</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
