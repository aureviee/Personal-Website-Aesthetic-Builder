import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export const Projects = () => {
  const projects = [{
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product listings, cart functionality, user authentication, and payment processing.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'Task Management App',
    description: 'A productivity tool for organizing tasks with features like drag-and-drop, categories, priorities, and team collaboration.',
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    tags: ['TypeScript', 'React', 'Redux', 'Firebase'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'Weather Dashboard',
    description: 'A weather application providing real-time forecasts, historical data, and interactive maps for locations worldwide.',
    image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1575&q=80',
    tags: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind'],
    liveLink: '#',
    githubLink: '#'
  }];
  return <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-2 text-center">My Projects</h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mb-10"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded-md">
                      {tag}
                    </span>)}
                </div>
                <div className="flex space-x-3">
                  <a href={project.liveLink} className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                    <ExternalLinkIcon size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="flex items-center text-sm text-slate-700 hover:text-slate-900">
                    <GithubIcon size={16} className="mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};