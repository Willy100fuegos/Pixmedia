import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const toggleMobileMenu = (menu: string) => {
    setMobileActiveMenu(mobileActiveMenu === menu ? null : menu);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <header className="bg-primary/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 shadow-lg">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center" onClick={scrollToTop}>
              <img 
                src="https://pixmedia.b-cdn.net/pixmedialogoblanco.png" 
                alt="pixmedia" 
                className="h-8"
                style={{ width: '208px', height: '33px' }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-white hover:text-accent-yellow transition-colors font-medium text-sm"
                onClick={scrollToTop}
              >
                INICIO
              </Link>
              
              <Link 
                to="/quienes-somos" 
                className="text-white hover:text-accent-yellow transition-colors font-medium text-sm"
                onClick={scrollToTop}
              >
                QUIÉNES SOMOS
              </Link>

              {/* SERVICIOS Mega Menu */}
              <div 
                className="relative group"
                onMouseEnter={() => handleMouseEnter('servicios')}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  to="/servicios"
                  className="text-white hover:text-accent-yellow transition-colors font-medium whitespace-nowrap text-sm"
                  onClick={scrollToTop}
                >
                  SERVICIOS
                </Link>
                
                {activeMenu === 'servicios' && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-6xl bg-[#0C1324] shadow-2xl border border-yellow-400/20 rounded-2xl mt-2 z-50"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                    style={{
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(250, 204, 21, 0.1)'
                    }}
                  >
                    <div className="p-8">
                      <div className="grid grid-cols-4 gap-8">
                        {/* I. Creación de Activos Web */}
                        <div>
                          <h3 className="font-bold text-base text-accent-yellow mb-4 border-b border-accent-yellow/30 pb-2">
                            I. Creación de Activos Web
                          </h3>
                          <ul className="space-y-2">
                            <li><Link to="/servicios/paginas-corporativas" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-building-line text-accent-yellow"></i>Páginas Corporativas</Link></li>
                            <li><Link to="/servicios/webapps-plataformas" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-window-line text-accent-yellow"></i>WebApps & Plataformas</Link></li>
                            <li><Link to="/servicios/portales-noticias" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-newspaper-line text-accent-yellow"></i>Portales de Noticias</Link></li>
                            <li><Link to="/servicios/migracion-wordpress" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-arrow-left-right-line text-accent-yellow"></i>Migración a WordPress</Link></li>
                            <li><Link to="/servicios/desarrollo-temas-medida" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-palette-line text-accent-yellow"></i>Desarrollo de Temas a Medida</Link></li>
                          </ul>
                        </div>

                        {/* II. E-commerce & Venta Online */}
                        <div>
                          <h3 className="font-bold text-base text-accent-yellow mb-4 border-b border-accent-yellow/30 pb-2">
                            II. E-commerce & Venta Online
                          </h3>
                          <ul className="space-y-2">
                            <li><Link to="/servicios/tiendas-en-linea" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-shopping-cart-line text-accent-yellow"></i>Tiendas en Línea</Link></li>
                            <li><Link to="/servicios/productos-minimos-viables" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-rocket-line text-accent-yellow"></i>Productos Mínimos Viables</Link></li>
                            <li><Link to="/servicios/implementacion-woocommerce" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-store-line text-accent-yellow"></i>Implementación de WooCommerce</Link></li>
                            <li><Link to="/servicios/configuracion-pasarelas-pago" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-bank-card-line text-accent-yellow"></i>Configuración de Pasarelas de Pago</Link></li>
                            <li><Link to="/servicios/integracion-inventario" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-database-line text-accent-yellow"></i>Integración Avanzada de Inventario</Link></li>
                          </ul>
                        </div>

                        {/* III. Mantenimiento & Soporte Web */}
                        <div>
                          <h3 className="font-bold text-base text-accent-yellow mb-4 border-b border-accent-yellow/30 pb-2">
                            III. Mantenimiento & Soporte Web
                          </h3>
                          <ul className="space-y-2">
                            <li><Link to="/servicios/mantenimiento-web" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-tools-line text-accent-yellow"></i>Mantenimiento Web</Link></li>
                            <li><Link to="/servicios/optimizacion-web-ux" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-speed-up-line text-accent-yellow"></i>Optimización Web & UX</Link></li>
                            <li><Link to="/servicios/optimizacion-seo" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-search-line text-accent-yellow"></i>Optimización SEO Básica</Link></li>
                            <li><Link to="/servicios/copias-seguridad-automatizadas" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-save-line text-accent-yellow"></i>Copias de Seguridad Automatizadas</Link></li>
                            <li><Link to="/servicios/soporte-tecnico-247" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-customer-service-line text-accent-yellow"></i>Soporte Técnico 24/7 de Nivel 1/2</Link></li>
                          </ul>
                        </div>

                        {/* IV. Marketing & Branding Digital */}
                        <div>
                          <h3 className="font-bold text-base text-accent-yellow mb-4 border-b border-accent-yellow/30 pb-2">
                            IV. Marketing & Branding Digital
                          </h3>
                          <ul className="space-y-2">
                            <li><Link to="/servicios/marketing-digital" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-megaphone-line text-accent-yellow"></i>Marketing Digital</Link></li>
                            <li><Link to="/servicios/content-marketing" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-article-line text-accent-yellow"></i>Content Marketing</Link></li>
                            <li><Link to="/servicios/social-marketing" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-share-line text-accent-yellow"></i>Social Marketing</Link></li>
                            <li><Link to="/servicios/diseno-marca" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-brush-line text-accent-yellow"></i>Diseño de Marca</Link></li>
                            <li><Link to="/servicios/registro-marca" className="text-gray-300 hover:text-accent-yellow transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-copyright-line text-accent-yellow"></i>Registro de Marca</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* SOLUCIONES IT Mega Menu */}
              <div 
                className="relative group"
                onMouseEnter={() => handleMouseEnter('soluciones')}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  to="/consultoria-it"
                  className="text-white hover:text-accent-yellow transition-colors font-medium whitespace-nowrap text-sm"
                  onClick={scrollToTop}
                >
                  SOLUCIONES IT
                </Link>
                
                {activeMenu === 'soluciones' && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-5xl bg-[#0C1324] shadow-2xl border border-green-400/20 rounded-2xl mt-2 z-50"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                    style={{
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(52, 211, 153, 0.1)'
                    }}
                  >
                    <div className="p-8">
                      <div className="grid grid-cols-3 gap-8">
                        {/* I. Ciberseguridad & Protección */}
                        <div>
                          <h3 className="font-bold text-base text-green-400 mb-4 border-b border-green-400/30 pb-2">
                            I. Ciberseguridad & Protección
                          </h3>
                          <ul className="space-y-2">
                            <li><Link to="/servicios/ciberseguridad-gestionada" className="text-gray-300 hover:text-green-400 transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-shield-check-line text-green-400"></i>Ciberseguridad Gestionada</Link></li>
                            <li><Link to="/servicios/pruebas-penetracion" className="text-gray-300 hover:text-green-400 transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-bug-line text-green-400"></i>Pruebas de Penetración</Link></li>
                            <li><Link to="/servicios/seguridad-perimetral" className="text-gray-300 hover:text-green-400 transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-camera-line text-green-400"></i>Seguridad Perimetral</Link></li>
                            <li><Link to="/servicios/configuracion-firewalls" className="text-gray-300 hover:text-green-400 transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-shield-flash-line text-green-400"></i>Configuración de Firewalls (WAF)</Link></li>
                          </ul>
                        </div>

                        {/* II. Infraestructura & Cloud */}
                        <div>
                          <h3 className="font-bold text-base text-green-400 mb-4 border-b border-green-400/30 pb-2">
                            II. Infraestructura & Cloud
                          </h3>
                          <ul className="space-y-2">
                            <li><Link to="/servicios/managed-cloud" className="text-gray-300 hover:text-green-400 transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-cloud-line text-green-400"></i>Managed Cloud</Link></li>
                            <li><Link to="/servicios/servidores-dedicados" className="text-gray-300 hover:text-green-400 transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-server-line text-green-400"></i>Servidores Dedicados</Link></li>
                            <li><Link to="/servicios/redes-zero-trust" className="text-gray-300 hover:text-green-400 transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-shield-keyhole-line text-green-400"></i>Redes Zero Trust</Link></li>
                            <li><Link to="/servicios/disaster-recovery" className="text-gray-300 hover:text-green-400 transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-restart-line text-green-400"></i>Disaster Recovery</Link></li>
                            <li><Link to="/servicios/soporte-sla" className="text-gray-300 hover:text-green-400 transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-service-line text-green-400"></i>Soporte y SLA</Link></li>
                          </ul>
                        </div>

                        {/* III. Automatización & Analítica */}
                        <div>
                          <h3 className="font-bold text-base text-green-400 mb-4 border-b border-green-400/30 pb-2">
                            III. Automatización & Analítica
                          </h3>
                          <ul className="space-y-2">
                            <li><Link to="/consultoria-it/evaluacion-tecnologica" className="text-gray-300 hover:text-green-400 transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-bar-chart-line text-green-400"></i>Evaluación Tecnológica</Link></li>
                            <li><Link to="/consultoria-it/ia-empresas" className="text-gray-300 hover:text-green-400 transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-robot-line text-green-400"></i>IA para Empresas</Link></li>
                            <li><Link to="/consultoria-it/gobierno-datos" className="text-gray-300 hover:text-green-400 transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-file-chart-line text-green-400"></i>Gobierno de Datos</Link></li>
                            <li><Link to="/consultoria-it/optimizacion-procesos" className="text-gray-300 hover:text-green-400 transition-colors block py-1 text-sm flex items-center gap-2" onClick={scrollToTop}><i className="ri-flow-chart text-green-400"></i>Optimización de Procesos</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/casos-de-exito" 
                className="text-white hover:text-accent-yellow transition-colors font-medium text-sm"
                onClick={scrollToTop}
              >
                CASOS DE ÉXITO
              </Link>
              
              <button 
                onClick={() => setShowContactModal(true)}
                className="bg-gradient-to-r from-accent-yellow to-yellow-500 text-gray-900 px-6 py-2.5 rounded-xl font-semibold hover:shadow-glow-yellow hover:scale-105 transition-all whitespace-nowrap text-sm cursor-pointer"
              >
                CONTACTO
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-accent-yellow transition-colors"
            >
              <i className={`text-2xl ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-white/10 max-h-[70vh] overflow-y-auto">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-white hover:text-accent-yellow transition-colors font-medium"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  INICIO
                </Link>
                <Link 
                  to="/quienes-somos" 
                  className="text-white hover:text-accent-yellow transition-colors font-medium"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  QUIÉNES SOMOS
                </Link>
                
                {/* Mobile SERVICIOS Accordion */}
                <div>
                  <button
                    onClick={() => toggleMobileMenu('servicios')}
                    className="text-white hover:text-accent-yellow transition-colors font-medium flex items-center justify-between w-full"
                  >
                    SERVICIOS
                    <i className={`ri-arrow-${mobileActiveMenu === 'servicios' ? 'up' : 'down'}-s-line`}></i>
                  </button>
                  {mobileActiveMenu === 'servicios' && (
                    <div className="mt-2 ml-4 space-y-2 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                      <div>
                        <h4 className="text-accent-yellow font-semibold mb-1.5 text-sm">I. Creación de Activos Web</h4>
                        <div className="space-y-1 ml-2">
                          <Link to="/servicios/paginas-corporativas" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-building-line"></i>Páginas Corporativas</Link>
                          <Link to="/servicios/webapps-plataformas" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-window-line"></i>WebApps & Plataformas</Link>
                          <Link to="/servicios/portales-noticias" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-newspaper-line"></i>Portales de Noticias</Link>
                          <Link to="/servicios/migracion-wordpress" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-arrow-left-right-line"></i>Migración a WordPress</Link>
                          <Link to="/servicios/desarrollo-temas-medida" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-palette-line"></i>Desarrollo de Temas a Medida</Link>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-accent-yellow font-semibold mb-1.5 text-sm">II. E-commerce & Venta Online</h4>
                        <div className="space-y-1 ml-2">
                          <Link to="/servicios/tiendas-en-linea" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-shopping-cart-line"></i>Tiendas en Línea</Link>
                          <Link to="/servicios/productos-minimos-viables" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-rocket-line"></i>Productos Mínimos Viables</Link>
                          <Link to="/servicios/implementacion-woocommerce" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-store-line"></i>Implementación de WooCommerce</Link>
                          <Link to="/servicios/configuracion-pasarelas-pago" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-bank-card-line"></i>Configuración de Pasarelas de Pago</Link>
                          <Link to="/servicios/integracion-inventario" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-database-line"></i>Integración Avanzada de Inventario</Link>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-accent-yellow font-semibold mb-1.5 text-sm">III. Mantenimiento & Soporte Web</h4>
                        <div className="space-y-1 ml-2">
                          <Link to="/servicios/mantenimiento-web" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-tools-line"></i>Mantenimiento Web</Link>
                          <Link to="/servicios/optimizacion-web-ux" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-speed-up-line"></i>Optimización Web & UX</Link>
                          <Link to="/servicios/optimizacion-seo" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-search-line"></i>Optimización SEO Básica</Link>
                          <Link to="/servicios/copias-seguridad-automatizadas" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-save-line"></i>Copias de Seguridad Automatizadas</Link>
                          <Link to="/servicios/soporte-tecnico-247" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-customer-service-line"></i>Soporte Técnico 24/7</Link>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-accent-yellow font-semibold mb-1.5 text-sm">IV. Marketing & Branding Digital</h4>
                        <div className="space-y-1 ml-2">
                          <Link to="/servicios/marketing-digital" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-megaphone-line"></i>Marketing Digital</Link>
                          <Link to="/servicios/content-marketing" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-article-line"></i>Content Marketing</Link>
                          <Link to="/servicios/social-marketing" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-share-line"></i>Social Marketing</Link>
                          <Link to="/servicios/diseno-marca" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-brush-line"></i>Diseño de Marca</Link>
                          <Link to="/servicios/registro-marca" className="text-gray-300 hover:text-accent-yellow block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-copyright-line"></i>Registro de Marca</Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile SOLUCIONES IT Accordion */}
                <div>
                  <button
                    onClick={() => toggleMobileMenu('soluciones')}
                    className="text-white hover:text-accent-yellow transition-colors font-medium flex items-center justify-between w-full"
                  >
                    SOLUCIONES IT
                    <i className={`ri-arrow-${mobileActiveMenu === 'soluciones' ? 'up' : 'down'}-s-line`}></i>
                  </button>
                  {mobileActiveMenu === 'soluciones' && (
                    <div className="mt-2 ml-4 space-y-2 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                      <div>
                        <h4 className="text-green-400 font-semibold mb-1.5 text-sm">I. Ciberseguridad & Protección</h4>
                        <div className="space-y-1 ml-2">
                          <Link to="/servicios/ciberseguridad-gestionada" className="text-gray-300 hover:text-green-400 block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-shield-check-line"></i>Ciberseguridad Gestionada</Link>
                          <Link to="/servicios/pruebas-penetracion" className="text-gray-300 hover:text-green-400 block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-bug-line"></i>Pruebas de Penetración</Link>
                          <Link to="/servicios/seguridad-perimetral" className="text-gray-300 hover:text-green-400 block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-camera-line"></i>Seguridad Perimetral</Link>
                          <Link to="/servicios/configuracion-firewalls" className="text-gray-300 hover:text-green-400 block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-firewall-line"></i>Configuración de Firewalls (WAF)</Link>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-green-400 font-semibold mb-1.5 text-sm">II. Infraestructura & Cloud</h4>
                        <div className="space-y-1 ml-2">
                          <Link to="/servicios/managed-cloud" className="text-gray-300 hover:text-green-400 block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-cloud-line"></i>Managed Cloud</Link>
                          <Link to="/servicios/servidores-dedicados" className="text-gray-300 hover:text-green-400 block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-server-line"></i>Servidores Dedicados</Link>
                          <Link to="/servicios/redes-zero-trust" className="text-gray-300 hover:text-green-400 block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-shield-keyhole-line"></i>Redes Zero Trust</Link>
                          <Link to="/servicios/disaster-recovery" className="text-gray-300 hover:text-green-400 block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-restart-line"></i>Disaster Recovery</Link>
                          <Link to="/servicios/soporte-sla" className="text-gray-300 hover:text-green-400 block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-service-line"></i>Soporte y SLA</Link>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-green-400 font-semibold mb-1.5 text-sm">III. Automatización & Analítica</h4>
                        <div className="space-y-1 ml-2">
                          <Link to="/consultoria-it/evaluacion-tecnologica" className="text-gray-300 hover:text-green-400 block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-bar-chart-line"></i>Evaluación Tecnológica</Link>
                          <Link to="/consultoria-it/ia-empresas" className="text-gray-300 hover:text-green-400 block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-robot-line"></i>IA para Empresas</Link>
                          <Link to="/consultoria-it/gobierno-datos" className="text-gray-300 hover:text-green-400 block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-file-chart-line"></i>Gobierno de Datos</Link>
                          <Link to="/consultoria-it/optimizacion-procesos" className="text-gray-300 hover:text-green-400 block text-xs flex items-center gap-2 py-0.5" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}><i className="ri-flow-chart"></i>Optimización de Procesos</Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <Link 
                  to="/casos-de-exito" 
                  className="text-white hover:text-accent-yellow transition-colors font-medium"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                >
                  CASOS DE ÉXITO
                </Link>
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    setShowContactModal(true);
                  }}
                  className="bg-gradient-to-r from-accent-yellow to-yellow-500 text-gray-900 px-6 py-2.5 rounded-xl font-semibold hover:shadow-glow-yellow transition-all text-center whitespace-nowrap cursor-pointer"
                >
                  CONTACTO
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Contact Modal */}
      {showContactModal && (
        <div 
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setShowContactModal(false)}
        >
          <div 
            className="bg-gradient-to-br from-black via-purple-900/20 to-black border border-purple-500/30 rounded-2xl p-8 md:p-12 max-w-4xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowContactModal(false)}
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            {/* Contact Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">
                  Información de Contacto
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-map-pin-line text-black text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Ubicación</h3>
                      <p className="text-gray-300">E. Zapata #126, Coatzacoalcos, Veracruz</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-phone-line text-black text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Teléfono</h3>
                      <a href="tel:9211501256" className="text-gray-300 hover:text-yellow-400 transition-colors">
                        921 150 1256
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-mail-line text-black text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a href="mailto:info@pixmedia.agency" className="text-gray-300 hover:text-yellow-400 transition-colors">
                        info@pixmedia.agency
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-whatsapp-line text-black text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
                      <a 
                        href="https://wa.me/5219211453200" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-yellow-400 transition-colors"
                      >
                        +52 921 145 3200
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-purple-900/30 rounded-xl border border-purple-500/30">
                  <h3 className="text-yellow-400 font-bold text-lg mb-3">
                    <i className="ri-time-line mr-2"></i>
                    Horarios de Atención
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <p><strong>Lunes - Viernes:</strong> 9:00 AM - 6:00 PM</p>
                    <p><strong>Sábados:</strong> 9:00 AM - 2:00 PM</p>
                    <p><strong>Domingos:</strong> Cerrado</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">
                  Envíanos un Mensaje
                </h2>
                
                <form className="space-y-6" data-readdy-form>
                  <div>
                    <label htmlFor="nombre" className="block text-white font-medium mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors text-sm"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="ciudad" className="block text-white font-medium mb-2">
                      Ciudad *
                    </label>
                    <input
                      type="text"
                      id="ciudad"
                      name="ciudad"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors text-sm"
                      placeholder="Tu ciudad"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors text-sm"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="servicio" className="block text-white font-medium mb-2">
                      Tipo de Consulta *
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors text-sm pr-8"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Duda">Duda</option>
                      <option value="Comentarios">Comentarios</option>
                      <option value="Cotización - Desarrollo Web">Cotización - Desarrollo Web</option>
                      <option value="Cotización - Ciberseguridad">Cotización - Ciberseguridad</option>
                      <option value="Cotización - Infraestructura">Cotización - Infraestructura</option>
                      <option value="Cotización - Consultoría IT">Cotización - Consultoría IT</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-white font-medium mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      maxLength={500}
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors text-sm resize-none"
                      placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-black font-bold py-4 px-6 rounded-lg hover:bg-yellow-300 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-send-plane-line mr-2"></i>
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}