
import { Suspense } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppWidget from '../../../components/base/WhatsAppWidget';

export default function IntegracionInventarioPage() {
  const handleContactClick = () => {
    const message = "Hola, me interesa el servicio de Integración Avanzada de Inventario. ¿Podrían proporcionarme más información?";
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://pixmedia.b-cdn.net/mockuper-19%5B1%5D.png')`
        }}
      >
        <div className="text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">Integración Avanzada de Inventario</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Sincronización en tiempo real del stock online con sistemas ERP/CRM y gestión automatizada de inventario
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Service Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Gestión Inteligente de Stock</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Sincronización en Tiempo Real</h3>
                  <p className="text-gray-300">Actualización automática del inventario entre tu tienda online y sistemas internos.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Integración ERP/CRM</h3>
                  <p className="text-gray-300">Conexión directa con SAP, Oracle, Dynamics, Salesforce y otros sistemas empresariales.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Alertas Automáticas</h3>
                  <p className="text-gray-300">Notificaciones de stock bajo, productos agotados y reabastecimiento necesario.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Multi-Almacén</h3>
                  <p className="text-gray-300">Gestión de inventario en múltiples ubicaciones y centros de distribución.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Proceso de Integración</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                <div>
                  <h4 className="font-semibold text-white">Análisis de Sistemas</h4>
                  <p className="text-sm text-gray-300">Evaluación de tu ERP/CRM actual y estructura de datos</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h4 className="font-semibold text-white">Desarrollo de APIs</h4>
                  <p className="text-sm text-gray-300">Creación de conectores personalizados y middleware</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h4 className="font-semibold text-white">Sincronización Inicial</h4>
                  <p className="text-sm text-gray-300">Migración y sincronización completa del inventario</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                <div>
                  <h4 className="font-semibold text-white">Monitoreo Continuo</h4>
                  <p className="text-sm text-gray-300">Supervisión 24/7 y mantenimiento de la integración</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Systems */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Sistemas Compatibles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-database-2-line text-4xl text-blue-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">SAP</h3>
              <p className="text-gray-300 text-sm">Integración completa con módulos MM, SD y WM</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-cloud-line text-4xl text-green-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Oracle NetSuite</h3>
              <p className="text-gray-300 text-sm">Sincronización con ERP en la nube líder mundial</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-microsoft-line text-4xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Dynamics 365</h3>
              <p className="text-gray-300 text-sm">Conexión nativa con soluciones Microsoft</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-customer-service-line text-4xl text-orange-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Salesforce</h3>
              <p className="text-gray-300 text-sm">Integración CRM para gestión completa de clientes</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white p-12 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">Beneficios de la Integración</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <i className="ri-time-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Ahorro de Tiempo</h3>
              <p>Eliminación de actualizaciones manuales y procesos repetitivos</p>
            </div>
            <div className="text-center">
              <i className="ri-error-warning-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Reducción de Errores</h3>
              <p>Minimización de errores humanos en la gestión de inventario</p>
            </div>
            <div className="text-center">
              <i className="ri-line-chart-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Mejor Toma de Decisiones</h3>
              <p>Datos precisos en tiempo real para decisiones estratégicas</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Funcionalidades Avanzadas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-refresh-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Sincronización Bidireccional</h3>
              <p className="text-gray-300">Actualización automática en ambas direcciones entre sistemas.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-bar-chart-box-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Reportes Avanzados</h3>
              <p className="text-gray-300">Dashboard con métricas de rotación, stock y predicciones.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-notification-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Alertas Inteligentes</h3>
              <p className="text-gray-300">Notificaciones personalizadas por email, SMS o WhatsApp.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-map-pin-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Gestión Multi-Ubicación</h3>
              <p className="text-gray-300">Control de inventario en múltiples almacenes y sucursales.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-history-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Historial Completo</h3>
              <p className="text-gray-300">Trazabilidad completa de movimientos y cambios de stock.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-shield-check-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Backup Automático</h3>
              <p className="text-gray-300">Respaldos automáticos y recuperación ante fallos.</p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Especificaciones Técnicas</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">APIs RESTful</h3>
                <p className="text-gray-300">Integración moderna con endpoints seguros y documentados</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">Webhooks en Tiempo Real</h3>
                <p className="text-gray-300">Notificaciones instantáneas de cambios en el inventario</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">Encriptación de Datos</h3>
                <p className="text-gray-300">Protección SSL/TLS para todas las comunicaciones</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">Escalabilidad</h3>
                <p className="text-gray-300">Arquitectura que crece con tu negocio sin limitaciones</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Soporte y Mantenimiento</h2>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Monitoreo 24/7 de la integración</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Soporte técnico especializado</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Actualizaciones automáticas</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Documentación técnica completa</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Capacitación del equipo incluida</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-12 rounded-2xl border border-purple-500/20">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">¿Listo para automatizar tu inventario?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Integramos tu sistema de inventario para que tengas control total y en tiempo real de tu stock
          </p>
          <button
            onClick={handleContactClick}
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors whitespace-nowrap"
          >
            Integrar Mi Inventario
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
