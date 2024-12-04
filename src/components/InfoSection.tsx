import React from 'react';
import { BookOpen, FileText, Globe, Users } from 'lucide-react';

export function InfoSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Informações Importantes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Documentação</h3>
            <p className="text-gray-600">
              Informações sobre CPF, RNE, Carteira de Trabalho e outros documentos essenciais para imigrantes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Educação</h3>
            <p className="text-gray-600">
              Cursos de português gratuitos, revalidação de diplomas e oportunidades educacionais.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Comunidade</h3>
            <p className="text-gray-600">
              Grupos de apoio, eventos culturais e redes de contato para imigrantes em Florianópolis.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cultura Local</h3>
            <p className="text-gray-600">
              Guia sobre costumes, tradições e dicas para adaptação à vida em Florianópolis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}