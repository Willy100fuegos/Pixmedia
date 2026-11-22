
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function OptimizacionWebUX() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Web%20optimization%20and%20UX%20improvement%20workspace%20with%20speed%20testing%20tools%2C%20user%20experience%20analytics%2C%20server%20performance%20monitoring%2C%20and%20website%20debugging%20interfaces%20in%20purple%20and%20yellow%20tech%20aesthetic&width=1920&height=800&seq=webux-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight">
            Optimización Web & UX
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Mejora Integral de Performance. Optimización de portales web lentos, mejora de velocidad y corrección de errores de servidor y correo.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-7xl mx-auto">
          
          {/* Introducción */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
              ⚡ Optimización Integral de Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transformamos sitios web lentos y defectuosos en experiencias digitales rápidas y eficientes. Nuestro servicio incluye optimización de velocidad, mejora de UX, corrección de errores críticos y optimización de servidores para garantizar el máximo rendimiento.
            </p>
          </div>

          {/* Servicios Principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-speed-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Optimización de Velocidad</h3>
              <p className="text-gray-300 leading-relaxed">
                Mejora de tiempos de carga, compresión de imágenes, minificación de código y optimización de recursos.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-user-heart-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Mejora de UX</h3>
              <p className="text-gray-300 leading-relaxed">
                Rediseño de interfaces, optimización de navegación y mejora de la experiencia del usuario.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-tools-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Corrección de Errores</h3>
              <p className="text-gray-300 leading-relaxed">
                Identificación y solución de errores 404, problemas de servidor y fallos de funcionalidad.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-server-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Optimización de Servidor</h3>
              <p className="text-gray-300 leading-relaxed">
                Configuración de caché, optimización de base de datos y mejora de recursos del servidor.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-mail-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Corrección de Email</h3>
              <p className="text-gray-300 leading-relaxed">
                Solución de problemas de entrega de correos, configuración SMTP y filtros anti-spam.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-smartphone-line text-2xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Responsive Design</h3>
              <p className="text-gray-300 leading-relaxed">
                Adaptación completa para dispositivos móviles y tablets con diseño responsive.
              </p>
            </div>
          </div>

          {/* Problemas que Solucionamos */}
          <div className="bg-gradient-to-r from-red-900/20 to-gray-900/20 p-12 rounded-3xl border border-red-500/20 mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Problemas Comunes que Solucionamos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Problemas de Performance</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><i className="ri-close-circle-line text-red-400 mr-3"></i>Sitio web extremadamente lento</li>
                  <li className="flex items-center"><i className="ri-close-circle-line text-red-400 mr-3"></i>Imágenes sin optimizar</li>
                  <li className="flex items-center"><i className="ri-close-circle-line text-red-400 mr-3"></i>Código CSS/JS no minificado</li>
                  <li className="flex items-center"><i className="ri-close-circle-line text-red-400 mr-3"></i>Falta de sistema de caché</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Problemas Técnicos</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><i className="ri-close-circle-line text-red-400 mr-3"></i>Errores 404 y enlaces rotos</li>
                  <li className="flex items-center"><i className="ri-close-circle-line text-red-400 mr-3"></i>Formularios que no funcionan</li>
                  <li className="flex items-center"><i className="ri-close-circle-line text-red-400 mr-3"></i>Problemas de email delivery</li>
                  <li className="flex items-center"><i className="ri-close-circle-line text-red-400 mr-3"></i>Incompatibilidad móvil</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Proceso de Optimización */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Proceso de Optimización</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">1</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Auditoría Técnica</h4>
                <p className="text-gray-300">Análisis completo de performance, errores y problemas de UX.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">2</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Plan de Acción</h4>
                <p className="text-gray-300">Priorización de mejoras y cronograma de implementación.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">3</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Implementación</h4>
                <p className="text-gray-300">Ejecución de optimizaciones y correcciones técnicas.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">4</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Validación</h4>
                <p className="text-gray-300">Testing exhaustivo y medición de mejoras obtenidas.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-8">
              ¿Su sitio web está lento o presenta errores? Optimicémoslo juntos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacto"
                className="bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
              >
                Solicitar Auditoría
              </Link>
              <Link 
                to="/casos-de-exito"
                className="border-2 border-yellow-400 text-yellow-400 px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all whitespace-nowrap"
              >
                Ver Mejoras Logradas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
