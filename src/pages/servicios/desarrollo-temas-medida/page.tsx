
import { Suspense } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppWidget from '../../../components/base/WhatsAppWidget';

export default function DesarrolloTemasMedidaPage() {
  const handleContactClick = () => {
    const message = "Hola, me interesa el servicio de Desarrollo de Temas a Medida. ¿Podrían proporcionarme más información?";
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
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">Desarrollo de Temas a Medida</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Creación de diseños únicos y funcionales desde cero, sin plantillas, enfocados en branding y UX/UI excepcional
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Service Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Diseño 100% Personalizado</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Diseño Desde Cero</h3>
                  <p className="text-gray-300">Creamos cada elemento visual basado en tu identidad de marca y objetivos específicos.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">UX/UI Optimizado</h3>
                  <p className="text-gray-300">Experiencia de usuario diseñada para maximizar conversiones y engagement.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Responsive Design</h3>
                  <p className="text-gray-300">Adaptación perfecta a todos los dispositivos y tamaños de pantalla.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Optimización de Velocidad</h3>
                  <p className="text-gray-300">Código limpio y optimizado para tiempos de carga ultrarrápidos.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Proceso de Desarrollo</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                <div>
                  <h4 className="font-semibold text-white">Análisis de Marca</h4>
                  <p className="text-sm text-gray-300">Estudio profundo de tu identidad y objetivos</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h4 className="font-semibold text-white">Wireframes y Mockups</h4>
                  <p className="text-sm text-gray-300">Diseño de la estructura y elementos visuales</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h4 className="font-semibold text-white">Desarrollo Frontend</h4>
                  <p className="text-sm text-gray-300">Programación del tema con tecnologías modernas</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                <div>
                  <h4 className="font-semibold text-white">Testing y Optimización</h4>
                  <p className="text-sm text-gray-300">Pruebas exhaustivas y ajustes finales</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Características Técnicas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-code-s-slash-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Código Limpio</h3>
              <p className="text-gray-300">HTML5, CSS3 y JavaScript moderno siguiendo las mejores prácticas de desarrollo.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-search-eye-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">SEO Optimizado</h3>
              <p className="text-gray-300">Estructura semántica y optimizaciones técnicas para mejor posicionamiento.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-smartphone-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Mobile First</h3>
              <p className="text-gray-300">Diseño pensado primero para móviles, garantizando experiencia perfecta.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-palette-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Branding Integrado</h3>
              <p className="text-gray-300">Colores, tipografías y elementos visuales alineados con tu marca.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-tools-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Fácil Administración</h3>
              <p className="text-gray-300">Panel de control intuitivo para gestionar contenido sin conocimientos técnicos.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-shield-check-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Seguridad Avanzada</h3>
              <p className="text-gray-300">Implementación de medidas de seguridad y protección contra vulnerabilidades.</p>
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white p-12 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">¿Por qué elegir un tema personalizado?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Temas Personalizados</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i> Diseño único y exclusivo</li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i> Optimizado para tu negocio específico</li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i> Mejor rendimiento y velocidad</li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i> SEO optimizado desde el código</li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i> Soporte técnico especializado</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-400">Plantillas Genéricas</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><i className="ri-close-line text-red-400 mr-2"></i> Diseño repetitivo y común</li>
                <li className="flex items-center"><i className="ri-close-line text-red-400 mr-2"></i> Funciones innecesarias que ralentizan</li>
                <li className="flex items-center"><i className="ri-close-line text-red-400 mr-2"></i> Limitaciones de personalización</li>
                <li className="flex items-center"><i className="ri-close-line text-red-400 mr-2"></i> Problemas de compatibilidad</li>
                <li className="flex items-center"><i className="ri-close-line text-red-400 mr-2"></i> Soporte limitado del desarrollador</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Portfolio Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Ejemplos de Nuestro Trabajo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-xl border border-purple-500/20 overflow-hidden hover:border-yellow-400/50 transition-all">
              <img 
                src="https://pixmedia.b-cdn.net/wp-content/uploads/2023/11/tecuidamos.png" 
                alt="Proyecto Gorat"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-white">Plataforma Corporativa</h3>
                <p className="text-gray-300 text-sm">Tema personalizado para empresa tecnológica con integración de sistemas avanzados.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-xl border border-purple-500/20 overflow-hidden hover:border-yellow-400/50 transition-all">
              <img 
                src="https://pixmedia.b-cdn.net/wp-content/uploads/2023/12/mockuper-2.png" 
                alt="Proyecto Goratrack"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-white">Plataforma de Rastreo</h3>
                <p className="text-gray-300 text-sm">Interfaz personalizada para sistema de monitoreo GPS en tiempo real.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-xl border border-purple-500/20 overflow-hidden hover:border-yellow-400/50 transition-all">
              <img 
                src="https://pixmedia.b-cdn.net/olimarwebn.png" 
                alt="Proyecto OLIMAR"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-white">Sitio Corporativo</h3>
                <p className="text-gray-300 text-sm">Diseño elegante y profesional para empresa de servicios especializados.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-12 rounded-2xl border border-purple-500/20">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">¿Listo para un diseño único?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Creamos temas personalizados que reflejan perfectamente tu marca y convierten visitantes en clientes
          </p>
          <button
            onClick={handleContactClick}
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors whitespace-nowrap"
          >
            Solicitar Propuesta
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
