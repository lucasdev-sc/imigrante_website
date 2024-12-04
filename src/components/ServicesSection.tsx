import React from 'react';
import { Building2, Briefcase, HeartPulse, Scale } from 'lucide-react';

export function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Serviços Disponíveis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Building2 className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Moradia</h3>
            </div>
            <p className="text-gray-600">
              Orientação para encontrar moradia, informações sobre contratos de aluguel e direitos do inquilino.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Emprego</h3>
            </div>
            <p className="text-gray-600">
              Auxílio na busca por emprego, orientação profissional e direitos trabalhistas.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Saúde</h3>
            </div>
            <p className="text-gray-600">
              Acesso ao sistema de saúde público, vacinação e atendimento médico.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Scale className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Assistência Jurídica</h3>
            </div>
            <p className="text-gray-600">
              Suporte legal gratuito, orientação sobre direitos e regularização migratória.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}