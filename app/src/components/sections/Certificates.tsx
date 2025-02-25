import { certificates } from '../../data/mockData';
import { Award, ExternalLink } from 'lucide-react';

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-50 min-h-[calc(100vh-4rem)] scroll-margin-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Certificados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Award className="text-blue-600 mr-2" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">
                  {cert.name}
                </h3>
              </div>
              <p className="text-gray-600 mb-2">{cert.issuer}</p>
              <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <ExternalLink size={16} className="mr-1" />
                Ver Certificado
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};