import React from 'react';
import { CodeIcon, ServerIcon, PenToolIcon, DatabaseIcon, GlobeIcon, UsersIcon } from 'lucide-react';
export const Skills = () => {
  const skillCategories = [{
    title: 'Frontend Development',
    icon: <CodeIcon className="w-6 h-6 text-blue-600" />,
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Redux']
  }, {
    title: 'Backend Development',
    icon: <ServerIcon className="w-6 h-6 text-blue-600" />,
    skills: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'Authentication', 'Security']
  }, {
    title: 'UI/UX Design',
    icon: <PenToolIcon className="w-6 h-6 text-blue-600" />,
    skills: ['Figma', 'Responsive Design', 'Wireframing', 'Prototyping', 'User Research', 'Accessibility']
  }, {
    title: 'Database',
    icon: <DatabaseIcon className="w-6 h-6 text-blue-600" />,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'Data Modeling']
  }, {
    title: 'DevOps & Tools',
    icon: <GlobeIcon className="w-6 h-6 text-blue-600" />,
    skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'Vercel', 'Testing']
  }, {
    title: 'Soft Skills',
    icon: <UsersIcon className="w-6 h-6 text-blue-600" />,
    skills: ['Communication', 'Teamwork', 'Problem Solving', 'Time Management', 'Adaptability', 'Leadership']
  }];
  return <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-2 text-center">My Skills</h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mb-10"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-slate-700">{skill}</span>
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>
    </section>;
};