import { GraduationCap, Award, Calendar } from "lucide-react";

export default function Education() {
  const education = [
    {
      period: "Sep 2022 - Sep 2026",
      degree: "Bachelor's degree, Information Technology",
      institution: "Azərbaycan Universiteti",
      grade: "Grade 3 - Current GPA: 3.8/4.0",
      description: "Pursuing comprehensive Bachelor's degree in Information Technology with advanced specialization in Information Security and Cybersecurity. Core curriculum covers network security protocols, digital forensics, system administration, and emerging cyber threat analysis. Active participation in cybersecurity research projects and practical lab environments.",
      coursework: [
        "Network Security & Cryptography",
        "Digital Forensics & Incident Response", 
        "Enterprise Security Architecture",
        "Cloud Computing & Virtualization",
        "System Administration & Infrastructure",
        "Ethical Hacking & Penetration Testing",
        "Database Security & Management",
        "Risk Assessment & Compliance"
      ],
      achievements: [
        "Cisco IT Essentials certificate holder with distinction",
        "2nd place winner at Aplogit 2018 national programming competition",
        "Advanced Cyber Defence category finalist at 'Səbirkin Alimləri' science competition", 
        "Dean's List recognition for academic excellence (2023-2024)",
        "TryHackMe platform - RNB (Respectable) Hacker rank with 85+ room completions",
        "Led cybersecurity awareness workshop for university students",
        "Contributing member of university's IT security policy review committee"
      ]
    },
    {
      period: "Oct 2018 - May 2021",
      degree: "Higher National Diploma, Information Technology",
      institution: "STEP IT Academy Azerbaijan",
      grade: "Completed 3.5 years - Cisco IT Essentials Certified",
      description: "Comprehensive practical IT education program covering system administration, networking fundamentals, and cybersecurity foundations. Extensive hands-on experience with enterprise technologies including Windows Server environments, Linux administration, network configuration, and security implementations. Completed practicum in IT support and infrastructure management.",
      coursework: [
        "Hardware & Software Troubleshooting",
        "Windows Server Administration",
        "Linux System Administration",
        "Network Infrastructure & Configuration", 
        "IT Security Fundamentals",
        "Database Administration (MySQL, PostgreSQL)",
        "Web Development & Hosting Solutions",
        "Virtualization Technologies"
      ],
      achievements: [
        "Cisco IT Essentials certification with 95% completion score",
        "Regional IT skills competition - Top 10 finalist position",
        "Led peer technical study groups and troubleshooting sessions",
        "Assisted instructors during practical lab sessions",
        "Completed advanced networking project simulating enterprise environment",
        "Mentored 15+ newcomers in lab environments and technical tools",
        "Active participant in extracurricular cybersecurity research"
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
                  <div className="space-y-1 text-sm text-charcoal dark:text-gray-300">
                    <div>• <strong>Python</strong> - Advanced scripting, automation, and security tools</div>
                    <div>• <strong>JavaScript/TypeScript</strong> - Full-stack web development</div>
                    <div>• <strong>SQL & NoSQL</strong> - Database design and security</div>
                    <div>• <strong>Bash/PowerShell</strong> - System automation and administration</div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-navy dark:text-navy-light mb-2">Cybersecurity & Networking</h5>
                  <div className="space-y-1 text-sm text-charcoal dark:text-gray-300">
                    <div>• <strong>Penetration Testing</strong> - Vulnerability assessment and ethical hacking</div>
                    <div>• <strong>Network Security</strong> - Firewall configuration and intrusion detection</div>
                    <div>• <strong>Digital Forensics</strong> - Incident response and evidence analysis</div>
                    <div>• <strong>Risk Assessment</strong> - Security auditing and compliance frameworks</div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-navy dark:text-navy-light mb-2">System Administration</h5>
                  <div className="space-y-1 text-sm text-charcoal dark:text-gray-300">
                    <div>• <strong>Linux/Windows Server</strong> - Enterprise system administration</div>
                    <div>• <strong>Virtualization</strong> - VMware, VirtualBox, Docker containerization</div>
                    <div>• <strong>Cloud Platforms</strong> - AWS, Azure infrastructure management</div>
                    <div>• <strong>Monitoring & Logging</strong> - System performance and security monitoring</div>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-navy dark:text-navy-light mb-2">Academic & Research Interests</h5>
                  <div className="space-y-1 text-sm text-charcoal dark:text-gray-300">
                    <div>• <strong>Secure Infrastructure Design</strong> - Academic and research environments</div>
                    <div>• <strong>Threat Intelligence</strong> - Emerging cybersecurity threats analysis</div>
                    <div>• <strong>Compliance Frameworks</strong> - ISO 27001, NIST cybersecurity guidelines</div>
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