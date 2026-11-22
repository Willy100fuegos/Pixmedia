
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function GobiernoDatos() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://www.elternativa.com/wp-content/uploads/2023/06/2023_27_ELT-BLOG-1-Como-definir-una-estrategia-de-gobierno-del-dato-o-Data-Governance-01.jpg')`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6 leading-tight">
              Gobierno de Datos
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Gobierno de datos y business intelligence para decisiones estratégicas
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
                Gobierno de Datos y Business Intelligence
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Implementamos estrategias de gobierno de datos que incluyen creación de data warehouses, dashboards ejecutivos de rendimiento y cumplimiento normativo. Transformamos sus datos en insights accionables para la toma de decisiones estratégicas.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="ri-database-2-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Creación de data warehouses</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-dashboard-3-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Dashboards de rendimiento ejecutivo</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-shield-check-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Cumplimiento normativo de datos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="ri-bar-chart-box-line text-yellow-400 text-xl mt-1"></i>
                  <span className="text-gray-300">Analytics avanzado y reportería</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Data%20governance%20and%20business%20intelligence%20dashboard%20with%20charts%2C%20analytics%2C%20and%20data%20warehouse%20visualization%20in%20a%20modern%20corporate%20environment%20with%20purple%20and%20yellow%20lighting%2C%20professional%20data%20management%20setup&width=600&height=400&seq=data1&orientation=landscape"
                alt="Data Governance"
                className="w-full h-96 object-cover object-top rounded-lg"
              />
            </div>
          </div>

          {/* Data Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-archive-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Data Warehouse</h3>
              <p className="text-gray-300">Arquitectura de datos centralizada con ETL/ELT y modelado dimensional.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-pie-chart-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Business Intelligence</h3>
              <p className="text-gray-300">Dashboards interactivos con Power BI, Tableau y herramientas personalizadas.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-lg border border-purple-700/50">
              <i className="ri-file-shield-2-line text-yellow-400 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Data Compliance</h3>
              <p className="text-gray-300">GDPR, LOPD, SOX y otras normativas de protección de datos.</p>
            </div>
          </div>

          {/* Data Governance Framework */}
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 p-12 rounded-lg border border-purple-700/50">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Marco de Gobierno de Datos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <i className="ri-organization-chart text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Organización</h4>
                <p className="text-gray-300 text-sm">Roles, responsabilidades y comités de datos</p>
              </div>
              <div className="text-center">
                <i className="ri-file-list-3-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Políticas</h4>
                <p className="text-gray-300 text-sm">Estándares de calidad y gestión de datos</p>
              </div>
              <div className="text-center">
                <i className="ri-tools-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Tecnología</h4>
                <p className="text-gray-300 text-sm">Herramientas de catalogación y linaje de datos</p>
              </div>
              <div className="text-center">
                <i className="ri-line-chart-line text-yellow-400 text-4xl mb-4"></i>
                <h4 className="text-lg font-bold text-white mb-2">Métricas</h4>
                <p className="text-gray-300 text-sm">KPIs de calidad y uso de datos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
