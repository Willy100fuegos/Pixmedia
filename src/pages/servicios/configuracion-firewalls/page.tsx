
import { Suspense } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppWidget from '../../../components/base/WhatsAppWidget';

export default function ConfiguracionFirewallsPage() {
  const handleContactClick = () => {
    const message = "Hola, me interesa el servicio de Configuración de Firewalls (WAF). ¿Podrían proporcionarme más información?";
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://pixmedia.b-cdn.net/willy100fuegos_Una_fotografia_ultrarrealista_de_un_sitio_web_pr_622cfa44-3a7d-453f-b7fe-826d8f3fe480%5B1%5D.webp')`
        }}
      >
        <div className="text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">Configuración de Firewalls (WAF)</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Instalación y gestión de firewalls de aplicaciones web para protección avanzada contra ataques cibernéticos
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Service Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Protección Avanzada Web</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Firewall de Aplicaciones Web</h3>
                  <p className="text-gray-300">Protección en tiempo real contra ataques SQL injection, XSS, CSRF y más vulnerabilidades.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Filtrado de Tráfico Malicioso</h3>
                  <p className="text-gray-300">Bloqueo automático de IPs sospechosas, bots maliciosos y ataques DDoS.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Monitoreo 24/7</h3>
                  <p className="text-gray-300">Supervisión continua de amenazas con alertas inmediatas ante intentos de intrusión.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-check-line text-2xl text-purple-400 mr-3 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-lg text-white">Reglas Personalizadas</h3>
                  <p className="text-gray-300">Configuración específica según las necesidades y vulnerabilidades de tu aplicación web.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Proceso de Implementación</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                <div>
                  <h4 className="font-semibold text-white">Auditoría de Seguridad</h4>
                  <p className="text-sm text-gray-300">Análisis completo de vulnerabilidades actuales</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h4 className="font-semibold text-white">Configuración WAF</h4>
                  <p className="text-sm text-gray-300">Instalación y configuración del firewall</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h4 className="font-semibold text-white">Pruebas de Penetración</h4>
                  <p className="text-sm text-gray-300">Validación de la efectividad de la protección</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                <div>
                  <h4 className="font-semibold text-white">Monitoreo Continuo</h4>
                  <p className="text-sm text-gray-300">Supervisión y ajustes constantes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Threat Protection */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Tipos de Amenazas Bloqueadas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-bug-line text-3xl text-red-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">SQL Injection</h3>
              <p className="text-gray-300">Protección contra inyecciones de código malicioso en bases de datos.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-code-s-slash-line text-3xl text-red-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Cross-Site Scripting (XSS)</h3>
              <p className="text-gray-300">Bloqueo de scripts maliciosos insertados en páginas web.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-shield-cross-line text-3xl text-red-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Ataques DDoS</h3>
              <p className="text-gray-300">Mitigación de ataques de denegación de servicio distribuido.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-user-forbid-line text-3xl text-red-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Fuerza Bruta</h3>
              <p className="text-gray-300">Prevención de ataques de fuerza bruta en formularios de login.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-file-damage-line text-3xl text-red-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Malware</h3>
              <p className="text-gray-300">Detección y bloqueo de software malicioso y virus.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <i className="ri-spam-line text-3xl text-red-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Bots Maliciosos</h3>
              <p className="text-gray-300">Filtrado de tráfico automatizado no deseado y scraping.</p>
            </div>
          </div>
        </div>

        {/* WAF Features */}
        <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white p-12 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">Características del WAF</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <i className="ri-time-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Protección en Tiempo Real</h3>
              <p>Análisis y bloqueo instantáneo de amenazas sin afectar el rendimiento</p>
            </div>
            <div className="text-center">
              <i className="ri-brain-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Inteligencia Artificial</h3>
              <p>Machine learning para detectar nuevas amenazas y patrones de ataque</p>
            </div>
            <div className="text-center">
              <i className="ri-settings-3-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Configuración Flexible</h3>
              <p>Reglas personalizables según las necesidades específicas de tu aplicación</p>
            </div>
          </div>
        </div>

        {/* WAF Providers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Soluciones WAF Disponibles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-cloud-line text-4xl text-orange-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Cloudflare</h3>
              <p className="text-gray-300 text-sm">WAF global con CDN integrado y protección DDoS</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-amazon-line text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">AWS WAF</h3>
              <p className="text-gray-300 text-sm">Firewall nativo de Amazon Web Services</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-microsoft-line text-4xl text-blue-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Azure WAF</h3>
              <p className="text-gray-300 text-sm">Solución de Microsoft Azure con integración completa</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 text-center hover:border-yellow-400/50 transition-all">
              <i className="ri-shield-check-line text-4xl text-green-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-3 text-white">Sucuri</h3>
              <p className="text-gray-300 text-sm">WAF especializado en WordPress y CMS</p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Especificaciones Técnicas</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">Latencia Mínima</h3>
                <p className="text-gray-300">Menos de 5ms de latencia adicional en el procesamiento de requests</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">Capacidad de Tráfico</h3>
                <p className="text-gray-300">Manejo de millones de requests por segundo sin degradación</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">Actualizaciones Automáticas</h3>
                <p className="text-gray-300">Base de datos de amenazas actualizada en tiempo real</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold text-lg text-white">Compatibilidad</h3>
                <p className="text-gray-300">Soporte para HTTP/HTTPS, WebSockets y APIs REST</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Reportes y Monitoreo</h2>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Dashboard en tiempo real de amenazas</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Alertas automáticas por email/SMS</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Reportes mensuales de seguridad</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Logs detallados de todos los eventos</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  <span className="text-gray-300">Análisis de tendencias de ataques</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Planes de Protección WAF</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Básico</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-purple-400">$199</span>
                <span className="text-gray-300">/mes</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Protección estándar OWASP</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Hasta 100K requests/mes</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Reportes básicos</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Soporte por email</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border-2 border-purple-600">
              <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold text-center mb-4">Recomendado</div>
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Profesional</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-purple-400">$399</span>
                <span className="text-gray-300">/mes</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Protección avanzada + IA</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Hasta 1M requests/mes</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Dashboard en tiempo real</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Soporte 24/7</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Reglas personalizadas</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-8 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Empresarial</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-purple-400">$799</span>
                <span className="text-gray-300">/mes</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Protección enterprise</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Requests ilimitados</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> SLA 99.99% uptime</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Soporte dedicado</span></li>
                <li className="flex items-center"><i className="ri-check-line text-green-400 mr-2"></i><span className="text-gray-300"> Configuración personalizada</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-12 rounded-2xl border border-purple-500/20">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">¿Listo para proteger tu sitio web?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Implementamos un firewall de aplicaciones web robusto que protege tu sitio contra las amenazas más avanzadas
          </p>
          <button
            onClick={handleContactClick}
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors whitespace-nowrap"
          >
            Implementar WAF Ahora
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
