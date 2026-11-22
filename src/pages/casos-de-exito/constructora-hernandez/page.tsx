import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { useEffect } from 'react';

export default function ConstructoraHernandezPage() {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Modern%20construction%20company%20website%20showcase%20with%20architectural%20projects%2C%20building%20blueprints%2C%20construction%20equipment%2C%20professional%20corporate%20environment%20with%20purple%20and%20yellow%20accents&width=1920&height=800&seq=constructora-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6 leading-tight">
              Constructora Hernández
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Portal Corporativo para Empresa Constructora
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                CORPORATIVO
              </span>
            </div>
          </div>
          
          {/* Métricas Destacadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-black/50 rounded-2xl p-6 border border-purple-500/30">
              <div className="text-4xl font-black text-yellow-400 mb-2">160%</div>
              <div className="text-gray-300">Incremento en Generación de Leads</div>
            </div>
            <div className="text-center bg-black/50 rounded-2xl p-6 border border-purple-500/30">
              <div className="text-4xl font-black text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300">Mejora en Imagen Corporativa</div>
            </div>
            <div className="text-center bg-black/50 rounded-2xl p-6 border border-purple-500/30">
              <div className="text-4xl font-black text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Disponibilidad Online</div>
            </div>
          </div>
        </div>
      </section>

      {/* Desafío y Solución */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Desafío */}
            <div>
              <h2 className="text-4xl font-black text-yellow-400 mb-8">
                El Desafío
              </h2>
              <div className="bg-gradient-to-br from-red-900/30 to-gray-900/30 rounded-2xl p-8 border border-red-500/20">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Constructora Hernández necesitaba una presencia digital profesional para mostrar sus proyectos de construcción y atraer nuevos clientes en el sector inmobiliario y comercial.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <i className="ri-close-circle-line text-red-400 mr-3 mt-1"></i>
                    Falta de presencia digital profesional
                  </li>
                  <li className="flex items-start">
                    <i className="ri-close-circle-line text-red-400 mr-3 mt-1"></i>
                    Dificultad para mostrar proyectos realizados
                  </li>
                  <li className="flex items-start">
                    <i className="ri-close-circle-line text-red-400 mr-3 mt-1"></i>
                    Proceso manual de captación de leads
                  </li>
                  <li className="flex items-start">
                    <i className="ri-close-circle-line text-red-400 mr-3 mt-1"></i>
                    Competencia con constructoras establecidas
                  </li>
                </ul>
              </div>
            </div>

            {/* Solución */}
            <div>
              <h2 className="text-4xl font-black text-yellow-400 mb-8">
                La Solución
              </h2>
              <div className="bg-gradient-to-br from-green-900/30 to-gray-900/30 rounded-2xl p-8 border border-green-500/20">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Desarrollamos un portal corporativo profesional con galería de proyectos impactante y sistema de captación de leads automatizado.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <i className="ri-check-circle-line text-green-400 mr-3 mt-1"></i>
                    Portal corporativo con diseño profesional
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-circle-line text-green-400 mr-3 mt-1"></i>
                    Galería interactiva de proyectos realizados
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-circle-line text-green-400 mr-3 mt-1"></i>
                    Sistema automatizado de captación de leads
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-circle-line text-green-400 mr-3 mt-1"></i>
                    Optimización SEO para búsquedas locales
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-16">
            Resultados Medibles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="text-5xl font-black text-yellow-400 mb-4">160%</div>
              <div className="text-gray-300 font-semibold">Incremento en Generación de Leads</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="text-5xl font-black text-yellow-400 mb-4">95%</div>
              <div className="text-gray-300 font-semibold">Mejora en Imagen Corporativa</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="text-5xl font-black text-yellow-400 mb-4">50+</div>
              <div className="text-gray-300 font-semibold">Proyectos Mostrados</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="text-5xl font-black text-yellow-400 mb-4">24/7</div>
              <div className="text-gray-300 font-semibold">Disponibilidad Online</div>
            </div>
          </div>
        </div>
      </section>

      {/* Características Técnicas */}
      <section className="py-24 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-16 text-center">
            Características del Portal
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-gray-700/30">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-building-line text-black text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Galería de Proyectos</h3>
              <p className="text-gray-400">Showcase interactivo de proyectos realizados con imágenes de alta calidad y descripciones detalladas.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-gray-700/30">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-mail-line text-black text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Formularios de Contacto</h3>
              <p className="text-gray-400">Sistema de captación de leads con formularios especializados para diferentes tipos de proyectos.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-gray-700/30">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-search-line text-black text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Optimización SEO</h3>
              <p className="text-gray-400">Estrategia SEO completa para aparecer en búsquedas locales de servicios de construcción.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-gray-700/30">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-smartphone-line text-black text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Diseño Responsivo</h3>
              <p className="text-gray-400">Experiencia optimizada para todos los dispositivos, desde móviles hasta escritorio.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-gray-700/30">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-service-line text-black text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Catálogo de Servicios</h3>
              <p className="text-gray-400">Información detallada de todos los servicios de construcción ofrecidos por la empresa.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-gray-700/30">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-customer-service-line text-black text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Atención Especializada</h3>
              <p className="text-gray-400">Sistema de contacto directo para consultas específicas sobre proyectos de construcción.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-gradient-to-r from-purple-900/30 to-gray-900/30">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <div className="bg-black/50 rounded-3xl p-12 border border-purple-500/30">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8">
              <i className="ri-user-line text-black text-3xl"></i>
            </div>
            <blockquote className="text-2xl md:text-3xl text-gray-200 font-light leading-relaxed mb-8">
              "El portal web desarrollado por Pixmedia transformó completamente nuestra presencia digital. Ahora podemos mostrar nuestros proyectos de manera profesional y hemos incrementado significativamente la captación de nuevos clientes."
            </blockquote>
            <div className="text-yellow-400 font-bold text-xl">Ing. Carlos Hernández</div>
            <div className="text-gray-400">Director General, Constructora Hernández</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
            ¿Listo para Transformar tu Empresa Constructora?
          </h2>
          <p className="text-xl text-white mb-10 leading-relaxed">
            Desarrollemos un portal corporativo que muestre la calidad de tus proyectos y atraiga más clientes a tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5219211453200"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
            >
              <i className="ri-whatsapp-line mr-2"></i>
              Iniciar Mi Proyecto
            </a>
            <a 
              href="/casos-de-exito"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all whitespace-nowrap"
            >
              Ver Más Casos de Éxito
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}