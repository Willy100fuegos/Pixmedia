
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function ProductosMinimoViables() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Modern%20software%20development%20team%20creating%20minimum%20viable%20product%20MVP%20with%20agile%20methodology%2C%20rapid%20prototyping%20on%20digital%20screens%2C%20startup%20environment%20with%20purple%20and%20yellow%20tech%20lighting%2C%20futuristic%20coding%20workspace&width=1920&height=800&seq=mvp-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight">
            Productos Mínimos Viables (MVP)
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Desarrollo Ágil y Prototipado Rápido. Validamos su idea de negocio con el mínimo riesgo y máximo aprendizaje.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-7xl mx-auto">
          
          {/* Introducción */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
              🚀 Prototipado Ágil y Validación de Mercado
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transformamos ideas en productos funcionales mediante metodologías ágiles. Desarrollamos MVPs que permiten validar hipótesis de negocio, obtener feedback temprano de usuarios y minimizar riesgos de inversión.
            </p>
          </div>

          {/* Servicios Principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Validación de Concepto</h3>
              <p className="text-gray-300 leading-relaxed">
                Análisis de viabilidad técnica y comercial. Definición de características core y roadmap de desarrollo.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-code-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Desarrollo Rápido</h3>
              <p className="text-gray-300 leading-relaxed">
                Implementación ágil con frameworks modernos. Entrega de prototipos funcionales en 4-8 semanas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-user-heart-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Testing de Usuario</h3>
              <p className="text-gray-300 leading-relaxed">
                Pruebas con usuarios reales, análisis de métricas de uso y optimización basada en feedback.
              </p>
            </div>
          </div>

          {/* Metodología */}
          <div className="bg-gradient-to-r from-purple-900/20 to-gray-900/20 p-12 rounded-3xl border border-purple-500/20 mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Metodología MVP</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">1</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Ideación</h4>
                <p className="text-gray-300">Definición de problema, hipótesis y características mínimas viables.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">2</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Prototipado</h4>
                <p className="text-gray-300">Desarrollo ágil del producto mínimo con funcionalidades core.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">3</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Validación</h4>
                <p className="text-gray-300">Testing con usuarios reales y recopilación de métricas clave.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">4</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Iteración</h4>
                <p className="text-gray-300">Mejoras basadas en feedback y preparación para escalamiento.</p>
              </div>
            </div>
          </div>

          {/* Tecnologías */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Stack Tecnológico</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gray-900/50 p-6 rounded-xl text-center border border-purple-500/20">
                <i className="ri-reactjs-line text-4xl text-yellow-400 mb-3"></i>
                <p className="text-white font-semibold">React/Vue.js</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl text-center border border-purple-500/20">
                <i className="ri-nodejs-line text-4xl text-yellow-400 mb-3"></i>
                <p className="text-white font-semibold">Node.js/Python</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl text-center border border-purple-500/20">
                <i className="ri-database-line text-4xl text-yellow-400 mb-3"></i>
                <p className="text-white font-semibold">MongoDB/PostgreSQL</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl text-center border border-purple-500/20">
                <i className="ri-cloud-line text-4xl text-yellow-400 mb-3"></i>
                <p className="text-white font-semibold">AWS/Azure</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-8">
              ¿Tiene una idea innovadora? Validémosla juntos con un MVP profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacto"
                className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
              >
                Desarrollar Mi MVP
              </Link>
              <Link 
                to="/casos-de-exito"
                className="border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all whitespace-nowrap"
              >
                Ver Casos de Éxito
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
