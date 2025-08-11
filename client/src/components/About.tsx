import { useEffect, useRef } from 'react';

export default function About() {
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
      { threshold: 0.1 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy dark:text-navy-light mb-4 animate-on-scroll animate-slide-bottom">About Me</h2>
          <p className="text-lg sm:text-xl text-charcoal dark:text-gray-300 max-w-3xl mx-auto animate-on-scroll animation-delay-200">
            Passionate about creating innovative solutions and building meaningful digital experiences
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="animate-on-scroll animation-delay-400">
            <div className="space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-charcoal dark:text-gray-300 leading-relaxed animate-on-scroll animation-delay-600">
                I'm an experienced IT Specialist with deep expertise in cybersecurity, system administration, 
                and infrastructure management. With multiple professional certifications including IBM Cybersecurity, 
                Cisco Ethical Hacker, and Google Cybersecurity Professional Certificate, I design and implement 
                secure, scalable IT solutions for complex enterprise environments.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-charcoal dark:text-gray-300 leading-relaxed animate-on-scroll animation-delay-800">
                As a cybersecurity professional and system administrator, I have extensive experience in 
                vulnerability assessments, network security, system hardening, and incident response. 
                My expertise spans across secure infrastructure design, risk management, and implementing 
                industry-standard security protocols to protect critical digital assets.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8">
                <div className="text-center p-3 sm:p-4 lg:p-6 bg-light-gray dark:bg-gray-800 rounded-xl hover-lift hover-glow animate-on-scroll animation-delay-1000">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy dark:text-navy-light mb-1 sm:mb-2">2+</div>
                  <div className="text-xs sm:text-sm lg:text-base text-charcoal dark:text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-3 sm:p-4 lg:p-6 bg-light-gray dark:bg-gray-800 rounded-xl hover-lift hover-glow animate-on-scroll animation-delay-1000">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy dark:text-navy-light mb-1 sm:mb-2">10+</div>
                  <div className="text-xs sm:text-sm lg:text-base text-charcoal dark:text-gray-300">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center animate-on-scroll animation-delay-600">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-sm opacity-0 group-hover:opacity-30 transition-all duration-700 ease-in-out"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-md opacity-0 group-hover:opacity-20 transition-all duration-1000 ease-in-out"></div>
              <img
                src="https://images.unsplash.com/photo-1489436969537-cf0c1dc69cba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=900"
                alt="Professional Electronic Device - Network Infrastructure Technology"
                className="relative rounded-2xl shadow-lg object-cover w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto max-h-[400px] lg:max-h-[500px] xl:max-h-[600px] transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
