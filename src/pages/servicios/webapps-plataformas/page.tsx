import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function WebAppsPlataformas() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://pixmedia.b-cdn.net/mockuper-19%5B1%5D.png')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight">
            WebApps & Plataformas
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Desarrollo de aplicaciones web complejas, SaaS y plataformas digitales escalables con arquitecturas modernas.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-4xl font-black text-yellow-400 mb-8">
                Aplicaciones Web de Nivel Enterprise
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Creamos aplicaciones web complejas y plataformas SaaS que escalan con su negocio. Utilizamos las tecnologías más avanzadas para desarrollar soluciones robustas, seguras y de alto rendimiento.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="ri-check-line text-yellow-400 text-xl mr-4"></i>
                  <span className="text-gray-300">React, Vue.js, Angular, Node.js</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-yellow-400 text-xl mr-4"></i>
                  <span className="text-gray-300">APIs RESTful y GraphQL</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-yellow-400 text-xl mr-4"></i>
                  <span className="text-gray-300">Arquitecturas microservicios</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Tipos de Aplicaciones</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="ri-dashboard-line text-yellow-400 text-lg mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">Plataformas SaaS:</strong>
                    <span className="text-gray-300"> Software como servicio escalable</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-team-line text-yellow-400 text-lg mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">Sistemas CRM/ERP:</strong>
                    <span className="text-gray-300"> Gestión empresarial integrada</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-exchange-line text-yellow-400 text-lg mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">Marketplaces:</strong>
                    <span className="text-gray-300"> Plataformas de múltiples vendedores</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-graduation-cap-line text-yellow-400 text-lg mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">Plataformas LMS:</strong>
                    <span className="text-gray-300"> Sistemas de gestión de aprendizaje</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Stack Tecnológico */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Stack Tecnológico Avanzado</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-6 rounded-xl border border-purple-500/20 text-center">
                <i className="ri-reactjs-line text-4xl text-yellow-400 mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Frontend</h4>
                <p className="text-gray-300 text-sm">React, Vue.js, Angular</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-6 rounded-xl border border-purple-500/20 text-center">
                <i className="ri-server-line text-4xl text-yellow-400 mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Backend</h4>
                <p className="text-gray-300 text-sm">Node.js, Python, .NET</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-6 rounded-xl border border-purple-500/20 text-center">
                <i className="ri-database-line text-4xl text-yellow-400 mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Base de Datos</h4>
                <p className="text-gray-300 text-sm">PostgreSQL, MongoDB</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-6 rounded-xl border border-purple-500/20 text-center">
                <i className="ri-cloud-line text-4xl text-yellow-400 mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Cloud</h4>
                <p className="text-gray-300 text-sm">AWS, Azure, GCP</p>
              </div>
            </div>
          </div>

          {/* Proceso de Desarrollo */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Metodología de Desarrollo</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">1</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Análisis y Diseño</h4>
                <p className="text-gray-300">Definición de requisitos, arquitectura y prototipado de la solución.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">2</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Desarrollo Ágil</h4>
                <p className="text-gray-300">Sprints de desarrollo con entregas incrementales y feedback continuo.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">3</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Deploy y Soporte</h4>
                <p className="text-gray-300">Despliegue en producción con monitoreo y soporte continuo.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-700/30 p-12 rounded-3xl border border-purple-500/20 text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">¿Tiene una Idea de Aplicación Web?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transformemos su visión en una aplicación web robusta y escalable. Consulta técnica gratuita incluye análisis de viabilidad y estimación de proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacto"
                className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
              >
                Consulta Técnica Gratuita
              </Link>
              <Link 
                to="/servicios/mvps-prototipado"
                className="border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all whitespace-nowrap"
              >
                Ver MVPs y Prototipos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}