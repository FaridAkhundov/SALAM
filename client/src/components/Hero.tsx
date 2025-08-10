import { Code, Linkedin, Github, Mail, ChevronDown, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [textFade, setTextFade] = useState(true);
  
  const roles = [
    "IT Specialist",
    "Cybersecurity Expert",
    "System Administrator",
    "Infrastructure Engineer"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setTextFade(false); // Start fade out
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % roles.length);
        setTextFade(true); // Fade in new text
      }, 300); // Half of transition duration
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

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
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-light-gray via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-navy/10 dark:bg-blue-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-300/20 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/20 dark:bg-pink-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => {
          // Generate fixed random positions that don't change
          const leftPos = Math.random() * 80 + 10; // 10-90% to avoid edges
          const topPos = Math.random() * 80 + 10;  // 10-90% to avoid edges
          
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${leftPos}%`,
                top: `${topPos}%`,
                animation: `
                  float ${5 + i * 0.8}s ease-in-out infinite ${i * 0.7}s, 
                  fadeInOut ${8 + i * 1.5}s ease-in-out infinite ${i * 2.1}s
                `
              }}
            >
              <Sparkles className="w-4 h-4 text-navy-light dark:text-blue-300" />
            </div>
          );
        })}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Greeting with stagger animation */}
            <div className="space-y-6">
              <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <p className="text-lg text-navy-light dark:text-blue-400 font-medium">Welcome to my digital space</p>
              </div>
              
              <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <h1 className="text-5xl md:text-6xl font-bold text-navy dark:text-navy-light leading-tight">
                  Hi, I'm{" "}
                  <span className="relative">
                    <span className="text-navy-light dark:text-blue-300">Farid</span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-navy-light/20 to-blue-500/20 dark:from-blue-400/20 dark:to-purple-500/20 blur opacity-30 animate-pulse"></div>
                  </span>
                </h1>
              </div>

              <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <div className="h-8 flex items-center">
                  <p className="text-xl md:text-2xl text-charcoal dark:text-gray-300 font-medium">
                    <span className={`text-navy-light dark:text-blue-400 transition-all duration-600 ${textFade ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'}`}>
                      {roles[textIndex]}
                    </span>
                  </p>
                </div>
              </div>

              <div className={`transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <p className="text-lg text-charcoal dark:text-gray-300 leading-relaxed max-w-xl">
                  Experienced IT specialist with expertise in cybersecurity, system administration, and secure infrastructure design. 
                  Certified professional focused on building resilient digital environments and implementing industry-standard security protocols.
                </p>
              </div>
            </div>
            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="group relative bg-gradient-to-r from-navy to-navy-light dark:from-blue-600 dark:to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-navy/25 dark:hover:shadow-blue-500/25 transition-all duration-300 text-center font-medium overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Code className="w-5 h-5" />
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-navy-light to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="group relative border-2 border-navy dark:border-blue-500 text-navy dark:text-blue-400 px-8 py-4 rounded-lg hover:bg-navy dark:hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-navy/25 dark:hover:shadow-blue-500/25 transition-all duration-300 text-center font-medium overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className={`flex space-x-6 transition-all duration-700 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <a
                href="https://www.linkedin.com/in/faridaxundov/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-light-gray dark:bg-gray-800 text-charcoal dark:text-gray-300 hover:text-navy-light dark:hover:text-blue-300 hover:shadow-lg hover:shadow-navy/25 dark:hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="group p-3 rounded-full bg-light-gray dark:bg-gray-800 text-charcoal dark:text-gray-300 hover:text-navy-light dark:hover:text-blue-300 hover:shadow-lg hover:shadow-navy/25 dark:hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="mailto:farid.axundov@example.com"
                className="group p-3 rounded-full bg-light-gray dark:bg-gray-800 text-charcoal dark:text-gray-300 hover:text-navy-light dark:hover:text-blue-300 hover:shadow-lg hover:shadow-navy/25 dark:hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
          {/* Enhanced Profile Image Section */}
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-navy-light/20 to-blue-500/20 dark:from-blue-400/30 dark:to-purple-500/30 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              
              {/* Main image container */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800"
                  alt="Farid Axundov - IT Professional & Cybersecurity Specialist"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto animate-float hover:scale-105 transition-transform duration-500"
                />
                
                {/* Server status indicator */}
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-green-400 to-green-500 dark:from-green-500 dark:to-green-400 text-white p-3 rounded-xl shadow-lg animate-bounce">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold">SECURE</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-navy-light to-blue-600 dark:from-blue-600 dark:to-purple-600 text-white p-4 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Code className="w-8 h-8 animate-pulse" />
                </div>
                
                {/* Infrastructure badges */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full shadow-lg animate-pulse">
                  <span className="text-xs font-bold">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-sm text-charcoal dark:text-gray-400 animate-pulse">Scroll to explore</p>
            <ChevronDown className="w-6 h-6 text-navy-light dark:text-blue-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
