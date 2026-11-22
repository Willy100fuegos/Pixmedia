import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

export default function GoratCaseStudy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-900 via-gray-900 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  CONSULTORÍA IT
                </span>
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                  OPTIMIZACIÓN
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black text-yellow-400 mb-6 leading-tight">
                Gorat
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Plataforma Tecnológica Integral con Nube Corporativa, Short URLs, Buzón de Rondines y Consultoría IT Avanzada. Socio tecnológico desde 2018.
              </p>
              
              <div className="bg-gradient-to-r from-purple-600/20 to-yellow-400/20 p-6 rounded-2xl border border-purple-500/30">
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-400 mb-2">95%</div>
                  <div className="text-gray-300 font-semibold">Mejora en Eficiencia Operativa</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="https://pixmedia.b-cdn.net/wp-content/uploads/2023/11/tecuidamos.png"
                  alt="Gorat - Plataforma Tecnológica"
                  className="max-w-full h-auto rounded-2xl shadow-2xl border border-purple-500/30"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-yellow-400/20 rounded-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-yellow-400 mb-12 text-center">
            El Desafío
          </h2>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/50 p-8 rounded-2xl border border-purple-500/20">
            <p className="text-xl text-gray-300 leading-relaxed text-center">
              Gorat necesitaba una transformación tecnológica integral para optimizar sus procesos operativos, 
              mejorar la comunicación interna y establecer una infraestructura digital robusta que soportara 
              su crecimiento empresarial a largo plazo.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-yellow-400 mb-16 text-center">
            Nuestra Solución
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "ri-cloud-line",
                title: "Nube Corporativa Personalizada",
                description: "Implementación de infraestructura en la nube con almacenamiento seguro, backup automático y acceso remoto optimizado."
              },
              {
                icon: "ri-links-line",
                title: "Sistema de Short URLs",
                description: "Plataforma personalizada para gestión de enlaces cortos con analytics avanzados y tracking de conversiones."
              },
              {
                icon: "ri-mail-line",
                title: "Buzón Interno de Solicitudes",
                description: "Sistema de comunicación interna para gestión eficiente de solicitudes, tareas y seguimiento de proyectos."
              },
              {
                icon: "ri-qr-code-line",
                title: "Registro de Rondines con QR",
                description: "Implementación de sistema de registro de actividades mediante códigos QR para control y seguimiento operativo."
              }
            ].map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-2xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${solution.icon} text-2xl text-black`}></i>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">{solution.title}</h3>
                <p className="text-gray-300 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-yellow-400 mb-16 text-center">
            Resultados Obtenidos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                metric: "95%",
                label: "Mejora en Eficiencia Operativa",
                description: "Optimización completa de procesos internos"
              },
              {
                metric: "6+",
                label: "Años de Sociedad Tecnológica",
                description: "Relación estratégica desde 2018"
              },
              {
                metric: "100%",
                label: "Disponibilidad del Sistema",
                description: "Infraestructura robusta y confiable"
              }
            ].map((result, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-2xl border border-purple-500/20">
                <div className="text-5xl font-black text-yellow-400 mb-4">{result.metric}</div>
                <div className="text-xl font-bold text-white mb-3">{result.label}</div>
                <div className="text-gray-400">{result.description}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-purple-600/20 to-yellow-400/20 p-8 rounded-2xl border border-purple-500/30 text-center">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Impacto Transformacional</h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              La implementación de nuestra solución tecnológica integral ha transformado completamente 
              la operación de Gorat, estableciendo una infraestructura digital sólida que ha permitido 
              un crecimiento sostenible y una mejora continua en todos sus procesos empresariales.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <i className="ri-double-quotes-l text-6xl text-yellow-400 opacity-50"></i>
          </div>
          <blockquote className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed">
            "La transformación digital implementada por Pixmedia ha sido fundamental para nuestro 
            crecimiento. La eficiencia operativa que hemos logrado nos ha permitido enfocarnos en 
            lo que realmente importa: servir mejor a nuestros clientes."
          </blockquote>
          <div className="text-yellow-400 font-semibold text-xl">
            Equipo Directivo - Gorat
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
            ¿Listo para Transformar Su Empresa?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Descubra cómo nuestras soluciones tecnológicas pueden optimizar sus procesos 
            y impulsar el crecimiento de su negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5219211453200"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
            >
              <i className="ri-whatsapp-line mr-2"></i>
              Iniciar Mi Transformación
            </a>
            <Link 
              to="/casos-de-exito"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all whitespace-nowrap"
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