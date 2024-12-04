import React from 'react';
import { EmergencyService } from './EmergencyService';

export function OtherContacts() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <h3 className="font-bold text-xl mb-4 text-purple-800">Outros Contatos Úteis</h3>
      <div className="space-y-3">
        <EmergencyService
          title="Defensoria Pública"
          phone="(48) 3665-6370"
          bgColor="bg-purple-50"
          textColor="text-purple-600"
        />
        <EmergencyService
          title="Polícia Civil"
          phone="(48) 3665-8100"
          bgColor="bg-purple-50"
          textColor="text-purple-600"
        />
        <EmergencyService
          title="Disque Direitos Humanos"
          phone="100"
          bgColor="bg-purple-50"
          textColor="text-purple-600"
        />
      </div>
    </div>
  );
}