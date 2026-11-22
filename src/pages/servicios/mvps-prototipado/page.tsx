import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function MVPsPrototipado() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Rapid%20prototyping%20and%20MVP%20development%20workspace%20with%20wireframes%2C%20user%20interface%20mockups%2C%20agile%20development%20boards%2C%20and%20startup%20validation%20metrics%20displayed%20on%20multiple%20screens%20in%20a%20modern%20tech%20environment%20with%20purple%20and%20yellow%20lighting&width=1920&height=800&seq=mvp-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight">
            MVPs y Prototipado
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Validación rápida de ideas de negocio con productos mínimos viables y prototipos funcionales para testing de mercado.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-4xl font-black text-yellow-400 mb-8">
                De Idea a Producto en Semanas
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Transformamos sus ideas en productos funcionales rápidamente. Nuestro enfoque Lean Startup le permite validar conceptos, obtener feedback real de usuarios y minimizar riesgos antes de la inversión completa.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="ri-check-line text-yellow-400 text-xl mr-4"></i>
                  <span className="text-gray-300">Metodología Lean Startup</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-yellow-400 text-xl mr-4"></i>
                  <span className="text-gray-300">Prototipado en 2-4 semanas</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-yellow-400 text-xl mr-4"></i>
                  <span className="text-gray-300">Testing A/B y métricas de usuario</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Tipos de Prototipos</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="ri-pencil-ruler-line text-yellow-400 text-lg mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">Wireframes Interactivos:</strong>
                    <span className="text-gray-300"> Navegación y flujo de usuario</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-smartphone-line text-yellow-400 text-lg mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">Prototipos Funcionales:</strong>
                    <span className="text-gray-300"> Versiones básicas pero operativas</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-bar-chart-line text-yellow-400 text-lg mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">MVPs con Analytics:</strong>
                    <span className="text-gray-300"> Métricas de validación integradas</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-user-heart-line text-yellow-400 text-lg mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">Testing de Usuario:</strong>
                    <span className="text-gray-300"> Feedback real y mejoras iterativas</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Proceso Lean Startup */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Metodología Lean Startup</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-8 rounded-xl border border-purple-500/20 text-center">
                <i className="ri-lightbulb-line text-4xl text-yellow-400 mb-4"></i>
                <h4 className="text-xl font-bold text-white mb-3">Build</h4>
                <p className="text-gray-300">Construimos un MVP con las características mínimas necesarias para validar la hipótesis principal.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-8 rounded-xl border border-purple-500/20 text-center">
                <i className="ri-line-chart-line text-4xl text-yellow-400 mb-4"></i>
                <h4 className="text-xl font-bold text-white mb-3">Measure</h4>
                <p className="text-gray-300">Medimos el comportamiento real de los usuarios y recopilamos datos cuantitativos y cualitativos.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-8 rounded-xl border border-purple-500/20 text-center">
                <i className="ri-refresh-line text-4xl text-yellow-400 mb-4"></i>
                <h4 className="text-xl font-bold text-white mb-3">Learn</h4>
                <p className="text-gray-300">Aprendemos de los datos para decidir si pivotar, perseverar o escalar el producto.</p>
              </div>
            </div>
          </div>

          {/* Beneficios */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">¿Por Qué Empezar con un MVP?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-money-dollar-circle-line text-xl text-black"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Reducción de Riesgo</h4>
                    <p className="text-gray-300">Valide su idea antes de invertir grandes recursos en desarrollo completo.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-time-line text-xl text-black"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Time-to-Market Rápido</h4>
                    <p className="text-gray-300">Lance su producto al mercado en semanas, no meses.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-user-voice-line text-xl text-black"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Feedback Real</h4>
                    <p className="text-gray-300">Obtenga insights valiosos de usuarios reales desde el día uno.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-funds-line text-xl text-black"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Atracción de Inversores</h4>
                    <p className="text-gray-300">Demuestre tracción y viabilidad para facilitar la captación de fondos.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-route-line text-xl text-black"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Iteración Ágil</h4>
                    <p className="text-gray-300">Mejore continuamente basándose en datos reales de uso.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-rocket-line text-xl text-black"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Escalabilidad Planificada</h4>
                    <p className="text-gray-300">Construya una base sólida para el crecimiento futuro.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-700/30 p-12 rounded-3xl border border-purple-500/20 text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">¿Listo para Validar su Idea?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transforme su concepto en un MVP funcional en solo 2-4 semanas. Incluye análisis de mercado, prototipo funcional y plan de validación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacto"
                className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
              >
                Iniciar MVP en 2 Semanas
              </Link>
              <Link 
                to="/servicios/webapps-plataformas"
                className="border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all whitespace-nowrap"
              >
                Ver Desarrollo Completo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}