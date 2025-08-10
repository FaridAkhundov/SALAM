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
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="space-y-6">
              <p className="text-base lg:text-lg text-charcoal dark:text-gray-300 leading-relaxed">
                I'm an experienced IT Specialist with deep expertise in cybersecurity, system administration, 
                and infrastructure management. With multiple professional certifications including IBM Cybersecurity, 
                Cisco Ethical Hacker, and Google Cybersecurity Professional Certificate, I design and implement 
                secure, scalable IT solutions for complex enterprise environments.
              </p>
              <p className="text-base lg:text-lg text-charcoal dark:text-gray-300 leading-relaxed">
                As a cybersecurity professional and system administrator, I have extensive experience in 
                vulnerability assessments, network security, system hardening, and incident response. 
                My expertise spans across secure infrastructure design, risk management, and implementing 
                industry-standard security protocols to protect critical digital assets.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 lg:gap-6 mt-8">
                <div className="text-center p-4 lg:p-6 bg-light-gray dark:bg-gray-800 rounded-xl">
                  <div className="text-2xl lg:text-3xl font-bold text-navy dark:text-navy-light mb-2">2+</div>
                  <div className="text-sm lg:text-base text-charcoal dark:text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-4 lg:p-6 bg-light-gray dark:bg-gray-800 rounded-xl">
                  <div className="text-2xl lg:text-3xl font-bold text-navy dark:text-navy-light mb-2">10+</div>
                  <div className="text-sm lg:text-base text-charcoal dark:text-gray-300">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=900"
              alt="Professional Server Infrastructure - Data Center Operations"
              className="rounded-2xl shadow-lg object-cover w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto max-h-[400px] lg:max-h-[500px] xl:max-h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
