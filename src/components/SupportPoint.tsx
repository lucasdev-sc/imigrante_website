import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface SupportPointProps {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  imageUrl: string;
}

export function SupportPoint({ name, description, address, phone, email, hours, imageUrl }: SupportPointProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
      <div className="h-48 overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>{address}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Phone className="w-5 h-5" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="w-5 h-5" />
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <span>{hours}</span>
          </div>
        </div>
      </div>
    </div>
  );
}