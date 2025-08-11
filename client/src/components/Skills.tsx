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
  const skillCategories = [
    {
      title: "Programming & Development",
      skills: [
        "Python - Advanced scripting and automation",
        "JavaScript/TypeScript - Web application development", 
        "React.js - Modern frontend frameworks",
        "SQL - Database management and optimization"
      ]
    },
    {
      title: "Cybersecurity & Networking", 
      skills: [
        "Penetration Testing - Vulnerability assessment and exploitation",
        "Network Security - Firewall and IDS/IPS configuration",
        "Digital Forensics - Incident response and evidence analysis",
        "Risk Assessment - Security auditing and compliance"
      ]
    },
    {
      title: "System Administration",
      skills: [
        "Linux/Windows Server - Enterprise administration",
        "Virtualization - VMware, VirtualBox, Docker containers", 
        "Cloud Platforms - AWS, Azure fundamentals and deployment",
        "Database Systems - PostgreSQL, MySQL, MongoDB"
      ]
    },
    {
      title: "Research & Academic Interests",
      skills: [
        "Secure Infrastructure - Academic and research purposes",
        "Threat Intelligence - Emerging cyber threats analysis",
        "Security Architecture - Enterprise security design"
      ]
    }
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
          <p className="text-lg lg:text-xl text-charcoal dark:text-gray-300 animate-on-scroll animation-delay-200">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="mb-4 lg:mb-6 animate-on-scroll animation-delay-400">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Coding workspace with multiple monitors showing code"
                className="rounded-2xl shadow-lg w-full hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            
            <div className="bg-light-gray dark:bg-gray-800 p-4 lg:p-6 rounded-xl border dark:border-gray-700 hover-glow animate-on-scroll animation-delay-600">
              <h3 className="text-lg lg:text-xl font-bold text-navy dark:text-navy-light mb-3 lg:mb-4">What I Bring</h3>
              <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base text-charcoal dark:text-gray-300">
                {strengths.map((strength, index) => (
                  <li 
                    key={index} 
                    className="flex items-center animate-on-scroll animation-delay-800"
                    style={{ 
                      animationDelay: `${0.8 + index * 0.1}s` 
                    }}
                  >
                    <CheckCircle className="w-5 h-5 text-navy-light dark:text-blue-400 mr-3 flex-shrink-0" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="space-y-6 lg:space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="animate-on-scroll"
                style={{ 
                  animationDelay: `${1.0 + categoryIndex * 0.3}s` 
                }}
              >
                <h3 className="text-lg lg:text-xl font-bold text-navy dark:text-navy-light mb-4 lg:mb-6">
                  {category.title}
                </h3>
                <div className="bg-light-gray dark:bg-gray-800 p-4 lg:p-6 rounded-xl border dark:border-gray-700">
                  <ul className="space-y-3 lg:space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <li 
                        key={skillIndex}
                        className="flex items-start animate-on-scroll"
                        style={{ 
                          animationDelay: `${1.2 + categoryIndex * 0.3 + skillIndex * 0.1}s` 
                        }}
                      >
                        <span className="inline-block w-2 h-2 bg-navy-light dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm lg:text-base text-charcoal dark:text-gray-300 leading-relaxed">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
