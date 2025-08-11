import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Projects() {
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
  const projects = [
    {
      title: "Cybersecurity Infrastructure",
      description: "Secure server infrastructure design with industry-standard protocols, continuous monitoring, and vulnerability assessment tools.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Cybersecurity dashboard with network monitoring",
      technologies: ["Linux", "Security", "Monitoring"],
    },
    {
      title: "Network Security Analysis",
      description: "Comprehensive network security evaluation with real-time threat detection, penetration testing, and security incident response.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Network security visualization with threat analysis",
      technologies: ["Python", "Networking", "Analysis"],
    },
    {
      title: "System Administration Tools",
      description: "Automated system administration toolkit with server monitoring, backup solutions, and performance optimization features.",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "System administration dashboard with server metrics",
      technologies: ["DevOps", "Automation", "Linux"],
    },
    {
      title: "Security Training Platform",
      description: "Educational cybersecurity platform with hands-on labs, vulnerability simulations, and progress tracking for security awareness.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Security training interface with learning modules",
      technologies: ["Education", "Security", "Training"],
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-12 sm:py-16 lg:py-20 bg-light-gray dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy dark:text-navy-light mb-4 animate-on-scroll">Featured Projects</h2>
          <p className="text-base sm:text-lg lg:text-xl text-charcoal dark:text-gray-300 animate-on-scroll animation-delay-200">A showcase of my recent work and achievements</p>
        </div>
        
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border dark:border-gray-700 card-entrance hover-lift hover-magnetic group"
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-center justify-between mb-3 lg:mb-4">
                  <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-navy dark:text-navy-light group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a
                      href="#"
                      className="text-charcoal dark:text-gray-300 hover:text-navy-light dark:hover:text-blue-300 transition-all duration-300 hover:scale-110 hover:rotate-12 p-1"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-charcoal dark:text-gray-300 hover:text-navy-light dark:hover:text-blue-300 transition-all duration-300 hover:scale-110 hover:-rotate-12 p-1"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-sm sm:text-base lg:text-base text-charcoal dark:text-gray-300 mb-3 lg:mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-navy-light dark:bg-blue-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center bg-navy text-white px-8 py-4 rounded-lg hover:bg-navy-light transition-all duration-300 font-medium animate-on-scroll hover-lift hover-magnetic group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
