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
                I'm an IT Support Enthusiast currently exploring DevOps and System Administration. 
                With certifications in IT Essentials and ongoing cybersecurity training, I specialize 
                in designing secure server infrastructures and implementing industry-standard security protocols.
              </p>
              <p className="text-lg text-charcoal dark:text-gray-300 leading-relaxed">
                As a co-founder of multiple cybersecurity initiatives, I have hands-on experience in 
                vulnerability assessments, system hardening, and collaborative project management. 
                I'm a fast learner who actively pursues cybersecurity skills through platforms like 
                TryHackMe, constantly staying updated with the latest security practices and technologies.
              </p>
              
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
          
          <div>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern office workspace with laptop and plants"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
