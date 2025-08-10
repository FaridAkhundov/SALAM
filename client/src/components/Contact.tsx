import { useState } from "react";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContact } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please check your input and try again.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Let's Work Together</h2>
          <p className="text-xl text-charcoal">Ready to bring your next project to life? Let's discuss how I can help.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-light-gray p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">Email</p>
                    <p className="text-charcoal">farid.axundov@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-light-gray p-3 rounded-lg mr-4">
                    <Linkedin className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/faridaxundov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy-light hover:underline"
                    >
                      linkedin.com/in/faridaxundov
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-light-gray p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">Location</p>
                    <p className="text-charcoal">Baku, Baku Economic Zone, Azerbaijan • Available for remote work</p>
                  </div>
                </div>
              </div>
            </div>
            
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
              alt="Clean modern workspace with laptop and coffee"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium text-navy mb-2">
                    First Name
                  </Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-navy-light focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium text-navy mb-2">
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-navy-light focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-navy-light focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-navy mb-2">
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-navy-light focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-navy-light focus:border-transparent transition-all duration-300 resize-vertical"
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-navy text-white py-4 px-6 rounded-lg hover:bg-navy-light transition-all duration-300 font-medium disabled:opacity-50"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
