import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useSEO, generateBreadcrumbSchema } from '../../utils/seo';

export default function QuienesSomos() {
  // SEO Configuration
  useSEO({
    title: 'Quiénes Somos - pixmedia | Expertos en Transformación Digital',
    description: 'Somos arquitectos de la transformación digital, especialistas en convertir visiones tecnológicas en realidades empresariales exitosas. Conoce nuestro equipo, misión, visión y valores.',
    keywords: 'equipo pixmedia, transformación digital, consultoría IT, misión, visión, valores, expertos tecnología',
    schema: {
      '@type': 'AboutPage',
      name: 'Quiénes Somos - pixmedia',
      description: 'Conoce al equipo de pixmedia, nuestra misión, visión y valores que nos impulsan a ser líderes en transformación digital.',
      breadcrumb: generateBreadcrumbSchema([
        { name: 'Inicio', url: '/' },
        { name: 'Quiénes Somos', url: '/quienes-somos' }
      ])
    }
  });

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5219211453200?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Professional%20technology%20team%20working%20in%20modern%20office%20environment%20with%20multiple%20monitors%20displaying%20code%20and%20digital%20infrastructure%2C%20collaborative%20workspace%20with%20purple%20and%20yellow%20lighting%20accents%2C%20diverse%20IT%20professionals%20focused%20on%20innovation&width=1920&height=800&seq=team-about&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight">
            Quiénes Somos
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Somos arquitectos de la transformación digital, especialistas en convertir visiones tecnológicas en realidades empresariales exitosas.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-10 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-target-line text-2xl text-black"></i>
              </div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">Nuestra Misión</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Empoderar a las empresas mediante soluciones tecnológicas estratégicas que impulsen su crecimiento, optimicen sus operaciones y las posicionen como líderes en sus respectivos mercados. Transformamos desafíos complejos en oportunidades de innovación.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-10 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-eye-line text-2xl text-black"></i>
              </div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">Nuestra Visión</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Ser reconocidos como el socio tecnológico de referencia para empresas que buscan acelerar su transformación digital, estableciendo nuevos estándares de excelencia en consultoría IT y desarrollo de soluciones innovadoras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Los principios que guían cada decisión y proyecto que emprendemos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-lightbulb-line text-3xl text-yellow-400"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovación</h3>
              <p className="text-gray-300">
                Buscamos constantemente nuevas formas de resolver problemas y crear valor.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-award-line text-3xl text-yellow-400"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Excelencia</h3>
              <p className="text-gray-300">
                Cada proyecto es una oportunidad para superar expectativas y establecer nuevos estándares.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-team-line text-3xl text-yellow-400"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Colaboración</h3>
              <p className="text-gray-300">
                Trabajamos como una extensión de su equipo, compartiendo objetivos y éxitos.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <i className="ri-shield-check-line text-3xl text-yellow-400"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Confianza</h3>
              <p className="text-gray-300">
                Construimos relaciones duraderas basadas en transparencia y resultados comprobables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo - ACTUALIZADO */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Profesionales especializados con años de experiencia en transformación digital y consultoría estratégica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* William Velázquez Valenzuela */}
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20 text-center">
              <img 
                src="https://pixmedia.b-cdn.net/webpixmedia/wi.jpg"
                alt="William Velázquez Valenzuela"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-yellow-400"
              />
              <h3 className="text-xl font-bold text-white mb-2">William Velázquez Valenzuela</h3>
              <p className="text-yellow-400 font-semibold mb-4">Director Ejecutivo & Estrategia IT</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Apasionado por la <strong>transformación digital</strong> y el desarrollo web. Especialista en estrategias tecnológicas de crecimiento. Enfocado en la enseñanza y la excelencia digital.
              </p>
            </div>

            {/* Ana Lilia Pineda Cortés */}
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20 text-center">
              <img 
                src="https://pixmedia.b-cdn.net/Analilia.jpg"
                alt="Ana Lilia Pineda Cortés"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-yellow-400"
              />
              <h3 className="text-xl font-bold text-white mb-2">Ana Lilia Pineda Cortés</h3>
              <p className="text-yellow-400 font-semibold mb-4">Directora de Marketing & Branding</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Experta en <strong>marketing digital</strong> y construcción de marca. Especialista en identidad, diseño gráfico y procesos corporativos. Impulsa la creatividad en el ámbito empresarial.
              </p>
            </div>

            {/* Luis Antonio Gamero Pacheco */}
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20 text-center">
              <img 
                src="https://pixmedia.b-cdn.net/luisgsmero.jpg"
                alt="Luis Antonio Gamero Pacheco"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-yellow-400"
              />
              <h3 className="text-xl font-bold text-white mb-2">Luis Antonio Gamero Pacheco</h3>
              <p className="text-yellow-400 font-semibold mb-4">Líder de Soluciones e Infraestructura IT</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Experto en <strong>soluciones IT, electrónica y cableado estructurado</strong>. Implementación a gran escala de infraestructura tecnológica. Certificado en instalación de CCTV, GPS y controles de acceso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia y Certificaciones */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
              Experiencia y Certificaciones
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Respaldados por las certificaciones más prestigiosas de la industria tecnológica.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-6 rounded-xl border border-purple-500/20 text-center">
              <i className="ri-amazon-line text-4xl text-yellow-400 mb-4"></i>
              <p className="text-white font-semibold">AWS Certified</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-6 rounded-xl border border-purple-500/20 text-center">
              <i className="ri-microsoft-line text-4xl text-yellow-400 mb-4"></i>
              <p className="text-white font-semibold">Azure Expert</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-6 rounded-xl border border-purple-500/20 text-center">
              <i className="ri-google-line text-4xl text-yellow-400 mb-4"></i>
              <p className="text-white font-semibold">GCP Professional</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-6 rounded-xl border border-purple-500/20 text-center">
              <i className="ri-shield-check-line text-4xl text-yellow-400 mb-4"></i>
              <p className="text-white font-semibold">CISSP</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-6 rounded-xl border border-purple-500/20 text-center">
              <i className="ri-settings-3-line text-4xl text-yellow-400 mb-4"></i>
              <p className="text-white font-semibold">ITIL Expert</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/20 p-6 rounded-xl border border-purple-500/20 text-center">
              <i className="ri-rocket-line text-4xl text-yellow-400 mb-4"></i>
              <p className="text-white font-semibold">Scrum Master</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
            ¿Listo para Conocer Más?
          </h2>
          <p className="text-xl text-white mb-10 leading-relaxed">
            Descubra cómo nuestro equipo puede transformar su visión tecnológica en resultados empresariales tangibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleWhatsAppClick('Hola, me interesa conocer más sobre su equipo y servicios')}
              className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap cursor-pointer"
            >
              Contactar Ahora
            </button>
            <Link 
              to="/servicios"
              className="border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all whitespace-nowrap"
            >
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}