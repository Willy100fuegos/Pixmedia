import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { useState, useEffect, useRef } from 'react';

interface CaseStudy {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  images: string[];
  tags: string[];
  kpi: string;
  kpiValue: string;
  solutions: string[];
  challenge: string;
  solution: string;
  impact: string;
  category: string;
  projectUrl?: string;
}

export default function CasosDeExito() {
  const [selectedFilter, setSelectedFilter] = useState('TODOS');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const allCases: CaseStudy[] = [
    {
      id: 1,
      title: "UIPSA",
      shortTitle: "UIPSA",
      description: "Desarrollo de plataforma corporativa para empresa líder en seguridad privada, enfocada en la exposición de servicios tácticos y confiabilidad institucional.",
      images: ["https://pixmedia.b-cdn.net/portafolio/Uipsa.png"],
      tags: ["CORPORATIVO", "SEGURIDAD"],
      kpi: "Mejora en Imagen Institucional",
      kpiValue: "98%",
      solutions: ["Plataforma corporativa robusta", "Arquitectura de navegación clara", "Optimización de carga avanzada", "Diseño visual de alto impacto"],
      challenge: "Necesidad de una presencia digital robusta que proyectara la seriedad y el alcance operativo de una empresa de seguridad de alto nivel.",
      solution: "Implementación de un sitio web corporativo con arquitectura de navegación clara, optimización de carga y diseño visual de alto impacto.",
      impact: "Fortalecimiento de la identidad digital y aumento en la captación de leads corporativos interesados en seguridad privada.",
      category: "CORPORATIVO",
      projectUrl: "https://willy.mx/UIPSA/"
    },
    {
      id: 2,
      title: "RODSA",
      shortTitle: "RODSA",
      description: "Web Corporativa para Soluciones Integrales y Acreditación de Estándares ISO/OSHA. Plataforma para especialista en construcción civil, mecánica e instrumentación industrial, destacando el cumplimiento de normas de seguridad.",
      images: ["https://pixmedia.b-cdn.net/portafolio/rodsa.png"],
      tags: ["CORPORATIVO", "CONSULTORÍA IT"],
      kpi: "Refuerzo de Credibilidad",
      kpiValue: "95%",
      solutions: ["Plataforma corporativa profesional", "Destacar certificaciones ISO/OSHA", "Presentación de servicios especializados", "Credibilidad en sector industrial"],
      challenge: "Empresa especializada en construcción que necesitaba destacar sus certificaciones y cumplimiento de normas de seguridad.",
      solution: "Desarrollo de plataforma corporativa que resalta las acreditaciones ISO/OSHA y servicios integrales.",
      impact: "Refuerzo del 95% en credibilidad y posicionamiento como líder en cumplimiento de estándares de seguridad.",
      category: "CORPORATIVO",
      projectUrl: "https://rodsa.mx/"
    },
    {
      id: 3,
      title: "GCR Marketing",
      shortTitle: "GCR Marketing",
      description: "Plataforma de Soluciones Publicitarias y Marketing Digital/Exterior. Desarrollo de un sitio web para empresa que ofrece servicios de impresión digital, publicidad móvil y rotulación vehicular.",
      images: ["https://pixmedia.b-cdn.net/portafolio/gcrmarketing.png"],
      tags: ["CORPORATIVO", "BRANDING"],
      kpi: "Claridad de la Oferta de Valor",
      kpiValue: "92%",
      solutions: ["Plataforma de servicios publicitarios", "Presentación clara de soluciones", "Portafolio de trabajos realizados", "Sistema de contacto optimizado"],
      challenge: "Empresa de marketing que necesitaba presentar claramente su amplia gama de servicios publicitarios.",
      solution: "Desarrollo de sitio web con presentación clara de servicios y portafolio de trabajos.",
      impact: "Mejora del 92% en la claridad de la oferta de valor y aumento en consultas comerciales.",
      category: "CORPORATIVO",
      projectUrl: "https://gcrmarketing.com.mx/"
    },
    {
      id: 4,
      title: "Agustín Torres Delgado",
      shortTitle: "Agustín Torres Delgado",
      description: "Plataforma Digital para Político (Movimiento Ciudadano) y Difusión de Propuestas. Sitio informativo para el Secretario General de MC, mostrando su trayectoria y proyectos de gobierno.",
      images: ["https://pixmedia.b-cdn.net/portafolio/agustin.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Interacción con la Ciudadanía",
      kpiValue: "88%",
      solutions: ["Plataforma política informativa", "Difusión de propuestas y trayectoria", "Sistema de contacto ciudadano", "Optimización para alcance local"],
      challenge: "Político que necesitaba una plataforma digital para difundir sus propuestas y conectar con la ciudadanía.",
      solution: "Desarrollo de sitio informativo con presentación de trayectoria y proyectos de gobierno.",
      impact: "Incremento del 88% en interacción con la ciudadanía y mejora en difusión de propuestas.",
      category: "CORPORATIVO",
      projectUrl: "https://agustintorresdelgado.com/"
    },
    {
      id: 5,
      title: "Prensa Colombia",
      shortTitle: "Prensa Colombia",
      description: "Portal de Noticias Internacional (Cali) con Cobertura Integral y Análisis. Plataforma de noticias que ofrece cobertura de actualidad, política y cultura.",
      images: ["https://pixmedia.b-cdn.net/portafolio/prensacolombia.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Ampliación de Cobertura Internacional",
      kpiValue: "280%",
      solutions: ["Portal de noticias internacional", "Cobertura integral de actualidad", "Sistema de categorización avanzado", "Optimización SEO para alcance global"],
      challenge: "Portal noticioso que necesitaba ampliar su cobertura internacional y mejorar su alcance.",
      solution: "Desarrollo de plataforma con cobertura integral y optimización para audiencia internacional.",
      impact: "Ampliación del 280% en cobertura internacional y crecimiento significativo de audiencia.",
      category: "CORPORATIVO",
      projectUrl: "https://prensacolombia.com/"
    },
    {
      id: 6,
      title: "Reconéctate Noticia",
      shortTitle: "Reconéctate Noticia",
      description: "Web de Noticias con Categorización Completa (Local, Estatal, Nacional, Viral, Espectáculos). Desarrollo de un portal con secciones bien definidas para diversos públicos.",
      images: ["https://pixmedia.b-cdn.net/portafolio/reconectanoticia.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Facilidad de Navegación",
      kpiValue: "90%",
      solutions: ["Portal con categorización completa", "Secciones bien definidas", "Navegación intuitiva optimizada", "Sistema de búsqueda eficiente"],
      challenge: "Portal noticioso que necesitaba una categorización clara para facilitar la navegación de diversos públicos.",
      solution: "Desarrollo de portal con secciones bien definidas y navegación optimizada.",
      impact: "Mejora del 90% en facilidad de navegación y retención de visitantes.",
      category: "CORPORATIVO",
      projectUrl: "https://reconectatenoticia.com/"
    },
    {
      id: 7,
      title: "EVIA Sports",
      shortTitle: "EVIA Sports",
      description: "Web para Academia de MMA con Toma de Clases Muestra y Gestión de Horarios. Plataforma para promover artes marciales mixtas, con formularios para clases muestra y exposición de valores y horarios.",
      images: ["https://pixmedia.b-cdn.net/portafolio/eviasports.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Generación de Leads (Clases Muestra)",
      kpiValue: "85%",
      solutions: ["Plataforma para academia deportiva", "Sistema de registro para clases muestra", "Gestión de horarios y valores", "Promoción de artes marciales"],
      challenge: "Academia de MMA que necesitaba una plataforma para captar alumnos mediante clases muestra.",
      solution: "Desarrollo de sitio web con formularios de registro y gestión de horarios.",
      impact: "Incremento del 85% en generación de leads y aumento en inscripciones.",
      category: "CORPORATIVO",
      projectUrl: "https://eviasports.com.mx/"
    },
    {
      id: 8,
      title: "Gorat",
      shortTitle: "Gorat",
      description: "Plataforma Tecnológica Integral (Nube, Short URLs, Buzón de Rondines) y Consultoría IT Avanzada. Socio tecnológico desde 2018; implementación de Nube Corporativa, Servidor de Correo, Buzón Interno de Solicitudes y Registro de Rondines (QR).",
      images: ["https://pixmedia.b-cdn.net/portafolio/gorat.png", "https://pixmedia.b-cdn.net/portafolio/gotrackshorturl.png"],
      tags: ["CONSULTORÍA IT", "OPTIMIZACIÓN"],
      kpi: "Mejora en Eficiencia Operativa",
      kpiValue: "95%",
      solutions: ["Nube corporativa personalizada", "Sistema de short URLs", "Buzón interno de solicitudes", "Registro de rondines con QR"],
      challenge: "Empresa que necesitaba una plataforma tecnológica integral para optimizar sus procesos operativos y mejorar la eficiencia.",
      solution: "Implementación de solución tecnológica completa con nube corporativa, sistema de comunicaciones y registro automatizado.",
      impact: "Mejora del 95% en eficiencia operativa y optimización completa de procesos internos desde 2018.",
      category: "CONSULTORÍA IT",
      projectUrl: "https://www.tecuidamos.mx"
    },
    {
      id: 9,
      title: "Gotrack PTT",
      shortTitle: "Gotrack PTT",
      description: "Plataforma de Radio Digital (PoC) en Servidor Dedicado Pixmedia y Desarrollo de App Móvil. Solución innovadora que supera las limitaciones de radios convencionales, ofreciendo mayor cobertura y calidad de sonido.",
      images: ["https://pixmedia.b-cdn.net/portafolio/gotrackptt.png", "https://pixmedia.b-cdn.net/portafolio/gotrackptt-2.png"],
      tags: ["CONSULTORÍA IT", "OPTIMIZACIÓN"],
      kpi: "Aumento en la Cobertura de Comunicación",
      kpiValue: "300%",
      solutions: ["Plataforma de radio digital", "Aplicación móvil personalizada", "Servidor dedicado optimizado", "Mayor cobertura y calidad de sonido"],
      challenge: "Necesidad de superar las limitaciones de los sistemas de radio convencionales con una solución digital innovadora.",
      solution: "Desarrollo de plataforma de radio digital con aplicación móvil que ofrece mayor cobertura y calidad superior.",
      impact: "Incremento del 300% en cobertura de comunicación y mejora significativa en calidad de sonido.",
      category: "CONSULTORÍA IT"
    },
    {
      id: 10,
      title: "Goratrack",
      shortTitle: "Goratrack",
      description: "Desarrollo de Plataforma de Rastreo GPS Personalizada con API de Mapbox y WebSockets (Tiempo Real). Solución tecnológica a medida para incursionar en el mercado de monitoreo de GPS con alta seguridad y escalabilidad.",
      images: ["https://pixmedia.b-cdn.net/portafolio/goratrack.png", "https://pixmedia.b-cdn.net/portafolio/goratrackmx.png"],
      tags: ["CONSULTORÍA IT", "OPTIMIZACIÓN"],
      kpi: "Expansión de la Gama de Servicios",
      kpiValue: "250%",
      solutions: ["Plataforma de rastreo GPS personalizada", "Integración con API de Mapbox", "WebSockets para tiempo real", "Alta seguridad y escalabilidad"],
      challenge: "Empresa que necesitaba incursionar en el mercado de monitoreo GPS con una solución tecnológica robusta y escalable.",
      solution: "Desarrollo de plataforma personalizada con API de Mapbox y WebSockets para rastreo en tiempo real.",
      impact: "Expansión del 250% en la gama de servicios y entrada exitosa al mercado de monitoreo GPS.",
      category: "CONSULTORÍA IT",
      projectUrl: "https://goratrack.tecuidamos.mx"
    },
    {
      id: 11,
      title: "Olimar",
      shortTitle: "Olimar",
      description: "Consultoría IT de Correo Corporativo y Migración a Hosting Estable. Solución para eliminar problemas de servicio y configurar el correo en Outlook para uso profesional.",
      images: ["https://pixmedia.b-cdn.net/olimarwebn.png"],
      tags: ["CONSULTORÍA IT", "OPTIMIZACIÓN"],
      kpi: "Disponibilidad del Correo",
      kpiValue: "99.8%",
      solutions: ["Migración a hosting estable", "Configuración de correo corporativo", "Integración con Outlook", "Eliminación de problemas de servicio"],
      challenge: "Empresa con problemas constantes en su servicio de correo corporativo que afectaba la comunicación profesional.",
      solution: "Migración completa a hosting estable con configuración profesional de correo corporativo en Outlook.",
      impact: "Logro del 99.8% de disponibilidad del correo y eliminación completa de problemas de servicio.",
      category: "CONSULTORÍA IT",
      projectUrl: "https://olimar.com.mx/"
    },
    {
      id: 12,
      title: "Iglesia el Mesias",
      shortTitle: "Iglesia el Mesias",
      description: "Desarrollo de Portal Institucional y Estrategia de Visibilidad SEO. Creación de un sitio web para conectar con la comunidad y atraer nuevos visitantes.",
      images: ["https://pixmedia.b-cdn.net/portafolio/elmesias.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Aumento de la Visibilidad Online",
      kpiValue: "280%",
      solutions: ["Portal institucional moderno", "Estrategia SEO especializada", "Conexión con la comunidad", "Atracción de nuevos visitantes"],
      challenge: "Institución religiosa que necesitaba una presencia digital para conectar con la comunidad y atraer nuevos miembros.",
      solution: "Desarrollo de portal institucional con estrategia SEO optimizada para maximizar la visibilidad online.",
      impact: "Incremento del 280% en visibilidad online y mejora significativa en conexión con la comunidad.",
      category: "CORPORATIVO",
      projectUrl: "https://inpelmesias.org.mx/"
    },
    {
      id: 13,
      title: "uniformes sagitario",
      shortTitle: "Uniformes Sagitario",
      description: "Sitio Web a Medida para Uniformes Personalizados y Posicionamiento Local. Plataforma diseñada para reflejar la calidad y profesionalismo, con diseño responsivo.",
      images: ["https://pixmedia.b-cdn.net/portafolio/uniformessagitario.jpg"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Mejora en la Percepción de Marca",
      kpiValue: "92%",
      solutions: ["Sitio web a medida", "Diseño responsivo profesional", "Posicionamiento local optimizado", "Reflejo de calidad y profesionalismo"],
      challenge: "Empresa de uniformes que necesitaba mejorar su percepción de marca y posicionamiento en el mercado local.",
      solution: "Desarrollo de sitio web personalizado con diseño responsivo que refleja calidad y profesionalismo.",
      impact: "Mejora del 92% en la percepción de marca y fortalecimiento del posicionamiento local.",
      category: "CORPORATIVO"
    },
    {
      id: 14,
      title: "zonaGospel",
      shortTitle: "ZonaGospel",
      description: "Portal Multifuncional, Streaming de Radio en Vivo y Plataforma de E-learning. Solución integral para ofrecer recursos espirituales, educativos y radio en línea.",
      images: ["https://pixmedia.b-cdn.net/portafolio/zonagospel-2.png", "https://pixmedia.b-cdn.net/portafolio/institutozg.jpg"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Fortalecimiento de la Comunidad",
      kpiValue: "320%",
      solutions: ["Portal multifuncional", "Streaming de radio en vivo", "Plataforma de e-learning", "Recursos espirituales y educativos"],
      challenge: "Organización que necesitaba una plataforma integral para ofrecer recursos espirituales, educativos y radio en línea.",
      solution: "Desarrollo de portal multifuncional con streaming de radio y plataforma de e-learning integrada.",
      impact: "Fortalecimiento del 320% de la comunidad y expansión significativa de recursos disponibles.",
      category: "CORPORATIVO",
      projectUrl: "https://www.zonagospel.net"
    },
    {
      id: 15,
      title: "Gruas Gissa",
      shortTitle: "Gruas Gissa",
      description: "Estrategia Digital Integral y Web Optimizada para Grúas Industriales (SEO Local). Sitio en WordPress para captar mayor clientela en Coatzacoalcos y áreas circundantes.",
      images: ["https://pixmedia.b-cdn.net/portafolio/gissa.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Aumento en la Captación de Clientes",
      kpiValue: "195%",
      solutions: ["Estrategia digital integral", "Web optimizada en WordPress", "SEO local especializado", "Captación de clientela regional"],
      challenge: "Empresa de grúas industriales que necesitaba aumentar su captación de clientes en Coatzacoalcos y áreas circundantes.",
      solution: "Implementación de estrategia digital integral con web optimizada y SEO local especializado.",
      impact: "Incremento del 195% en captación de clientes y expansión exitosa en la región.",
      category: "CORPORATIVO",
      projectUrl: "https://www.gruasgissa.com/"
    },
    {
      id: 16,
      title: "Diamond Sureste",
      shortTitle: "Diamond Sureste",
      description: "Tienda en Línea de Nutrición de Mascotas y Plataforma E-commerce. Solución intuitiva para la venta de alimentos premium y productos especializados.",
      images: ["https://pixmedia.b-cdn.net/portafolio/diamond.png", "https://pixmedia.b-cdn.net/portafolio/Diamond-2.png"],
      tags: ["E-COMMERCE", "CORPORATIVO"],
      kpi: "Mejora de la Experiencia de Compra",
      kpiValue: "92%",
      solutions: ["Tienda en línea intuitiva y moderna", "Catálogo especializado en nutrición de mascotas", "Sistema de pagos seguro integrado", "Gestión de inventario automatizada"],
      challenge: "Empresa de nutrición de mascotas que necesitaba una plataforma e-commerce profesional para vender productos premium online.",
      solution: "Desarrollo de tienda en línea especializada con catálogo optimizado y sistema de pagos integrado.",
      impact: "Mejora del 92% en la experiencia de compra y aumento significativo en ventas online de productos premium.",
      category: "E-COMMERCE",
      projectUrl: "https://diamondsureste.com/"
    },
    {
      id: 17,
      title: "Impacto del sur",
      shortTitle: "Impacto del Sur",
      description: "Web Noticiosa para Flujo Constante y Estructura de Contenido Avanzada. Plataforma para manejar un flujo constante y diverso de noticias, con navegación intuitiva.",
      images: ["https://pixmedia.b-cdn.net/portafolio/impactodelsur.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Retención de Visitantes",
      kpiValue: "88%",
      solutions: ["Estructura de contenido avanzada", "Navegación intuitiva optimizada", "Sistema de gestión de noticias", "Diseño responsivo y moderno"],
      challenge: "Portal noticioso que necesitaba manejar un flujo constante y diverso de noticias con mejor organización.",
      solution: "Desarrollo de plataforma con estructura de contenido avanzada y navegación optimizada para noticias.",
      impact: "Mejora del 88% en retención de visitantes y optimización del flujo de contenido noticioso.",
      category: "CORPORATIVO",
      projectUrl: "https://impactodelsur.com.mx/"
    },
    {
      id: 18,
      title: "Veracruz Today",
      shortTitle: "Veracruz Today",
      description: "Web Personalizada y Sincronización Automática con Redes Sociales (Engagement). Sitio para agencia de noticias que publica y sincroniza contenido en diversas plataformas.",
      images: ["https://pixmedia.b-cdn.net/portafolio/VeracruzToday-2.png", "https://pixmedia.b-cdn.net/portafolio/VeracruzToday.png"],
      tags: ["OPTIMIZACIÓN", "CORPORATIVO"],
      kpi: "Aumento en el Tráfico Web",
      kpiValue: "195%",
      solutions: ["Sincronización automática con redes sociales", "Sistema de publicación multiplataforma", "Optimización para engagement", "Gestión centralizada de contenido"],
      challenge: "Agencia de noticias que necesitaba sincronizar contenido automáticamente en diversas plataformas sociales.",
      solution: "Desarrollo de sistema de sincronización automática con redes sociales y gestión centralizada.",
      impact: "Incremento del 195% en tráfico web y mejora significativa en engagement multiplataforma.",
      category: "OPTIMIZACIÓN",
      projectUrl: "https://veracruz.today"
    },
    {
      id: 19,
      title: "Foro Coatza",
      shortTitle: "Foro Coatza",
      description: "Migración a Servidor Dedicado Pixmedia y Sistema de Gestión para Reporteros (99.9% Uptime). Solución para crecimiento de tráfico, mejorando drásticamente la estabilidad y el rendimiento.",
      images: ["https://pixmedia.b-cdn.net/portafolio/forocoatza-2.png", "https://pixmedia.b-cdn.net/portafolio/forocoatza.png"],
      tags: ["CONSULTORÍA IT", "OPTIMIZACIÓN"],
      kpi: "Disponibilidad del Servicio",
      kpiValue: "99.9%",
      solutions: ["Migración a servidor dedicado", "Sistema de gestión para reporteros", "Optimización de rendimiento", "Monitoreo continuo de estabilidad"],
      challenge: "Portal noticioso con problemas de estabilidad debido al crecimiento de tráfico que necesitaba migración urgente.",
      solution: "Migración completa a servidor dedicado con sistema de gestión optimizado para reporteros.",
      impact: "Logro del 99.9% de disponibilidad del servicio y mejora drástica en estabilidad y rendimiento.",
      category: "CONSULTORÍA IT",
      projectUrl: "https://forocoatza.com"
    },
    {
      id: 20,
      title: "Sureste Sur",
      shortTitle: "Sureste Sur",
      description: "Servidor Dedicado de Alta Capacidad y Módulos de Publicidad (Taboola). Solución para alto tráfico (+1500 lectores simultáneos), eliminando caídas del servidor.",
      images: ["https://pixmedia.b-cdn.net/portafolio/surestesur-1.png", "https://pixmedia.b-cdn.net/portafolio/surestesur.png"],
      tags: ["CONSULTORÍA IT", "OPTIMIZACIÓN"],
      kpi: "Crecimiento de Audiencia",
      kpiValue: "280%",
      solutions: ["Servidor dedicado de alta capacidad", "Integración con módulos Taboola", "Optimización para alto tráfico", "Eliminación de caídas del servidor"],
      challenge: "Portal con más de 1500 lectores simultáneos que sufría caídas constantes del servidor.",
      solution: "Implementación de servidor dedicado de alta capacidad con módulos de publicidad integrados.",
      impact: "Crecimiento del 280% en audiencia y eliminación completa de caídas del servidor.",
      category: "CONSULTORÍA IT",
      projectUrl: "https://surestesur.com/"
    },
    {
      id: 21,
      title: "My Noticia",
      shortTitle: "My Noticia",
      description: "Web de Noticias y Publicación Automática a Redes Sociales (Agencia Nueva). Solución para optimizar el tiempo y recursos de difusión de contenidos.",
      images: ["https://pixmedia.b-cdn.net/portafolio/mynoticia.png"],
      tags: ["OPTIMIZACIÓN", "CORPORATIVO"],
      kpi: "Eficiencia en Gestión de Contenidos",
      kpiValue: "85%",
      solutions: ["Publicación automática a redes sociales", "Sistema de gestión de contenidos", "Optimización de tiempo y recursos", "Integración multiplataforma"],
      challenge: "Agencia nueva que necesitaba optimizar el tiempo y recursos para difusión de contenidos en múltiples plataformas.",
      solution: "Desarrollo de sistema de publicación automática a redes sociales con gestión centralizada.",
      impact: "Mejora del 85% en eficiencia de gestión de contenidos y optimización de recursos.",
      category: "OPTIMIZACIÓN",
      projectUrl: "https://mynoticia.com/"
    },
    {
      id: 22,
      title: "Red TV",
      shortTitle: "Red TV",
      description: "Portal Dinámico y Sincronización de Video en Vivo (YouTube Streaming). Sitio web que complementa el canal de streaming y funciona como medio informativo.",
      images: ["https://pixmedia.b-cdn.net/portafolio/redTV.png", "https://pixmedia.b-cdn.net/portafolio/redTV-2.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Compromiso del Usuario (Engagement)",
      kpiValue: "92%",
      solutions: ["Portal dinámico y moderno", "Sincronización con YouTube streaming", "Integración multimedia", "Funcionalidad de medio informativo"],
      challenge: "Canal de streaming que necesitaba un portal web que complementara su contenido y funcionara como medio informativo.",
      solution: "Desarrollo de portal dinámico con sincronización de video en vivo y funcionalidades multimedia.",
      impact: "Incremento del 92% en compromiso del usuario y integración exitosa con streaming.",
      category: "CORPORATIVO",
      projectUrl: "https://redtv.mx/"
    },
    {
      id: 23,
      title: "Veracruz Noticias",
      shortTitle: "Veracruz Noticias",
      description: "Rediseño Completo, Servidor Dedicado y Capacidad Móvil para Reporteros. Solución para caídas constantes y permitir la subida de noticias desde dispositivos móviles.",
      images: ["https://pixmedia.b-cdn.net/portafolio/veracruznoticias.png"],
      tags: ["CONSULTORÍA IT", "OPTIMIZACIÓN"],
      kpi: "Mejora en Eficiencia Operativa",
      kpiValue: "90%",
      solutions: ["Rediseño completo del portal", "Migración a servidor dedicado", "Capacidad móvil para reporteros", "Sistema de subida desde dispositivos móviles"],
      challenge: "Portal noticioso con caídas constantes que necesitaba permitir subida de noticias desde dispositivos móviles.",
      solution: "Rediseño completo con migración a servidor dedicado y capacidades móviles para reporteros.",
      impact: "Mejora del 90% en eficiencia operativa y eliminación de caídas del servidor.",
      category: "CONSULTORÍA IT",
      projectUrl: "https://veracruznoticias.com/"
    },
    {
      id: 24,
      title: "Guatemala Info",
      shortTitle: "Guatemala Info",
      description: "Transformación Digital y Compensación de Ventas Impresas con Portal en Línea. Solución web para adaptarse a la era digital y ampliar la audiencia.",
      images: ["https://pixmedia.b-cdn.net/portafolio/guatemalainfo.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Ampliación de Audiencia Digital",
      kpiValue: "320%",
      solutions: ["Portal web moderno y responsivo", "Migración de contenido impreso a digital", "Sistema de gestión de contenido optimizado", "Estrategia SEO para ampliar audiencia"],
      challenge: "Medio impreso tradicional que necesitaba adaptarse a la era digital para compensar la disminución en ventas físicas.",
      solution: "Desarrollo de portal web completo con migración de contenido y estrategia digital para ampliar la audiencia online.",
      impact: "Ampliación del 320% en audiencia digital y compensación exitosa de las ventas impresas tradicionales.",
      category: "CORPORATIVO",
      projectUrl: "https://guatemalainfo.com"
    },
    {
      id: 25,
      title: "ForoVeracruz",
      shortTitle: "ForoVeracruz",
      description: "Web Focalizada para Noticias Regionales de Veracruz y Posicionamiento Local. Plataforma especializada para cubrir la ciudad y puerto, reforzando la autoridad del medio.",
      images: ["https://pixmedia.b-cdn.net/portafolio/foroveracruz.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Expansión de Audiencia Local",
      kpiValue: "280%",
      solutions: ["Plataforma especializada en noticias regionales", "SEO localizado para Veracruz", "Cobertura focalizada de ciudad y puerto", "Sistema de categorización por zonas"],
      challenge: "Necesidad de crear una plataforma especializada para noticias regionales de Veracruz con enfoque local.",
      solution: "Desarrollo de portal web focalizado con cobertura especializada y SEO optimizado para la región de Veracruz.",
      impact: "Expansión del 280% en audiencia local y fortalecimiento de la autoridad del medio en la región.",
      category: "CORPORATIVO",
      projectUrl: "https://foroveracruz.com/"
    },
    {
      id: 26,
      title: "Veracruz Sur Informativo",
      shortTitle: "Veracruz Sur Informativo",
      description: "Plataforma Autónoma de Noticias (Migración de Facebook a Web Propia). Desarrollo de un sitio completo para funcionar como un medio independiente y autónomo.",
      images: ["https://pixmedia.b-cdn.net/portafolio/veracruzsurinformativo.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Flexibilidad Editorial",
      kpiValue: "95%",
      solutions: ["Migración completa de Facebook a web propia", "Sistema de gestión editorial independiente", "Plataforma autónoma y escalable", "Control total sobre contenido y audiencia"],
      challenge: "Medio que dependía completamente de Facebook necesitaba independizarse y tener control total sobre su contenido.",
      solution: "Desarrollo de plataforma web autónoma con migración completa de contenido y sistema editorial independiente.",
      impact: "Logro del 95% en flexibilidad editorial y independencia completa de plataformas externas.",
      category: "CORPORATIVO",
      projectUrl: "https://veracruzsurinformativo.com/"
    },
    {
      id: 27,
      title: "Mexplore Tours",
      shortTitle: "Mexplore Tours",
      description: "Sistema de Reservas en Línea (Tours, Parques, Vehículos) para Expansión Nacional. Plataforma integral para facilitar la reserva y expandir el alcance de la empresa turística.",
      images: ["https://pixmedia.b-cdn.net/portafolio/mexploretours.png"],
      tags: ["E-COMMERCE", "CORPORATIVO"],
      kpi: "Simplificación del Proceso de Reserva",
      kpiValue: "85%",
      solutions: ["Sistema de reservas en línea integrado", "Gestión de tours, parques y vehículos", "Plataforma escalable para expansión nacional", "Procesamiento de pagos automatizado"],
      challenge: "Empresa turística que necesitaba automatizar reservas y expandir su alcance a nivel nacional.",
      solution: "Desarrollo de plataforma integral con sistema de reservas automatizado y gestión completa de servicios turísticos.",
      impact: "Simplificación del 85% en el proceso de reserva y expansión exitosa del alcance nacional.",
      category: "E-COMMERCE",
      projectUrl: "http://mexploretours.com/"
    },
    {
      id: 28,
      title: "Infover",
      shortTitle: "Infover",
      description: "Hosting Dedicado de Alto Rendimiento y Estabilidad para Agencia de Noticias. Solución de Consultoría IT para eliminar problemas de tiempo de inactividad y velocidad.",
      images: ["https://pixmedia.b-cdn.net/portafolio/infover.png"],
      tags: ["CONSULTORÍA IT", "OPTIMIZACIÓN"],
      kpi: "Estabilidad del Servidor",
      kpiValue: "99.9%",
      solutions: ["Hosting dedicado de alto rendimiento", "Eliminación de tiempo de inactividad", "Optimización de velocidad de carga", "Monitoreo continuo de estabilidad"],
      challenge: "Agencia de noticias con problemas constantes de inactividad del servidor y velocidad lenta.",
      solution: "Implementación de hosting dedicado con optimización completa de rendimiento y estabilidad.",
      impact: "Logro del 99.9% en estabilidad del servidor y eliminación completa de problemas de inactividad.",
      category: "CONSULTORÍA IT",
      projectUrl: "https://infover.com.mx/"
    },
    {
      id: 29,
      title: "Trasciende Veracruz",
      shortTitle: "Trasciende Veracruz",
      description: "Rediseño Web en WordPress y Optimización Móvil para Agencia Prominente. Modernización de sitio para mejorar la interfaz, usabilidad y retención de usuarios.",
      images: ["https://pixmedia.b-cdn.net/portafolio/trasciendeveracruz.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Mejora en la Duración de Visitas",
      kpiValue: "180%",
      solutions: ["Rediseño completo en WordPress", "Optimización móvil avanzada", "Mejora de interfaz y usabilidad", "Estrategias de retención de usuarios"],
      challenge: "Agencia prominente con sitio web obsoleto que necesitaba modernización para mejorar la experiencia del usuario.",
      solution: "Rediseño completo con optimización móvil y mejoras en interfaz para maximizar la retención de usuarios.",
      impact: "Mejora del 180% en la duración de visitas y modernización completa de la presencia digital.",
      category: "CORPORATIVO",
      projectUrl: "https://trasciendeveracruz.com/"
    },
    {
      id: 30,
      title: "Plaza Quadrum",
      shortTitle: "Plaza Quadrum",
      description: "Módulo de Sincronización de Ofertas (Instagram/Web) para Centro Comercial. Desarrollo de funcionalidad que conecta el feed de Instagram con el sitio para promociones en tiempo real.",
      images: ["https://pixmedia.b-cdn.net/portafolio/quadrum.png"],
      tags: ["E-COMMERCE", "OPTIMIZACIÓN"],
      kpi: "Incremento en Visibilidad de Promociones",
      kpiValue: "250%",
      solutions: ["Sincronización automática Instagram/Web", "Promociones en tiempo real", "Módulo de ofertas dinámico", "Integración con redes sociales"],
      challenge: "Centro comercial que necesitaba sincronizar sus promociones de Instagram con su sitio web en tiempo real.",
      solution: "Desarrollo de módulo personalizado que conecta automáticamente el feed de Instagram con el sitio web.",
      impact: "Incremento del 250% en visibilidad de promociones y sincronización perfecta entre plataformas.",
      category: "E-COMMERCE",
      projectUrl: "https://plazaquadrum.com.mx/"
    },
    {
      id: 31,
      title: "Forotabasco",
      shortTitle: "Forotabasco",
      description: "Creación de Sitio Web Hermano, Réplica de Modelo Exitoso de Noticias (FOROCOATZA). Desarrollo de un portal en WordPress enfocado en Tabasco con navegación intuitiva y diseño responsivo.",
      images: ["https://pixmedia.b-cdn.net/portafolio/forotabasco.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Mayor Alcance Regional",
      kpiValue: "200%",
      solutions: ["Réplica de modelo exitoso FOROCOATZA", "Portal WordPress especializado", "Navegación intuitiva optimizada", "Diseño responsivo para Tabasco"],
      challenge: "Necesidad de replicar el éxito de FOROCOATZA en una nueva región con enfoque específico en Tabasco.",
      solution: "Desarrollo de portal hermano con las mejores prácticas del modelo exitoso adaptado para Tabasco.",
      impact: "Mayor alcance regional del 200% y replicación exitosa del modelo de negocio en nueva región.",
      category: "CORPORATIVO",
      projectUrl: "https://forotabasco.com"
    },
    {
      id: 32,
      title: "Yare Falván",
      shortTitle: "Yare Falván",
      description: "Invitación Digital Interactiva y Gestión de Asistencia (RSVP). Desarrollo de un sitio web para un evento de XV años con formulario de confirmación en base de datos.",
      images: ["https://pixmedia.b-cdn.net/mockuper-11-1%5B1%5D.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Eficiencia en RSVP (Asistencia)",
      kpiValue: "95%",
      solutions: ["Invitación digital interactiva", "Sistema de confirmación RSVP", "Base de datos de asistentes", "Gestión automatizada de eventos"],
      challenge: "Evento de XV años que necesitaba una forma moderna y eficiente de gestionar las confirmaciones de asistencia.",
      solution: "Desarrollo de invitación digital con sistema RSVP integrado y base de datos para gestión de asistentes.",
      impact: "Mejora del 95% en la eficiencia de confirmación de asistencia y gestión automatizada del evento.",
      category: "CORPORATIVO"
    },
    {
      id: 33,
      title: "El Bunker",
      shortTitle: "El Bunker",
      description: "Plataforma Noticiosa Intuitiva y Optimización SEO para Periodista. Desarrollo de elbunkernoticias.com para mejorar visibilidad e interacción de Julio Escobar.",
      images: ["https://pixmedia.b-cdn.net/portafolio/elbunker.png"],
      tags: ["OPTIMIZACIÓN", "CORPORATIVO"],
      kpi: "Incremento en Tráfico Web",
      kpiValue: "220%",
      solutions: ["Plataforma noticiosa optimizada", "SEO avanzado para periodistas", "Diseño intuitivo y responsivo", "Integración con redes sociales"],
      challenge: "Periodista que necesitaba una plataforma digital para mejorar su visibilidad y alcance en el ámbito noticioso.",
      solution: "Desarrollo de portal noticioso con optimización SEO y diseño intuitivo para maximizar la interacción.",
      impact: "Incremento del 220% en tráfico web y mejora significativa en la visibilidad del periodista.",
      category: "OPTIMIZACIÓN"
    },
    {
      id: 34,
      title: "Enrique Burgos",
      shortTitle: "Enrique Burgos",
      description: "Plataforma Digital Personalizada para Periodista y Amplificación en Redes. Desarrollo de enriqueburgos.com.mx para aumentar seguidores e interacción.",
      images: ["https://pixmedia.b-cdn.net/portafolio/enriqueburgos.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Aumento en Interacción Social",
      kpiValue: "180%",
      solutions: ["Plataforma digital personalizada", "Integración con redes sociales", "Sistema de gestión de contenido", "Optimización para engagement"],
      challenge: "Periodista que necesitaba amplificar su presencia digital y aumentar la interacción en redes sociales.",
      solution: "Desarrollo de plataforma personalizada con integración social y herramientas de engagement.",
      impact: "Incremento del 180% en interacción social y crecimiento significativo en seguidores.",
      category: "CORPORATIVO"
    },
    {
      id: 35,
      title: "Dherum Group",
      shortTitle: "Dherum Group",
      description: "Web Moderna y Hosting Dedicado para Estabilidad (Correos/Servidor). Solución para problemas de inestabilidad y alta gestión de correos electrónicos.",
      images: ["https://pixmedia.b-cdn.net/portafolio/dherumpgroup.png"],
      tags: ["OPTIMIZACIÓN", "CONSULTORÍA IT"],
      kpi: "Disponibilidad del Sistema",
      kpiValue: "99.5%",
      solutions: ["Hosting dedicado optimizado", "Gestión avanzada de correos", "Monitoreo continuo de estabilidad", "Infraestructura escalable"],
      challenge: "Empresa con problemas constantes de inestabilidad en servidor y gestión deficiente de correos electrónicos.",
      solution: "Implementación de hosting dedicado con gestión avanzada de correos y monitoreo continuo.",
      impact: "Logro del 99.5% de disponibilidad del sistema y eliminación de problemas de correo electrónico.",
      category: "OPTIMIZACIÓN"
    },
    {
      id: 36,
      title: "RL Group",
      shortTitle: "RL Group",
      description: "Web Integral de Comercio Internacional y Logística Multimodal. Diseño atractivo para destacar la experiencia y servicios diversificados de importación/exportación.",
      images: ["https://pixmedia.b-cdn.net/portafolio/rlgroup.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Claridad en Presentación Servicios",
      kpiValue: "92%",
      solutions: ["Portal de comercio internacional", "Presentación clara de servicios logísticos", "Diseño profesional y atractivo", "Optimización para conversiones"],
      challenge: "Empresa de comercio internacional que necesitaba presentar claramente sus servicios diversificados de logística.",
      solution: "Desarrollo de portal integral con presentación clara de servicios y diseño profesional.",
      impact: "Mejora del 92% en la claridad de presentación de servicios y aumento en consultas comerciales.",
      category: "CORPORATIVO"
    },
    {
      id: 37,
      title: "Click Noticias",
      shortTitle: "Click Noticias",
      description: "Web Noticiosa con Acceso Individualizado para Reporteros y SEO Avanzado. Optimización del proceso editorial y consistencia en la experiencia de usuario.",
      images: ["https://pixmedia.b-cdn.net/portafolio/clicknoticias.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Eficiencia en Publicación de Noticias",
      kpiValue: "85%",
      solutions: ["Sistema de acceso individualizado", "Optimización del proceso editorial", "SEO avanzado para noticias", "Experiencia de usuario consistente"],
      challenge: "Portal noticioso que necesitaba optimizar el proceso editorial y mejorar la experiencia de reporteros.",
      solution: "Implementación de sistema con accesos individualizados y optimización del flujo editorial.",
      impact: "Mejora del 85% en la eficiencia de publicación de noticias y optimización del proceso editorial.",
      category: "CORPORATIVO"
    },
    {
      id: 38,
      title: "El confidencial",
      shortTitle: "El Confidencial",
      description: "Web a Medida para Gestión de Contenido y Accesos Personalizados (Reporteros). Solución para el manejo eficiente de la creciente cantidad de notas y categorización.",
      images: ["https://pixmedia.b-cdn.net/portafolio/elconfidencial.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Agilidad en Gestión Editorial",
      kpiValue: "90%",
      solutions: ["Sistema de gestión de contenido personalizado", "Accesos diferenciados para reporteros", "Categorización automática de notas", "Flujo editorial optimizado"],
      challenge: "Portal noticioso con creciente volumen de contenido que necesitaba optimizar la gestión editorial.",
      solution: "Desarrollo de sistema personalizado con gestión eficiente de contenido y accesos diferenciados.",
      impact: "Incremento del 90% en la agilidad de gestión editorial y mejora en la organización de contenido.",
      category: "CORPORATIVO"
    },
    {
      id: 39,
      title: "Buzón Sureste",
      shortTitle: "Buzón Sureste",
      description: "Portal de Noticias Amigable y Responsive con Espacios Publicitarios. Desarrollo de un sitio que facilita la búsqueda de temas y genera ingresos adicionales.",
      images: ["https://pixmedia.b-cdn.net/portafolio/buzonsureste.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Aumento de la Credibilidad",
      kpiValue: "88%",
      solutions: ["Portal responsive y amigable", "Sistema de búsqueda optimizado", "Espacios publicitarios estratégicos", "Monetización de contenido"],
      challenge: "Portal noticioso que necesitaba mejorar la experiencia de usuario y generar ingresos adicionales.",
      solution: "Desarrollo de portal responsive con sistema de búsqueda optimizado y espacios publicitarios.",
      impact: "Incremento del 88% en la credibilidad del portal y generación de ingresos adicionales.",
      category: "CORPORATIVO"
    },
    {
      id: 40,
      title: "Alor Noticias",
      shortTitle: "Alor Noticias",
      description: "Web Profesional con Gestión de Usuarios y Escalabilidad para Referente Noticioso. Transformación digital para aumentar la audiencia de 10,000 a más de 400,000 seguidores en 7 años.",
      images: ["https://pixmedia.b-cdn.net/portafolio/alornoticias.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Crecimiento de Audiencia",
      kpiValue: "4000%",
      solutions: ["Portal noticioso escalable", "Sistema de gestión de usuarios", "Optimización SEO avanzada", "Integración con redes sociales"],
      challenge: "Portal noticioso que necesitaba escalar de 10,000 a más de 400,000 seguidores manteniendo la calidad del contenido.",
      solution: "Desarrollo de plataforma escalable con gestión avanzada de usuarios y optimización continua para crecimiento sostenido.",
      impact: "Crecimiento del 4000% en audiencia en 7 años, estableciéndose como referente noticioso en la región.",
      category: "CORPORATIVO"
    },
    {
      id: 41,
      title: "Activa Publicidad",
      shortTitle: "Activa Publicidad",
      description: "Portal Noticioso con Diseño Responsivo y SEO para Audiencia Diversa. Sitio con categorías claras y sistema de búsqueda eficiente para un medio emergente.",
      images: ["https://pixmedia.b-cdn.net/portafolio/activapublicidad.png"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Aumento de Tráfico Web",
      kpiValue: "180%",
      solutions: ["Diseño responsivo optimizado", "Sistema de categorización clara", "Motor de búsqueda eficiente", "Optimización SEO especializada"],
      challenge: "Medio emergente que necesitaba una plataforma digital para llegar a una audiencia diversa con contenido organizado.",
      solution: "Desarrollo de portal con diseño responsivo, categorización intuitiva y SEO optimizado para máximo alcance.",
      impact: "Incremento del 180% en tráfico web y mejora significativa en la experiencia del usuario.",
      category: "CORPORATIVO"
    },
    {
      id: 42,
      title: "Safe tu seguridad",
      shortTitle: "Safe tu seguridad",
      description: "Web Dinámica e Integración de Marketing Digital (Google/Redes) para CDMX. Solución integral para posicionar la marca y captar clientes en la Ciudad de México.",
      images: ["https://pixmedia.b-cdn.net/portafolio/safetuseguridad.png"],
      tags: ["CONSULTORÍA IT", "CORPORATIVO"],
      kpi: "Incremento en Consultas",
      kpiValue: "275%",
      solutions: ["Sitio web dinámico y moderno", "Integración con Google Ads", "Estrategia de redes sociales", "SEO localizado para CDMX"],
      challenge: "Empresa de seguridad que necesitaba posicionarse en el competitivo mercado de la Ciudad de México.",
      solution: "Desarrollo de estrategia digital integral con web dinámica y campañas de marketing dirigidas.",
      impact: "Incremento del 275% en consultas y posicionamiento sólido en el mercado de CDMX.",
      category: "CONSULTORÍA IT"
    },
    {
      id: 43,
      title: "Contacto Informativo",
      shortTitle: "Contacto Informativo",
      description: "Rediseño Completo y Migración a Servidores Dedicados Pixmedia (Estabilidad). Proyecto para eliminar caídas y mejorar la velocidad, transformando el sitio en confiable y rápido.",
      images: ["https://pixmedia.b-cdn.net/portafolio/contactoinformativo.png"],
      tags: ["OPTIMIZACIÓN", "CORPORATIVO"],
      kpi: "Disponibilidad Constante (Uptime)",
      kpiValue: "99.8%",
      solutions: ["Migración a servidores dedicados", "Rediseño completo del sitio", "Optimización de velocidad", "Monitoreo continuo de rendimiento"],
      challenge: "Portal informativo con problemas constantes de caídas de servidor y velocidad lenta que afectaba la experiencia del usuario.",
      solution: "Migración completa de hosting con optimización de rendimiento y eliminación de problemas técnicos.",
      impact: "Logro del 99.8% de disponibilidad y eliminación completa de problemas de velocidad.",
      category: "OPTIMIZACIÓN"
    },
    {
      id: 44,
      title: "Arcadia News",
      shortTitle: "Arcadia News",
      description: "Transformación Digital con Diseño Limpio, Categorización y Alto Rendimiento. Rediseño integral de WordPress para un medio de noticias dinámico.",
      images: ["https://pixmedia.b-cdn.net/portafolio/ArcadiaNEws.png"],
      tags: ["OPTIMIZACIÓN", "CORPORATIVO"],
      kpi: "Aumento en Participación de Usuarios",
      kpiValue: "165%",
      solutions: ["Rediseño integral de WordPress", "Diseño limpio y moderno", "Sistema de categorización avanzado", "Optimización de rendimiento"],
      challenge: "Medio de noticias que necesitaba una transformación digital completa para mejorar la participación de usuarios.",
      solution: "Rediseño integral con enfoque en experiencia de usuario, categorización intuitiva y alto rendimiento.",
      impact: "Incremento del 165% en participación de usuarios y mejora significativa en tiempo de permanencia.",
      category: "OPTIMIZACIÓN"
    },
    {
      id: 45,
      title: "Notimina",
      shortTitle: "Notimina",
      description: "Renovación de Portal con Diseño Responsivo, Yoast SEO y WP Rocket (Velocidad). Rediseño completo para un sitio anticuado, mejorando la retención de usuarios.",
      images: ["https://pixmedia.b-cdn.net/portafolio/notimina.png"],
      tags: ["OPTIMIZACIÓN", "CORPORATIVO"],
      kpi: "Mejora en Ranking de Búsqueda",
      kpiValue: "240%",
      solutions: ["Rediseño responsivo completo", "Implementación de Yoast SEO", "Optimización con WP Rocket", "Mejora en retención de usuarios"],
      challenge: "Portal anticuado que necesitaba renovación completa para mejorar su posicionamiento y retención de usuarios.",
      solution: "Renovación integral con tecnologías modernas, SEO optimizado y mejoras en velocidad de carga.",
      impact: "Mejora del 240% en ranking de búsqueda y aumento significativo en retención de usuarios.",
      category: "OPTIMIZACIÓN"
    },
    {
      id: 46,
      title: "Eden Tree Services",
      shortTitle: "Eden Tree Services",
      description: "Web Elegante y SEO Localizado + Google Ads (Texas). Estrategia integral para un servicio de poda, buscando alta visibilidad en búsquedas locales.",
      images: ["https://pixmedia.b-cdn.net/portafolio/Edentree.png"],
      tags: ["OPTIMIZACIÓN", "CORPORATIVO"],
      kpi: "Incremento de Consultas y Ventas",
      kpiValue: "195%",
      solutions: ["Sitio web elegante y profesional", "SEO localizado para Texas", "Campañas de Google Ads", "Optimización para búsquedas locales"],
      challenge: "Servicio de poda en Texas que necesitaba alta visibilidad en búsquedas locales para competir en el mercado.",
      solution: "Desarrollo de estrategia integral con web elegante, SEO localizado y campañas de Google Ads dirigidas.",
      impact: "Incremento del 195% en consultas y ventas, posicionándose como líder local en servicios de poda.",
      category: "OPTIMIZACIÓN"
    },
    {
      id: 47,
      title: "Enfoque de Negocios",
      shortTitle: "Enfoque de Negocios",
      description: "Web Dinámica para Revista y Optimización de Anunciantes. Desarrollo de un sitio en WordPress para integrar contenido y ofrecer exposición óptima a sus anunciantes.",
      images: ["https://pixmedia.b-cdn.net/portafolio/revistaenfoquedenegocios.jpg"],
      tags: ["OPTIMIZACIÓN", "CORPORATIVO"],
      kpi: "Mejor Exposición para Anunciantes",
      kpiValue: "92%",
      solutions: ["Plataforma WordPress optimizada", "Sistema de gestión de contenido editorial", "Espacios publicitarios estratégicos", "Integración con redes sociales"],
      challenge: "Revista de negocios que necesitaba una plataforma digital para maximizar la exposición de sus anunciantes y contenido editorial.",
      solution: "Desarrollo de sitio WordPress con espacios publicitarios optimizados y sistema de gestión de contenido dinámico.",
      impact: "Mejora del 92% en la exposición de anunciantes y aumento significativo en el alcance del contenido editorial.",
      category: "OPTIMIZACIÓN"
    },
    {
      id: 48,
      title: "Honestidad y valores",
      shortTitle: "Honestidad y Valores",
      description: "Web Social y Sistema de Afiliación de Miembros. Sitio para difusión de labor social, incluyendo un sistema para que nuevos miembros se registren y accedan a beneficios.",
      images: ["https://pixmedia.b-cdn.net/portafolio/honestidadyvalores.jpg"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Aumento de Participación",
      kpiValue: "88%",
      solutions: ["Sistema de registro de miembros", "Portal de difusión social", "Gestión de beneficios para afiliados", "Plataforma de comunicación interna"],
      challenge: "Asociación civil que necesitaba una plataforma para difundir su labor social y gestionar la afiliación de nuevos miembros.",
      solution: "Desarrollo de portal web con sistema de registro y gestión de beneficios para miembros afiliados.",
      impact: "Incremento del 88% en la participación de miembros y mejora en la difusión de la labor social.",
      category: "CORPORATIVO"
    },
    {
      id: 49,
      title: "TuriCoatza",
      shortTitle: "TuriCoatza",
      description: "Web de Viajes con Sistema de Reserva y Pago en Línea. Plataforma dinámica para promover viajes, tours y facilitar la reserva y el pago seguro en línea con PayPal.",
      images: ["https://pixmedia.b-cdn.net/portafolio/turicoatza.jpg"],
      tags: ["E-COMMERCE", "CORPORATIVO"],
      kpi: "Eficiencia en Proceso de Reserva",
      kpiValue: "90%",
      solutions: ["Sistema de reservas en línea", "Integración con PayPal", "Catálogo de tours y viajes", "Gestión automatizada de confirmaciones"],
      challenge: "Agencia de viajes que necesitaba automatizar el proceso de reservas y pagos para tours y viajes.",
      solution: "Desarrollo de plataforma con sistema de reservas integrado y procesamiento de pagos seguro con PayPal.",
      impact: "Mejora del 90% en la eficiencia del proceso de reserva y aumento significativo en las conversiones de ventas.",
      category: "E-COMMERCE"
    },
    {
      id: 50,
      title: "Óptica Los Ángeles",
      shortTitle: "Óptica Los Ángeles",
      description: "Web Informativa y Sistema de Captura de Datos de Exámenes. Desarrollo de sitio y una aplicación web para tablets que captura resultados de examen visual y los envía en PDF.",
      images: ["https://pixmedia.b-cdn.net/portafolio/opticalosangeles.jpg"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Agilización de Proceso",
      kpiValue: "85%",
      solutions: ["Aplicación web para tablets", "Sistema de captura de datos de exámenes", "Generación automática de PDF", "Integración con Firebase"],
      challenge: "Óptica que necesitaba digitalizar el proceso de captura y entrega de resultados de exámenes visuales.",
      solution: "Desarrollo de aplicación web para tablets con captura de datos y generación automática de reportes en PDF.",
      impact: "Agilización del 85% en el proceso de entrega de resultados y mejora en la experiencia del cliente.",
      category: "CORPORATIVO"
    },
    {
      id: 51,
      title: "El manto de su gracia",
      shortTitle: "El Manto de Su Gracia",
      description: "Web de Promoción de Libro con E-commerce. Sitio moderno para un libro cristiano, enfocado en destacar el contenido y generar ventas en línea con WooCommerce.",
      images: ["https://pixmedia.b-cdn.net/portafolio/elmantodesugracia-2.jpg", "https://pixmedia.b-cdn.net/portafolio/elmantodesugracia.jpg"],
      tags: ["E-COMMERCE", "CORPORATIVO"],
      kpi: "Aumento en Ventas Digitales",
      kpiValue: "95%",
      solutions: ["Sitio web moderno y atractivo", "Integración con WooCommerce", "Sistema de pagos en línea", "Promoción de contenido del libro"],
      challenge: "Autor que necesitaba una plataforma digital para promocionar y vender su libro cristiano en línea.",
      solution: "Desarrollo de sitio web con e-commerce integrado para la venta directa del libro.",
      impact: "Incremento del 95% en ventas digitales y expansión del alcance del mensaje del libro.",
      category: "E-COMMERCE"
    },
    {
      id: 52,
      title: "Ios ingeniería",
      shortTitle: "Ios Ingeniería",
      description: "Web Informativa en WordPress, Galerías y SEO Avanzado. Sitio profesional para ingeniería civil, mecánica y eléctrica, enfocado en visibilidad y captación de consultas.",
      images: ["https://pixmedia.b-cdn.net/portafolio/iosingenieria.jpg"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Incremento de Visibilidad Online",
      kpiValue: "87%",
      solutions: ["Sitio WordPress profesional", "Galerías de proyectos", "Optimización SEO avanzada", "Sistema de captación de consultas"],
      challenge: "Empresa de ingeniería que necesitaba mejorar su visibilidad online y captar más consultas de clientes potenciales.",
      solution: "Desarrollo de sitio web profesional con SEO avanzado y galerías de proyectos para mostrar experiencia.",
      impact: "Incremento del 87% en visibilidad online y aumento significativo en consultas de clientes potenciales.",
      category: "CORPORATIVO"
    },
    {
      id: 53,
      title: "Riviera Maya Global",
      shortTitle: "Riviera Maya Global",
      description: "Plataforma de Bienes Raíces y SEO. Sitio integral para presentar propiedades en Tulum, con galerías detalladas y formularios de contacto.",
      images: ["https://pixmedia.b-cdn.net/portafolio/rivieramayaglobal.jpg"],
      tags: ["E-COMMERCE", "OPTIMIZACIÓN"],
      kpi: "Incremento en Consultas y Ventas",
      kpiValue: "93%",
      solutions: ["Plataforma de bienes raíces completa", "Galerías detalladas de propiedades", "Optimización SEO para búsquedas locales", "Formularios de contacto optimizados"],
      challenge: "Inmobiliaria en Tulum que necesitaba una plataforma digital para mostrar propiedades y captar clientes internacionales.",
      solution: "Desarrollo de sitio web con galerías profesionales, SEO optimizado y sistema de captación de leads.",
      impact: "Incremento del 93% en consultas y ventas de propiedades, con alcance internacional mejorado.",
      category: "E-COMMERCE"
    },
    {
      id: 54,
      title: "2R Comunicación",
      shortTitle: "2R Comunicación",
      description: "Web Dinámica para Publicación de Contenido y Coaching Digital. Plataforma de blog en WordPress para compartir artículos, atraer tráfico y generar leads para consultoría de negocios.",
      images: ["https://pixmedia.b-cdn.net/portafolio/doserre.jpg"],
      tags: ["CORPORATIVO", "CONSULTORÍA IT"],
      kpi: "Generación de Clientes Potenciales",
      kpiValue: "250%",
      solutions: ["Plataforma WordPress optimizada", "Sistema de gestión de contenido", "Estrategia SEO y captación de leads", "Integración con redes sociales"],
      challenge: "Necesidad de establecer una presencia digital sólida para atraer clientes potenciales en el sector de consultoría empresarial.",
      solution: "Desarrollo de una plataforma de contenido dinámica con optimización SEO y herramientas de captación de leads integradas.",
      impact: "Incremento del 250% en la generación de clientes potenciales y mejora significativa en el posicionamiento digital de la marca.",
      category: "CORPORATIVO"
    },
    {
      id: 55,
      title: "Reciclarte",
      shortTitle: "Reciclarte",
      description: "E-commerce en Shopify y Estrategia de Marca Creativa. Desarrollo de tienda en línea para venta de productos y cursos de restauración, ampliando el alcance comercial.",
      images: ["https://pixmedia.b-cdn.net/portafolio/olgguiux.jpg"],
      tags: ["E-COMMERCE", "BRANDING"],
      kpi: "Crecimiento de Ventas en Línea",
      kpiValue: "300%",
      solutions: ["Tienda en línea Shopify", "Sistema de gestión de cursos", "Estrategia de marca creativa", "Integración de pagos seguros"],
      challenge: "Transición de un negocio físico a una plataforma digital para ampliar el alcance y diversificar los ingresos.",
      solution: "Implementación de una tienda e-commerce completa con sistema de cursos online y estrategia de marca renovada.",
      impact: "Crecimiento del 300% en ventas online y expansión exitosa del modelo de negocio hacia el ámbito digital.",
      category: "E-COMMERCE"
    },
    {
      id: 56,
      title: "Palenke",
      shortTitle: "Palenke",
      description: "Sitio Web Informativo y Estrategia Digital para Taller Mecánico. Creación de presencia en línea para atraer nuevos clientes y generar credibilidad.",
      images: ["https://pixmedia.b-cdn.net/portafolio/tallerpalenke.jpg"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Aumento de Visibilidad Local",
      kpiValue: "220%",
      solutions: ["Sitio web informativo profesional", "Sistema de citas en línea", "Estrategia de marketing local", "Optimización SEO local"],
      challenge: "Falta de presencia digital para un taller mecánico tradicional que necesitaba atraer nuevos clientes.",
      solution: "Desarrollo de un sitio web profesional con sistema de citas y estrategia de marketing local optimizada.",
      impact: "Incremento del 220% en visibilidad local y mejora significativa en la captación de nuevos clientes.",
      category: "CORPORATIVO"
    },
    {
      id: 57,
      title: "Statu Quo",
      shortTitle: "Statu Quo",
      description: "Plataforma Web para Exhibición de Proyectos Arquitectónicos. Creación de un sitio visualmente atractivo con galería dinámica para captar clientes potenciales.",
      images: ["https://pixmedia.b-cdn.net/statuquoarq-scaled%5B1%5D.jpg"],
      tags: ["CORPORATIVO", "BRANDING"],
      kpi: "Enganche de Clientes Potenciales",
      kpiValue: "280%",
      solutions: ["Galería dinámica de proyectos", "Diseño visualmente atractivo", "Sistema de captación de leads", "Portafolio interactivo profesional"],
      challenge: "Necesidad de una plataforma digital que mostrara efectivamente los proyectos arquitectónicos y atrajera nuevos clientes.",
      solution: "Desarrollo de una galería interactiva con diseño minimalista y herramientas de captación de leads especializadas.",
      impact: "Incremento del 280% en el enganche de clientes potenciales y mejora en la presentación profesional de proyectos.",
      category: "CORPORATIVO"
    },
    {
      id: 58,
      title: "Puertas Decuir",
      shortTitle: "Puertas Decuir",
      description: "Web Profesional y Campañas de Marketing Digital para Firma Legal. Plataforma para promocionar servicios legales, con estrategias SEO y de redes sociales para captación de clientes.",
      images: ["https://pixmedia.b-cdn.net/portafolio/puertasdecuir.jpg"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Expansión del Alcance Digital",
      kpiValue: "320%",
      solutions: ["Sitio web profesional para firma legal", "Estrategias SEO especializadas", "Campañas de marketing digital", "Blog jurídico y captación de leads"],
      challenge: "Firma legal tradicional que necesitaba expandir su alcance digital y atraer nuevos clientes a través de canales online.",
      solution: "Desarrollo de una estrategia digital integral con sitio web profesional, SEO especializado y campañas de marketing.",
      impact: "Expansión del 320% en el alcance digital y posicionamiento como referente en servicios legales online.",
      category: "CORPORATIVO"
    },
    {
      id: 59,
      title: "FastCancun",
      shortTitle: "Fast Cancun",
      description: "Sistema de Reservas y Pagos en Línea para Renta de Autos. Desarrollo de una plataforma integrada para seleccionar vehículos, servicios adicionales y completar pagos de forma segura.",
      images: ["https://pixmedia.b-cdn.net/portafolio/fastcancun.jpg"],
      tags: ["E-COMMERCE", "OPTIMIZACIÓN"],
      kpi: "Eficiencia en Reservas y Pagos",
      kpiValue: "85%",
      solutions: ["Sistema de reservas integrado", "Procesamiento de pagos seguro", "Gestión de flota y disponibilidad", "Selección de servicios adicionales"],
      challenge: "Necesidad de automatizar el proceso de reservas y pagos para una empresa de renta de autos en Cancún.",
      solution: "Desarrollo de una plataforma integral que automatiza reservas, pagos y gestión de flota con alta seguridad.",
      impact: "Mejora del 85% en la eficiencia de reservas y pagos, reduciendo significativamente los tiempos de procesamiento.",
      category: "E-COMMERCE"
    },
    {
      id: 60,
      title: "Atracciones Roca",
      shortTitle: "Atracciones Roca",
      description: "Sitio Web Interactivo y Visibilidad Nacional para Juegos Mecánicos. Desarrollo de portal en WordPress para compartir historia, catálogo de juegos y ubicación de ferias.",
      images: ["https://pixmedia.b-cdn.net/portafolio/atraccionesroca.jpg"],
      tags: ["CORPORATIVO", "BRANDING"],
      kpi: "Interacción con el Cliente",
      kpiValue: "92%",
      solutions: ["Portal WordPress interactivo", "Catálogo de juegos mecánicos", "Calendario de ferias y eventos", "Galería multimedia y ubicaciones"],
      challenge: "Empresa de juegos mecánicos que necesitaba una presencia digital para mostrar su catálogo y ubicaciones de ferias.",
      solution: "Desarrollo de un portal interactivo con catálogo dinámico, calendario de eventos y galería multimedia.",
      impact: "Incremento del 92% en la interacción con clientes y mejora significativa en la visibilidad nacional.",
      category: "CORPORATIVO"
    },
    {
      id: 61,
      title: "Migo",
      shortTitle: "MIGO",
      description: "Diseño de Empaque para Formalización de Marca de Miel. Creación de un empaque atractivo en tonos amarillo y naranja que comunica la calidad natural y artesanal del producto.",
      images: ["https://pixmedia.b-cdn.net/41%5B1%5D.jpg"],
      tags: ["BRANDING"],
      kpi: "Reconocimiento de Producto",
      kpiValue: "90%",
      solutions: ["Diseño de empaque profesional", "Paleta de colores natural (amarillo/naranja)", "Comunicación de calidad artesanal", "Optimización para venta formal"],
      challenge: "Productor de miel artesanal que necesitaba formalizar su marca con un empaque profesional para venta comercial.",
      solution: "Desarrollo de un diseño de empaque que comunica calidad natural y artesanal con colores atractivos.",
      impact: "Incremento del 90% en el reconocimiento del producto y transición exitosa hacia la venta formal.",
      category: "BRANDING"
    },
    {
      id: 62,
      title: "NIU",
      shortTitle: "NIU",
      description: "Logotipo Ambigramático e Identidad de Marca Innovadora. Desarrollo de un logo legible en cualquier orientación y tarjetas con código QR para reflejar innovación y servicio de internet constante.",
      images: ["https://pixmedia.b-cdn.net/Niu1%5B1%5D.jpg"],
      tags: ["BRANDING"],
      kpi: "Tasa de Reconocimiento",
      kpiValue: "95%",
      solutions: ["Logotipo ambigramático único", "Tarjetas con código QR integrado", "Identidad visual innovadora", "Comunicación de servicio constante"],
      challenge: "Empresa de servicios de internet que necesitaba una identidad visual innovadora que reflejara tecnología y confiabilidad.",
      solution: "Creación de un logotipo ambigramático único con tarjetas de presentación que incluyen código QR.",
      impact: "Logro del 95% en tasa de reconocimiento de marca y posicionamiento como empresa tecnológica innovadora.",
      category: "BRANDING"
    },
    {
      id: 63,
      title: "Odontología integral",
      shortTitle: "Odontología Integral",
      description: "Diseño de Tarjetas de Presentación de Alta Calidad. Creación de tarjetas elegantes y cálidas en tonos rosa y blanco para transmitir confianza, calidad y un enfoque de cuidado compasivo.",
      images: ["https://pixmedia.b-cdn.net/portafolio/odontologia.jpg"],
      tags: ["BRANDING"],
      kpi: "Mejora de Primera Impresión",
      kpiValue: "88%",
      solutions: ["Diseño elegante y profesional", "Paleta de colores cálidos (rosa/blanco)", "Comunicación de confianza y calidad", "Enfoque en cuidado compasivo"],
      challenge: "Clínica dental que necesitaba mejorar su imagen profesional y generar mayor confianza en los pacientes.",
      solution: "Diseño de tarjetas de presentación elegantes que transmiten profesionalismo y calidez humana.",
      impact: "Mejora del 88% en la primera impresión de los pacientes y aumento en la confianza hacia los servicios.",
      category: "BRANDING"
    },
    {
      id: 64,
      title: "De corazón para ti",
      shortTitle: "De Corazón para ti",
      description: "Diseño Integral de Papelería Corporativa para Fundación. Desarrollo de tarjetas, sobres y hojas membretadas con un diseño vibrante y emocional para reflejar la misión y profesionalismo.",
      images: ["https://pixmedia.b-cdn.net/portafolio/decorazonparati.jpg"],
      tags: ["BRANDING"],
      kpi: "Cohesión Visual de Marca",
      kpiValue: "95%",
      solutions: ["Papelería corporativa completa", "Diseño vibrante y emocional", "Reflejo de misión social", "Comunicación profesional"],
      challenge: "Fundación que necesitaba una identidad visual cohesiva que reflejara su misión social y proyectara profesionalismo.",
      solution: "Desarrollo de papelería corporativa integral con diseño emocional que conecta con la causa social.",
      impact: "Logro del 95% en cohesión visual de marca y mejora significativa en la percepción profesional de la fundación.",
      category: "BRANDING"
    },
    {
      id: 65,
      title: "Altaguarda",
      shortTitle: "AltaGuarda",
      description: "Sitio Web Corporativo y Certificación ISO Destacada. Desarrollo de un portal en WordPress para mostrar servicios de ingeniería/construcción y resaltar su compromiso con estándares de calidad.",
      images: ["https://pixmedia.b-cdn.net/portafolio/altaguarda.jpg"],
      tags: ["CORPORATIVO"],
      kpi: "Claridad en Presentación Servicios",
      kpiValue: "92%",
      solutions: ["Portal WordPress corporativo", "Destacar certificaciones ISO", "Presentación de servicios de ingeniería", "Responsabilidad social empresarial"],
      challenge: "Empresa de ingeniería que necesitaba destacar sus certificaciones ISO y presentar sus servicios de manera profesional.",
      solution: "Desarrollo de un portal corporativo que resalta las certificaciones y presenta los servicios de manera clara.",
      impact: "Mejora del 92% en la claridad de presentación de servicios y fortalecimiento de la credibilidad corporativa.",
      category: "CORPORATIVO"
    },
    {
      id: 66,
      title: "Vive Coatza",
      shortTitle: "Vive Coatza",
      description: "Migración de Hosting y Optimización de Rendimiento Web. Solución integral para erradicar caídas de servidor y mejorar la velocidad de carga para un portal de noticias de alto tráfico.",
      images: ["https://pixmedia.b-cdn.net/portafolio/vivecoatza.jpg"],
      tags: ["OPTIMIZACIÓN"],
      kpi: "Mejora en Posicionamiento SEO",
      kpiValue: "88%",
      solutions: ["Migración de hosting optimizada", "Eliminación de caídas de servidor", "Optimización de velocidad de carga", "Portal de noticias de alto tráfico"],
      challenge: "Portal de noticias con problemas constantes de caídas de servidor y velocidad de carga lenta.",
      solution: "Migración completa de hosting con optimización de rendimiento y eliminación de problemas técnicos.",
      impact: "Mejora del 88% en posicionamiento SEO y eliminación completa de caídas de servidor.",
      category: "OPTIMIZACIÓN"
    },
    {
      id: 67,
      title: "Galería digital",
      shortTitle: "Galería Digital",
      description: "Portal Web Centralizado de Eventos Culturales de Veracruz. Desarrollo de un sitio con motor de búsqueda personalizado para facilitar el acceso y la promoción de eventos culturales en la región.",
      images: ["https://pixmedia.b-cdn.net/portafolio/galeriadigital.jpg"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Centralización de Información",
      kpiValue: "95%",
      solutions: ["Portal web centralizado", "Motor de búsqueda personalizado", "Sistema de promoción de eventos", "Base de datos cultural regional"],
      challenge: "Necesidad de centralizar la información de eventos culturales dispersa en múltiples plataformas en Veracruz.",
      solution: "Desarrollo de un portal centralizado con motor de búsqueda especializado para eventos culturales.",
      impact: "Logro del 95% en centralización de información cultural y mejora significativa en el acceso a eventos.",
      category: "CORPORATIVO"
    },
    {
      id: 68,
      title: "Cadogui",
      shortTitle: "Cadogui",
      description: "Sitio Web Industrial y Hosting de Correos Web. Plataforma informativa para servicios especializados en eliminación de fugas y alojamiento de correos empresariales.",
      images: ["https://pixmedia.b-cdn.net/portafolio/cadogui.jpg"],
      tags: ["CORPORATIVO"],
      kpi: "Comunicación Profesional",
      kpiValue: "95%",
      solutions: ["Sitio web industrial especializado", "Hosting de correos empresariales", "Sistema de contacto profesional", "Presentación de servicios técnicos"],
      challenge: "Empresa industrial que necesitaba una presencia web profesional y sistema de correos corporativos.",
      solution: "Desarrollo de sitio web especializado con hosting de correos integrado para comunicación empresarial.",
      impact: "Mejora del 95% en comunicación profesional y establecimiento de presencia digital sólida.",
      category: "CORPORATIVO"
    },
    {
      id: 69,
      title: "Disis",
      shortTitle: "Disis",
      description: "Diseño y Desarrollo de Plataforma de Gestión de Documentos. Solución CRM/ERP a medida para optimizar el flujo de trabajo y la trazabilidad de documentos internos.",
      images: ["https://pixmedia.b-cdn.net/portafolio/disis.jpg"],
      tags: ["CONSULTORÍA IT", "OPTIMIZACIÓN"],
      kpi: "Trazabilidad Documental",
      kpiValue: "95%",
      solutions: ["Sistema CRM/ERP personalizado", "Gestión documental avanzada", "Automatización de flujos de trabajo", "Trazabilidad completa de procesos"],
      challenge: "Empresa que necesitaba optimizar la gestión documental y mejorar la trazabilidad de sus procesos internos.",
      solution: "Desarrollo de una plataforma CRM/ERP personalizada con gestión documental avanzada y automatización.",
      impact: "Logro del 95% en trazabilidad documental y optimización significativa de los flujos de trabajo.",
      category: "CONSULTORÍA IT"
    },
    {
      id: 70,
      title: "Gram",
      shortTitle: "Gram",
      description: "Estrategia de Marca y Plataforma Inmobiliaria. Construcción de una identidad visual robusta y sitio web para gestión de propiedades y clientes en el sector de la construcción.",
      images: ["https://pixmedia.b-cdn.net/portafolio/construimos.jpg"],
      tags: ["BRANDING", "E-COMMERCE"],
      kpi: "Leads Generados",
      kpiValue: "250%",
      solutions: ["Identidad visual completa", "Plataforma inmobiliaria personalizada", "Sistema de gestión de leads", "Catálogo digital de propiedades"],
      challenge: "Empresa inmobiliaria que necesitaba una identidad visual sólida y plataforma digital para gestión de propiedades.",
      solution: "Desarrollo de branding completo con plataforma inmobiliaria integrada para gestión de leads y propiedades.",
      impact: "Incremento del 250% en leads generados y establecimiento de una identidad visual robusta en el sector.",
      category: "BRANDING"
    },
    {
      id: 71,
      title: "Leinet",
      shortTitle: "Leinet",
      description: "Rediseño Web y Sistema de Ventas B2B. Renovación completa del portal y desarrollo de herramientas digitales para optimizar las ventas al por mayor.",
      images: ["https://pixmedia.b-cdn.net/portafolio/Leinet.jpg"],
      tags: ["E-COMMERCE", "OPTIMIZACIÓN"],
      kpi: "Tasa de Conversión B2B",
      kpiValue: "65%",
      solutions: ["Rediseño completo del portal web", "Sistema de ventas B2B optimizado", "Gestión automatizada de cotizaciones", "Catálogo digital interactivo"],
      challenge: "Empresa B2B con portal obsoleto que necesitaba optimizar sus procesos de venta al por mayor.",
      solution: "Rediseño completo con sistema de ventas B2B integrado y automatización de procesos comerciales.",
      impact: "Mejora del 65% en la tasa de conversión B2B y optimización significativa de los procesos de venta.",
      category: "E-COMMERCE"
    },
    {
      id: 72,
      title: "Tochijara",
      shortTitle: "Tochijara",
      description: "Tienda en Línea E-commerce de Alto Impacto. Plataforma completa para la venta de productos, integrando pagos y logística para un negocio de crecimiento acelerado.",
      images: ["https://pixmedia.b-cdn.net/portafolio/tochijara.jpg"],
      tags: ["E-COMMERCE"],
      kpi: "Tasa de Abandono de Carrito",
      kpiValue: "25%",
      solutions: ["Plataforma e-commerce completa", "Integración de pagos y logística", "Gestión automatizada de inventario", "Optimización de conversiones"],
      challenge: "Negocio en crecimiento que necesitaba una plataforma e-commerce robusta para manejar alto volumen de ventas.",
      solution: "Desarrollo de plataforma e-commerce completa con integración de pagos, logística y gestión automatizada.",
      impact: "Reducción al 25% en la tasa de abandono de carrito y crecimiento acelerado en ventas online.",
      category: "E-COMMERCE"
    },
    {
      id: 73,
      title: "Mi cupido",
      shortTitle: "Mi Cupido",
      description: "Desarrollo de Aplicación Móvil de Citas. Creación de una app funcional (MVP) con características sociales y de geolocalización.",
      images: ["https://pixmedia.b-cdn.net/portafolio/micupido.jpg"],
      tags: ["CONSULTORÍA IT"],
      kpi: "Retention Rate (Usuarios)",
      kpiValue: "78%",
      solutions: ["Aplicación móvil nativa (MVP)", "Algoritmos de matching avanzados", "Chat en tiempo real", "Geolocalización y filtros"],
      challenge: "Startup que necesitaba desarrollar una aplicación móvil de citas con funcionalidades sociales avanzadas.",
      solution: "Desarrollo de MVP con algoritmos de matching, chat en tiempo real y funciones de geolocalización.",
      impact: "Logro del 78% en retention rate de usuarios y lanzamiento exitoso de la aplicación móvil.",
      category: "CONSULTORÍA IT"
    },
    {
      id: 74,
      title: "Fercisa",
      shortTitle: "Fercisa",
      description: "Sitio Web Corporativo y Generación de Contactos. Diseño de un sitio enfocado en la presentación de servicios industriales y la captación de leads cualificados.",
      images: ["https://pixmedia.b-cdn.net/portafolio/fercisa.jpg"],
      tags: ["CORPORATIVO"],
      kpi: "Leads Calificados",
      kpiValue: "320%",
      solutions: ["Sitio web corporativo profesional", "Sistema de captación de leads", "Catálogo de servicios industriales", "Optimización SEO especializada"],
      challenge: "Empresa industrial que necesitaba mejorar su presencia digital y generar leads cualificados.",
      solution: "Desarrollo de sitio web corporativo con sistema de captación de leads y optimización SEO especializada.",
      impact: "Incremento del 320% en leads calificados y mejora significativa en la presencia digital industrial.",
      category: "CORPORATIVO"
    },
    {
      id: 75,
      title: "Elecciones Forocoatza",
      shortTitle: "Elecciones Forocoatza",
      description: "Plataforma Digital para Seguimiento Electoral. Desarrollo de un sistema para la transmisión en vivo de resultados y el monitoreo de la jornada electoral.",
      images: ["https://pixmedia.b-cdn.net/portafolio/forocoatzaelecciones.jpg"],
      tags: ["CONSULTORÍA IT"],
      kpi: "Disponibilidad del Sistema (Uptime)",
      kpiValue: "99.9%",
      solutions: ["Plataforma de seguimiento electoral", "Transmisión en vivo de resultados", "Visualización de datos en tiempo real", "Sistema de alta disponibilidad"],
      challenge: "Necesidad de una plataforma confiable para el seguimiento electoral en tiempo real con alta disponibilidad.",
      solution: "Desarrollo de sistema electoral con transmisión en vivo, visualización de datos y alta disponibilidad.",
      impact: "Logro del 99.9% de disponibilidad del sistema durante la jornada electoral y transmisión exitosa en tiempo real.",
      category: "CONSULTORÍA IT"
    },
    {
      id: 76,
      title: "D&G Consultores",
      shortTitle: "D&G Consultores",
      description: "Diseño de Marca y Presencia Web Estratégica. Creación de una identidad de marca renovada y un sitio web institucional minimalista y profesional.",
      images: ["https://pixmedia.b-cdn.net/portafolio/dygconsultores.jpg"],
      tags: ["BRANDING", "CORPORATIVO"],
      kpi: "Posicionamiento de Marca",
      kpiValue: "85%",
      solutions: ["Rediseño completo de identidad corporativa", "Sitio web institucional minimalista", "Manual de marca y guías de estilo", "Optimización SEO y posicionamiento"],
      challenge: "Consultoría que necesitaba renovar su identidad de marca y establecer una presencia web profesional.",
      solution: "Desarrollo de identidad de marca completa con sitio web minimalista y estrategia de posicionamiento.",
      impact: "Mejora del 85% en posicionamiento de marca y establecimiento de presencia digital profesional.",
      category: "BRANDING"
    },
    {
      id: 77,
      title: "Pemex petroquímica",
      shortTitle: "Pemex Petroquímica",
      description: "Plataforma de Eventos Digitales de Alto Perfil. Desarrollo de un micrositio de eventos altamente seguro y adaptable.",
      images: ["https://pixmedia.b-cdn.net/portafolio/foropetroquimicos.jpg"],
      tags: ["CORPORATIVO", "CONSULTORÍA IT"],
      kpi: "Seguridad del Sitio",
      kpiValue: "100%",
      solutions: ["Micrositio de eventos especializado", "Sistema de registro y gestión de asistentes", "Protocolos de seguridad avanzados", "Plataforma adaptable para múltiples eventos"],
      challenge: "Desarrollo de plataforma de eventos de alto perfil con máximos estándares de seguridad para sector petroquímico.",
      solution: "Creación de micrositio especializado con protocolos de seguridad avanzados y gestión de eventos.",
      impact: "Logro del 100% en seguridad del sitio y gestión exitosa de eventos de alto perfil en el sector.",
      category: "CORPORATIVO"
    },
    {
      id: 78,
      title: "Mr Parris",
      shortTitle: "Mr Parris",
      description: "Plataforma de E-commerce y Reservas de Taquizas en Línea. Desarrollo de un sitio web interactivo con función de reserva y pago en línea para servicios de catering.",
      images: ["https://pixmedia.b-cdn.net/portafolio/mrparris.jpg"],
      tags: ["E-COMMERCE", "CORPORATIVO"],
      kpi: "Mejora Experiencia Cliente",
      kpiValue: "90%",
      solutions: ["Plataforma e-commerce para catering", "Sistema de reservas en línea", "Procesamiento de pagos integrado", "Catálogo de servicios y menús"],
      challenge: "Servicio de catering que necesitaba automatizar el proceso de reservas y pagos para taquizas.",
      solution: "Desarrollo de plataforma e-commerce con sistema de reservas integrado y procesamiento de pagos seguro con PayPal.",
      impact: "Mejora del 90% en la experiencia del cliente y aumento significativo en reservas online.",
      category: "E-COMMERCE"
    },
    {
      id: 79,
      title: "Líder en defensa fiscal",
      shortTitle: "Líder en defensa fiscal",
      description: "Web Institucional Profesional y SEO Optimizado. Creación de un sitio para asesoría fiscal y contable, enfocado en visibilidad en motores de búsqueda.",
      images: ["https://pixmedia.b-cdn.net/portafolio/liderendefensafiscal.jpg"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Visibilidad Online",
      kpiValue: "88%",
      solutions: ["Sitio web institucional profesional", "Optimización SEO especializada", "Contenido optimizado para búsquedas", "Sistema de captación de consultas"],
      challenge: "Firma de asesoría fiscal que necesitaba mejorar su visibilidad en motores de búsqueda y captar más clientes.",
      solution: "Desarrollo de sitio web profesional con SEO optimizado y contenido estratégico para búsquedas fiscales.",
      impact: "Incremento del 88% en visibilidad online y aumento significativo en consultas de clientes potenciales.",
      category: "CORPORATIVO"
    },
    {
      id: 80,
      title: "Nouspix",
      shortTitle: "Nouspix",
      description: "Página Web Informativa y Estrategia SEO Local. Diseño de un sitio para agencia de marketing digital con enfoque en captación de clientes locales en Coatzacoalcos.",
      images: ["https://pixmedia.b-cdn.net/portafolio/nouspix.jpg"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Alcance Local Ampliado",
      kpiValue: "85%",
      solutions: ["Sitio web informativo profesional", "Estrategia SEO local optimizada", "Portafolio de servicios de marketing", "Sistema de captación de leads locales"],
      challenge: "Agencia de marketing digital que necesitaba mejorar su alcance local en Coatzacoalcos y captar más clientes.",
      solution: "Desarrollo de sitio web con SEO local optimizado y estrategia de captación de clientes en la región.",
      impact: "Ampliación del 85% en alcance local y aumento significativo en clientes de la región.",
      category: "CORPORATIVO"
    },
    {
      id: 81,
      title: "Cevejera",
      shortTitle: "Cevejera",
      description: "Blog Personal y Sincronización Multimedia. Desarrollo de un blog para periodista con integración automática de notas y videos de YouTube.",
      images: ["https://pixmedia.b-cdn.net/portafolio/cevejera.jpg"],
      tags: ["CORPORATIVO", "OPTIMIZACIÓN"],
      kpi: "Acceso Centralizado",
      kpiValue: "92%",
      solutions: ["Blog personal profesional", "Sincronización automática con YouTube", "Sistema de gestión de contenido", "Integración multimedia optimizada"],
      challenge: "Periodista que necesitaba centralizar su contenido de notas escritas y videos de YouTube en una sola plataforma.",
      solution: "Desarrollo de blog con sincronización automática de contenido multimedia desde YouTube.",
      impact: "Logro del 92% en acceso centralizado de contenido y mejora en la experiencia de los lectores.",
      category: "CORPORATIVO"
    },
    {
      id: 82,
      title: "Uniformes UNI",
      shortTitle: "Uniformes UNI",
      description: "Catálogo en Línea Dinámico con Sincronización de Facebook. Sitio web con integración personalizada para actualizar el catálogo automáticamente desde la fanpage de Facebook.",
      images: ["https://pixmedia.b-cdn.net/portafolio/uniformesuni.jpg"],
      tags: ["E-COMMERCE", "OPTIMIZACIÓN"],
      kpi: "Catálogo Siempre Actualizado",
      kpiValue: "95%",
      solutions: ["Catálogo en línea dinámico", "Sincronización automática con Facebook", "Actualización en tiempo real", "Sistema de gestión de productos"],
      challenge: "Empresa de uniformes que necesitaba mantener su catálogo web sincronizado con sus publicaciones de Facebook.",
      solution: "Desarrollo de sitio web con integración personalizada para sincronización automática con Facebook.",
      impact: "Logro del 95% en actualización automática del catálogo y reducción significativa en tiempo de gestión.",
      category: "E-COMMERCE"
    },
    {
      id: 83,
      title: "Comercializadora Sagitario",
      shortTitle: "Comercializadora Sagitario",
      description: "Web Informativa con Cotización y Contacto en Línea. Sitio para confección de uniformes, incluyendo formularios de cotización para agilizar ventas.",
      images: ["https://pixmedia.b-cdn.net/portafolio/uniformessagitario.jpg"],
      tags: ["CORPORATIVO", "E-COMMERCE"],
      kpi: "Facilidad de Cotización",
      kpiValue: "87%",
      solutions: ["Sitio web informativo profesional", "Sistema de cotización en línea", "Formularios de contacto optimizados", "Catálogo de productos y servicios"],
      challenge: "Empresa de confección de uniformes que necesitaba agilizar el proceso de cotización y contacto con clientes.",
      solution: "Desarrollo de sitio web con sistema de cotización en línea y formularios optimizados.",
      impact: "Mejora del 87% en la facilidad de cotización y aumento significativo en la conversión de consultas a ventas.",
      category: "CORPORATIVO"
    },
    {
      id: 84,
      title: "Agua Tkita",
      shortTitle: "Agua Tkita",
      description: "Sistema E-commerce y Distribución Optimizado. Implementación de una plataforma de comercio electrónico integral.",
      images: ["https://pixmedia.b-cdn.net/aguatkita%5B1%5D.jpg"],
      tags: ["E-COMMERCE", "OPTIMIZACIÓN"],
      kpi: "Optimización de Logística",
      kpiValue: "75%",
      solutions: ["Plataforma e-commerce personalizada", "Sistema de pedidos recurrentes", "Gestión de inventario en tiempo real", "Integración con sistemas de distribución"],
      challenge: "Empresa de distribución de agua que necesitaba optimizar sus procesos logísticos y ventas online.",
      solution: "Implementación de plataforma e-commerce con gestión logística integrada y automatización de procesos.",
      impact: "Mejora del 75% en optimización logística y incremento significativo en eficiencia operacional.",
      category: "E-COMMERCE"
    }
  ];

  const filters = ['TODOS', 'E-COMMERCE', 'BRANDING', 'CORPORATIVO', 'OPTIMIZACIÓN', 'CONSULTORÍA IT', 'SEGURIDAD'];

  const filteredCases = selectedFilter === 'TODOS' 
    ? allCases 
    : allCases.filter(caseItem => caseItem.tags.includes(selectedFilter));

  const getSimilarCases = (currentCase: CaseStudy) => {
    return allCases
      .filter(caseItem => 
        caseItem.id !== currentCase.id && 
        caseItem.tags.some(tag => currentCase.tags.includes(tag))
      )
      .slice(0, 3);
  };

  // Image carousel functionality for modal
  const startImageCarousel = () => {
    if (selectedCase && selectedCase.images.length > 1) {
      if (imageIntervalRef.current) {
        clearInterval(imageIntervalRef.current);
      }
      imageIntervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % selectedCase.images.length);
      }, 4000);
    }
  };

  const stopImageCarousel = () => {
    if (imageIntervalRef.current) {
      clearInterval(imageIntervalRef.current);
      imageIntervalRef.current = null;
    }
  };

  useEffect(() => {
    if (selectedCase && selectedCase.images.length > 1) {
      startImageCarousel();
    } else {
      stopImageCarousel();
    }
    
    return () => stopImageCarousel();
  }, [selectedCase]);

  useEffect(() => {
    if (selectedCase) {
      setCurrentImageIndex(0);
    }
  }, [selectedCase]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(42, 35, 68, 0.9)), url('https://readdy.ai/api/search-image?query=Success%20stories%20visualization%20with%20business%20growth%20charts%2C%20digital%20transformation%20results%2C%20ROI%20metrics%2C%20and%20achievement%20trophies%2C%20professional%20corporate%20environment%20with%20purple%20and%20yellow%20data%20visualization&width=1920&height=800&seq=success-hero&orientation=landscape')`
        }}
      >
        <div className="px-6 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 leading-tight">
            Casos de Éxito
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Descubra cómo hemos transformado desafíos tecnológicos en éxitos empresariales medibles y sostenibles.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                  selectedFilter === filter
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="group relative bg-gradient-to-br from-purple-900/30 to-gray-900/30 rounded-2xl overflow-hidden border border-purple-500/20 hover:border-yellow-400/50 transition-all cursor-pointer"
                onClick={() => setSelectedCase(caseItem)}
              >
                {/* Image Container - Fixed height with proper aspect ratio */}
                <div className="relative h-80 overflow-hidden">
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center p-6">
                    <img 
                      src={caseItem.images[0]}
                      alt={caseItem.title}
                      className="max-w-full max-h-full object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-yellow-400 mb-3">
                        {caseItem.shortTitle}
                      </h3>
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {caseItem.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="text-yellow-400 font-semibold">
                        {caseItem.kpi}: {caseItem.kpiValue}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {caseItem.shortTitle}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {caseItem.description.split('.')[0]}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Case Modal */}
      {selectedCase && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedCase(null)}
        >
          <div 
            className="bg-gradient-to-br from-gray-900 to-black max-w-4xl w-full rounded-2xl border border-purple-500/20 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-8 border-b border-gray-700">
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
              >
                <i className="ri-close-line text-xl text-white"></i>
              </button>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedCase.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-yellow-400 mb-4">
                {selectedCase.title}
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                {selectedCase.description}
              </p>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Image Carousel */}
                <div className="relative">
                  <div className="w-full h-80 rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center p-6">
                    <img 
                      src={selectedCase.images[currentImageIndex]}
                      alt={selectedCase.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  {/* Image Navigation - Only show if multiple images */}
                  {selectedCase.images.length > 1 && (
                    <>
                      {/* Image Indicators */}
                      <div className="flex justify-center mt-4 space-x-2">
                        {selectedCase.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                              index === currentImageIndex 
                                ? 'bg-yellow-400 scale-125' 
                                : 'bg-gray-600 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      
                      {/* Navigation Arrows */}
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev - 1 + selectedCase.images.length) % selectedCase.images.length)}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                      >
                        <i className="ri-arrow-left-line text-lg"></i>
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev + 1) % selectedCase.images.length)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                      >
                        <i className="ri-arrow-right-line text-lg"></i>
                      </button>
                    </>
                  )}
                </div>

                {/* KPI and Solutions */}
                <div>
                  <div className="bg-gradient-to-br from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-purple-500/20 mb-6">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-2">KPI Principal</h3>
                    <div className="text-4xl font-black text-yellow-400 mb-2">{selectedCase.kpiValue}</div>
                    <div className="text-gray-300">{selectedCase.kpi}</div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Soluciones Implementadas:</h3>
                    <ul className="space-y-3">
                      {selectedCase.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <i className="ri-check-line text-yellow-400 mr-3 mt-1 flex-shrink-0"></i>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Challenge, Solution, Impact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-red-900/20 to-gray-900/30 p-6 rounded-xl border border-red-500/20">
                  <h3 className="text-xl font-bold text-red-400 mb-4">Desafío</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedCase.challenge}</p>
                </div>

                <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/30 p-6 rounded-xl border border-blue-500/20">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">Solución</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedCase.solution}</p>
                </div>

                <div className="bg-gradient-to-br from-green-900/20 to-gray-900/30 p-6 rounded-xl border border-green-500/20">
                  <h3 className="text-xl font-bold text-green-400 mb-4">Impacto</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedCase.impact}</p>
                </div>
              </div>

              {/* Project URL Button */}
              {selectedCase.projectUrl && (
                <div className="mb-8 text-center">
                  <a
                    href={selectedCase.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
                  >
                    <i className="ri-external-link-line mr-2"></i>
                    Ver Proyecto en Vivo
                  </a>
                </div>
              )}

              {/* Similar Cases */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Casos de Éxito Similares</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {getSimilarCases(selectedCase).map((similarCase) => (
                    <div
                      key={similarCase.id}
                      className="bg-gradient-to-br from-purple-900/20 to-gray-900/30 p-4 rounded-xl border border-purple-500/20 hover:border-yellow-400/50 transition-all cursor-pointer"
                      onClick={() => setSelectedCase(similarCase)}
                    >
                      <div className="w-full h-32 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center mb-3 p-3">
                        <img 
                          src={similarCase.images[0]}
                          alt={similarCase.title}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <h4 className="text-sm font-bold text-yellow-400 mb-2">{similarCase.shortTitle}</h4>
                      <p className="text-xs text-gray-400">{similarCase.kpi}: {similarCase.kpiValue}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6">
            ¿Listo para Ser Nuestro Próximo Caso de Éxito?
          </h2>
          <p className="text-xl text-white mb-10 leading-relaxed">
            Únase a las empresas que han transformado su negocio con nuestras soluciones tecnológicas. Su éxito es nuestro compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5219211453200"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all whitespace-nowrap"
            >
              <i className="ri-external-link-line mr-2"></i>
              Iniciar Mi Proyecto
            </a>
            <a 
              href="/consultoria-it"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all whitespace-nowrap"
            >
              Consultoría Estratégica
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
