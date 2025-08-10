import { GraduationCap, Award, Calendar } from "lucide-react";

export default function Education() {
  const education = [
    {
      period: "Sep 2022 - Sep 2026",
      degree: "Bachelor's degree, Information Technology",
      institution: "Azərbaycan Universiteti",
      grade: "Grade 3",
      description: "Successfully completed 6 semesters at STEP IT Academy with certification. Specialized in Information Security and actively pursue hands-on learning beyond the classroom.",
      achievements: [
        "Cisco IT Essentials certificate holder",
        "2nd place winner at Aplogit 2018 national competition",
        "Advanced Cyber Defence* category at the national 'Səbirkin Alimləri' science competition",
        "Actively improving cybersecurity skills via TryHackMe (RNB) – Hacker rank!"
      ]
    },
    {
      period: "Oct 2018 - May 2021",
      degree: "Higher National Diploma, Information Technology",
      institution: "STEP IT Academy Azerbaijan",
      grade: "Partially Completed – Certified in Cisco IT Essentials",
      description: "Completed 3.5 years of practical IT education at STEP IT Academy, including extensive training in system administration, networking and cybersecurity. Earned a Cisco IT Essentials certification during the final stage of the program.",
      achievements: [
        "Participated in peer-led technical discussions and informal workshops",
        "Assisted classmates during practice sessions and troubleshooting exercises",
        "Took part in internal project simulations during advanced modules",
        "Helped newcomers adapt to lab environments and tools",
        "Engaged in extracurricular exploration of cybersecurity topics outside of class scope"
      ]
    }
  ];

  const certifications = [
    {
      name: "Cisco IT Essentials",
      issuer: "Cisco",
      date: "2021",
      skills: ["IT Essentials", "System Administration", "Networking", "Cybersecurity"]
    },
    {
      name: "TryHackMe (RNB) - Hacker Rank",
      issuer: "TryHackMe",
      date: "Ongoing",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Ethical Hacking", "Cybersecurity"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Education & Certifications</h2>
          <p className="text-xl text-charcoal">Academic background and professional certifications</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-navy mb-8">Educational Background</h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="bg-light-gray p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="bg-navy-light text-white p-3 rounded-lg mr-4 flex-shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 text-navy-light mr-2" />
                        <span className="text-sm text-navy-light font-medium">{item.period}</span>
                      </div>
                      <h4 className="text-xl font-bold text-navy mb-1">{item.degree}</h4>
                      <p className="text-lg text-charcoal mb-2">{item.institution}</p>
                      <p className="text-sm text-navy-light mb-3">{item.grade}</p>
                      <p className="text-charcoal mb-4 leading-relaxed">{item.description}</p>
                      
                      <div className="space-y-2">
                        <h5 className="font-semibold text-navy">Activities and achievements:</h5>
                        <ul className="text-sm text-charcoal space-y-1">
                          {item.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <span className="text-navy-light mr-2">•</span>
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
            <h3 className="text-2xl font-bold text-navy mb-8">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-navy text-white p-6 rounded-xl">
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
                        className="bg-navy-light text-white px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional Skills */}
            <div className="mt-8 bg-light-gray p-6 rounded-xl">
              <h4 className="font-bold text-navy mb-4">Additional Skills</h4>
              <div className="space-y-2 text-sm text-charcoal">
                <div>• <strong>Python</strong> (Programming Language)</div>
                <div>• <strong>Website Development</strong> and Hosting</div>
                <div>• <strong>+4 skills</strong> in cybersecurity and system administration</div>
                <div>• <strong>Interested</strong> in secure server setup for academic and research purposes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}