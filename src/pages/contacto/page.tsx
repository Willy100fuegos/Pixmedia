import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    ciudad: '',
    email: '',
    servicio: '',
    mensaje: ''
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar campos requeridos
    if (!formData.nombre || !formData.ciudad || !formData.email || !formData.servicio || !formData.mensaje) {
      alert('Por favor, completa todos los campos');
      return;
    }

    // Crear mensaje para WhatsApp
    const mensaje = `👋 ¡Nuevo Contacto de la Web!%0A%0A👤 **Nombre:** ${encodeURIComponent(formData.nombre)}%0A🏙️ **Ciudad:** ${encodeURIComponent(formData.ciudad)}%0A📧 **Email:** ${encodeURIComponent(formData.email)}%0A🛠️ **Asunto:** ${encodeURIComponent(formData.servicio)}%0A💬 **Mensaje:** ${encodeURIComponent(formData.mensaje)}`;
    
    // Abrir WhatsApp
    window.open(`https://wa.me/5219211453200?text=${mensaje}`, '_blank');
    
    // Limpiar formulario
    setFormData({
      nombre: '',
      ciudad: '',
      email: '',
      servicio: '',
      mensaje: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Conectemos y Transformemos
            <span className="text-yellow-400 block">Tu Visión Digital</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Estamos listos para impulsar tu proyecto hacia el siguiente nivel. 
            Cuéntanos tu desafío y diseñemos juntos la solución perfecta.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 md:p-12">
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
                
                <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form>
                  <div>
                    <label htmlFor="nombre" className="block text-white font-medium mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
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
                      value={formData.ciudad}
                      onChange={handleInputChange}
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
                      value={formData.email}
                      onChange={handleInputChange}
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
                      value={formData.servicio}
                      onChange={handleInputChange}
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
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      required
                      maxLength={500}
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors text-sm resize-none"
                      placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    />
                    <p className="text-gray-400 text-xs mt-1">
                      Máximo 500 caracteres ({formData.mensaje.length}/500)
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-black font-bold py-4 px-6 rounded-lg hover:bg-yellow-300 transition-colors whitespace-nowrap"
                  >
                    <i className="ri-send-plane-line mr-2"></i>
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Confirmación */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-purple-500/20 max-w-md w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-check-line text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">¡Mensaje Enviado!</h3>
            <p className="text-gray-300 mb-6">
              Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all whitespace-nowrap cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5219211453200?text=Hola,%20me%20interesa%20obtener%20más%20información%20sobre%20sus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors group"
        >
          <i className="ri-whatsapp-line text-2xl group-hover:scale-110 transition-transform"></i>
        </a>
      </div>
    </div>
  );
}