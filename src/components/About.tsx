import React from 'react';
import { Code, Target, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: 'Problem Solver',
      description: 'I love tackling complex challenges and finding elegant solutions through code.'
    },
    {
      icon: <Target className="text-emerald-600\" size={24} />,
      title: 'Goal-Oriented',
      description: 'Focused on achieving objectives with precision and dedication to excellence.'
    },
    {
      icon: <Lightbulb className="text-yellow-500" size={24} />,
      title: 'Creative Thinker',
      description: 'Always exploring innovative approaches to traditional problems.'
    },
    {
      icon: <Heart className="text-red-500\" size={24} />,
      title: 'Passionate Learner',
      description: 'Continuously expanding my knowledge and staying updated with latest technologies.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate B.Tech student on a journey to become a skilled software engineer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                Hello! I'm Adarsh Kumar Shrivastav, a dedicated B.Tech student with a passion for 
                technology and innovation. My journey in Electronics and Communication began with curiosity about 
                how things work, and it has evolved into a deep love for creating solutions that 
                make a real impact.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I believe in the power of continuous learning and hands-on experience. Whether it's 
                exploring new programming languages, contributing to open-source projects, or building 
                applications from scratch, I'm always eager to expand my skillset and take on new challenges.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My goal is to leverage technology to solve real-world problems and contribute meaningfully 
                to the software development community. I'm particularly interested in full-stack development, 
                artificial intelligence, and creating user-centric applications.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-gray-900 ml-3">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
