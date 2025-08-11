import { Linkedin, Github, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={sectionRef} className="bg-navy dark:bg-gray-950 text-white py-8 sm:py-10 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 animate-on-scroll">FA</div>
          <p className="text-sm sm:text-base text-gray-300 dark:text-gray-400 mb-6 sm:mb-8 animate-on-scroll animation-delay-200">Building secure digital solutions, one project at a time.</p>
          
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8 animate-on-scroll animation-delay-400">
            <a
              href="https://www.linkedin.com/in/faridaxundov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#"
              className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:farid.axundov@example.com"
              className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-700 dark:border-gray-800 pt-6 sm:pt-8">
            <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500">&copy; 2024 Farid Axundov. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
