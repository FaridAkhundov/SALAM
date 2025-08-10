import { Code, Linkedin, Github, Mail } from "lucide-react";

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const navHeight = document.querySelector("nav")?.offsetHeight || 0;
      const targetPosition = projectsSection.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const navHeight = document.querySelector("nav")?.offsetHeight || 0;
      const targetPosition = contactSection.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-light-gray via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6 leading-tight">
              Hi, I'm <span className="text-navy-light">Farid</span>
            </h1>
            <p className="text-xl text-charcoal mb-8 leading-relaxed">
              IT Support Enthusiast exploring DevOps & System Administration. 
              Certified in IT Essentials & Cybersecurity, passionate about creating 
              secure digital solutions and innovative user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="bg-navy text-white px-8 py-4 rounded-lg hover:bg-navy-light transition-all duration-300 text-center font-medium"
              >
                View My Work
              </a>
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="border-2 border-navy text-navy px-8 py-4 rounded-lg hover:bg-navy hover:text-white transition-all duration-300 text-center font-medium"
              >
                Get In Touch
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6 mt-8">
              <a
                href="https://www.linkedin.com/in/faridaxundov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal hover:text-navy-light transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-charcoal hover:text-navy-light transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:farid.axundov@example.com"
                className="text-charcoal hover:text-navy-light transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
                alt="Farid Axundov - Professional Headshot"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto animate-float"
              />
              <div className="absolute -bottom-6 -right-6 bg-navy-light text-white p-4 rounded-xl shadow-lg">
                <Code className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
