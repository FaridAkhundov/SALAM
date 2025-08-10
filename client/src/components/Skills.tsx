import { CheckCircle, Code, Layout, Smartphone, Monitor, Server, Database, GitBranch, Cloud } from "lucide-react";

export default function Skills() {
  const technicalSkills = [
    { name: "Python", icon: Code },
    { name: "IT Essentials", icon: Monitor },
    { name: "Linux", icon: Smartphone },
    { name: "Networking", icon: Layout },
  ];

  const cybersecuritySkills = [
    { name: "Cybersecurity", icon: Server },
    { name: "System Admin", icon: Database },
    { name: "DevOps", icon: GitBranch },
    { name: "Website Development", icon: Cloud },
  ];

  const strengths = [
    "Secure infrastructure design",
    "Security-focused development",
    "Industry best practices",
    "Continuous learning mindset",
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy dark:text-navy-light mb-4">Skills & Expertise</h2>
          <p className="text-xl text-charcoal dark:text-gray-300">Technologies and tools I work with</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Coding workspace with multiple monitors showing code"
              className="rounded-2xl shadow-lg w-full mb-6"
            />
            
            <div className="bg-light-gray dark:bg-gray-800 p-6 rounded-xl border dark:border-gray-700">
              <h3 className="text-xl font-bold text-navy dark:text-navy-light mb-4">What I Bring</h3>
              <ul className="space-y-3 text-charcoal dark:text-gray-300">
                {strengths.map((strength, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-navy-light dark:text-blue-400 mr-3 flex-shrink-0" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-bold text-navy dark:text-navy-light mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {technicalSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="bg-light-gray dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-navy dark:hover:bg-blue-600 hover:text-white transition-all duration-300 group border dark:border-gray-700"
                    >
                      <IconComponent className="w-8 h-8 mx-auto mb-2 text-charcoal dark:text-gray-300 group-hover:text-white" />
                      <div className="font-medium text-charcoal dark:text-gray-300 group-hover:text-white">{skill.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navy dark:text-navy-light mb-6">Cybersecurity & Infrastructure</h3>
              <div className="grid grid-cols-2 gap-4">
                {cybersecuritySkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="bg-light-gray dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-navy dark:hover:bg-blue-600 hover:text-white transition-all duration-300 group border dark:border-gray-700"
                    >
                      <IconComponent className="w-8 h-8 mx-auto mb-2 text-charcoal dark:text-gray-300 group-hover:text-white" />
                      <div className="font-medium text-charcoal dark:text-gray-300 group-hover:text-white">{skill.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
