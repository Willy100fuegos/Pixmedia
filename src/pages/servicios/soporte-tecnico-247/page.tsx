
import { Suspense } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppWidget from '../../../components/base/WhatsAppWidget';

export default function SoporteTecnico247Page() {
  const handleContactClick = () => {
    const message = "Hola, me interesa el servicio de Soporte Técnico 24/7 de Nivel 1/2. ¿Podrían proporcionarme más información?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5219211453200?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://www.doonamis.com/wp-content/uploads/2022/10/Software-de-Mantenimiento-CMMS-1024x536-1.jpg')`
        }}
      >
        <div className="text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">Soporte Técnico 24/7 de Nivel 1/2</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Asistencia técnica continua para resolver incidentes y garantizar la operación óptima de tu sitio web
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Service Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Soporte Profesional Continuo</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Disponibilidad 24/7</h3>
                  <p className="text-gray-300">Equipo técnico disponible las 24 horas, los 7 días de la semana para resolver cualquier incidente.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Respuesta Inmediata</h3>
                  <p className="text-gray-300">Tiempo de respuesta garantizado: Nivel 1 en 15 minutos, Nivel 2 en 1 hora.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Múltiples Canales</h3>
                  <p className="text-gray-300">Soporte vía WhatsApp, email, teléfono y sistema de tickets para máxima accesibilidad.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Monitoreo Proactivo</h3>
                  <p className="text-gray-300">Supervisión continua para detectar y resolver problemas antes de que afecten a los usuarios.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Niveles de Soporte</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-lg text-green-400">Nivel 1 - Soporte Básico</h4>
                <p className="text-sm text-gray-300 mb-2">Resolución de incidentes comunes y consultas generales</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Problemas de acceso y contraseñas</li>
                  <li>• Consultas sobre funcionalidades</li>
                  <li>• Errores menores de visualización</li>
                  <li>• Actualizaciones de contenido</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-lg text-blue-400">Nivel 2 - Soporte Avanzado</h4>
                <p className="text-sm text-gray-300 mb-2">Resolución de problemas técnicos complejos</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Errores de servidor y base de datos</li>
                  <li>• Problemas de rendimiento</li>
                  <li>• Configuración de plugins</li>
                  <li>• Resolución de conflictos técnicos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Support Channels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Canales de Soporte Disponibles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-whatsapp-line text-4xl text-green-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">WhatsApp</h3>
              <p className="text-gray-300 text-sm">Respuesta inmediata para consultas urgentes y soporte rápido</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-mail-line text-4xl text-blue-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Email</h3>
              <p className="text-gray-300 text-sm">Soporte detallado con documentación y seguimiento completo</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-phone-line text-4xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Teléfono</h3>
              <p className="text-gray-300 text-sm">Asistencia directa para problemas críticos que requieren atención inmediata</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-ticket-line text-4xl text-orange-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Sistema de Tickets</h3>
              <p className="text-gray-300 text-sm">Gestión organizada de incidentes con seguimiento y priorización</p>
            </div>
          </div>
        </div>

        {/* Response Times */}
        <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white p-12 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">Tiempos de Respuesta Garantizados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <i className="ri-timer-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Crítico</h3>
              <p className="text-2xl font-bold text-yellow-400 mb-2">15 minutos</p>
              <p>Sitio web caído o problemas de seguridad</p>
            </div>
            <div className="text-center">
              <i className="ri-alarm-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Alto</h3>
              <p className="text-2xl font-bold text-yellow-400 mb-2">1 hora</p>
              <p>Funcionalidades importantes no operativas</p>
            </div>
            <div className="text-center">
              <i className="ri-time-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Normal</h3>
              <p className="text-2xl font-bold text-yellow-400 mb-2">4 horas</p>
              <p>Consultas generales y mejoras menores</p>
            </div>
          </div>
        </div>

        {/* Services Included */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Servicios Incluidos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-bug-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Resolución de Errores</h3>
              <p className="text-gray-300">Diagnóstico y corrección de errores técnicos, bugs y problemas de funcionamiento.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-shield-check-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Monitoreo de Seguridad</h3>
              <p className="text-gray-300">Supervisión continua de amenazas y vulnerabilidades de seguridad.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-speed-up-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Optimización de Rendimiento</h3>
              <p className="text-gray-300">Mejoras de velocidad y optimización de recursos del servidor.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-refresh-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Actualizaciones</h3>
              <p className="text-gray-300">Gestión de actualizaciones de WordPress, plugins y temas de forma segura.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-database-2-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Mantenimiento de Base de Datos</h3>
              <p className="text-gray-300">Optimización y limpieza de la base de datos para mejor rendimiento.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-customer-service-2-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Capacitación</h3>
              <p className="text-gray-300">Entrenamiento continuo para el uso eficiente de tu sitio web.</p>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Planes de Soporte</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Básico</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-purple-400">$499</span>
                <span className="text-gray-300">/mes</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Soporte Nivel 1</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Horario laboral (8am-6pm)</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> WhatsApp y Email</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> 5 incidentes/mes</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border-2 border-purple-600">
              <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold text-center mb-4">Recomendado</div>
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Profesional</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-purple-400">$899</span>
                <span className="text-gray-300">/mes</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Soporte Nivel 1 y 2</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> 24/7 disponibilidad</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Todos los canales</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Incidentes ilimitados</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Monitoreo proactivo</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Empresarial</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-purple-400">$1,499</span>
                <span className="text-gray-300">/mes</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Soporte dedicado</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Técnico asignado</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> SLA personalizado</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Acceso prioritario</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Reportes mensuales</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Team */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Nuestro Equipo Técnico</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">Ingenieros Certificados</h3>
                <p className="text-gray-300">Profesionales con certificaciones en WordPress, servidores y ciberseguridad</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">Experiencia Comprobada</h3>
                <p className="text-gray-300">Más de 5 años de experiencia resolviendo incidentes técnicos complejos</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">Capacitación Continua</h3>
                <p className="text-gray-300">Actualización constante en nuevas tecnologías y mejores prácticas</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Garantías de Servicio</h2>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">99.9% de disponibilidad del servicio</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Resolución garantizada en tiempos establecidos</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Escalamiento automático a nivel superior</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Documentación completa de cada incidente</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Reportes mensuales de actividad</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-12 rounded-2xl border border-purple-500/20">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">¿Necesitas soporte técnico confiable?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para mantener tu sitio web funcionando perfectamente las 24 horas
          </p>
          <button
            onClick={handleContactClick}
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors whitespace-nowrap"
          >
            Contratar Soporte Ahora
          </button>
        </div>
      </div>

      <Footer />
      <Suspense fallback={null}>
        <WhatsAppWidget />
      </Suspense>
    </div>
  );
}
