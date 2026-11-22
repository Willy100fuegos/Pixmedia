import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { useSEO } from '../../utils/seo';

export default function Home() {
  // SEO Configuration
  useSEO({
    title: 'pixmedia - Tecnología Estratégica y Consultoría IT | Desarrollo Web y Ciberseguridad',
    description: 'pixmedia integra innovación digital con estrategia de negocio. Especialistas en consultoría IT, desarrollo web, ciberseguridad e infraestructura cloud. Su socio tecnológico de alto rendimiento para acelerar el crecimiento empresarial.',
    keywords: 'consultoría IT, desarrollo web, ciberseguridad, infraestructura cloud, transformación digital, pixmedia, casos de éxito, portafolio digital',
    ogType: 'website',
    schema: {
      '@type': 'WebSite',
      name: 'pixmedia',
      description: 'Agencia de servicios digitales e IT especializada en consultoría estratégica, desarrollo web, ciberseguridad e infraestructura cloud.',
      url: import.meta.env.VITE_SITE_URL || 'https://pixmedia.agency',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${import.meta.env.VITE_SITE_URL || 'https://pixmedia.agency'}/buscar?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    }
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const successCases = [
    {
      id: 1,
      title: "Gorat: Plataforma Tecnológica Integral y Consultoría IT Avanzada",
      description: "Socio tecnológico desde 2018; implementación de Nube Corporativa, Servidor de Correo, Buzón Interno de Solicitudes y Registro de Rondines (QR).",
      image: "https://pixmedia.b-cdn.net/portafolio/gorat.png",
      category: "CONSULTORÍA IT"
    },
    {
      id: 2,
      title: "Gotrack PTT: Plataforma de Radio Digital en Servidor Dedicado",
      description: "Solución innovadora que supera las limitaciones de radios convencionales, ofreciendo mayor cobertura y calidad de sonido.",
      image: "https://pixmedia.b-cdn.net/portafolio/gotrackptt.png",
      category: "CONSULTORÍA IT"
    },
    {
      id: 3,
      title: "Goratrack: Plataforma de Rastreo GPS Personalizada con API de Mapbox",
      description: "Solución tecnológica a medida para incursionar en el mercado de monitoreo de GPS con alta seguridad y escalabilidad.",
      image: "https://pixmedia.b-cdn.net/portafolio/goratrack.png",
      category: "CONSULTORÍA IT"
    },
    {
      id: 4,
      title: "OLIMAR: Consultoría IT de Correo Corporativo y Migración",
      description: "Solución para eliminar problemas de servicio y configurar el correo en Outlook para uso profesional.",
      image: "https://pixmedia.b-cdn.net/olimarwebn.png",
      category: "CONSULTORÍA IT"
    },
    {
      id: 5,
      title: "Iglesia el Mesías: Portal Institucional y Estrategia SEO",
      description: "Creación de un sitio web para conectar con la comunidad y atraer nuevos visitantes.",
      image: "https://pixmedia.b-cdn.net/portafolio/elmesias.png",
      category: "CORPORATIVO"
    },
    {
      id: 6,
      title: "Uniformes Sagitario: Sitio Web a Medida para Uniformes Personalizados",
      description: "Plataforma diseñada para reflejar la calidad y profesionalismo, con diseño responsivo.",
      image: "https://pixmedia.b-cdn.net/portafolio/uniformessagitario.jpg",
      category: "CORPORATIVO"
    },
    {
      id: 7,
      title: "ZonaGospel: Portal Multifuncional con Streaming y E-learning",
      description: "Solución integral para ofrecer recursos espirituales, educativos y radio en línea.",
      image: "https://pixmedia.b-cdn.net/portafolio/zonagospel-2.png",
      category: "CORPORATIVO"
    },
    {
      id: 8,
      title: "Gruas Gissa: Estrategia Digital Integral para Grúas Industriales",
      description: "Sitio en WordPress para captar mayor clientela en Coatzacoalcos y áreas circundantes.",
      image: "https://pixmedia.b-cdn.net/portafolio/gissa.png",
      category: "CORPORATIVO"
    }
  ];

  const startCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % successCases.length);
      }
    }, 3000);
  };

  const stopCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startCarousel();
    return () => stopCarousel();
  }, [isPaused, successCases.length]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5219211453200?text=${encodedMessage}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-teal rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-yellow rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative px-6 max-w-7xl mx-auto w-full py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Tecnología Estratégica.<br />
              <span className="text-gradient-yellow">Crecimiento Acelerado.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Integramos la innovación digital con la estrategia de negocio para impulsar su visión hacia el futuro. Su socio tecnológico de alto rendimiento.
            </p>
            <button 
              onClick={() => handleWhatsAppClick('Hola, me interesa obtener una consulta estratégica')}
              className="bg-gradient-to-r from-accent-yellow to-yellow-500 text-gray-900 px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-glow-yellow hover:scale-105 transition-all inline-block whitespace-nowrap cursor-pointer"
            >
              Obtener una Consulta Estratégica
            </button>
          </div>
        </div>
      </section>

      {/* Sección "Desarrollo Web: Su Plataforma, Nuestro Código" */}
      <section className="py-20 bg-primary-dark">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="card-modern p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Texto de Impacto */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Desarrollo Web: <span className="text-gradient-yellow">Su Plataforma, Nuestro Código.</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  En la era digital, su presencia online no es solo una ventana al mundo, es su <strong className="text-accent-yellow">activo más valioso</strong>. 
                  Desarrollamos plataformas web que no solo impresionan visualmente, sino que <strong className="text-accent-yellow">convierten visitantes en clientes</strong> y 
                  <strong className="text-accent-yellow"> generan resultados medibles</strong>.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Desde e-commerce de alto rendimiento hasta aplicaciones web complejas, 
                  cada línea de código está diseñada para <strong className="text-accent-yellow">maximizar su ROI digital</strong> y posicionar su marca como líder en su industria.
                </p>
              </div>

              {/* Imagen o Contenido Visual */}
              <div className="relative">
                <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-accent-yellow/10 to-accent-teal/10 border border-accent-yellow/20 flex items-center justify-center">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Modern%20web%20development%20workspace%20with%20multiple%20screens%20showing%20responsive%20website%20designs%2C%20clean%20code%20editor%20interface%2C%20vibrant%20color%20schemes%20with%20yellow%20and%20teal%20accents%2C%20professional%20tech%20environment%20with%20sleek%20monitors%20displaying%20beautiful%20web%20interfaces%2C%20contemporary%20digital%20workspace%20with%20coding%20and%20design%20tools%2C%20high-tech%20atmosphere%20with%20glowing%20screens%20and%20modern%20aesthetic%2C%20minimalist%20setup%20with%20focus%20on%20web%20development%20and%20digital%20creation&width=600&height=800&seq=webdev001&orientation=portrait"
                    alt="Desarrollo Web Profesional"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-yellow rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-teal rounded-full blur-3xl opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección "Consultoría IT: El Pilar de su Transformación" */}
      <section className="py-20 bg-primary">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="card-modern p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Imagen o Contenido Visual */}
              <div className="relative order-2 lg:order-1">
                <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-accent-teal/10 to-green-400/10 border border-green-400/20 flex items-center justify-center">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Professional%20IT%20consulting%20environment%20with%20cybersecurity%20shields%2C%20network%20infrastructure%20diagrams%2C%20cloud%20computing%20icons%2C%20data%20analytics%20dashboards%20on%20modern%20screens%2C%20secure%20server%20rooms%20with%20green%20and%20teal%20lighting%2C%20enterprise%20technology%20strategy%20visualization%2C%20business%20professionals%20analyzing%20digital%20transformation%20roadmaps%2C%20high-tech%20security%20operations%20center%20with%20multiple%20monitors%20showing%20network%20protection%20systems&width=600&height=800&seq=itconsult001&orientation=portrait"
                    alt="Consultoría IT Estratégica"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-teal rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-400 rounded-full blur-3xl opacity-30"></div>
              </div>

              {/* Texto de Impacto */}
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Consultoría IT: <span className="text-gradient-teal">El Pilar de su Transformación.</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  En un mercado en constante evolución, el éxito no es solo adoptar tecnología, sino saber <strong className="text-accent-teal">qué</strong> y 
                  <strong className="text-accent-teal"> cómo</strong> implementarla. Nuestra consultoría evalúa su infraestructura actual, identifica cuellos de botella y 
                  diseña una hoja de ruta tecnológica que garantiza escalabilidad y seguridad.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Somos la guía experta que convierte el riesgo digital en 
                  <strong className="text-accent-teal"> ventaja competitiva</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Destacados Section */}
      <section className="py-20 bg-primary-dark">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Nuestros <span className="text-gradient-yellow">Servicios Especializados</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Transformamos desafíos tecnológicos en oportunidades de crecimiento con nuestras soluciones especializadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Creación de Activos Web */}
            <div className="card-modern p-8 group hover:scale-105 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-accent-yellow to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <i className="ri-code-s-slash-line text-2xl text-gray-900"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Creación de Activos Web</h3>
              <p className="text-accent-yellow text-base font-semibold mb-3">Experiencias Digitales que Convierten</p>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                Páginas corporativas, tiendas en línea, WebApps, portales de noticias y MVPs. Soluciones web personalizadas que maximizan su ROI digital.
              </p>
              <Link 
                to="/servicios/paginas-corporativas"
                className="text-accent-teal hover:text-accent-yellow font-semibold flex items-center group-hover:translate-x-2 transition-transform text-sm"
                onClick={scrollToTop}
              >
                Ver Más <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>

            {/* Optimización y Mantenimiento */}
            <div className="card-modern p-8 group hover:scale-105 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-accent-teal to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <i className="ri-settings-3-line text-2xl text-gray-900"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Optimización y Mantenimiento</h3>
              <p className="text-accent-teal text-base font-semibold mb-3">Rendimiento y Experiencia Superior</p>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                Mantenimiento web, optimización UX, SEO avanzado. Mantenemos su plataforma funcionando al máximo rendimiento.
              </p>
              <Link 
                to="/servicios/mantenimiento-web"
                className="text-accent-teal hover:text-accent-yellow font-semibold flex items-center group-hover:translate-x-2 transition-transform text-sm"
                onClick={scrollToTop}
              >
                Ver Más <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>

            {/* Marketing y Branding */}
            <div className="card-modern p-8 group hover:scale-105 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-accent-yellow to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <i className="ri-palette-line text-2xl text-gray-900"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Marketing y Branding</h3>
              <p className="text-accent-yellow text-base font-semibold mb-3">Identidad que Impacta y Convierte</p>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                Diseño de marca, registro de marca, marketing digital, content marketing y social marketing. Construimos marcas memorables.
              </p>
              <Link 
                to="/servicios/diseno-marca"
                className="text-accent-teal hover:text-accent-yellow font-semibold flex items-center group-hover:translate-x-2 transition-transform text-sm"
                onClick={scrollToTop}
              >
                Ver Más <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>

            {/* Soluciones IT */}
            <div className="card-modern p-8 group hover:scale-105 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-accent-teal to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <i className="ri-brain-line text-2xl text-gray-900"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Soluciones IT</h3>
              <p className="text-accent-teal text-base font-semibold mb-3">Infraestructura y Seguridad Empresarial</p>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                Ciberseguridad, infraestructura cloud, consultoría estratégica. Convertimos el riesgo digital en ventaja competitiva.
              </p>
              <Link 
                to="/consultoria-it"
                className="text-accent-teal hover:text-accent-yellow font-semibold flex items-center group-hover:translate-x-2 transition-transform text-sm"
                onClick={scrollToTop}
              >
                Ver Más <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Éxito Section - Carousel */}
      <section className="py-20 bg-primary">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Resultados Tangibles. <span className="text-gradient-yellow">Proyectos Reales.</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Descubra cómo hemos transformado desafíos tecnológicos en éxitos empresariales medibles.
            </p>
          </div>

          {/* Carousel Container */}
          <div 
            className="relative overflow-hidden rounded-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {successCases.map((caseItem, index) => (
                <div key={caseItem.id} className="w-full flex-shrink-0">
                  <Link 
                    to="/casos-de-exito"
                    className="group block card-modern p-8"
                    onClick={scrollToTop}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="order-2 lg:order-1">
                        <div className="flex items-center mb-6">
                          <span className="bg-gradient-to-r from-accent-teal to-cyan-400 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold">
                            {caseItem.category}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-accent-yellow transition-colors">
                          {caseItem.title}
                        </h3>
                        <p className="text-base text-gray-300 mb-6 leading-relaxed">
                          {caseItem.description}
                        </p>
                        <span className="text-accent-teal font-semibold flex items-center text-sm">
                          Leer Caso Completo <i className="ri-arrow-right-line ml-2 group-hover:translate-x-2 transition-transform"></i>
                        </span>
                      </div>
                      <div className="order-1 lg:order-2">
                        <div className="w-full h-80 rounded-xl overflow-hidden shadow-2xl bg-white/5 flex items-center justify-center p-6">
                          <img 
                            src={caseItem.image}
                            alt={caseItem.title}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {successCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-accent-yellow scale-125 w-8' 
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + successCases.length) % successCases.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-xl transition-all border border-white/10"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % successCases.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-xl transition-all border border-white/10"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>

            {/* Pause Indicator */}
            {isPaused && (
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-accent-yellow px-3 py-1 rounded-lg text-sm font-semibold border border-white/10">
                <i className="ri-pause-line mr-1"></i>
                Pausado
              </div>
            )}
          </div>

          {/* View All Cases Button */}
          <div className="text-center mt-12">
            <Link 
              to="/casos-de-exito"
              className="bg-gradient-to-r from-accent-teal to-cyan-400 text-gray-900 px-8 py-4 rounded-xl text-base font-semibold hover:shadow-glow-teal hover:scale-105 transition-all inline-block whitespace-nowrap"
              onClick={scrollToTop}
            >
              Ver Todos los Casos de Éxito
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-teal/20 via-primary-dark to-accent-yellow/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent-yellow rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent-teal rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Acelerar su <span className="text-gradient-yellow">Transformación Digital?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            Comience hoy mismo con una consulta estratégica gratuita. Analizaremos su situación actual y diseñaremos un plan de acción personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleWhatsAppClick('Hola, solicito una consulta gratuita')}
              className="bg-gradient-to-r from-accent-yellow to-yellow-500 text-gray-900 px-10 py-4 rounded-xl text-base font-semibold hover:shadow-glow-yellow hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
            >
              Solicitar Consulta Gratuita
            </button>
            <Link 
              to="/casos-de-exito"
              className="border-2 border-accent-teal text-accent-teal px-10 py-4 rounded-xl text-base font-semibold hover:bg-accent-teal hover:text-gray-900 transition-all whitespace-nowrap"
              onClick={scrollToTop}
            >
              Ver Casos de Éxito
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
