import React from 'react';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
export const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full border-4 border-blue-500 overflow-hidden mb-8">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </h1>
        <div className="flex items-center justify-center mb-6 space-x-2">
          <span className="h-px w-8 bg-slate-300"></span>
          <h2 className="text-xl md:text-2xl font-medium text-slate-700">
            Full Stack Developer
          </h2>
          <span className="h-px w-8 bg-slate-300"></span>
        </div>
        <p className="max-w-2xl text-lg text-slate-600 mb-8">
          I create elegant solutions to complex problems through clean,
          maintainable code and thoughtful user experiences. Passionate about
          building products that make a difference.
        </p>
        <div className="flex space-x-4 mb-12">
          <a href="#" className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href="#" className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors">
            <LinkedinIcon size={20} />
          </a>
          <a href="#" className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors">
            <TwitterIcon size={20} />
          </a>
        </div>
        <a href="#about" className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 hover:border-blue-500 hover:text-blue-500 transition-colors animate-bounce" aria-label="Scroll to about section">
          <ArrowDownIcon size={20} />
        </a>
      </div>
    </section>;
};