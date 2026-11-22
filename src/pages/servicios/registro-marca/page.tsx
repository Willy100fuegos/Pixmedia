import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function RegistroMarca() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const brandImages = [
    'https://pixmedia.b-cdn.net/1.png',
    'https://pixmedia.b-cdn.net/2.png',
    'https://pixmedia.b-cdn.net/3.png',
    'https://pixmedia.b-cdn.net/4.png',
    'https://pixmedia.b-cdn.net/5.png',
    'https://pixmedia.b-cdn.net/6.png',
    'https://pixmedia.b-cdn.net/7.png',
    'https://pixmedia.b-cdn.net/8.png',
    'https://pixmedia.b-cdn.net/9.png',
    'https://pixmedia.b-cdn.net/10.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % brandImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [brandImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % brandImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + brandImages.length) % brandImages.length);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Legal%20trademark%20registration%20office%20with%20official%20documents%2C%20IMPI%20certification%20process%2C%20brand%20protection%20symbols%2C%20intellectual%20property%20law%20books%2C%20and%20professional%20legal%20consultation%20in%20purple%20and%20yellow%20tech%20aesthetic&width=1920&height=800&seq=trademark-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight">
            Hazlo con nosotros: Registro de Marca
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Protección Legal Integral. Registramos su marca ante el IMPI con proceso rápido, eficiente y garantía de protección durante 10 años.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-7xl mx-auto">
          
          {/* Introducción */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
              🛡️ Protección Legal de su Identidad
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              En PIXMEDIA, te ayudamos a proteger la identidad de tu negocio mediante el registro de tu marca ante el Instituto Mexicano de la Propiedad Industrial (IMPI). Nuestro servicio es rápido, eficiente y te brinda la tranquilidad de que tu marca estará legalmente protegida durante 10 años.
            </p>
          </div>

          {/* Beneficios */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Beneficios del Registro de Marca</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20 text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-shield-check-line text-2xl text-black"></i>
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Protección Legal</h4>
                <p className="text-gray-300 leading-relaxed">
                  Derechos exclusivos sobre el uso de su marca en el territorio nacional.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20 text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-error-warning-line text-2xl text-black"></i>
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Evita Confusiones</h4>
                <p className="text-gray-300 leading-relaxed">
                  Garantiza que su marca no sea similar a otras ya registradas.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20 text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-money-dollar-circle-line text-2xl text-black"></i>
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Valor Comercial</h4>
                <p className="text-gray-300 leading-relaxed">
                  Incrementa el valor de su activo intangible más importante.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20 text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-global-line text-2xl text-black"></i>
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Posibilidad de Expansión</h4>
                <p className="text-gray-300 leading-relaxed">
                  Facilita la exportación y expansión internacional de su negocio.
                </p>
              </div>
            </div>
          </div>

          {/* Proceso */}
          <div className="bg-gradient-to-r from-purple-900/20 to-gray-900/20 p-12 rounded-3xl border border-purple-500/20 mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Nuestro Proceso de Registro</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">1</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Consulta y Búsqueda</h4>
                <p className="text-gray-300">Búsqueda en base de datos del IMPI para asegurar la unicidad de su marca.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">2</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Solicitud de Registro</h4>
                <p className="text-gray-300">Preparación y presentación de toda la documentación requerida.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">3</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Seguimiento del Proceso</h4>
                <p className="text-gray-300">Monitoreo constante y respuesta a cualquier requerimiento del IMPI.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">4</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Obtención del Título</h4>
                <p className="text-gray-300">Recibo del título de registro y derechos exclusivos por 10 años.</p>
              </div>
            </div>
          </div>

          {/* Marcas Registradas Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
              Algunas de las marcas que hemos registrado
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protegemos la identidad de nuestros clientes con registros de marca exitosos ante el IMPI
            </p>
          </div>

          {/* Carrusel de Marcas - 4 imágenes visibles */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 25}%)` }}
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="w-1/4 flex-shrink-0 px-2">
                    <div className="bg-white p-8 rounded-xl shadow-lg h-48 flex items-center justify-center">
                      <img 
                        src={`https://pixmedia.b-cdn.net/${i + 1}.png`}
                        alt={`Marca registrada ${i + 1}`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-colors z-10"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-colors z-10"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: 7 }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === i 
                      ? 'bg-yellow-400 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

          {/* Documentos Requeridos */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Documentos Requeridos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-purple-500/20">
                <h4 className="text-xl font-bold text-white mb-4">Para Personas Físicas</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Identificación oficial vigente</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>CURP</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Comprobante de domicilio</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Diseño de la marca (logo)</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-purple-500/20">
                <h4 className="text-xl font-bold text-white mb-4">Para Personas Morales</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Acta constitutiva</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>RFC de la empresa</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Identificación del representante legal</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Poder notarial (si aplica)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tiempos y Costos */}
          <div className="bg-gradient-to-r from-purple-900/20 to-gray-900/20 p-12 rounded-3xl border border-purple-500/20 mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Tiempos y Garantías</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-time-line text-2xl text-black"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Tiempo de Proceso</h4>
                <p className="text-gray-300">6 a 12 meses aproximadamente (tiempo oficial del IMPI)</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-calendar-line text-2xl text-black"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Vigencia</h4>
                <p className="text-gray-300">10 años renovables por períodos iguales</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-check-line text-2xl text-black"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Garantía</h4>
                <p className="text-gray-300">Seguimiento completo hasta obtener el registro</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-8">
              ¿Listo para proteger tu marca? Contáctanos hoy para comenzar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5219211453200?text=Hola%2C%20me%20interesa%20registrar%20mi%20marca%20ante%20el%20IMPI.%20%C2%BFPodr%C3%ADan%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proceso%20y%20costos%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
              >
                Registrar Mi Marca
              </a>
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
