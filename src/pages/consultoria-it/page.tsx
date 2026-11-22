import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useSEO, generateBreadcrumbSchema, generateServiceSchema } from '../../utils/seo';

export default function ConsultoriaIT() {
  // SEO Configuration
  useSEO({
    title: 'Consultoría IT - pixmedia | Estrategia Tecnológica y Transformación Digital',
    description: 'Consultoría IT estratégica: evaluación tecnológica, optimización de procesos, gobierno de datos e IA empresarial. Convertimos el riesgo digital en ventaja competitiva.',
    keywords: 'consultoría IT, estrategia tecnológica, transformación digital, evaluación tecnológica, optimización procesos, gobierno datos, IA empresarial',
    schema: {
      '@type': 'Service',
      ...generateServiceSchema({
        name: 'Consultoría IT',
        description: 'Servicios de consultoría tecnológica estratégica para impulsar la transformación digital de su empresa.'
      }),
      breadcrumb: generateBreadcrumbSchema([
        { name: 'Inicio', url: '/' },
        { name: 'Consultoría IT', url: '/consultoria-it' }
      ])
    }
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Strategic%20digital%20consulting%20visualization%20with%20business%20executives%20analyzing%20technology%20roadmaps%2C%20AI%20automation%20dashboards%2C%20data%20analytics%20screens%2C%20and%20digital%20transformation%20planning%20in%20a%20modern%20corporate%20environment%20with%20purple%20and%20yellow%20lighting&width=1920&height=800&seq=consultoria-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight">
            Consultoría IT
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Su Estrategia de Tecnología, Decodificada. Transformamos la complejidad tecnológica en ventaja competitiva sostenible.
          </p>
        </div>
      </section>

      {/* Introducción y Navegación */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
              💡 Consultoría Estratégica Digital
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Nuestro servicio premium de consultoría. Explore cada área de especialización utilizando el menú de navegación superior "CONSULTORÍA IT" para acceder a información detallada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Evaluación Tecnológica */}
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-search-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Evaluación Tecnológica</h3>
              <p className="text-gray-300 leading-relaxed">
                Análisis de madurez tecnológica y diseño de hoja de ruta digital estratégica.
              </p>
            </div>

            {/* IA para Empresas */}
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-robot-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">IA para Empresas</h3>
              <p className="text-gray-300 leading-relaxed">
                Integración de inteligencia artificial, chatbots y automatización de procesos.
              </p>
            </div>

            {/* Gobierno de Datos */}
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-database-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Gobierno de Datos y BI</h3>
              <p className="text-gray-300 leading-relaxed">
                Estrategias de datos, business intelligence y cumplimiento normativo.
              </p>
            </div>

            {/* Optimización de Procesos */}
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-settings-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Optimización de Procesos</h3>
              <p className="text-gray-300 leading-relaxed">
                Automatización robótica (RPA) y optimización digital de procesos empresariales.
              </p>
            </div>
          </div>

          {/* Proceso de Consultoría */}
          <div className="bg-gradient-to-r from-purple-900/20 to-gray-900/20 p-12 rounded-3xl border border-purple-500/20 mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Nuestro Proceso de Consultoría</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">1</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Descubrimiento y Auditoría</h4>
                <p className="text-gray-300">Análisis profundo de su infraestructura actual y identificación de oportunidades.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">2</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Diseño de Arquitectura Objetivo</h4>
                <p className="text-gray-300">Creación de la hoja de ruta tecnológica alineada con sus objetivos de negocio.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">3</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Plan de Implementación</h4>
                <p className="text-gray-300">Ejecución estratégica con capacitación y acompañamiento continuo.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-300 mb-8">
              ¿Listo para transformar su estrategia tecnológica? Explore nuestros servicios especializados o inicie una consulta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacto"
                className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
              >
                Solicitar Consulta Estratégica
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
