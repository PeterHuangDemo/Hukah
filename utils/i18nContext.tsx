import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface Translations {
  [key: string]: {
    [key: string]: string | any;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: { home: 'Home', coffee: 'Coffee Menu', hookah: 'Hookah Menu', reservations: 'Reservations' },
    hero: {
      title: 'Roast &',
      titleHighlight: 'Relaxation',
      subtitle: 'Experience the perfect fusion of artisanal coffee brewing and premium hookah tradition in the heart of Nanning city.',
      bookBtn: 'Book a Table',
      menuBtn: 'View Menu'
    },
    about: {
      title: 'The Hukah Experience',
      p1: 'Established in 2024, Hukah was born from a desire to slow down time. We believe that a great conversation starts with a great cup of coffee and continues over a smooth session of hookah.',
      p2: 'Our beans are ethically sourced from high-altitude regions, and our tobaccos are selected from the finest producers around the world. Whether you\'re here to work, socialize, or unwind, Hukah is your sanctuary.',
      address: 'Chahuayuan Road No.33, Qingxiu Nanning, Guangxi, China'
    },
    hours: {
      title: 'Opening Hours',
      contact: 'Contact Us',
      happyHour: 'Happy Hour: 4PM - 7PM Daily',
      offer: 'Please reserve for Hookah experience using QR code below'
    },
    days: {
      mon_thu: 'Monday - Thursday',
      fri: 'Friday',
      sat: 'Saturday',
      sun: 'Sunday'
    },
    menu: {
      coffeeTitle: 'Coffee & Brews',
      hookahTitle: 'Hookah Flavors',
      coffeeSub: 'Artisanal blends roasted to perfection.',
      hookahSub: 'Premium tobacco blends for the ultimate relaxation.',
      disclaimer: '* Please inform our staff of any allergies before ordering. Prices are subject to change.'
    },
    reserve: {
      title: 'Reserve Your Spot',
      subtitle: 'Secure a table or lounge area for your next visit.',
      success: 'Reservation confirmed successfully! See you soon.',
      labels: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        guests: 'Guests',
        date: 'Date',
        time: 'Time',
        preference: 'Seating Preference',
        table: 'Table (Coffee)',
        lounge: 'Lounge (Hookah)'
      },
      btn: 'Confirm Reservation',
      btnLoading: 'Confirming...',
      myReservations: 'My Reservations',
      noReservations: 'No reservations found in database.'
    },
    footer: {
      description: 'A sanctuary for the senses. Blending the art of coffee with the tradition of hookah in an atmosphere of timeless elegance.',
      quickLinks: 'Quick Links',
      story: 'Our Story',
      careers: 'Careers',
      events: 'Private Events',
      support: 'Contact Support',
      connect: 'Connect',
      rights: 'All rights reserved.'
    }
  },
  es: {
    nav: { home: 'Inicio', coffee: 'Menú Café', hookah: 'Menú Hookah', reservations: 'Reservas' },
    hero: {
      title: 'Tostado y',
      titleHighlight: 'Relajación',
      subtitle: 'Experimenta la fusión perfecta de la preparación de café artesanal y la tradición premium de hookah en el corazón de la ciudad.',
      bookBtn: 'Reservar Mesa',
      menuBtn: 'Ver Menú'
    },
    about: {
      title: 'La Experiencia Hukah',
      p1: 'Establecido en 2023, Hukah nació del deseo de detener el tiempo. Creemos que una gran conversación comienza con una buena taza de café y continúa con una suave sesión de hookah.',
      p2: 'Nuestros granos provienen éticamente de regiones de gran altitud y nuestros tabacos son seleccionados de los mejores productores de Medio Oriente. Ya sea para trabajar, socializar o relajarse, Hukah es su santuario.',
      address: '123 Ember Lane, Distrito Centro'
    },
    hours: {
      title: 'Horario de Apertura',
      contact: 'Contáctanos',
      happyHour: 'Hora Feliz: 4PM - 7PM Diario',
      offer: '50% de descuento en tés tradicionales'
    },
    days: {
      mon_thu: 'Lunes - Jueves',
      fri: 'Viernes',
      sat: 'Sábado',
      sun: 'Domingo'
    },
    menu: {
      coffeeTitle: 'Café y Bebidas',
      hookahTitle: 'Sabores de Hookah',
      coffeeSub: 'Mezclas artesanales tostadas a la perfección.',
      hookahSub: 'Mezclas de tabaco premium para la máxima relajación.',
      disclaimer: '* Por favor informe a nuestro personal sobre cualquier alergia antes de ordenar. Los precios están sujetos a cambios.'
    },
    reserve: {
      title: 'Reserva tu Lugar',
      subtitle: 'Asegura una mesa o área lounge para tu próxima visita.',
      success: '¡Reserva confirmada con éxito! Nos vemos pronto.',
      labels: {
        name: 'Nombre',
        email: 'Correo',
        phone: 'Teléfono',
        guests: 'Invitados',
        date: 'Fecha',
        time: 'Hora',
        preference: 'Preferencia de Asiento',
        table: 'Mesa (Café)',
        lounge: 'Lounge (Hookah)'
      },
      btn: 'Confirmar Reserva',
      btnLoading: 'Confirmando...',
      myReservations: 'Mis Reservas',
      noReservations: 'No se encontraron reservas en la base de datos.'
    },
    footer: {
      description: 'Un santuario para los sentidos. Mezclando el arte del café con la tradición del hookah en una atmósfera de elegancia atemporal.',
      quickLinks: 'Enlaces Rápidos',
      story: 'Nuestra Historia',
      careers: 'Carreras',
      events: 'Eventos Privados',
      support: 'Soporte',
      connect: 'Conectar',
      rights: 'Todos los derechos reservados.'
    }
  }
};

interface LanguageContextType {
  language: Language;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0] as Language;
    if (Object.keys(translations).includes(browserLang)) {
      setLanguage(browserLang);
    }
  }, []);

  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = translations[language];
    for (const key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};