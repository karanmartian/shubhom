'use client';

import { useState, useEffect } from 'react';
import { PhoneIcon } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = '917906259997'; // Include country code
    const message = encodeURIComponent('Hi, I am interested in your Yoga sessions');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className={`fixed bottom-4 right-4 z-50 p-3 bg-green-500 text-white rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-label="Contact us on WhatsApp"
    >
      <PhoneIcon className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;
