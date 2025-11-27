import React from 'react';
import { Instagram, Facebook, Twitter, Coffee } from 'lucide-react';
import { useTranslation } from '../utils/i18nContext';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-brand-500 mb-4">
              <Coffee size={24} />
              <span className="text-2xl font-serif font-bold text-white">Hukah</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">{t('footer.story')}</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">{t('footer.careers')}</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">{t('footer.events')}</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">{t('footer.support')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">{t('footer.connect')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-smoke-800 flex items-center justify-center text-gray-400 hover:bg-brand-600 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-smoke-800 flex items-center justify-center text-gray-400 hover:bg-brand-600 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-smoke-800 flex items-center justify-center text-gray-400 hover:bg-brand-600 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-xs">
          <p>&copy; {new Date().getFullYear()} Hukah Lounge & Coffee Bar. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};