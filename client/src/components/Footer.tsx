import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-bold mb-4">FA</div>
          <p className="text-gray-300 mb-8">Building secure digital solutions, one project at a time.</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/faridaxundov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:farid.axundov@example.com"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">&copy; 2024 Farid Axundov. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
