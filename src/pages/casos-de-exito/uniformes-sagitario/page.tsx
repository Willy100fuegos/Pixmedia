import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function UniformesSagitario() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Professional%20uniform%20manufacturing%20company%2C%20custom%20corporate%20uniforms%20display%2C%20high-quality%20workwear%20catalog%2C%20modern%20textile%20production%20facility%20with%20purple%20and%20yellow%20branding&width=1920&height=800&seq=uniformes-sagitario-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto">
          <div className="mb-6">
            <Link 
              to="/casos-de-exito"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Volver a Casos de Éxito
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  CORPORATIVO
                </span>
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  E-COMMERCE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black text-yellow-400 mb-6 leading-tight">
                Uniformes Sagitario
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Sitio Web a Medida para Uniformes Personalizados. Plataforma diseñada para reflejar la calidad y profesionalismo, con diseño responsivo.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-900/50 to-gray-900/50 p-6 rounded-xl border border-purple-500/30">
                  <div className="text-yellow-400 text-4xl font-black mb-2">220%</div>
                  <div className="text-gray-300 text-sm">Incremento en Ventas Online</div>
                </div>
                <div className="bg-gradient-to-br from-purple-900/50 to-gray-900/50 p-6 rounded-xl border border-purple-500/30">
                  <div className="text-yellow-400 text-4xl font-black mb-2">95%</div>
                  <div className="text-gray-300 text-sm">Satisfacción del Cliente</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
                <img 
                  src="https://pixmedia.b-cdn.net/wp-content/uploads/2024/11/mockuper-760x667.png"
                  alt="Uniformes Sagitario - Sitio Web"
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-black text-yellow-400 mb-6">
                El Desafío
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Uniformes Sagitario, empresa especializada en uniformes personalizados para empresas, necesitaba una plataforma digital que reflejara la calidad y profesionalismo de sus productos. El desafío principal era crear un sitio web que permitiera a los clientes explorar el catálogo de uniformes, solicitar cotizaciones personalizadas y realizar pedidos online de manera sencilla.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                La empresa requería una solución que mostrara la variedad de uniformes disponibles, permitiera la personalización de diseños y facilitara el proceso de compra para clientes corporativos y particulares.
              </p>
            </div>
            
            <div>
              <h2 className="text-4xl font-black text-yellow-400 mb-6">
                La Solución
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Desarrollamos un sitio web a medida con catálogo interactivo de uniformes, sistema de cotizaciones personalizadas y plataforma de pedidos online. La solución incluye galería de productos organizada por categorías, herramientas de personalización de diseños y sistema de gestión de pedidos corporativos.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Implementamos un diseño responsivo que garantiza una experiencia óptima en todos los dispositivos, con énfasis en la presentación visual de los productos y la facilidad de navegación para clientes empresariales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-12 text-center">
            Resultados Medibles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20 text-center">
              <div className="text-yellow-400 text-5xl font-black mb-4">220%</div>
              <div className="text-white text-xl font-semibold mb-2">Incremento en Ventas Online</div>
              <div className="text-gray-400">Aumento significativo en pedidos digitales</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20 text-center">
              <div className="text-yellow-400 text-5xl font-black mb-4">85%</div>
              <div className="text-white text-xl font-semibold mb-2">Reducción en Tiempo de Cotización</div>
              <div className="text-gray-400">Proceso automatizado más eficiente</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20 text-center">
              <div className="text-yellow-400 text-5xl font-black mb-4">95%</div>
              <div className="text-white text-xl font-semibold mb-2">Satisfacción del Cliente</div>
              <div className="text-gray-400">Experiencia de compra mejorada</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Impacto del Proyecto</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              La implementación del sitio web personalizado transformó completamente la forma en que Uniformes Sagitario interactúa con sus clientes. El incremento del 220% en ventas online demuestra la efectividad de la plataforma para convertir visitantes en clientes.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              La reducción del 85% en tiempo de cotización ha permitido a la empresa atender más solicitudes y mejorar significativamente la experiencia del cliente, resultando en un 95% de satisfacción general.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-12 text-center">
            Características Implementadas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-shopping-bag-3-line text-3xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Catálogo Interactivo</h3>
              <p className="text-gray-300 leading-relaxed">
                Galería de productos organizada por categorías con imágenes de alta calidad, descripciones detalladas y opciones de personalización para cada tipo de uniforme.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-file-list-3-line text-3xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sistema de Cotizaciones</h3>
              <p className="text-gray-300 leading-relaxed">
                Herramienta automatizada que permite a los clientes solicitar cotizaciones personalizadas especificando cantidad, tallas, colores y personalizaciones requeridas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-palette-line text-3xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Personalización de Diseños</h3>
              <p className="text-gray-300 leading-relaxed">
                Herramientas visuales que permiten a los clientes personalizar uniformes con logos, colores corporativos y especificaciones particulares antes de realizar el pedido.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-smartphone-line text-3xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Diseño Responsivo</h3>
              <p className="text-gray-300 leading-relaxed">
                Sitio web completamente adaptable a todos los dispositivos, garantizando una experiencia óptima tanto en computadoras de escritorio como en tablets y smartphones.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-shopping-cart-line text-3xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Pedidos Online</h3>
              <p className="text-gray-300 leading-relaxed">
                Sistema de pedidos integrado que permite a clientes corporativos y particulares realizar compras directamente desde el sitio web con seguimiento de estado.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-customer-service-2-line text-3xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Atención Corporativa</h3>
              <p className="text-gray-300 leading-relaxed">
                Sección especializada para clientes empresariales con opciones de pedidos al mayoreo, descuentos por volumen y atención personalizada para proyectos grandes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-900">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <i className="ri-double-quotes-l text-6xl text-yellow-400"></i>
          </div>
          
          <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8 italic">
            "El sitio web desarrollado por Pixmedia ha transformado completamente nuestro negocio. Ahora podemos mostrar nuestros productos de manera profesional y atender pedidos online de forma eficiente. Las ventas han aumentado significativamente y nuestros clientes están muy satisfechos con la facilidad de uso."
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <i className="ri-user-line text-2xl text-black"></i>
            </div>
            <div className="text-left">
              <div className="text-yellow-400 font-bold text-lg">Roberto Sagitario</div>
              <div className="text-gray-300">Director General, Uniformes Sagitario</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
            ¿Listo para Transformar Tu Negocio?
          </h2>
          <p className="text-xl text-white mb-10 leading-relaxed">
            Descubre cómo podemos ayudarte a crear una plataforma digital que impulse tus ventas y mejore la experiencia de tus clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5219211453200"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all inline-flex items-center justify-center"
            >
              <i className="ri-whatsapp-line mr-2 text-xl"></i>
              Iniciar Mi Proyecto
            </a>
            <Link 
              to="/casos-de-exito"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all inline-flex items-center justify-center"
            >
              Ver Más Casos de Éxito
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
