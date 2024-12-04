import React from 'react';
import { Header } from './components/Header';
import { InfoSection } from './components/InfoSection';
import { ServicesSection } from './components/ServicesSection';
import { SupportPoint } from './components/SupportPoint';
import { EmergencySection } from './components/EmergencyContacts/EmergencySection';
import { Footer } from './components/Footer';
import { supportPoints } from './data/supportPoints';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <InfoSection />
      
      <ServicesSection />
      
      <main className="container mx-auto px-4 py-16">
        <section id="pontos-de-apoio" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Pontos de Apoio em Florianópolis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportPoints.map((point, index) => (
              <SupportPoint key={index} {...point} />
            ))}
          </div>
        </section>

        <EmergencySection />
      </main>

      <Footer />
    </div>
  );
}