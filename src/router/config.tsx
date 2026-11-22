import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

/* -------------------------------------------------
   Lazy‑loaded page components (single source of truth)
   ------------------------------------------------- */
const HomePage = lazy(() => import('../pages/home/page'));
const QuienesSomosPage = lazy(() => import('../pages/quienes-somos/page'));
const ServiciosPage = lazy(() => import('../pages/servicios/page'));

const TiendasEnLineaPage = lazy(() => import('../pages/servicios/tiendas-en-linea/page'));
const WebAppsPlataformasPage = lazy(() => import('../pages/servicios/webapps-plataformas/page'));
const ProductosMinimoViablesPage = lazy(() => import('../pages/servicios/productos-minimos-viables/page'));
const MarketingDigitalPage = lazy(() => import('../pages/servicios/marketing-digital/page'));
const PaginasCorporativasPage = lazy(() => import('../pages/servicios/paginas-corporativas/page'));
const PortalesNoticiasPage = lazy(() => import('../pages/servicios/portales-noticias/page'));
const DisenoMarcaPage = lazy(() => import('../pages/servicios/diseno-marca/page'));
const ContentMarketingPage = lazy(() => import('../pages/servicios/content-marketing/page'));
const SocialMarketingPage = lazy(() => import('../pages/servicios/social-marketing/page'));
const OptimizacionSEOPage = lazy(() => import('../pages/servicios/optimizacion-seo/page'));
const RegistroMarcaPage = lazy(() => import('../pages/servicios/registro-marca/page'));

const MantenimientoWebPage = lazy(() => import('../pages/servicios/mantenimiento-web/page'));
const OptimizacionWebUXPage = lazy(() => import('../pages/servicios/optimizacion-web-ux/page'));

const CiberseguridadGestionadaPage = lazy(() => import('../pages/servicios/ciberseguridad-gestionada/page'));
const PruebasPenetracionPage = lazy(() => import('../pages/servicios/pruebas-penetracion/page'));
const SeguridadPerimetralPage = lazy(() => import('../pages/servicios/seguridad-perimetral/page'));

const ManagedCloudPage = lazy(() => import('../pages/servicios/managed-cloud/page'));
const RedesZeroTrustPage = lazy(() => import('../pages/servicios/redes-zero-trust/page'));
const ServidoresDedicadosPage = lazy(() => import('../pages/servicios/servidores-dedicados/page'));
const DisasterRecoveryPage = lazy(() => import('../pages/servicios/disaster-recovery/page'));

const SoporteSLAPage = lazy(() => import('../pages/servicios/soporte-sla/page'));

const ConsultoriaITPage = lazy(() => import('../pages/consultoria-it/page'));
const EvaluacionTecnologicaPage = lazy(() => import('../pages/consultoria-it/evaluacion-tecnologica/page'));
const IAEmpresasPage = lazy(() => import('../pages/consultoria-it/ia-empresas/page'));
const GobiernoDatosPage = lazy(() => import('../pages/consultoria-it/gobierno-datos/page'));
const OptimizacionProcesosPage = lazy(() => import('../pages/consultoria-it/optimizacion-procesos/page'));

const CasosDeExitoPage = lazy(() => import('../pages/casos-de-exito/page'));
const ContactoPage = lazy(() => import('../pages/contacto/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

// Nuevas páginas de servicios
const MigracionWordPressPage = lazy(() => import('../pages/servicios/migracion-wordpress/page'));
const DesarrolloTemasMedidaPage = lazy(() => import('../pages/servicios/desarrollo-temas-medida/page'));
const ImplementacionWooCommercePage = lazy(() => import('../pages/servicios/implementacion-woocommerce/page'));
const ConfiguracionPasarelasPagoPage = lazy(() => import('../pages/servicios/configuracion-pasarelas-pago/page'));
const IntegracionInventarioPage = lazy(() => import('../pages/servicios/integracion-inventario/page'));
const CopiasSeguridadAutomatizadasPage = lazy(() => import('../pages/servicios/copias-seguridad-automatizadas/page'));
const SoporteTecnico247Page = lazy(() => import('../pages/servicios/soporte-tecnico-247/page'));
const ConfiguracionFirewallsPage = lazy(() => import('../pages/servicios/configuracion-firewalls/page'));

// Páginas individuales de Casos de Éxito (7 proyectos más recientes)
const RodsaCaseStudy = lazy(() => import('../pages/casos-de-exito/rodsa/page'));
const GcrMarketingCaseStudy = lazy(() => import('../pages/casos-de-exito/gcr-marketing/page'));
const WillyMxCaseStudy = lazy(() => import('../pages/casos-de-exito/willy-mx/page'));
const AgustinTorresCaseStudy = lazy(() => import('../pages/casos-de-exito/agustin-torres-delgado/page'));
const PrensaColombiaCaseStudy = lazy(() => import('../pages/casos-de-exito/prensa-colombia/page'));
const ReconectateNoticiaCaseStudy = lazy(() => import('../pages/casos-de-exito/reconectate-noticia/page'));
const EviaSportsCaseStudy = lazy(() => import('../pages/casos-de-exito/evia-sports/page'));

// Páginas individuales de Casos de Éxito existentes
const GoratCaseStudy = lazy(() => import('../pages/casos-de-exito/gorat/page'));
const GotrackPttCaseStudy = lazy(() => import('../pages/casos-de-exito/gotrack-ptt/page'));
const GoratrackCaseStudy = lazy(() => import('../pages/casos-de-exito/goratrack/page'));
const OlimarCaseStudy = lazy(() => import('../pages/casos-de-exito/olimar/page'));
const IglesiaElMesiasCaseStudy = lazy(() => import('../pages/casos-de-exito/iglesia-el-mesias/page'));
const UniformesSagitarioCaseStudy = lazy(() => import('../pages/casos-de-exito/uniformes-sagitario/page'));
const ZonagospelCaseStudy = lazy(() => import('../pages/casos-de-exito/zonagospel/page'));
const GruasGissaCaseStudy = lazy(() => import('../pages/casos-de-exito/gruas-gissa/page'));
const DentalClinicProCaseStudy = lazy(() => import('../pages/casos-de-exito/dental-clinic-pro/page'));
const ConstructoraHernandezCaseStudy = lazy(() => import('../pages/casos-de-exito/constructora-hernandez/page'));
const DiamondSuresteCaseStudy = lazy(() => import('../pages/casos-de-exito/diamond-sureste/page'));
const CevejaraCaseStudy = lazy(() => import('../pages/casos-de-exito/cevejara/page'));

// Páginas individuales de Casos de Éxito (casos 20-24)
const CafeOrganicoDelSurCaseStudy = lazy(() => import('../pages/casos-de-exito/cafe-organico-del-sur/page'));
const EstudioJuridicoMartinezCaseStudy = lazy(() => import('../pages/casos-de-exito/estudio-juridico-martinez/page'));
const FitnessRevolutionCaseStudy = lazy(() => import('../pages/casos-de-exito/fitness-revolution/page'));
const InmobiliariaHorizonteCaseStudy = lazy(() => import('../pages/casos-de-exito/inmobiliaria-horizonte/page'));
const AguaTkitaCaseStudy = lazy(() => import('../pages/casos-de-exito/agua-tkita/page'));

/* -------------------------------------------------
   Routes configuration (single exported default)
   ------------------------------------------------- */
const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/quienes-somos', element: <QuienesSomosPage /> },
  { path: '/servicios', element: <ServiciosPage /> },

  // Servicios – Desarrollo Web
  { path: '/servicios/tiendas-en-linea', element: <TiendasEnLineaPage /> },
  { path: '/servicios/webapps-plataformas', element: <WebAppsPlataformasPage /> },
  { path: '/servicios/productos-minimos-viables', element: <ProductosMinimoViablesPage /> },
  { path: '/servicios/marketing-digital', element: <MarketingDigitalPage /> },
  { path: '/servicios/paginas-corporativas', element: <PaginasCorporativasPage /> },
  { path: '/servicios/portales-noticias', element: <PortalesNoticiasPage /> },
  { path: '/servicios/diseno-marca', element: <DisenoMarcaPage /> },
  { path: '/servicios/content-marketing', element: <ContentMarketingPage /> },
  { path: '/servicios/social-marketing', element: <SocialMarketingPage /> },
  { path: '/servicios/optimizacion-seo', element: <OptimizacionSEOPage /> },
  { path: '/servicios/registro-marca', element: <RegistroMarcaPage /> },

  // Servicios – Mantenimiento
  { path: '/servicios/mantenimiento-web', element: <MantenimientoWebPage /> },
  { path: '/servicios/optimizacion-web-ux', element: <OptimizacionWebUXPage /> },

  // Servicios – Ciberseguridad
  { path: '/servicios/ciberseguridad-gestionada', element: <CiberseguridadGestionadaPage /> },
  { path: '/servicios/pruebas-penetracion', element: <PruebasPenetracionPage /> },
  { path: '/servicios/seguridad-perimetral', element: <SeguridadPerimetralPage /> },

  // Servicios – Infraestructura
  { path: '/servicios/managed-cloud', element: <ManagedCloudPage /> },
  { path: '/servicios/redes-zero-trust', element: <RedesZeroTrustPage /> },
  { path: '/servicios/servidores-dedicados', element: <ServidoresDedicadosPage /> },
  { path: '/servicios/disaster-recovery', element: <DisasterRecoveryPage /> },

  // Servicios – Soporte
  { path: '/servicios/soporte-sla', element: <SoporteSLAPage /> },

  // Consultoría IT
  { path: '/consultoria-it', element: <ConsultoriaITPage /> },
  { path: '/consultoria-it/evaluacion-tecnologica', element: <EvaluacionTecnologicaPage /> },
  { path: '/consultoria-it/ia-empresas', element: <IAEmpresasPage /> },
  { path: '/consultoria-it/gobierno-datos', element: <GobiernoDatosPage /> },
  { path: '/consultoria-it/optimizacion-procesos', element: <OptimizacionProcesosPage /> },

  // Casos de Éxito - Página principal
  { path: '/casos-de-exito', element: <CasosDeExitoPage /> },
  
  // Casos de Éxito - Páginas individuales (7 proyectos más recientes)
  { path: '/casos-de-exito/rodsa', element: <RodsaCaseStudy /> },
  { path: '/casos-de-exito/gcr-marketing', element: <GcrMarketingCaseStudy /> },
  { path: '/casos-de-exito/willy-mx', element: <WillyMxCaseStudy /> },
  { path: '/casos-de-exito/agustin-torres-delgado', element: <AgustinTorresCaseStudy /> },
  { path: '/casos-de-exito/prensa-colombia', element: <PrensaColombiaCaseStudy /> },
  { path: '/casos-de-exito/reconectate-noticia', element: <ReconectateNoticiaCaseStudy /> },
  { path: '/casos-de-exito/evia-sports', element: <EviaSportsCaseStudy /> },
  
  // Casos de Éxito - Páginas individuales existentes
  { path: '/casos-de-exito/gorat', element: <GoratCaseStudy /> },
  { path: '/casos-de-exito/gotrack-ptt', element: <GotrackPttCaseStudy /> },
  { path: '/casos-de-exito/goratrack', element: <GoratrackCaseStudy /> },
  { path: '/casos-de-exito/olimar', element: <OlimarCaseStudy /> },
  { path: '/casos-de-exito/iglesia-el-mesias', element: <IglesiaElMesiasCaseStudy /> },
  { path: '/casos-de-exito/uniformes-sagitario', element: <UniformesSagitarioCaseStudy /> },
  { path: '/casos-de-exito/zonagospel', element: <ZonagospelCaseStudy /> },
  { path: '/casos-de-exito/gruas-gissa', element: <GruasGissaCaseStudy /> },
  { path: '/casos-de-exito/dental-clinic-pro', element: <DentalClinicProCaseStudy /> },
  { path: '/casos-de-exito/constructora-hernandez', element: <ConstructoraHernandezCaseStudy /> },
  { path: '/casos-de-exito/diamond-sureste', element: <DiamondSuresteCaseStudy /> },
  { path: '/casos-de-exito/cevejara', element: <CevejaraCaseStudy /> },
  
  // Casos de Éxito - Páginas individuales (casos 20-24)
  { path: '/casos-de-exito/cafe-organico-del-sur', element: <CafeOrganicoDelSurCaseStudy /> },
  { path: '/casos-de-exito/estudio-juridico-martinez', element: <EstudioJuridicoMartinezCaseStudy /> },
  { path: '/casos-de-exito/fitness-revolution', element: <FitnessRevolutionCaseStudy /> },
  { path: '/casos-de-exito/inmobiliaria-horizonte', element: <InmobiliariaHorizonteCaseStudy /> },
  { path: '/casos-de-exito/agua-tkita', element: <AguaTkitaCaseStudy /> },
  
  // Contacto
  { path: '/contacto', element: <ContactoPage /> },

  // Nuevas rutas de servicios
  {
    path: '/servicios/migracion-wordpress',
    element: <MigracionWordPressPage />
  },
  {
    path: '/servicios/desarrollo-temas-medida',
    element: <DesarrolloTemasMedidaPage />
  },
  {
    path: '/servicios/implementacion-woocommerce',
    element: <ImplementacionWooCommercePage />
  },
  {
    path: '/servicios/configuracion-pasarelas-pago',
    element: <ConfiguracionPasarelasPagoPage />
  },
  {
    path: '/servicios/integracion-inventario',
    element: <IntegracionInventarioPage />
  },
  {
    path: '/servicios/copias-seguridad-automatizadas',
    element: <CopiasSeguridadAutomatizadasPage />
  },
  {
    path: '/servicios/soporte-tecnico-247',
    element: <SoporteTecnico247Page />
  },
  {
    path: '/servicios/configuracion-firewalls',
    element: <ConfiguracionFirewallsPage />
  },

  // 404 fallback
  { path: '*', element: <NotFoundPage /> },
];

export default routes;
