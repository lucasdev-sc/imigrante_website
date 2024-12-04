import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2">
            Feito com <Heart className="w-5 h-5 text-red-500" /> para a comunidade imigrante
          </p>
          <p className="mt-2 text-gray-400">
            © {new Date().getFullYear()} Apoio ao Imigrante Florianópolis. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}