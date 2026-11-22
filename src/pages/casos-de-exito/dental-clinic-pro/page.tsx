import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function DentalClinicProPage() {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Modern%20dental%20clinic%20interior%20with%20digital%20appointment%20system%2C%20professional%20dental%20equipment%2C%20clean%20white%20environment%20with%20technology%20integration%2C%20patient%20management%20dashboard&width=1920&height=800&seq=dental-clinic-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight">
              Dental Clinic Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Sistema de Citas Online para Clínica Dental
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                CORPORATIVO
              </span>
              <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                OPTIMIZACIÓN
              </span>
            </div>
          </div>

          {/* Métricas Destacadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-6 border border-purple-500/20">
              <div className="text-4xl font-black text-yellow-400 mb-2">240%</div>
              <div className="text-gray-300">Eficiencia en Gestión de Citas</div>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-6 border border-purple-500/20">
              <div className="text-4xl font-black text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300">Satisfacción del Paciente</div>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-6 border border-purple-500/20">
              <div className="text-4xl font-black text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Disponibilidad del Sistema</div>
            </div>
          </div>
        </div>
      </section>

      {/* Desafío y Solución */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Desafío */}
            <div>
              <h2 className="text-4xl font-black text-yellow-400 mb-8">
                El Desafío
              </h2>
              <div className="bg-gradient-to-br from-red-900/20 to-gray-900/30 rounded-2xl p-8 border border-red-500/20">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Dental Clinic Pro enfrentaba serios problemas con la gestión manual de citas, lo que generaba:
                </p>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <i className="ri-close-circle-line text-red-400 text-xl mr-3 mt-1"></i>
                    <span>Dobles citas y conflictos de horarios constantes</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-close-circle-line text-red-400 text-xl mr-3 mt-1"></i>
                    <span>Pérdida de pacientes por falta de recordatorios</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-close-circle-line text-red-400 text-xl mr-3 mt-1"></i>
                    <span>Gestión ineficiente de historiales médicos</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-close-circle-line text-red-400 text-xl mr-3 mt-1"></i>
                    <span>Tiempo excesivo en tareas administrativas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solución */}
            <div>
              <h2 className="text-4xl font-black text-yellow-400 mb-8">
                La Solución
              </h2>
              <div className="bg-gradient-to-br from-green-900/20 to-gray-900/30 rounded-2xl p-8 border border-green-500/20">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Desarrollamos una plataforma integral de gestión dental que automatizó completamente sus procesos:
                </p>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <i className="ri-check-circle-line text-green-400 text-xl mr-3 mt-1"></i>
                    <span>Sistema de citas online con prevención de conflictos</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-circle-line text-green-400 text-xl mr-3 mt-1"></i>
                    <span>Recordatorios automáticos por SMS y email</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-circle-line text-green-400 text-xl mr-3 mt-1"></i>
                    <span>Portal del paciente con historial digital</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-circle-line text-green-400 text-xl mr-3 mt-1"></i>
                    <span>Dashboard administrativo completo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados y Características */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 text-center mb-16">
            Resultados Transformadores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-calendar-check-line text-black text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Sistema de Citas Inteligente</h3>
              <p className="text-gray-400">Agendamiento online 24/7 con prevención automática de conflictos de horarios.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-user-heart-line text-black text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Portal del Paciente</h3>
              <p className="text-gray-400">Acceso completo a historial médico, citas programadas y resultados de tratamientos.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-notification-3-line text-black text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Recordatorios Automáticos</h3>
              <p className="text-gray-400">Sistema inteligente de notificaciones por SMS y email para reducir ausencias.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-file-text-line text-black text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Historial Digital</h3>
              <p className="text-gray-400">Gestión completa de expedientes médicos con acceso rápido y seguro.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-dashboard-3-line text-black text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Dashboard Administrativo</h3>
              <p className="text-gray-400">Panel de control completo con métricas, reportes y gestión operativa.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-black text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Seguridad Médica</h3>
              <p className="text-gray-400">Cumplimiento total con normativas de privacidad y protección de datos médicos.</p>
            </div>
          </div>

          {/* Métricas de Impacto */}
          <div className="bg-gradient-to-r from-purple-900/30 to-gray-900/30 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-yellow-400 text-center mb-8">Impacto Medible</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-yellow-400 mb-2">240%</div>
                <div className="text-gray-300 text-sm">Mejora en Eficiencia</div>
              </div>
              <div>
                <div className="text-3xl font-black text-yellow-400 mb-2">85%</div>
                <div className="text-gray-300 text-sm">Reducción de Ausencias</div>
              </div>
              <div>
                <div className="text-3xl font-black text-yellow-400 mb-2">95%</div>
                <div className="text-gray-300 text-sm">Satisfacción del Paciente</div>
              </div>
              <div>
                <div className="text-3xl font-black text-yellow-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Pacientes Gestionados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-900">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl p-12 border border-purple-500/20">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8">
              <i className="ri-user-smile-line text-black text-3xl"></i>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-200 italic leading-relaxed mb-8">
              "La plataforma de Pixmedia transformó completamente nuestra clínica. Ahora podemos enfocarnos en lo que realmente importa: brindar el mejor cuidado dental a nuestros pacientes."
            </blockquote>
            <div className="text-yellow-400 font-bold text-lg">
              Dr. María González
            </div>
            <div className="text-gray-400">
              Directora General - Dental Clinic Pro
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
            ¿Listo para Digitalizar tu Clínica?
          </h2>
          <p className="text-xl text-white mb-10 leading-relaxed">
            Únete a las clínicas que han transformado su gestión con nuestras soluciones tecnológicas especializadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5219211453200"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
            >
              <i className="ri-whatsapp-line mr-2"></i>
              Consulta Gratuita
            </a>
            <Link 
              to="/casos-de-exito"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all whitespace-nowrap"
            >
              Ver Más Casos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}