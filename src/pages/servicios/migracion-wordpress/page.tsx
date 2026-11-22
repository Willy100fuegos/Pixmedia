
import { Suspense } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppWidget from '../../../components/base/WhatsAppWidget';

export default function MigracionWordPressPage() {
  const handleContactClick = () => {
    const message = "Hola, me interesa el servicio de Migración de Sitios a WordPress. ¿Podrían proporcionarme más información?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5219211453200?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://pixmedia.b-cdn.net/cadogui%5B1%5D.jpg')`
        }}
      >
        <div className="text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">Migración de Sitios a WordPress</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Proceso técnico especializado para migrar sitios web a WordPress garantizando cero downtime y máxima seguridad
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Service Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">¿Qué incluye nuestro servicio?</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Análisis Técnico Previo</h3>
                  <p className="text-gray-300">Evaluación completa de la estructura actual, base de datos y archivos del sitio existente.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Migración Sin Downtime</h3>
                  <p className="text-gray-300">Proceso técnico que garantiza que tu sitio permanezca online durante toda la migración.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Preservación de SEO</h3>
                  <p className="text-gray-300">Mantenemos todas las URLs, metadatos y estructura SEO para no perder posicionamiento.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Optimización Post-Migración</h3>
                  <p className="text-gray-300">Configuración de plugins esenciales, optimización de velocidad y seguridad.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Proceso de Migración</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                <div>
                  <h4 className="font-semibold text-white">Auditoría Técnica</h4>
                  <p className="text-sm text-gray-300">Análisis completo del sitio actual</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h4 className="font-semibold text-white">Preparación del Entorno</h4>
                  <p className="text-sm text-gray-300">Configuración de WordPress en servidor de pruebas</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h4 className="font-semibold text-white">Migración de Contenido</h4>
                  <p className="text-sm text-gray-300">Transferencia de base de datos y archivos</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                <div>
                  <h4 className="font-semibold text-white">Pruebas y Go Live</h4>
                  <p className="text-sm text-gray-300">Verificación completa y puesta en producción</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white p-12 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">Beneficios de Migrar a WordPress</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <i className="ri-speed-up-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Mayor Velocidad</h3>
              <p>WordPress optimizado carga hasta 3x más rápido que plataformas obsoletas</p>
            </div>
            <div className="text-center">
              <i className="ri-shield-check-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Seguridad Avanzada</h3>
              <p>Actualizaciones automáticas y plugins de seguridad de nivel empresarial</p>
            </div>
            <div className="text-center">
              <i className="ri-tools-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Fácil Gestión</h3>
              <p>Panel de administración intuitivo para actualizar contenido sin conocimientos técnicos</p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Especificaciones Técnicas</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-600 pl-4 bg-gray-900/30 p-4 rounded-r-lg">
                <h3 className="font-semibold text-lg text-white">Plataformas Compatibles</h3>
                <p className="text-gray-300">HTML estático, Joomla, Drupal, Magento, plataformas personalizadas</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4 bg-gray-900/30 p-4 rounded-r-lg">
                <h3 className="font-semibold text-lg text-white">Tiempo de Migración</h3>
                <p className="text-gray-300">3-7 días hábiles dependiendo de la complejidad del sitio</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4 bg-gray-900/30 p-4 rounded-r-lg">
                <h3 className="font-semibold text-lg text-white">Garantía de Uptime</h3>
                <p className="text-gray-300">99.9% de disponibilidad durante todo el proceso</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Soporte Post-Migración</h2>
            <div className="bg-gradient-to-br from-yellow-900/20 to-gray-900/30 p-6 rounded-xl border border-yellow-400/20">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-200">30 días de soporte técnico gratuito</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-200">Capacitación en el uso del panel de WordPress</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-200">Documentación técnica completa</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-200">Backup completo del sitio original</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-gray-900 to-black p-12 rounded-2xl border border-purple-500/20">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">¿Listo para migrar a WordPress?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos se encargará de todo el proceso técnico mientras tú te enfocas en tu negocio
          </p>
          <button
            onClick={handleContactClick}
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors whitespace-nowrap"
          >
            Solicitar Cotización
          </button>
        </div>
      </div>

      <Footer />
      <Suspense fallback={null}>
        <WhatsAppWidget />
      </Suspense>
    </div>
  );
}