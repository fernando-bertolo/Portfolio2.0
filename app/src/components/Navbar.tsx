import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/#" className="text-xl font-bold text-gray-800">
              Bertolo Dev
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#about" className="text-gray-600 hover:text-gray-900">Sobre mim</a>
            <a href="/#projects" className="text-gray-600 hover:text-gray-900">Projetos</a>
            <a href="/#experience" className="text-gray-600 hover:text-gray-900">Experiências</a>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <a href="/#certificates" className="text-gray-600 hover:text-gray-900">Certificados</a>
            <a href="/#contact" className="text-gray-600 hover:text-gray-900">Contato</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Sobre mim</a>
            <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Projetos</a>
            <a href="#experience" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Experiência</a>
            <a href="#blog" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Blog</a>
            <a href="#certificates" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Certificados</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;