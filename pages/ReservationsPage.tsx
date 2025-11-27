import React, { useState, useEffect } from 'react';
import { db } from '../services/dbService';
import { Reservation } from '../types';
import { Button } from '../components/Button';
import { Calendar, User, Mail, Phone, Clock, Users, Trash2, CheckCircle, Coffee, Wind } from 'lucide-react';
import { useTranslation } from '../utils/i18nContext';

export const ReservationsPage: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [myReservations, setMyReservations] = useState<Reservation[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    type: 'table' as 'table' | 'lounge',
  });

  // Load existing reservations on mount
  useEffect(() => {
    loadReservations();
  }, []);

  const loadReservations = async () => {
    const data = await db.getReservations();
    setMyReservations(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await db.addReservation(formData);
      setSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        type: 'table',
      });
      // Reload list
      await loadReservations();
      
      // Hide success message after 5s
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to cancel this reservation?')) {
        await db.deleteReservation(id);
        await loadReservations();
    }
  }

  return (
    <div className="min-h-screen bg-smoke-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Form Section */}
        <div className="bg-smoke-800 p-8 rounded-2xl border border-white/5 shadow-xl animate-fade-in">
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold text-white mb-2">{t('reserve.title')}</h2>
            <p className="text-gray-400">{t('reserve.subtitle')}</p>
          </div>

          {success && (
            <div className="mb-6 p-4 bg-green-900/20 border border-green-500/50 rounded-lg flex items-center gap-3 text-green-400 animate-slide-up">
              <CheckCircle size={24} />
              <span>{t('reserve.success')}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <User size={16} /> {t('reserve.labels.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-smoke-900 border border-smoke-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Mail size={16} /> {t('reserve.labels.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-smoke-900 border border-smoke-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Phone size={16} /> {t('reserve.labels.phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-smoke-900 border border-smoke-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Users size={16} /> {t('reserve.labels.guests')}
                </label>
                <input
                  type="number"
                  name="guests"
                  min="1"
                  max="10"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-smoke-900 border border-smoke-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Calendar size={16} /> {t('reserve.labels.date')}
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-smoke-900 border border-smoke-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all [color-scheme:dark]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Clock size={16} /> {t('reserve.labels.time')}
                </label>
                <input
                  type="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-smoke-900 border border-smoke-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all [color-scheme:dark]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">{t('reserve.labels.preference')}</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, type: 'table' }))}
                  className={`p-4 rounded-lg border flex flex-col items-center justify-center gap-2 transition-all ${
                    formData.type === 'table'
                      ? 'bg-brand-900/20 border-brand-500 text-brand-400'
                      : 'bg-smoke-900 border-smoke-700 text-gray-400 hover:bg-smoke-800'
                  }`}
                >
                  <Coffee size={20} />
                  <span className="font-medium">{t('reserve.labels.table')}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, type: 'lounge' }))}
                  className={`p-4 rounded-lg border flex flex-col items-center justify-center gap-2 transition-all ${
                    formData.type === 'lounge'
                      ? 'bg-brand-900/20 border-brand-500 text-brand-400'
                      : 'bg-smoke-900 border-smoke-700 text-gray-400 hover:bg-smoke-800'
                  }`}
                >
                  <Wind size={20} />
                  <span className="font-medium">{t('reserve.labels.lounge')}</span>
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              fullWidth 
              disabled={loading}
              className="mt-6"
            >
              {loading ? t('reserve.btnLoading') : t('reserve.btn')}
            </Button>
          </form>
        </div>

        {/* My Reservations Section (DB Simulation) */}
        <div className="space-y-6">
          <div className="bg-smoke-800/50 p-6 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-serif font-semibold text-white mb-6">{t('reserve.myReservations')}</h2>
            
            {myReservations.length === 0 ? (
              <div className="text-center py-12 text-gray-500 border-2 border-dashed border-white/10 rounded-xl">
                <Calendar className="mx-auto mb-4 opacity-50" size={48} />
                <p>{t('reserve.noReservations')}</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {myReservations.map((res) => (
                  <div key={res.id} className="bg-smoke-900 p-5 rounded-xl border border-white/5 hover:border-brand-600/30 transition-colors group">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider ${
                                res.type === 'table' ? 'bg-yellow-900/30 text-yellow-500' : 'bg-purple-900/30 text-purple-400'
                            }`}>
                                {res.type.toUpperCase()}
                            </span>
                            <span className="text-gray-500 text-xs">#{res.id.slice(0, 6)}</span>
                        </div>
                        <h3 className="text-white font-medium text-lg">{res.date} at {res.time}</h3>
                        <p className="text-gray-400 text-sm mt-1">{res.name} • {res.guests} Guests</p>
                      </div>
                      <button 
                        onClick={() => handleDelete(res.id)}
                        className="text-gray-600 hover:text-red-500 transition-colors p-2 hover:bg-red-900/20 rounded-full"
                        title="Cancel Reservation"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Database Info Box */}
          <div className="bg-brand-900/10 border border-brand-900/30 p-4 rounded-xl">
            <h4 className="text-brand-400 font-semibold mb-1 text-sm">Lite DB Status</h4>
            <p className="text-brand-200/70 text-xs">
              Data is currently persisting to LocalStorage. This mimics a lightweight database behavior as requested. 
              Clearing browser cache will reset this data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};