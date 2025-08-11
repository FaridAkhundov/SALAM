import { GraduationCap, Award, Calendar } from "lucide-react";

export default function Education() {
  const education = [
    {
      period: "Sep 2022 - Sep 2026",
      degree: "Bachelor's degree, Information Technology",
      institution: "Azərbaycan Universiteti",
      grade: "Grade 3 - Current GPA: 3.8/4.0",
      description: "Pursuing comprehensive Bachelor's degree in Information Technology with specialized focus on Information Security and Cybersecurity. Advanced coursework covers network security protocols, digital forensics methodologies, system administration, and emerging cyber threat landscapes. Currently engaged in senior capstone projects involving enterprise security architecture design and incident response protocol development.",
      coursework: [
        "Network Security & Cryptography",
        "Digital Forensics & Incident Response", 
        "Enterprise Security Architecture",
        "Cloud Computing & Virtualization",
        "System Administration & Infrastructure",
        "Advanced Database Management Systems"
      ],
      achievements: [
        "Cisco IT Essentials certificate holder with distinction",
        "2nd place winner at Aplogit 2018 national programming competition",
        "Advanced Cyber Defence finalist at national 'Səbirkin Alimləri' science competition",
        "Dean's List recognition for academic excellence (2023-2024)",
        "TryHackMe platform - RNB Hacker rank with 85+ room completions",
        "Led university cybersecurity awareness workshop for incoming students"
      ]
    },
    {
      period: "Oct 2018 - May 2021",
      degree: "Higher National Diploma, Information Technology",
      institution: "STEP IT Academy Azerbaijan",
      grade: "Completed 3.5 years - Cisco IT Essentials Certified",
      description: "Intensive practical IT education program covering comprehensive system administration, networking fundamentals, and cybersecurity foundations. Gained extensive hands-on experience with enterprise-level technologies including Windows Server environments, Linux administration, network infrastructure configuration, and security implementations. Completed rigorous practicum in IT support and infrastructure management with real-world project applications.",
      coursework: [
        "Hardware & Software Troubleshooting",
        "Windows Server Administration",
        "Linux System Administration",
        "Network Infrastructure & Configuration", 
        "IT Security Fundamentals",
        "Database Administration (MySQL, PostgreSQL)"
      ],
      achievements: [
        "Cisco IT Essentials certification with 95% completion score",
        "Regional IT skills competition - Top 10 finalist achievement",
        "Led peer technical study groups and troubleshooting workshops",
        "Assisted academy instructors during advanced lab sessions",
        "Completed enterprise networking simulation project",
        "Mentored 15+ newcomers in lab environments and technical tools"
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
    <section id="education" className="py-12 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-navy dark:text-navy-light mb-4">
            <span className="block sm:hidden">Education</span>
            <span className="hidden sm:block">Educational Background</span>
          </h2>
          <p className="text-base lg:text-xl text-charcoal dark:text-gray-300">Academic background and professional certifications</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-navy dark:text-navy-light mb-8">Educational Background</h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="bg-light-gray dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border dark:border-gray-700">
                  <div className="flex items-start">
                    <div className="bg-navy-light dark:bg-blue-600 text-white p-2 lg:p-3 rounded-lg mr-3 lg:mr-4 flex-shrink-0">
                      <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 text-navy-light dark:text-blue-400 mr-2" />
                        <span className="text-xs lg:text-sm text-navy-light dark:text-blue-400 font-medium">{item.period}</span>
                      </div>
                      <h4 className="text-lg lg:text-xl font-bold text-navy dark:text-navy-light mb-1">{item.degree}</h4>
                      <p className="text-base lg:text-lg text-charcoal dark:text-gray-300 mb-2">{item.institution}</p>
                      <p className="text-xs lg:text-sm text-navy-light dark:text-blue-400 mb-2 lg:mb-3">{item.grade}</p>
                      <p className="text-sm lg:text-base text-charcoal dark:text-gray-300 mb-3 lg:mb-4 leading-relaxed hidden lg:block">{item.description}</p>
                      
                      {/* Coursework Section - Hidden on mobile, only on desktop */}
                      <div className="mb-4 hidden lg:block">
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
                      
                      <div className="space-y-2 hidden lg:block">
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
                      
                      {/* Mobile minimalist view - key highlights */}
                      <div className="lg:hidden">
                        <div className="text-xs text-charcoal dark:text-gray-300 space-y-1">
                          <div className="flex items-start">
                            <span className="text-navy-light dark:text-blue-400 mr-2">•</span>
                            <span>Cybersecurity specialization with hands-on experience</span>
                          </div>
                          <div className="flex items-start">
                            <span className="text-navy-light dark:text-blue-400 mr-2">•</span>
                            <span>Network security and system administration focus</span>
                          </div>
                          <div className="flex items-start">
                            <span className="text-navy-light dark:text-blue-400 mr-2">•</span>
                            <span>Active in IT competitions and practical projects</span>
                          </div>
                          <div className="flex items-start">
                            <span className="text-navy-light dark:text-blue-400 mr-2">•</span>
                            <span>TryHackMe platform expertise and peer mentoring</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Sidebar */}
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-navy dark:text-navy-light mb-6 lg:mb-8">Certifications</h3>
            <div className="space-y-4 lg:space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-navy dark:bg-gray-800 text-white p-4 lg:p-6 rounded-xl border dark:border-gray-700">
                  <div className="flex items-start mb-3 lg:mb-4">
                    <Award className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400 mr-2 lg:mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-base lg:text-lg mb-1">{cert.name}</h4>
                      <p className="text-gray-300 text-xs lg:text-sm mb-2">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                  {/* Skills only on desktop */}
                  <div className="hidden lg:flex flex-wrap gap-2">
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
            
            {/* Additional Skills - hidden on mobile */}
            <div className="mt-6 lg:mt-8 bg-light-gray dark:bg-gray-800 p-4 lg:p-6 rounded-xl border dark:border-gray-700 hidden lg:block">
              <h4 className="font-bold text-navy dark:text-navy-light mb-4">Technical Skills & Expertise</h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-navy dark:text-navy-light mb-2">Programming & Development</h5>
                  <div className="space-y-1 text-sm text-charcoal dark:text-gray-300">
                    <div>• <strong>Python</strong> - Advanced scripting and automation</div>
                    <div>• <strong>JavaScript/TypeScript</strong> - Web application development</div>
                    <div>• <strong>React.js</strong> - Modern frontend frameworks</div>
                    <div>• <strong>SQL</strong> - Database management and optimization</div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-navy dark:text-navy-light mb-2">Cybersecurity & Networking</h5>
                  <div className="space-y-1 text-sm text-charcoal dark:text-gray-300">
                    <div>• <strong>Penetration Testing</strong> - Vulnerability assessment and exploitation</div>
                    <div>• <strong>Network Security</strong> - Firewall and IDS/IPS configuration</div>
                    <div>• <strong>Digital Forensics</strong> - Incident response and evidence analysis</div>
                    <div>• <strong>Risk Assessment</strong> - Security auditing and compliance</div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-navy dark:text-navy-light mb-2">System Administration</h5>
                  <div className="space-y-1 text-sm text-charcoal dark:text-gray-300">
                    <div>• <strong>Linux/Windows Server</strong> - Enterprise administration</div>
                    <div>• <strong>Virtualization</strong> - VMware, VirtualBox, Docker containers</div>
                    <div>• <strong>Cloud Platforms</strong> - AWS, Azure fundamentals and deployment</div>
                    <div>• <strong>Database Systems</strong> - PostgreSQL, MySQL, MongoDB</div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-navy dark:text-navy-light mb-2">Research & Academic Interests</h5>
                  <div className="space-y-1 text-sm text-charcoal dark:text-gray-300">
                    <div>• <strong>Secure Infrastructure</strong> - Academic and research purposes</div>
                    <div>• <strong>Threat Intelligence</strong> - Emerging cyber threats analysis</div>
                    <div>• <strong>Security Architecture</strong> - Enterprise security design</div>
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