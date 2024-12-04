import React from 'react';
import { MapPin, Phone, Mail, Globe2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589792923962-537704632910?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Apoio ao Imigrante em Florianópolis
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Encontre suporte, orientação e acolhimento na Ilha da Magia. Estamos aqui para ajudar você em sua jornada.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#pontos-de-apoio" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Pontos de Apoio
            </a>
            <a href="#servicos" className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-400 transition-colors">
              Nossos Serviços
            </a>
            <a href="#contatos" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Contatos Úteis
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}