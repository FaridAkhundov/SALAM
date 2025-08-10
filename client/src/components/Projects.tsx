import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function Projects() {
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
    <section id="projects" className="py-20 bg-light-gray dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy dark:text-navy-light mb-4">Featured Projects</h2>
          <p className="text-xl text-charcoal dark:text-gray-300">A showcase of my recent work and achievements</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border dark:border-gray-700"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-navy dark:text-navy-light">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a
                      href="#"
                      className="text-charcoal dark:text-gray-300 hover:text-navy-light dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-charcoal dark:text-gray-300 hover:text-navy-light dark:hover:text-blue-300 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-charcoal dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-navy-light dark:bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
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
            className="inline-flex items-center bg-navy text-white px-8 py-4 rounded-lg hover:bg-navy-light transition-all duration-300 font-medium"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
