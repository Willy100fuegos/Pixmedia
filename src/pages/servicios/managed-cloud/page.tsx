
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function ManagedCloud() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://techvits.com/web/wp-content/uploads/2024/06/cloud-managed-services2.jpg')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6 leading-tight">
              Managed Cloud
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Gestión completa de servicios cloud AWS, Azure y GCP con optimización continua
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
                Gestión de Servicios Managed Cloud
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Administramos su infraestructura cloud de manera proactiva, optimizando costos, rendimiento y seguridad. Soporte especializado para AWS, Microsoft Azure y Google Cloud Platform con monitoreo 24/7.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-cloud-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Gestión multi-cloud AWS, Azure, GCP</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-money-dollar-circle-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Optimización de costos y recursos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-shield-check-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Seguridad y compliance automatizado</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-line-chart-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Monitoreo y alertas proactivas</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20cloud%20infrastructure%20management%20dashboard%20showing%20AWS%20Azure%20GCP%20services%20with%20monitoring%20graphs%2C%20cost%20optimization%20charts%2C%20and%20security%20metrics%20in%20a%20dark%20professional%20environment%20with%20purple%20and%20yellow%20accents&width=600&height=400&seq=cloud1&orientation=landscape"
                alt="Cloud Management Dashboard"
                className="w-full h-96 object-cover object-top rounded-lg"
              />
            </div>
          </div>

          {/* Cloud Providers */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-amazon-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Amazon Web Services</h3>
              <p className="text-gray-300">EC2, S3, RDS, Lambda, EKS y más de 200 servicios gestionados profesionalmente.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-microsoft-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Microsoft Azure</h3>
              <p className="text-gray-300">Virtual Machines, App Services, SQL Database, AKS y integración Office 365.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-google-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Google Cloud Platform</h3>
              <p className="text-gray-300">Compute Engine, BigQuery, Kubernetes Engine y servicios de Machine Learning.</p>
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 p-12 rounded-lg border border-purple-700/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Servicios Managed Cloud</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <i className="ri-settings-3-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Configuración</h4>
                <p className="text-gray-300 text-sm">Setup inicial y arquitectura optimizada</p>
              </div>
              <div className="text-center">
                <i className="ri-eye-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Monitoreo</h4>
                <p className="text-gray-300 text-sm">Supervisión 24/7 de rendimiento y salud</p>
              </div>
              <div className="text-center">
                <i className="ri-tools-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Mantenimiento</h4>
                <p className="text-gray-300 text-sm">Actualizaciones y parches automáticos</p>
              </div>
              <div className="text-center">
                <i className="ri-customer-service-2-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Soporte</h4>
                <p className="text-gray-300 text-sm">Asistencia técnica especializada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
