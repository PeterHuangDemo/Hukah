import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { ReservationsPage } from './pages/ReservationsPage';
import { LanguageProvider } from './utils/i18nContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <div className="min-h-screen bg-smoke-900 text-gray-100 selection:bg-brand-500 selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/coffee" element={<MenuPage type="coffee" />} />
              <Route path="/hookah" element={<MenuPage type="hookah" />} />
              <Route path="/reservations" element={<ReservationsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;