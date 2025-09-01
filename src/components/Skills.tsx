import React from 'react';
import { Code2, Database, Globe, Smartphone, GitBranch, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="text-blue-600" size={32} />,
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'Matlab', 'C++', 'C']
    },
    {
      icon: <Globe className="text-emerald-600\" size={32} />,
      title: 'Web Development',
      skills: ['React', 'Node.js', 'HTML/CSS', 'Next.js', 'Express.js', 'Tailwind CSS']
    },
    {
      icon: <Database className="text-purple-600" size={32} />,
      title: 'Database & Cloud',
      skills: ['MySQL', 'MongoDB']
    },
    {
      icon: <GitBranch className="text-gray-700" size={32} />,
      title: 'Tools & Version Control',
      skills: ['Git', 'GitHub', 'VS Code', 'Linux']
    },
    {
      icon: <Cpu className="text-red-600\" size={32} />,
      title: 'Emerging Technologies',
      skills: ['Machine Learning', 'AI/ML', 'Data Structures', 'Algorithms', 'IoT', 'Data Science', 'Generative AI']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through academic learning and hands-on project experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 ml-4">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Proficiency Bars */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Proficiency Levels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { skill: 'JavaScript/TypeScript', level: 90 },
              { skill: 'React/Next.js', level: 85 },
              { skill: 'Python', level: 80 },
              { skill: 'Node.js', level: 75 },
              { skill: 'Database Management', level: 70 },
              { skill: 'Machine Learning', level: 65 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">{item.skill}</span>
                  <span className="text-gray-500">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
