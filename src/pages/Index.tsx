
import React from "react";
import { MapPin, Mail, Phone, Clock, MessageSquare } from "lucide-react";

const Index = () => {
  const phoneNumber = "5567991000575";
  const address = "Av. Afonso Pena, 4496 - Sala 1305\nCampo Grande - MS";
  
  const handleWhatsAppClick = (message: string = "") => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full bg-primary z-50 border-b border-background/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-background font-nicholas text-2xl">Dr. Matheus Casquer</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-background hover:text-background/80 transition-colors">Sobre</a>
            <a href="#services" className="text-background hover:text-background/80 transition-colors">Serviços</a>
            <a href="#contact" className="text-background hover:text-background/80 transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 opacity-0 animate-fade-up">
            <h2 className="text-4xl md:text-6xl font-nicholas text-primary leading-tight">
              Cuidados Psiquiátricos Profissionais para seu Bem-estar Mental
            </h2>
            <p className="text-accent text-lg md:text-xl mt-4">
              Dedicado a fornecer cuidados de saúde mental compassivos e baseados em evidências
            </p>
            <button
              onClick={() => handleWhatsAppClick("Olá, gostaria de agendar uma consulta.")}
              className="inline-block bg-primary text-background px-8 py-3 rounded-lg hover:bg-accent transition-colors duration-300"
            >
              Agende uma Consulta
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-nicholas text-primary mb-8 opacity-0 animate-fade-up">
              Sobre o Dr. Matheus Casquer
            </h3>
            <div className="prose prose-lg text-accent-dark opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <p>
                Com anos de experiência em cuidados psiquiátricos, o Dr. Casquer é especializado em fornecer abordagens
                de tratamento personalizadas para várias condições de saúde mental. Sua prática combina técnicas
                terapêuticas baseadas em evidências com uma compreensão compassiva das necessidades únicas de cada paciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-nicholas text-primary mb-12 text-center opacity-0 animate-fade-up">
            Serviços Oferecidos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow opacity-0 animate-fade-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <h4 className="text-xl font-nicholas text-primary mb-3">{service.title}</h4>
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
            <h3 className="text-3xl md:text-4xl font-nicholas text-primary mb-12 text-center opacity-0 animate-fade-up">
              Entre em Contato
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <ContactInfo 
                  icon={<MapPin />} 
                  title="Localização" 
                  content={address}
                  multiline
                />
                <ContactInfo 
                  icon={<Phone />} 
                  title="Telefone" 
                  content="(67) 99100-0575"
                  onClick={() => handleWhatsAppClick()}
                  className="cursor-pointer hover:text-accent transition-colors"
                />
                <ContactInfo icon={<Mail />} title="E-mail" content="matheusscasquer@gmail.com" />
                <ContactInfo icon={<Clock />} title="Horário" content="Seg-Sex: 9:00 - 17:00" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="h-[300px] w-full opacity-0 animate-fade-up rounded-lg overflow-hidden shadow-lg" style={{ animationDelay: "0.3s" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.8008413887287!2d-54.61912392374866!3d-20.4621245572989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e89c22fc5555%3A0x4b3947915336767b!2sAv.%20Afonso%20Pena%2C%204496%20-%20Jardim%20dos%20Estados%2C%20Campo%20Grande%20-%20MS%2C%2079020-001!5e0!3m2!1sen!2sbr!4v1710526428443!5m2!1sen!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <button 
                  onClick={() => handleWhatsAppClick()}
                  className="w-fit bg-[#25D366] text-white px-8 py-3 rounded-lg hover:bg-[#20BD5B] transition-colors duration-300 flex items-center gap-2 opacity-0 animate-fade-up mx-auto"
                  style={{ animationDelay: "0.4s" }}
                >
                  <MessageSquare className="w-5 h-5" />
                  Enviar mensagem por WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="opacity-80">&copy; {new Date().getFullYear()} Dr. Matheus Casquer. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

const services = [
  {
    title: "Terapia Individual",
    description: "Sessões terapêuticas personalizadas adaptadas às suas necessidades e objetivos específicos.",
  },
  {
    title: "Gestão de Medicação",
    description: "Orientação especializada e monitoramento de medicamentos psiquiátricos para resultados ideais.",
  },
  {
    title: "Tratamento de Ansiedade",
    description: "Abordagens baseadas em evidências para gerenciar e reduzir sintomas de ansiedade.",
  },
  {
    title: "Cuidados com Depressão",
    description: "Planos de tratamento abrangentes para gerenciar a depressão e melhorar a qualidade de vida.",
  },
  {
    title: "Gestão do Estresse",
    description: "Técnicas e estratégias para lidar melhor com as pressões e desafios da vida.",
  },
  {
    title: "Consulta",
    description: "Avaliação profissional e recomendações de tratamento para várias preocupações de saúde mental.",
  },
];

const ContactInfo = ({ 
  icon, 
  title, 
  content,
  onClick,
  className = "",
  multiline = false
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string;
  onClick?: () => void;
  className?: string;
  multiline?: boolean;
}) => (
  <div 
    className={`flex items-start space-x-4 ${className}`}
    onClick={onClick}
  >
    <div className="text-primary">{icon}</div>
    <div>
      <h4 className="font-nicholas text-primary text-2xl">{title}</h4>
      <p className="text-accent-dark whitespace-pre-line">{content}</p>
    </div>
  </div>
);

export default Index;
