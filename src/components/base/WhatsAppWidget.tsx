import { useState } from 'react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/5219211453200?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      setMessage('');
      setIsOpen(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center">
                <i className="ri-whatsapp-line text-2xl mr-3"></i>
                <div>
                  <h3 className="font-bold">WhatsApp</h3>
                  <p className="text-sm opacity-90">Envíanos un mensaje</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-green-600 p-1 rounded-full transition-colors"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-4">
                <p className="text-gray-600 text-sm mb-4">
                  ¡Hola! 👋 Escribe tu mensaje y te responderemos lo antes posible.
                </p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows={4}
                  maxLength={500}
                />
                <div className="text-right text-xs text-gray-400 mt-1">
                  {message.length}/500
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  <i className="ri-send-plane-line mr-2"></i>
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all z-40 animate-pulse hover:animate-none"
      >
        <i className="ri-whatsapp-line text-2xl"></i>
      </button>
    </>
  );
}