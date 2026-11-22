import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function ZonaGospelPage() {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Gospel%20music%20streaming%20platform%20with%20radio%20broadcasting%2C%20e-learning%20spiritual%20education%2C%20modern%20religious%20technology%20interface%20with%20purple%20and%20yellow%20accents%2C%20digital%20ministry%20tools&width=1920&height=800&seq=zonagospel-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6 leading-tight">
              ZonaGospel
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Portal Multifuncional con Streaming y E-learning para Ministerio Digital
            </p>
          </div>
          
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/50 to-gray-900/50 rounded-2xl p-6 border border-purple-500/30">
              <div className="text-3xl font-black text-yellow-400 mb-2">350%</div>
              <div className="text-gray-300">Engagement de Usuarios</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-gray-900/50 rounded-2xl p-6 border border-purple-500/30">
              <div className="text-3xl font-black text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Radio Online Activa</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-gray-900/50 rounded-2xl p-6 border border-purple-500/30">
              <div className="text-3xl font-black text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300">Satisfacción de Usuarios</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenge */}
            <div className="bg-gradient-to-br from-red-900/20 to-gray-900/30 rounded-2xl p-8 border border-red-500/20">
              <h2 className="text-3xl font-bold text-red-400 mb-6">
                <i className="ri-error-warning-line mr-3"></i>
                El Desafío
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                ZonaGospel necesitaba una plataforma integral que combinara múltiples servicios digitales: streaming de música gospel, radio online 24/7, plataforma e-learning para educación espiritual y recursos para la comunidad cristiana, todo en un solo ecosistema digital.
              </p>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-green-900/20 to-gray-900/30 rounded-2xl p-8 border border-green-500/20">
              <h2 className="text-3xl font-bold text-green-400 mb-6">
                <i className="ri-lightbulb-line mr-3"></i>
                La Solución
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Desarrollamos un portal multifuncional que integra streaming de alta calidad, radio online con programación 24/7, plataforma e-learning con cursos espirituales, biblioteca de recursos digitales y sistema de comunidad para conectar usuarios cristianos globalmente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-12">
            Resultados Transformadores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-6 border border-purple-500/20">
              <div className="text-4xl font-black text-yellow-400 mb-3">350%</div>
              <div className="text-gray-300 font-semibold">Incremento en Engagement</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-6 border border-purple-500/20">
              <div className="text-4xl font-black text-yellow-400 mb-3">15K+</div>
              <div className="text-gray-300 font-semibold">Usuarios Activos Mensuales</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-6 border border-purple-500/20">
              <div className="text-4xl font-black text-yellow-400 mb-3">24/7</div>
              <div className="text-gray-300 font-semibold">Radio Online Continua</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-6 border border-purple-500/20">
              <div className="text-4xl font-black text-yellow-400 mb-3">500+</div>
              <div className="text-gray-300 font-semibold">Recursos Educativos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-16 text-center">
            Características Implementadas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-music-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Streaming de Música Gospel</h3>
              <p className="text-gray-400">Plataforma de streaming con biblioteca extensa de música cristiana y gospel de alta calidad.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-radio-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Radio Online 24/7</h3>
              <p className="text-gray-400">Transmisión continua con programación especializada y contenido espiritual las 24 horas.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-graduation-cap-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Plataforma E-learning</h3>
              <p className="text-gray-400">Cursos espirituales interactivos con certificaciones y seguimiento de progreso personalizado.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-book-open-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Biblioteca Digital</h3>
              <p className="text-gray-400">Recursos espirituales, estudios bíblicos y material educativo accesible desde cualquier dispositivo.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-group-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Comunidad Cristiana</h3>
              <p className="text-gray-400">Sistema de comunidad para conectar usuarios, compartir testimonios y fortalecer la fe.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-smartphone-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">App Móvil Integrada</h3>
              <p className="text-gray-400">Aplicación móvil para acceso completo a todos los servicios desde dispositivos móviles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <div className="bg-black/30 rounded-3xl p-12 border border-yellow-400/20">
            <div className="text-6xl text-yellow-400 mb-6">"</div>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed italic">
              ZonaGospel se ha convertido en el centro digital de nuestra comunidad cristiana. La plataforma integra perfectamente todos nuestros servicios y ha multiplicado nuestro alcance ministerial de manera extraordinaria.
            </p>
            <div className="flex items-center justify-center">
              <div>
                <div className="font-bold text-yellow-400 text-lg">Pastor Miguel Rodríguez</div>
                <div className="text-gray-300">Director General - ZonaGospel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
            ¿Listo para Transformar su Ministerio Digital?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Desarrolle una plataforma integral que conecte, eduque e inspire a su comunidad cristiana con tecnología de vanguardia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5219211453200"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all"
            >
              <i className="ri-whatsapp-line mr-2"></i>
              Iniciar Mi Proyecto
            </a>
            <Link 
              to="/casos-de-exito"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all"
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