
import { Suspense } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppWidget from '../../../components/base/WhatsAppWidget';

export default function ImplementacionWooCommercePage() {
  const handleContactClick = () => {
    const message = "Hola, me interesa el servicio de Implementación de WooCommerce. ¿Podrían proporcionarme más información?";
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
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">Implementación de WooCommerce</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Instalación, configuración y personalización completa del plugin de e-commerce más poderoso de WordPress
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Service Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Configuración Completa de E-commerce</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Instalación Profesional</h3>
                  <p className="text-gray-300">Configuración técnica completa de WooCommerce optimizada para tu tipo de negocio.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Catálogo de Productos</h3>
                  <p className="text-gray-300">Configuración de categorías, atributos, variaciones y gestión completa del inventario.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Métodos de Envío</h3>
                  <p className="text-gray-300">Configuración de zonas de envío, tarifas y integraciones con paqueterías.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Gestión de Impuestos</h3>
                  <p className="text-gray-300">Configuración automática de impuestos según ubicación y tipo de producto.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Proceso de Implementación</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                <div>
                  <h4 className="font-semibold text-white">Análisis de Requerimientos</h4>
                  <p className="text-sm text-gray-300">Evaluación de necesidades específicas del negocio</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h4 className="font-semibold text-white">Instalación y Configuración</h4>
                  <p className="text-sm text-gray-300">Setup completo de WooCommerce y plugins esenciales</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h4 className="font-semibold text-white">Personalización</h4>
                  <p className="text-sm text-gray-300">Adaptación del diseño y funcionalidades</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                <div>
                  <h4 className="font-semibold text-white">Pruebas y Capacitación</h4>
                  <p className="text-sm text-gray-300">Testing completo y entrenamiento del equipo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Funcionalidades Incluidas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-shopping-cart-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Carrito Avanzado</h3>
              <p className="text-gray-300">Carrito de compras optimizado con cálculo automático de impuestos y envíos.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-user-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Cuentas de Usuario</h3>
              <p className="text-gray-300">Sistema completo de registro, login y gestión de cuentas de clientes.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-file-list-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Gestión de Pedidos</h3>
              <p className="text-gray-300">Panel administrativo para gestionar pedidos, estados y comunicación con clientes.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-bar-chart-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Reportes y Analítica</h3>
              <p className="text-gray-300">Informes detallados de ventas, productos más vendidos y comportamiento de clientes.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-coupon-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Cupones y Descuentos</h3>
              <p className="text-gray-300">Sistema completo de cupones, descuentos por volumen y promociones especiales.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-smartphone-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Responsive Design</h3>
              <p className="text-gray-300">Tienda completamente optimizada para dispositivos móviles y tablets.</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white p-12 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">¿Por qué elegir WooCommerce?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <i className="ri-money-dollar-circle-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Costo-Efectivo</h3>
              <p>Plugin gratuito con extensiones premium solo cuando las necesites</p>
            </div>
            <div className="text-center">
              <i className="ri-puzzle-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Altamente Extensible</h3>
              <p>Miles de plugins y extensiones para cualquier funcionalidad específica</p>
            </div>
            <div className="text-center">
              <i className="ri-global-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Escalable</h3>
              <p>Crece con tu negocio, desde pequeñas tiendas hasta grandes e-commerce</p>
            </div>
          </div>
        </div>

        {/* Plugins and Extensions */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Plugins Esenciales Incluidos</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">WooCommerce Payments</h3>
                <p className="text-gray-300">Procesamiento de pagos integrado con tarifas competitivas</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">WooCommerce Shipping</h3>
                <p className="text-gray-300">Cálculo automático de envíos e integración con paqueterías</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">WooCommerce Subscriptions</h3>
                <p className="text-gray-300">Gestión de suscripciones y pagos recurrentes</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">WooCommerce Bookings</h3>
                <p className="text-gray-300">Sistema de reservas para servicios y citas</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Soporte y Mantenimiento</h2>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">60 días de soporte técnico gratuito</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Capacitación completa en administración</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Documentación técnica detallada</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Actualizaciones de seguridad incluidas</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Backup automático configurado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-12 rounded-2xl border border-purple-500/20">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">¿Listo para vender online?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Implementamos WooCommerce de forma profesional para que puedas empezar a vender desde el primer día
          </p>
          <button
            onClick={handleContactClick}
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors whitespace-nowrap"
          >
            Iniciar Mi Tienda Online
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
