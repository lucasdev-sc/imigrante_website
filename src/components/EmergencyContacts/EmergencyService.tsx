import React from 'react';

interface EmergencyServiceProps {
  title: string;
  phone: string;
  bgColor: string;
  textColor: string;
}

export function EmergencyService({ title, phone, bgColor, textColor }: EmergencyServiceProps) {
  return (
    <div className={`p-3 ${bgColor} rounded-lg`}>
      <h4 className="font-semibold">{title}</h4>
      <p className={textColor}>Telefone: {phone}</p>
    </div>
  );
}