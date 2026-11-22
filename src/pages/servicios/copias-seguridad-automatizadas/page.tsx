
import { Suspense } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppWidget from '../../../components/base/WhatsAppWidget';

export default function CopiasSeguridadAutomatizadasPage() {
  const handleContactClick = () => {
    const message = "Hola, me interesa el servicio de Copias de Seguridad Automatizadas. ¿Podrían proporcionarme más información?";
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://pixmedia.b-cdn.net/willy100fuegos_A_realistic_photograph_of_a_small_business_offic_06512fff-da89-4ffc-9bbd-5bd893116024%5B1%5D.png')`
        }}
      >
        <div className="text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">Copias de Seguridad Automatizadas</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Soluciones de backup en la nube, recuperación ante desastres y restauración rápida para proteger tu información
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Service Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Protección Total de Datos</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Backups Automáticos</h3>
                  <p className="text-gray-300">Copias de seguridad programadas diariamente sin intervención manual.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Almacenamiento en la Nube</h3>
                  <p className="text-gray-300">Respaldos seguros en múltiples ubicaciones geográficas con encriptación.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Restauración Rápida</h3>
                  <p className="text-gray-300">Recuperación completa del sitio en menos de 30 minutos.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Monitoreo 24/7</h3>
                  <p className="text-gray-300">Supervisión continua del estado de los backups y alertas automáticas.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Proceso de Backup</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                <div>
                  <h4 className="font-semibold text-white">Configuración Inicial</h4>
                  <p className="text-sm text-gray-300">Setup de horarios y frecuencia de respaldos</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h4 className="font-semibold text-white">Backup Automático</h4>
                  <p className="text-sm text-gray-300">Copia completa de archivos y base de datos</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h4 className="font-semibold text-white">Verificación</h4>
                  <p className="text-sm text-gray-300">Validación de integridad de los respaldos</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                <div>
                  <h4 className="font-semibold text-white">Almacenamiento Seguro</h4>
                  <p className="text-sm text-gray-300">Encriptación y almacenamiento en múltiples ubicaciones</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Backup Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Tipos de Respaldo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-database-2-line text-4xl text-blue-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-4 text-white">Backup Completo</h3>
              <p className="text-gray-300 mb-4">Copia total de todos los archivos, base de datos y configuraciones del sitio web.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Archivos del sitio</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Base de datos</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Configuraciones</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Plugins y temas</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border-2 border-purple-600">
              <i className="ri-refresh-line text-4xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-4 text-white">Backup Incremental</h3>
              <p className="text-gray-300 mb-4">Solo respalda los cambios realizados desde el último backup, optimizando espacio y tiempo.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Cambios recientes</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Menor uso de espacio</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Backup más rápido</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Eficiencia optimizada</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-time-line text-4xl text-green-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-4 text-white">Backup en Tiempo Real</h3>
              <p className="text-gray-300 mb-4">Respaldo continuo de cambios críticos para máxima protección de datos.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Protección continua</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Pérdida mínima de datos</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Sincronización automática</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Máxima seguridad</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white p-12 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">Seguridad de Nivel Empresarial</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <i className="ri-lock-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Encriptación AES-256</h3>
              <p>Todos los backups están protegidos con encriptación de grado militar</p>
            </div>
            <div className="text-center">
              <i className="ri-global-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Múltiples Ubicaciones</h3>
              <p>Respaldos distribuidos en diferentes centros de datos geográficamente</p>
            </div>
            <div className="text-center">
              <i className="ri-shield-check-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Verificación de Integridad</h3>
              <p>Validación automática de la integridad de cada backup realizado</p>
            </div>
          </div>
        </div>

        {/* Recovery Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Opciones de Recuperación</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-download-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-lg font-semibold mb-3 text-white">Restauración Completa</h3>
              <p className="text-gray-300 text-sm">Recuperación total del sitio web a un estado anterior específico</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-file-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-lg font-semibold mb-3 text-white">Archivos Específicos</h3>
              <p className="text-gray-300 text-sm">Recuperación selectiva de archivos o carpetas individuales</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-database-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-lg font-semibold mb-3 text-white">Base de Datos</h3>
              <p className="text-gray-300 text-sm">Restauración específica de la base de datos sin afectar archivos</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-server-line text-3xl text-purple-400 mb-4"></i>
              <h3 className="text-lg font-semibold mb-3 text-white">Migración</h3>
              <p className="text-gray-300 text-sm">Restauración en un servidor diferente para migración o testing</p>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Planes de Backup</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Básico</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-purple-400">$299</span>
                <span className="text-gray-300">/mes</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Backup diario automático</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> 30 días de retención</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Almacenamiento 10GB</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Soporte por email</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border-2 border-purple-600">
              <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold text-center mb-4">Recomendado</div>
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Profesional</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-purple-400">$599</span>
                <span className="text-gray-300">/mes</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Backup cada 6 horas</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> 90 días de retención</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Almacenamiento 50GB</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Soporte prioritario 24/7</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Múltiples ubicaciones</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Empresarial</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-purple-400">$999</span>
                <span className="text-gray-300">/mes</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Backup en tiempo real</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Retención ilimitada</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Almacenamiento ilimitado</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Soporte dedicado</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> SLA 99.9% uptime</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Especificaciones Técnicas</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">Compatibilidad</h3>
                <p className="text-gray-300">WordPress, Joomla, Drupal, sitios HTML estáticos y aplicaciones personalizadas</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">Proveedores de Nube</h3>
                <p className="text-gray-300">AWS S3, Google Cloud Storage, Microsoft Azure, Dropbox</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">Compresión</h3>
                <p className="text-gray-300">Algoritmos avanzados que reducen el tamaño hasta 80%</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">Automatización</h3>
                <p className="text-gray-300">Scripts personalizados y webhooks para procesos automatizados</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Garantías y SLA</h2>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">99.9% de disponibilidad garantizada</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Recuperación en menos de 30 minutos</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Monitoreo 24/7 sin interrupciones</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Soporte técnico especializado</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Garantía de integridad de datos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-12 rounded-2xl border border-purple-500/20">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">¿Listo para proteger tu sitio web?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            No esperes a perder información valiosa. Implementamos un sistema de backup robusto y confiable
          </p>
          <button
            onClick={handleContactClick}
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors whitespace-nowrap"
          >
            Proteger Mi Sitio Ahora
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
