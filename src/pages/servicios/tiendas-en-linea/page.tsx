import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function TiendasEnLinea() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Modern%20e-commerce%20platform%20visualization%20with%20shopping%20cart%20interfaces%2C%20payment%20gateways%2C%20inventory%20management%20dashboards%2C%20and%20online%20store%20analytics%20in%20a%20futuristic%20digital%20environment%20with%20purple%20and%20yellow%20lighting&width=1920&height=800&seq=ecommerce-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight">
            Tiendas en Línea
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            E-commerce completo con integración ERP/CRM, pasarelas de pago seguras y gestión de inventario en tiempo real.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-4xl font-black text-yellow-400 mb-8">
                Soluciones E-commerce de Alto Rendimiento
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Desarrollamos tiendas en línea que no solo venden, sino que convierten visitantes en clientes leales. Nuestras soluciones integran las mejores prácticas de UX/UI con tecnologías robustas para maximizar sus ventas online.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="ri-check-line text-yellow-400 text-xl mr-4"></i>
                  <span className="text-gray-300">Plataformas Shopify, WooCommerce, Magento</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-yellow-400 text-xl mr-4"></i>
                  <span className="text-gray-300">Integración con sistemas de gestión</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-yellow-400 text-xl mr-4"></i>
                  <span className="text-gray-300">Optimización de conversión y UX</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Características Principales</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="ri-shopping-cart-line text-yellow-400 text-lg mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">Carrito Inteligente:</strong>
                    <span className="text-gray-300"> Recuperación automática de carritos abandonados</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-secure-payment-line text-yellow-400 text-lg mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">Pagos Seguros:</strong>
                    <span className="text-gray-300"> Múltiples pasarelas de pago integradas</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-bar-chart-line text-yellow-400 text-lg mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">Analytics Avanzado:</strong>
                    <span className="text-gray-300"> Reportes de ventas y comportamiento de usuarios</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="ri-smartphone-line text-yellow-400 text-lg mr-3 mt-1"></i>
                  <div>
                    <strong className="text-white">Mobile-First:</strong>
                    <span className="text-gray-300"> Optimizado para dispositivos móviles</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Tecnologías */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Tecnologías que Utilizamos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-6 rounded-xl border border-purple-500/20 text-center">
                <i className="ri-store-line text-4xl text-yellow-400 mb-4"></i>
                <h4 className="text-xl font-bold text-white mb-3">Shopify Plus</h4>
                <p className="text-gray-300">Plataforma enterprise para grandes volúmenes de venta</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-6 rounded-xl border border-purple-500/20 text-center">
                <i className="ri-wordpress-line text-4xl text-yellow-400 mb-4"></i>
                <h4 className="text-xl font-bold text-white mb-3">WooCommerce</h4>
                <p className="text-gray-300">Flexibilidad total con WordPress como base</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-6 rounded-xl border border-purple-500/20 text-center">
                <i className="ri-code-line text-4xl text-yellow-400 mb-4"></i>
                <h4 className="text-xl font-bold text-white mb-3">Desarrollo Custom</h4>
                <p className="text-gray-300">Soluciones a medida con React y Node.js</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-700/30 p-12 rounded-3xl border border-purple-500/20 text-center">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">¿Listo para Lanzar su Tienda Online?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transforme su negocio con una tienda en línea que realmente vende. Consulta gratuita incluye análisis de competencia y estrategia de conversión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacto"
                className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
              >
                Solicitar Consulta Gratuita
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