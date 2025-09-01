import React from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Adarsh Kumar
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
            B.Tech Student & Aspiring Software Engineer
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through code. Currently pursuing my B.Tech degree
            while building projects that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button className="bg-blue-900 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              <Mail size={20} />
              Get In Touch
            </button>
            <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:text-blue-900"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:text-blue-900"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:adarsh@example.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:text-blue-900"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;