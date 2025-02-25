import React from 'react';
import { socialLinks } from '../data/mockData';
import { Github, Linkedin, Youtube, Instagram, Twitter } from 'lucide-react';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Twitter,
};

export const Links = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <img
            src="src\assets\imgPerfil.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h1 className="text-2xl font-bold text-gray-900">Fernando Bertolo</h1>
          <p className="text-gray-600">Desenvolvedor FullStack</p>
        </div>

        <div className="space-y-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Icon className="text-gray-600 mr-3" size={24} />
                    <span className="text-gray-900 font-medium">
                      {link.platform}
                    </span>
                  </div>
                  <span className="text-gray-400">→</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};