export default function Experience() {
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
    <section id="experience" className="py-20 bg-light-gray dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy dark:text-navy-light mb-4">Experience</h2>
          <p className="text-xl text-charcoal dark:text-gray-300">My professional journey and key milestones</p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-navy-light dark:bg-blue-400 h-full hidden md:block"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex items-center">
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border dark:border-gray-700">
                    <div className="text-sm text-navy-light dark:text-blue-400 font-medium mb-2">{experience.period}</div>
                    <h3 className="text-xl font-bold text-navy dark:text-navy-light mb-2">{experience.title}</h3>
                    <p className="text-lg text-charcoal dark:text-gray-300 mb-3">{experience.company}</p>
                    <p className="text-charcoal dark:text-gray-300 leading-relaxed">{experience.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-navy-light dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800 hidden md:block"></div>
                
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} ${index % 2 !== 0 ? 'md:order-1' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
