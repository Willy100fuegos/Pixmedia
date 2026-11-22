import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useSEO, generateBreadcrumbSchema } from '../../utils/seo';

export default function Servicios() {
  // SEO Configuration
  useSEO({
    title: 'Servicios - pixmedia | Desarrollo Web, Ciberseguridad e Infraestructura IT',
    description: 'Soluciones tecnológicas integrales: desarrollo web, e-commerce, ciberseguridad, infraestructura cloud, mantenimiento y consultoría IT. Transformamos desafíos digitales en oportunidades de crecimiento.',
    keywords: 'servicios IT, desarrollo web, ciberseguridad, infraestructura cloud, mantenimiento web, consultoría tecnológica',
    schema: {
      '@type': 'CollectionPage',
      name: 'Servicios - pixmedia',
      description: 'Catálogo completo de servicios tecnológicos especializados para impulsar su transformación digital.',
      breadcrumb: generateBreadcrumbSchema([
        { name: 'Inicio', url: '/' },
        { name: 'Servicios', url: '/servicios' }
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Advanced%20technology%20services%20visualization%20with%20multiple%20digital%20screens%20showing%20web%20development%2C%20cybersecurity%20shields%2C%20cloud%20infrastructure%2C%20and%20maintenance%20dashboards%2C%20futuristic%20IT%20operations%20center%20with%20purple%20and%20yellow%20lighting&width=1920&height=800&seq=services-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight">
            Servicios
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Soluciones tecnológicas integrales diseñadas para impulsar su transformación digital y maximizar su competitividad empresarial.
          </p>
        </div>
      </section>

      {/* Introducción y Navegación */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
              Explore Nuestros Servicios Especializados
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Descubra cada uno de nuestros servicios en detalle. Utilice el menú de navegación superior "SERVICIOS" para acceder a información específica sobre cada área de especialización.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Desarrollo Web */}
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20 text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-code-line text-3xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">💻 Desarrollo Web</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Soluciones web personalizadas, e-commerce y aplicaciones digitales de alto rendimiento.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• Tiendas en Línea</div>
                <div>• WebApps & Plataformas</div>
                <div>• MVPs y Prototipado</div>
                <div>• Marketing Digital</div>
              </div>
            </div>

            {/* Ciberseguridad */}
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20 text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-shield-check-line text-3xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">🛡️ Ciberseguridad</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Protección integral contra amenazas digitales y auditorías de seguridad especializadas.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• Pruebas de Penetración</div>
                <div>• Ciberseguridad Gestionada</div>
                <div>• Seguridad Perimetral</div>
              </div>
            </div>

            {/* Infraestructura */}
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20 text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-cloud-line text-3xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">⚙️ Infraestructura</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Gestión cloud, redes empresariales y arquitecturas tecnológicas escalables.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• Gestión Managed Cloud</div>
                <div>• Redes Zero Trust</div>
                <div>• Servidores Dedicados</div>
                <div>• Disaster Recovery</div>
              </div>
            </div>

            {/* Mantenimiento */}
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20 text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-tools-line text-3xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">🛠️ Mantenimiento</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Soporte técnico continuo y optimización de rendimiento para sus sistemas.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• Soporte y SLA</div>
                <div>• Mantenimiento Web</div>
                <div>• Optimización UX</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-300 mb-8">
              ¿Necesita información específica sobre algún servicio? Navegue por el menú superior o contáctenos directamente.
            </p>
            <Link 
              to="/contacto"
              className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap inline-block"
            >
              Solicitar Consulta Gratuita
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
