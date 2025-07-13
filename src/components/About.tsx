import React from 'react';
export const About = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-10"></div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Working on code" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <p className="text-slate-700 mb-4">
                Hello! I'm a passionate developer with over 5 years of
                experience building web applications. I specialize in creating
                responsive, user-friendly interfaces with React and building
                robust backend systems.
              </p>
              <p className="text-slate-700 mb-4">
                When I'm not coding, you can find me hiking in the mountains,
                reading science fiction, or experimenting with new recipes in
                the kitchen. I believe in continuous learning and am always
                exploring new technologies.
              </p>
              <p className="text-slate-700 mb-6">
                I'm currently open to new opportunities where I can contribute
                my skills and grow as a developer while working on meaningful
                projects.
              </p>
              <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};