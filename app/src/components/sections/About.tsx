import { Github, Linkedin, Mail } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 min-h-[calc(100vh-4rem)] flex justify-center items-center scroll-margin-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between gap-6">
          <div className="lg:w-full justify-items-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Olá, eu sou Fernando Bertolo
            </h1>
            <h2 className="text-2xl text-gray-600 mb-6">
              Desenvolvedor FullStack
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              Sou apaixonado por tecnologia e inovação. Desde sempre, os desafios do universo da programação me motivam a buscar conhecimento e soluções criativas.
              Atualmente, estou iniciando uma pós-graduação em Arquitetura de Software com ênfase em Java,
              ampliando minha base já consolidada pela graduação em Análise e Desenvolvimento de Sistemas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/fernando-bertolo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/fernandobertolojr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:bertolo.dev@gmail.com"
                className="text-gray-600 hover:text-gray-900"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};