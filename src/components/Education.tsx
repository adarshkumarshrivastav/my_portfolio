import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educations = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Electronics and Communication Engineering',
      institution: 'National Institute of Technology Meghalaya',
      location: 'Sohra, Meghalaya',
      duration: '2022 - 2026',
      gpa: '7.4/10.0',
      status: 'Currently Pursuing',
      highlights: [
        'Relevant Coursework: Data Structures, Database Management, OOPs, Electronic Circuits, Electronics Device, VLSI, Embedded Systems',
        'Active member of Programming Club and Tech Society',
        'Participated in multiple hackathons and coding competitions'
      ]
    },
    {
      degree: 'Higher Secondary Education',
      field: 'Science (PCM)',
      institution: 'Gorakh Singh College',
      location: 'Siwan, Bihar',
      duration: '2019 - 2021',
      gpa: '78%',
      status: 'Completed',
      highlights: [
        'Mathematics, Physics, and Chemistry',
        'College topper in English',
        'In Jee Mains second highest scorer of district in 2022.'
      ]
    },
    {
      degree: 'Secondary Education',
      board: 'Central Board of Secondary Education'
      institution: 'USCD DAV Public School',
      location: 'Siwan, Bihar',
      duration: '2008 - 2019',
      percentage: '93.4%',
      status: 'Completed',
      highlights: [
        'Mathematics, Social Science, English, Sanskrit and Science',
        'School topper',
        'Participated in National Science Olympiad'
      ]
    }
  ];

  const achievements = [
    {
      title: 'Quiz Competition',
      description: 'State level runner up in RBI quiz competition',
      year: '2024'
    },
    {
      title: 'Robotics Competition',
      description: '1st ranker in Robo Rumble and 3rd ranker in GAT in Cognitia-2024',
      year: '2024'
    },
    {
      title: 'Positioning',
      description: 'Coordinator in departmental event in Cognitia',
      year: '2024'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Education & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and notable accomplishments
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="text-blue-600 mr-3" size={24} />
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'Currently Pursuing' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">
                    {edu.field}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      <span>{edu.institution}, {edu.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm text-gray-500">GPA/Percentage: </span>
                    <span className="font-semibold text-gray-900">{edu.gpa}</span>
                  </div>

                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="text-gray-600 flex items-start"
                      >
                        <span className="text-blue-600 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <Award className="text-yellow-500 mx-auto mb-4" size={32} />
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {achievement.description}
                </p>
                <span className="text-blue-600 font-semibold text-sm">
                  {achievement.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
