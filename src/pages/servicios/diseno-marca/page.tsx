
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function DisenoMarca() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Creative%20brand%20design%20studio%20with%20logo%20concepts%2C%20color%20palettes%2C%20typography%20samples%2C%20brand%20identity%20guidelines%2C%20and%20corporate%20design%20elements%20in%20purple%20and%20yellow%20tech%20aesthetic%2C%20modern%20graphic%20design%20workspace&width=1920&height=800&seq=brand-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight">
            Diseño de Marca
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Identidad Corporativa Digital. Creación de logotipos, manuales de marca y guías de estilo que definen la personalidad única de su empresa.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-7xl mx-auto">
          
          {/* Introducción */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
              🎨 Identidad Visual Estratégica
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Desarrollamos identidades de marca memorables y coherentes que conectan emocionalmente con su audiencia. Cada proyecto incluye investigación de mercado, conceptualización creativa y entregables completos para implementación digital y física.
            </p>
          </div>

          {/* Servicios Principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-brush-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Diseño de Logotipo</h3>
              <p className="text-gray-300 leading-relaxed">
                Creación de logos únicos y versátiles. Incluye versiones horizontal, vertical, monocromática y favicon.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-palette-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Paleta de Colores</h3>
              <p className="text-gray-300 leading-relaxed">
                Selección estratégica de colores primarios y secundarios con códigos HEX, RGB y CMYK.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-font-size-2 text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Tipografía Corporativa</h3>
              <p className="text-gray-300 leading-relaxed">
                Selección de familias tipográficas para títulos, subtítulos y texto corrido en medios digitales.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-book-open-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Manual de Marca</h3>
              <p className="text-gray-300 leading-relaxed">
                Guía completa de uso, espacios de respeto, aplicaciones correctas e incorrectas del logo.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-layout-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Aplicaciones Digitales</h3>
              <p className="text-gray-300 leading-relaxed">
                Adaptación para redes sociales, web, email marketing y aplicaciones móviles.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-file-paper-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Papelería Corporativa</h3>
              <p className="text-gray-300 leading-relaxed">
                Diseño de tarjetas de presentación, membrete, sobres y documentos oficiales.
              </p>
            </div>
          </div>

          {/* Proceso de Diseño */}
          <div className="bg-gradient-to-r from-purple-900/20 to-gray-900/20 p-12 rounded-3xl border border-purple-500/20 mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Proceso de Diseño</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">1</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Investigación</h4>
                <p className="text-gray-300">Análisis de mercado, competencia y definición de personalidad de marca.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">2</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Conceptualización</h4>
                <p className="text-gray-300">Desarrollo de conceptos creativos y bocetos iniciales.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">3</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Diseño</h4>
                <p className="text-gray-300">Creación digital de propuestas y refinamiento de detalles.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">4</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Entrega</h4>
                <p className="text-gray-300">Manual de marca completo y archivos en todos los formatos.</p>
              </div>
            </div>
          </div>

          {/* Entregables */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Entregables Incluidos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-purple-500/20">
                <h4 className="text-xl font-bold text-white mb-4">Archivos de Logo</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Formato vectorial (AI, EPS, SVG)</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Formato raster (PNG, JPG) alta resolución</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Versiones en color, blanco y negro</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Favicon para web (ICO, PNG)</li>
                </ul>
              </div>
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-purple-500/20">
                <h4 className="text-xl font-bold text-white mb-4">Documentación</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Manual de identidad visual (PDF)</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Guía de colores y tipografías</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Plantillas para redes sociales</li>
                  <li className="flex items-center"><i className="ri-check-line text-yellow-400 mr-3"></i>Mockups de aplicación</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-8">
              ¿Listo para crear una identidad de marca que destaque en el mercado?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacto"
                className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
              >
                Crear Mi Marca
              </Link>
              <Link 
                to="/casos-de-exito"
                className="border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all whitespace-nowrap"
              >
                Ver Portafolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
