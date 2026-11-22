
import { Suspense } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppWidget from '../../../components/base/WhatsAppWidget';

export default function ConfiguracionPasarelasPagoPage() {
  const handleContactClick = () => {
    const message = "Hola, me interesa el servicio de Configuración de Pasarelas de Pago. ¿Podrían proporcionarme más información?";
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
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">Configuración de Pasarelas de Pago</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Integración profesional de sistemas de pago seguros: PayPal, Stripe, pasarelas locales y más
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Service Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Pagos Seguros y Confiables</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Múltiples Pasarelas</h3>
                  <p className="text-gray-300">Integración de PayPal, Stripe, Mercado Pago, OXXO Pay y más opciones de pago.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Seguridad PCI DSS</h3>
                  <p className="text-gray-300">Cumplimiento de estándares internacionales de seguridad para transacciones.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Procesamiento Instantáneo</h3>
                  <p className="text-gray-300">Confirmación inmediata de pagos y notificaciones automáticas.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Gestión de Reembolsos</h3>
                  <p className="text-gray-300">Sistema automatizado para procesar devoluciones y reembolsos.</p>
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
                  <h4 className="font-semibold text-white">Análisis de Necesidades</h4>
                  <p className="text-sm text-gray-300">Evaluación de métodos de pago preferidos por tus clientes</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h4 className="font-semibold text-white">Configuración Técnica</h4>
                  <p className="text-sm text-gray-300">Setup de APIs y webhooks para cada pasarela</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h4 className="font-semibold text-white">Pruebas de Seguridad</h4>
                  <p className="text-sm text-gray-300">Testing exhaustivo en ambiente de pruebas</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                <div>
                  <h4 className="font-semibold text-white">Go Live y Monitoreo</h4>
                  <p className="text-sm text-gray-300">Activación en producción y seguimiento continuo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Pasarelas de Pago Disponibles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-paypal-line text-4xl text-blue-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">PayPal</h3>
              <p className="text-gray-300 text-sm">Pagos con cuenta PayPal o tarjetas de crédito/débito</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-bank-card-line text-4xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Stripe</h3>
              <p className="text-gray-300 text-sm">Procesamiento avanzado de tarjetas con tecnología moderna</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-shopping-bag-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Mercado Pago</h3>
              <p className="text-gray-300 text-sm">Solución líder en Latinoamérica con múltiples opciones</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-store-line text-4xl text-red-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">OXXO Pay</h3>
              <p className="text-gray-300 text-sm">Pagos en efectivo en tiendas de conveniencia</p>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white p-12 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">Seguridad de Nivel Bancario</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <i className="ri-shield-check-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Encriptación SSL</h3>
              <p>Todas las transacciones protegidas con certificados SSL de 256 bits</p>
            </div>
            <div className="text-center">
              <i className="ri-lock-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Tokenización</h3>
              <p>Los datos de tarjetas se convierten en tokens seguros e inutilizables</p>
            </div>
            <div className="text-center">
              <i className="ri-eye-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Monitoreo 24/7</h3>
              <p>Detección automática de fraudes y transacciones sospechosas</p>
            </div>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Características Técnicas</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">Webhooks Automáticos</h3>
                <p className="text-gray-300">Notificaciones instantáneas de cambios de estado en pagos</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">Pagos Recurrentes</h3>
                <p className="text-gray-300">Suscripciones y cobros automáticos programados</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">Multi-Moneda</h3>
                <p className="text-gray-300">Soporte para múltiples divisas y conversión automática</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">Reportes Detallados</h3>
                <p className="text-gray-300">Dashboard con métricas de ventas y transacciones</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Beneficios para tu Negocio</h2>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Aumento en conversiones hasta 35%</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Reducción de carritos abandonados</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Confianza y credibilidad del cliente</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Gestión automatizada de pagos</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Cumplimiento normativo garantizado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing and Fees */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Comisiones Competitivas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">PayPal</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-purple-400">3.4%</span>
                <span className="text-gray-300"> + $4 MXN</span>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Pagos nacionales</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Protección del vendedor</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Reconocimiento mundial</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border-2 border-purple-600">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Stripe</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-purple-400">3.6%</span>
                <span className="text-gray-300"> + $3 MXN</span>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Tecnología avanzada</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> APIs modernas</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Checkout optimizado</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Mercado Pago</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-purple-400">4.0%</span>
                <span className="text-gray-300"> + $2 MXN</span>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Líder en LATAM</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Múltiples métodos</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Pagos en efectivo</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-12 rounded-2xl border border-purple-500/20">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">¿Listo para recibir pagos online?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Configuramos las mejores pasarelas de pago para tu negocio con máxima seguridad y conversión
          </p>
          <button
            onClick={handleContactClick}
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors whitespace-nowrap"
          >
            Configurar Pagos Ahora
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
