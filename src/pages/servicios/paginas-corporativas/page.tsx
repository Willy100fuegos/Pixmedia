
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function PaginasCorporativas() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://pixmedia.b-cdn.net/cadogui%5B1%5D.jpg')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight">
            Páginas Corporativas
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Sitios Institucionales Profesionales. Diseño y desarrollo de presencia digital que refleja la solidez y profesionalismo de su empresa.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-7xl mx-auto">
          
          {/* Introducción */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
              🏢 Presencia Digital Corporativa
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Creamos sitios web corporativos que transmiten confianza, profesionalismo y credibilidad. Cada proyecto incluye diseño personalizado, branding coherente y optimización SEO para posicionar su empresa como líder en su industria.
            </p>
          </div>

          {/* Servicios Principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-building-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Diseño Institucional</h3>
              <p className="text-gray-300 leading-relaxed">
                Layouts profesionales que reflejan los valores corporativos. Diseño responsive y navegación intuitiva.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-palette-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Branding Digital</h3>
              <p className="text-gray-300 leading-relaxed">
                Integración coherente de identidad visual, colores corporativos y elementos de marca en toda la web.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-search-eye-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">SEO Corporativo</h3>
              <p className="text-gray-300 leading-relaxed">
                Optimización para búsquedas locales y de industria. Posicionamiento de marca y autoridad digital.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-team-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Secciones Ejecutivas</h3>
              <p className="text-gray-300 leading-relaxed">
                Páginas de equipo directivo, historia empresarial, misión y visión con diseño profesional.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-file-text-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Contenido Estratégico</h3>
              <p className="text-gray-300 leading-relaxed">
                Redacción profesional de contenidos, casos de éxito y comunicados corporativos.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Seguridad Empresarial</h3>
              <p className="text-gray-300 leading-relaxed">
                Certificados SSL, protección de datos y cumplimiento de normativas de privacidad.
              </p>
            </div>
          </div>

          {/* Características Incluidas */}
          <div className="bg-gradient-to-r from-purple-900/20 to-gray-900/20 p-12 rounded-3xl border border-purple-500/20 mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Características Incluidas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Diseño y Desarrollo</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Diseño responsive y mobile-first</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Optimización de velocidad de carga</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Integración con redes sociales</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Formularios de contacto avanzados</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Funcionalidades</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Sistema de gestión de contenidos</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Blog corporativo integrado</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Galería de proyectos y logros</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Área de prensa y comunicados</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Proceso de Desarrollo */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Proceso de Desarrollo</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">1</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Análisis Corporativo</h4>
                <p className="text-gray-300">Estudio de identidad, competencia y objetivos empresariales.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">2</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Diseño Estratégico</h4>
                <p className="text-gray-300">Creación de wireframes y prototipos alineados con la marca.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">3</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Desarrollo</h4>
                <p className="text-gray-300">Implementación con tecnologías modernas y mejores prácticas.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">4</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Lanzamiento</h4>
                <p className="text-gray-300">Deploy, capacitación y soporte post-lanzamiento.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-8">
              ¿Listo para proyectar una imagen corporativa sólida en digital?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacto"
                className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
              >
                Solicitar Propuesta
              </Link>
              <Link 
                to="/casos-de-exito"
                className="border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all whitespace-nowrap"
              >
                Ver Portafolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
