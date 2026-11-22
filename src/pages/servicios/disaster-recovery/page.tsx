
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function DisasterRecovery() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://images.wondershare.com/recoverit/article/2019/11/data-recovery-1.jpg')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6 leading-tight">
              Disaster Recovery
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Estrategias de continuidad de negocio y backup automático para proteger sus datos críticos
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Estrategias de Disaster Recovery y Backup
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Diseñamos e implementamos planes de recuperación ante desastres que garantizan la continuidad de su negocio. Backup automatizado, replicación de datos y procedimientos de recuperación probados para minimizar el tiempo de inactividad.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-save-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Backup automático multi-sitio</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-refresh-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Replicación en tiempo real</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-time-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">RTO/RPO optimizados</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-test-tube-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Pruebas regulares de recuperación</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Disaster%20recovery%20data%20center%20with%20backup%20systems%2C%20redundant%20servers%2C%20and%20emergency%20response%20infrastructure%20in%20a%20secure%20facility%20with%20purple%20and%20yellow%20lighting%2C%20professional%20business%20continuity%20environment&width=600&height=400&seq=disaster1&orientation=landscape"
                alt="Disaster Recovery Infrastructure"
                className="w-full h-96 object-cover object-top rounded-lg"
              />
            </div>
          </div>

          {/* Strategy Components */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-file-copy-2-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Backup Estratégico</h3>
              <p className="text-gray-300">Copias incrementales, diferenciales y completas con retención personalizada.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-building-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Sitio Secundario</h3>
              <p className="text-gray-300">Infraestructura de respaldo geográficamente distribuida.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-play-circle-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Failover Automático</h3>
              <p className="text-gray-300">Conmutación automática a sistemas de respaldo sin intervención manual.</p>
            </div>
          </div>

          {/* Metrics Section */}
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 p-12 rounded-lg border border-purple-700/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Objetivos de Recuperación</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <i className="ri-timer-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">RTO</h4>
                <p className="text-gray-300 text-sm">Recovery Time Objective &lt; 4 horas</p>
              </div>
              <div className="text-center">
                <i className="ri-database-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">RPO</h4>
                <p className="text-gray-300 text-sm">Recovery Point Objective &lt; 1 hora</p>
              </div>
              <div className="text-center">
                <i className="ri-check-double-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Disponibilidad</h4>
                <p className="text-gray-300 text-sm">99.9% uptime garantizado</p>
              </div>
              <div className="text-center">
                <i className="ri-shield-check-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Integridad</h4>
                <p className="text-gray-300 text-sm">Verificación automática de datos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
