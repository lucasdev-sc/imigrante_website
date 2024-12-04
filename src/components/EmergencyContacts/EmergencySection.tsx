import React from 'react';
import { EmergencyService } from './EmergencyService';
import { OtherContacts } from './OtherContacts';

export function EmergencySection() {
  return (
    <section id="contatos" className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Contatos de Emergência
      </h2>
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl mb-4 text-blue-800">Serviços de Emergência</h3>
            <div className="space-y-3">
              <EmergencyService
                title="Polícia Federal"
                phone="(48) 3281-6500"
                bgColor="bg-blue-50"
                textColor="text-blue-600"
              />
              <EmergencyService
                title="SAMU"
                phone="192"
                bgColor="bg-green-50"
                textColor="text-green-600"
              />
              <EmergencyService
                title="Bombeiros"
                phone="193"
                bgColor="bg-red-50"
                textColor="text-red-600"
              />
            </div>
          </div>
          <OtherContacts />
        </div>
      </div>
    </section>
  );
}