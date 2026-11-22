import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function AgustinTorresCaseStudy() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = ["https://pixmedia.b-cdn.net/portafolio/agustin.png"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate('/casos-de-exito');
            }}
            className="mb-8 flex items-center text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Volver a Casos de Éxito
          </button>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
              CORPORATIVO
            </span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
              OPTIMIZACIÓN
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6">
            Agustín Torres Delgado
          </h1>
          
          <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl">
            Plataforma Digital para Político (Movimiento Ciudadano) y Difusión de Propuestas. Sitio informativo para el Secretario General de MC, mostrando su trayectoria y proyectos de gobierno.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden bg-gray-800 flex items-center justify-center p-8 border border-purple-500/20">
                <img 
                  src={images[currentImageIndex]}
                  alt="Agustín Torres Delgado"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* KPI and Solutions */}
            <div>
              <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20 mb-8">
                <h3 className="text-3xl font-bold text-yellow-400 mb-3">KPI Principal</h3>
                <div className="text-6xl font-black text-yellow-400 mb-3">88%</div>
                <div className="text-xl text-gray-300">Interacción con la Ciudadanía</div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Soluciones Implementadas:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300">
                    <i className="ri-check-line text-yellow-400 text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span>Sitio web político moderno</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <i className="ri-check-line text-yellow-400 text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span>Secciones de propuestas</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <i className="ri-check-line text-yellow-400 text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span>Biografía y logros</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <i className="ri-check-line text-yellow-400 text-xl mr-3 mt-1 flex-shrink-0"></i>
                    <span>Canales de comunicación directa</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Challenge, Solution, Impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-red-900/20 to-gray-900/30 p-8 rounded-2xl border border-red-500/20">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-error-warning-line text-3xl text-red-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-red-400 mb-4">Desafío</h3>
              <p className="text-gray-300 leading-relaxed">
                El Secretario General de Movimiento Ciudadano necesitaba una plataforma para comunicar sus propuestas, trayectoria política y proyectos de gobierno de manera efectiva.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/30 p-8 rounded-2xl border border-blue-500/20">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-3xl text-blue-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Solución</h3>
              <p className="text-gray-300 leading-relaxed">
                Creamos un sitio web político moderno con secciones de propuestas, biografía, logros y canales de comunicación directa con la ciudadanía.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-gray-900/30 p-8 rounded-2xl border border-green-500/20">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-trophy-line text-3xl text-green-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Impacto</h3>
              <p className="text-gray-300 leading-relaxed">
                Mejora del 88% en interacción con la ciudadanía, mayor alcance de propuestas y fortalecimiento significativo de imagen política.
              </p>
            </div>
          </div>

          {/* Project URL Button */}
          <div className="text-center mb-16">
            <a
              href="https://agustintorresdelgado.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-10 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transition-all inline-flex items-center whitespace-nowrap cursor-pointer"
            >
              <i className="ri-external-link-line text-2xl mr-3"></i>
              Ver Sitio Web
            </a>
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
            Únete a las empresas que han confiado en nosotros para su transformación digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5219211453200"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-line mr-2"></i>
              Contactar Ahora
            </a>
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/casos-de-exito');
              }}
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all whitespace-nowrap cursor-pointer"
            >
              Ver Más Casos de Éxito
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
