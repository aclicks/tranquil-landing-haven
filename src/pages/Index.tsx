
import React from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full bg-background/90 backdrop-blur-sm z-50 border-b border-primary/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-primary font-display text-2xl">Dr. Matheus Casquer</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-primary hover:text-accent transition-colors">About</a>
            <a href="#services" className="text-primary hover:text-accent transition-colors">Services</a>
            <a href="#contact" className="text-primary hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 opacity-0 animate-fade-up">
            <h2 className="text-4xl md:text-6xl font-display text-primary leading-tight">
              Professional Psychiatric Care for Your Mental Well-being
            </h2>
            <p className="text-accent text-lg md:text-xl mt-4">
              Dedicated to providing compassionate and evidence-based mental health care
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary text-background px-8 py-3 rounded-lg hover:bg-accent transition-colors duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-display text-primary mb-8 opacity-0 animate-fade-up">
              About Dr. Matheus Casquer
            </h3>
            <div className="prose prose-lg text-accent-dark opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <p>
                With years of experience in psychiatric care, Dr. Casquer specializes in providing personalized treatment
                approaches for various mental health conditions. His practice combines evidence-based therapeutic techniques
                with a compassionate understanding of each patient's unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-display text-primary mb-12 text-center opacity-0 animate-fade-up">
            Services Offered
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow opacity-0 animate-fade-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <h4 className="text-xl font-display text-primary mb-3">{service.title}</h4>
                <p className="text-accent-dark">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-display text-primary mb-12 text-center opacity-0 animate-fade-up">
              Get in Touch
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <ContactInfo icon={<MapPin />} title="Location" content="123 Medical Center Ave, Suite 100" />
                <ContactInfo icon={<Phone />} title="Phone" content="+1 (555) 123-4567" />
                <ContactInfo icon={<Mail />} title="Email" content="contact@drcasquer.com" />
                <ContactInfo icon={<Clock />} title="Hours" content="Mon-Fri: 9:00 AM - 5:00 PM" />
              </div>
              <form className="space-y-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                ></textarea>
                <button className="w-full bg-primary text-background px-6 py-3 rounded-lg hover:bg-accent transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="opacity-80">&copy; {new Date().getFullYear()} Dr. Matheus Casquer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const services = [
  {
    title: "Individual Therapy",
    description: "Personalized therapeutic sessions tailored to your specific needs and goals.",
  },
  {
    title: "Medication Management",
    description: "Expert guidance and monitoring of psychiatric medications for optimal results.",
  },
  {
    title: "Anxiety Treatment",
    description: "Evidence-based approaches to manage and reduce anxiety symptoms.",
  },
  {
    title: "Depression Care",
    description: "Comprehensive treatment plans for managing depression and improving quality of life.",
  },
  {
    title: "Stress Management",
    description: "Techniques and strategies to better handle life's pressures and challenges.",
  },
  {
    title: "Consultation",
    description: "Professional evaluation and treatment recommendations for various mental health concerns.",
  },
];

const ContactInfo = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => (
  <div className="flex items-start space-x-4">
    <div className="text-primary">{icon}</div>
    <div>
      <h4 className="font-display text-primary">{title}</h4>
      <p className="text-accent-dark">{content}</p>
    </div>
  </div>
);

export default Index;
