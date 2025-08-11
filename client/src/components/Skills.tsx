import { useEffect, useRef } from 'react';
import { CheckCircle, Code, Layout, Smartphone, Monitor, Server, Database, GitBranch, Cloud } from "lucide-react";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll, .card-entrance');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const technicalSkills = [
    { name: "Python", icon: Code },
    { name: "IT Essentials", icon: Monitor },
    { name: "Linux", icon: Smartphone },
    { name: "Networking", icon: Layout },
  ];

  const cybersecuritySkills = [
    { name: "Cybersecurity", icon: Server },
    { name: "System Admin", icon: Database },
    { name: "DevOps", icon: GitBranch },
    { name: "Website Development", icon: Cloud },
  ];

  const strengths = [
    "Secure infrastructure design",
    "Security-focused development",
    "Industry best practices",
    "Continuous learning mindset",
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-12 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl lg:max-w-6xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-navy dark:text-navy-light mb-4 animate-on-scroll">
            <span className="block sm:hidden">Technical Skills</span>
            <span className="hidden sm:block">Technical Skills & Expertise</span>
          </h2>
          <p className="text-lg lg:text-xl text-charcoal dark:text-gray-300 animate-on-scroll animation-delay-200">Technologies and tools I work with</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="animate-on-scroll animation-delay-400">
            <div className="mb-4 lg:mb-6">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Coding workspace with multiple monitors showing code"
                className="rounded-2xl shadow-lg w-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              />
            </div>
            
            <div className="bg-light-gray dark:bg-gray-800 p-4 lg:p-6 rounded-xl border dark:border-gray-700 hover-glow card-entrance">
              <h3 className="text-lg lg:text-xl font-bold text-navy dark:text-navy-light mb-3 lg:mb-4">What I Bring</h3>
              <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base text-charcoal dark:text-gray-300">
                {strengths.map((strength, index) => (
                  <li key={index} className="flex items-center animate-on-scroll" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                    <CheckCircle className="w-5 h-5 text-navy-light dark:text-blue-400 mr-3 flex-shrink-0" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="space-y-6 lg:space-y-8">
            {/* Technical Skills */}
            <div className="animate-on-scroll animation-delay-600">
              <h3 className="text-lg lg:text-xl font-bold text-navy dark:text-navy-light mb-4 lg:mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                {technicalSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="bg-light-gray dark:bg-gray-800 p-3 lg:p-4 rounded-lg text-center hover:bg-navy dark:hover:bg-blue-600 hover:text-white transition-all duration-300 group border dark:border-gray-700 hover-lift card-entrance"
                      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    >
                      <IconComponent className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-2 text-charcoal dark:text-gray-300 group-hover:text-white transition-transform duration-300 group-hover:scale-110" />
                      <div className="text-sm lg:text-base font-medium text-charcoal dark:text-gray-300 group-hover:text-white">{skill.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="animate-on-scroll animation-delay-800">
              <h3 className="text-lg lg:text-xl font-bold text-navy dark:text-navy-light mb-4 lg:mb-6">Cybersecurity & Infrastructure</h3>
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                {cybersecuritySkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="bg-light-gray dark:bg-gray-800 p-3 lg:p-4 rounded-lg text-center hover:bg-navy dark:hover:bg-blue-600 hover:text-white transition-all duration-300 group border dark:border-gray-700 hover-lift card-entrance"
                      style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                    >
                      <IconComponent className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-2 text-charcoal dark:text-gray-300 group-hover:text-white transition-transform duration-300 group-hover:scale-110" />
                      <div className="text-sm lg:text-base font-medium text-charcoal dark:text-gray-300 group-hover:text-white">{skill.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
