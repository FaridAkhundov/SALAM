import { useEffect, useState } from 'react';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);
  const experiences = [
    {
      period: "Jan 2022 - Aug 2023",
      title: "Co-Founder & Cybersecurity Specialist",
      company: "ZControl.org • Self-employed",
      description: "Co-founded a private cybersecurity initiative, specializing in secure server infrastructure design and ongoing maintenance. Implemented industry-standard security protocols, significantly enhancing system resilience against emerging cyber threats. Performed continuous security evaluations to strengthen system defenses and prevent breaches. Collaborated effectively with cross-functional teams to safeguard digital assets and support overall project objectives.",
    },
    {
      period: "Feb 2021 - Mar 2022",
      title: "Co-Founder & Cybersecurity Specialist",
      company: "Dark Team • Self-employed",
      description: "Co-founded a private cybersecurity initiative, focusing on secure server infrastructure design and maintenance. Implemented industry-standard security protocols, enhancing system resilience against emerging threats. Conducted regular vulnerability assessments, leading to a 30% reduction in security incidents. Collaborated with cross-functional teams to ensure the integrity of digital assets and support project objectives.",
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-xl animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full animate-float animation-delay-4000"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-xl animate-float"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-navy via-blue-600 to-purple-600 dark:from-navy-light dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-xl text-charcoal dark:text-gray-300 max-w-2xl mx-auto">
            Building secure digital infrastructures and leading cybersecurity initiatives
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Animated Timeline line - Only on desktop */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-500 h-full hidden lg:block shadow-lg"></div>
          
          {/* Timeline Items */}
          <div className="space-y-8 lg:space-y-16">
            {experiences.map((experience, index) => (
              <div key={index} className={`relative transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                {/* Mobile: Stacked layout, Desktop: Alternating layout */}
                <div className={`lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`w-full lg:w-2/5 ${index % 2 === 0 ? 'lg:mr-[150px]' : 'lg:ml-[150px]'}`}>
                    <div className="group relative">
                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                      
                      {/* Main card */}
                      <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700 group-hover:border-blue-400 dark:group-hover:border-blue-500">
                        {/* Header with title and period badge */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 lg:mb-4">
                          <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-navy to-blue-600 dark:from-navy-light dark:to-blue-400 bg-clip-text text-transparent mb-2 sm:mb-0 lg:mb-0">
                            {experience.title}
                          </h3>
                          
                          {/* Period badge - moved to right */}
                          <div className="inline-flex items-center px-3 py-1 lg:px-4 lg:py-2 rounded text-xs lg:text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium flex-shrink-0">
                            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                            {experience.period}
                          </div>
                        </div>
                        
                        <div className="text-base lg:text-lg font-semibold text-charcoal dark:text-gray-300 mb-3 lg:mb-4 flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></div>
                          {experience.company}
                        </div>
                        
                        <p className="text-charcoal dark:text-gray-300 leading-relaxed text-sm lg:text-base">
                          {experience.description}
                        </p>
                        
                        {/* Decorative corner */}
                        <div className={`absolute top-4 w-6 h-6 lg:w-8 lg:h-8 border-2 border-blue-400 dark:border-blue-500 opacity-20 ${index === 0 ? 'left-4 rounded-tl-xl' : 'right-4 rounded-tr-xl'}`}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Timeline dot - Desktop only */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
                    <div className="relative">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg animate-pulse"></div>
                      <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-ping opacity-30"></div>
                    </div>
                  </div>
                  
                  {/* Spacer for desktop layout */}
                  <div className="hidden lg:block lg:w-2/5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
