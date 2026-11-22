import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-dark border-t border-white/10">
      <div className="px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img 
              src="https://pixmedia.b-cdn.net/pixmedialogoblanco.png" 
              alt="pixmedia" 
              className="mb-4"
              style={{ width: '208px', height: '33px' }}
            />
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Integramos la innovación digital con la estrategia de negocio para impulsar su visión hacia el futuro. Su socio tecnológico de alto rendimiento.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-11 h-11 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-accent-teal hover:bg-accent-teal hover:text-gray-900 hover:border-accent-teal transition-all">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-11 h-11 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-accent-teal hover:bg-accent-teal hover:text-gray-900 hover:border-accent-teal transition-all">
                <i className="ri-instagram-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-accent-yellow font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" onClick={scrollToTop} className="text-gray-300 hover:text-accent-teal transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/quienes-somos" onClick={scrollToTop} className="text-gray-300 hover:text-accent-teal transition-colors text-sm">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link to="/servicios" onClick={scrollToTop} className="text-gray-300 hover:text-accent-teal transition-colors text-sm">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/consultoria-it" onClick={scrollToTop} className="text-gray-300 hover:text-accent-teal transition-colors text-sm">
                  Soluciones IT
                </Link>
              </li>
              <li>
                <Link to="/casos-de-exito" onClick={scrollToTop} className="text-gray-300 hover:text-accent-teal transition-colors text-sm">
                  Casos de Éxito
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-accent-yellow font-bold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-accent-teal mt-1"></i>
                <span className="text-gray-300 text-sm">E. Zapata #126</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-accent-teal"></i>
                <a href="tel:9211501256" className="text-gray-300 hover:text-accent-teal transition-colors text-sm">
                  9211501256
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-accent-teal"></i>
                <a href="mailto:info@pixmedia.agency" className="text-gray-300 hover:text-accent-teal transition-colors text-sm">
                  info@pixmedia.agency
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-whatsapp-line text-accent-teal"></i>
                <a 
                  href="https://wa.me/5219211453200" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent-teal transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2025 pixmedia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}