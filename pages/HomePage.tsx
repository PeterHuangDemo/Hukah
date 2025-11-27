import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone, QrCode } from 'lucide-react';
import { OPENING_HOURS, CONTACT_PHONE } from '../constants';
import { Button } from '../components/Button';
import { useTranslation } from '../utils/i18nContext';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const [showQr, setShowQr] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/431/1920/1080" 
            alt="Coffee Shop Ambience" 
            className="w-full h-full object-cover opacity-50 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-smoke-900 via-smoke-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-brand-100 mb-6 drop-shadow-2xl">
            {t('hero.title')} <span className="text-brand-500">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservations">
              <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">
                {t('hero.bookBtn')}
              </Button>
            </Link>
            <Link to="/coffee">
              <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4">
                {t('hero.menuBtn')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="bg-smoke-900 py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* About Text */}
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-3xl font-serif font-bold text-brand-400">{t('about.title')}</h2>
            <div className="w-20 h-1 bg-brand-600"></div>
            <p className="text-gray-400 leading-relaxed text-lg">
              {t('about.p1')}
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              {t('about.p2')}
            </p>
            <div className="pt-4 flex items-center gap-2 text-brand-300 cursor-pointer hover:text-brand-200 transition-colors">
              <MapPin size={20} />
              <span>{t('about.address')}</span>
            </div>
          </div>

          {/* Opening Hours Card */}
          <div className="bg-smoke-800 rounded-2xl p-8 border border-white/5 shadow-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-brand-500" size={28} />
              <h3 className="text-2xl font-serif font-semibold text-white">{t('hours.title')}</h3>
            </div>
            
            <div className="space-y-4">
              {OPENING_HOURS.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0">
                  <span className="text-gray-400 font-medium">
                    {t(`days.${schedule.dayKey}`) || schedule.day}
                  </span>
                  <span className="text-brand-200">{schedule.open} - {schedule.close}</span>
                </div>
              ))}
            </div>

            {/* Phone Contact & QR Toggle */}
            <div className="mt-6 pt-6 border-t border-white/5 flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-3 text-brand-300">
                    <Phone size={20} />
                    <span className="font-medium">{CONTACT_PHONE}</span>
                    <button 
                        onClick={() => setShowQr(!showQr)}
                        className={`p-2 rounded-full transition-all ${showQr ? 'bg-brand-500 text-white' : 'bg-smoke-700 text-gray-400 hover:bg-smoke-600'}`}
                        title="Toggle QR Code"
                    >
                        <QrCode size={18} />
                    </button>
                </div>

                {showQr && (
                    <div className="p-3 bg-white rounded-xl animate-fade-in shadow-xl shadow-black/50">
                        <img 
                            src="/pics/qrcode.JPG"
                            alt="Contact QR Code" 
                            className="w-32 h-32 object-contain"
                        />
                    </div>
                )}
            </div>

            <div className="mt-6 p-4 bg-brand-900/20 rounded-lg border border-brand-900/50 text-center">
              <p className="text-brand-400 text-sm">{t('hours.happyHour')}</p>
              <p className="text-gray-500 text-xs mt-1">{t('hours.offer')}</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};