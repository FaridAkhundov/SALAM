export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy dark:text-navy-light mb-4">About Me</h2>
          <p className="text-xl text-charcoal dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating innovative solutions and building meaningful digital experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <p className="text-lg text-charcoal dark:text-gray-300 leading-relaxed">
                I'm an experienced IT Specialist with deep expertise in cybersecurity, system administration, 
                and infrastructure management. With multiple professional certifications including IBM Cybersecurity, 
                Cisco Ethical Hacker, and Google Cybersecurity Professional Certificate, I design and implement 
                secure, scalable IT solutions for complex enterprise environments.
              </p>
              <p className="text-lg text-charcoal dark:text-gray-300 leading-relaxed">
                As a cybersecurity professional and system administrator, I have extensive experience in 
                vulnerability assessments, network security, system hardening, and incident response. 
                My expertise spans across secure infrastructure design, risk management, and implementing 
                industry-standard security protocols to protect critical digital assets.
              </p>
              
              {/* Server Infrastructure Expertise */}
              <div className="bg-gradient-to-r from-navy/10 to-blue-600/10 dark:from-navy-light/20 dark:to-blue-500/20 p-6 rounded-xl mb-6">
                <h3 className="text-lg font-bold text-navy dark:text-navy-light mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                  Server Room Operations
                </h3>
                <p className="text-charcoal dark:text-gray-300 text-sm leading-relaxed">
                  Hands-on experience managing enterprise server infrastructure, including rack configuration, 
                  cooling systems optimization, power management, and 24/7 monitoring protocols. Specialized in 
                  maintaining high-availability data center environments with 99.9% uptime requirements.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-light-gray dark:bg-gray-800 rounded-xl">
                  <div className="text-3xl font-bold text-navy dark:text-navy-light mb-2">2+</div>
                  <div className="text-charcoal dark:text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-light-gray dark:bg-gray-800 rounded-xl">
                  <div className="text-3xl font-bold text-navy dark:text-navy-light mb-2">10+</div>
                  <div className="text-charcoal dark:text-gray-300">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img
              src="/attached_assets/image_1754863533821.png"
              alt="Professional Server Racks - Network Infrastructure and Cable Management"
              className="rounded-2xl shadow-lg object-cover w-full max-w-sm md:max-w-md lg:max-w-lg h-auto max-h-[500px] md:max-h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
