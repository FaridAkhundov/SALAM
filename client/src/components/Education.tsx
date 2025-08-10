import { GraduationCap, Award, Calendar } from "lucide-react";

export default function Education() {
  const education = [
    {
      period: "Sep 2022 - Sep 2026",
      degree: "Bachelor's degree, Information Technology",
      institution: "Azərbaycan Universiteti",
      grade: "Grade 3 - Current GPA: 3.8/4.0",
      description: "Pursuing Bachelor's degree in Information Technology with specialization in Information Security. Focused on network security, digital forensics, and emerging cyber threats.",
      coursework: [
        "Network Security & Cryptography",
        "Digital Forensics & Incident Response",
        "Cloud Computing & Virtualization",
        "System Administration & Infrastructure"
      ],
      achievements: [
        "Cisco IT Essentials certificate holder",
        "2nd place winner at Aplogit 2018 national competition",
        "Advanced Cyber Defence finalist at 'Səbirkin Alimləri' science competition",
        "TryHackMe platform - RNB Hacker rank with 85+ completions"
      ]
    },
    {
      period: "Oct 2018 - May 2021",
      degree: "Higher National Diploma, Information Technology",
      institution: "STEP IT Academy Azerbaijan",
      grade: "Completed 3.5 years - Cisco IT Essentials Certified",
      description: "Practical IT education covering system administration, networking, and cybersecurity foundations. Hands-on experience with Windows Server, Linux administration, and network configuration.",
      coursework: [
        "Windows Server Administration",
        "Linux System Administration", 
        "Network Infrastructure & Configuration",
        "IT Security Fundamentals"
      ],
      achievements: [
        "Cisco IT Essentials certification with 95% score",
        "Regional IT skills competition - Top 10 finalist",
        "Led technical study groups and troubleshooting sessions",
        "Mentored newcomers in lab environments and tools"
      ]
    }
  ];

  const certifications = [
    {
      name: "Certified in Cybersecurity",
      issuer: "IBM",
      date: "Jul 2025",
      skills: ["Cybersecurity Fundamentals", "Risk Management", "Security Operations", "Incident Response"]
    },
    {
      name: "Ethical Hacker",
      issuer: "Cisco",
      date: "Jul 2025",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Ethical Hacking", "Network Security"]
    },
    {
      name: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      date: "Jul 2025",
      skills: ["Security Analysis", "Risk Assessment", "Incident Response", "Network Security"]
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "Jul 2025",
      skills: ["Cybersecurity Fundamentals", "Threat Analysis", "Security Principles", "Risk Management"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy dark:text-navy-light mb-4">Education & Certifications</h2>
          <p className="text-xl text-charcoal dark:text-gray-300">Academic background and professional certifications</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-navy dark:text-navy-light mb-8">Educational Background</h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="bg-light-gray dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border dark:border-gray-700">
                  <div className="flex items-start">
                    <div className="bg-navy-light dark:bg-blue-600 text-white p-3 rounded-lg mr-4 flex-shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 text-navy-light dark:text-blue-400 mr-2" />
                        <span className="text-sm text-navy-light dark:text-blue-400 font-medium">{item.period}</span>
                      </div>
                      <h4 className="text-xl font-bold text-navy dark:text-navy-light mb-1">{item.degree}</h4>
                      <p className="text-lg text-charcoal dark:text-gray-300 mb-2">{item.institution}</p>
                      <p className="text-sm text-navy-light dark:text-blue-400 mb-3">{item.grade}</p>
                      <p className="text-charcoal dark:text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                      
                      {/* Coursework Section */}
                      <div className="mb-4">
                        <h5 className="font-semibold text-navy dark:text-navy-light mb-2">Key Coursework:</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {item.coursework.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="bg-navy/10 dark:bg-blue-900/30 text-navy dark:text-blue-300 px-3 py-1 rounded-lg text-xs font-medium"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h5 className="font-semibold text-navy dark:text-navy-light">Activities and achievements:</h5>
                        <ul className="text-sm text-charcoal dark:text-gray-300 space-y-1">
                          {item.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <span className="text-navy-light dark:text-blue-400 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Sidebar */}
          <div>
            <h3 className="text-2xl font-bold text-navy dark:text-navy-light mb-8">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-navy dark:bg-gray-800 text-white p-6 rounded-xl border dark:border-gray-700">
                  <div className="flex items-start mb-4">
                    <Award className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">{cert.name}</h4>
                      <p className="text-gray-300 text-sm mb-2">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-navy-light dark:bg-blue-600 text-white px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional Skills */}
            <div className="mt-8 bg-light-gray dark:bg-gray-800 p-6 rounded-xl border dark:border-gray-700">
              <h4 className="font-bold text-navy dark:text-navy-light mb-4">Technical Skills & Expertise</h4>
              
              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold text-navy dark:text-navy-light mb-2">Programming & Development</h5>
                  <div className="text-sm text-charcoal dark:text-gray-300">
                    <div>• <strong>Python, JavaScript/TypeScript, React.js, SQL</strong></div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-navy dark:text-navy-light mb-2">Cybersecurity & Networking</h5>
                  <div className="text-sm text-charcoal dark:text-gray-300">
                    <div>• <strong>Penetration Testing, Network Security, Digital Forensics</strong></div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-navy dark:text-navy-light mb-2">System Administration</h5>
                  <div className="text-sm text-charcoal dark:text-gray-300">
                    <div>• <strong>Linux/Windows Server, Virtualization, Cloud Platforms</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}