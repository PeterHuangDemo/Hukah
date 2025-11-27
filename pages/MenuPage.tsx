import React from 'react';
import { COFFEE_MENU, HOOKAH_MENU } from '../constants';
import { MenuItem } from '../types';
import { Coffee, Wind } from 'lucide-react';
import { useTranslation } from '../utils/i18nContext';

interface MenuPageProps {
  type: 'coffee' | 'hookah';
}

export const MenuPage: React.FC<MenuPageProps> = ({ type }) => {
  const { t } = useTranslation();
  const items = type === 'coffee' ? COFFEE_MENU : HOOKAH_MENU;
  const title = type === 'coffee' ? t('menu.coffeeTitle') : t('menu.hookahTitle');
  const subtitle = type === 'coffee' 
    ? t('menu.coffeeSub')
    : t('menu.hookahSub');
  const Icon = type === 'coffee' ? Coffee : Wind;

  return (
    <div className="min-h-screen bg-smoke-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-3 bg-brand-900/30 rounded-full mb-4 text-brand-500">
            <Icon size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-100 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={item.id}
              className="group bg-smoke-800 rounded-xl overflow-hidden border border-white/5 hover:border-brand-600/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-900/20 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-smoke-900 to-transparent opacity-80"></div>
                
                {/* Price Tag */}
                <div className="absolute bottom-4 right-4 bg-brand-600 text-white font-bold px-3 py-1 rounded-lg shadow-lg">
                  ${item.price.toFixed(2)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags?.map(tag => (
                    <span key={tag} className="text-xs font-semibold uppercase tracking-wider text-brand-400 bg-brand-900/20 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center p-8 border-t border-white/10">
          <p className="text-gray-500 italic">
            {t('menu.disclaimer')}
          </p>
        </div>
      </div>
    </div>
  );
};