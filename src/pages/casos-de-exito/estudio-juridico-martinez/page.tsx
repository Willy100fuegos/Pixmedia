import { useNavigate } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { allCasosDeExito } from '../../../mocks/casosDeExito';

export default function EstudioJuridicoMartinez() {
  const navigate = useNavigate();
  const caseData = allCasosDeExito.find(c => c.slug === 'estudio-juridico-martinez')!;
  
  const relatedCases = allCasosDeExito
    .filter(c => c.id !== caseData.id && c.tags.some(tag => caseData.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {caseData.tags.map((tag) => (
              <span 
                key={tag}
                className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight">
            {caseData.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl">
            {caseData.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-black">
        <div className="px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden bg-gray-800 flex items-center justify-center p-8 border-2 border-purple-500/30">
                <img 
                  src={caseData.images[0]}
                  alt={caseData.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* KPI and Solutions */}
            <div>
              <div className="bg-gradient-to-br from-purple-900/40 to-gray-900/40 p-8 rounded-2xl border-2 border-purple-500/30 mb-8">
                <h3 className="text-3xl font-bold text-yellow-400 mb-3">KPI Principal</h3>
                <div className="text-6xl font-black text-yellow-400 mb-3">{caseData.kpiValue}</div>
                <div className="text-xl text-gray-300">{caseData.kpi}</div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Soluciones Implementadas:</h3>
                <ul className="space-y-4">
                  {caseData.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start text-gray-300 text-lg">
                      <i className="ri-check-line text-yellow-400 text-2xl mr-3 mt-1 flex-shrink-0"></i>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Challenge, Solution, Impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-red-900/30 to-gray-900/40 p-8 rounded-2xl border-2 border-red-500/30">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-error-warning-line text-3xl text-red-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-red-400 mb-4">Desafío</h3>
              <p className="text-gray-300 leading-relaxed text-lg">{caseData.challenge}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-gray-900/40 p-8 rounded-2xl border-2 border-blue-500/30">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-3xl text-blue-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Solución</h3>
              <p className="text-gray-300 leading-relaxed text-lg">{caseData.solution}</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-gray-900/40 p-8 rounded-2xl border-2 border-green-500/30">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-line-chart-line text-3xl text-green-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Impacto</h3>
              <p className="text-gray-300 leading-relaxed text-lg">{caseData.impact}</p>
            </div>
          </div>

          {/* Project URL Button */}
          {caseData.projectUrl && (
            <div className="mb-16 text-center">
              <a
                href={caseData.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-yellow-400 text-white px-10 py-4 rounded-full text-xl font-bold hover:from-purple-700 hover:to-yellow-500 transition-all inline-flex items-center whitespace-nowrap cursor-pointer shadow-lg"
              >
                <i className="ri-external-link-line mr-3 text-2xl"></i>
                Ver Sitio Web
              </a>
            </div>
          )}

          {/* Related Cases */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Casos de Éxito Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCases.map((relatedCase) => (
                <div
                  key={relatedCase.id}
                  className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl border border-purple-500/20 hover:border-yellow-400/50 transition-all cursor-pointer overflow-hidden"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(`/casos-de-exito/${relatedCase.slug}`);
                  }}
                >
                  <div className="w-full h-48 bg-gray-800 flex items-center justify-center p-6">
                    <img 
                      src={relatedCase.images[0]}
                      alt={relatedCase.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-yellow-400 mb-2">{relatedCase.shortTitle}</h4>
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">{relatedCase.description.split('.')[0]}.</p>
                    <p className="text-sm text-purple-400 font-semibold">{relatedCase.kpi}: {relatedCase.kpiValue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-16 text-center">
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/casos-de-exito');
              }}
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all whitespace-nowrap cursor-pointer"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Volver a Casos de Éxito
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
            ¿Listo para Transformar Tu Negocio?
          </h2>
          <p className="text-xl text-white mb-10 leading-relaxed">
            Únete a las empresas que han alcanzado el éxito con nuestras soluciones tecnológicas.
          </p>
          <a 
            href="https://wa.me/5219211453200"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap cursor-pointer inline-block"
          >
            <i className="ri-whatsapp-line mr-2"></i>
            Contactar Ahora
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}