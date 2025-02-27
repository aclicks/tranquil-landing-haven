
import React, { useState, useEffect, useRef } from "react";
import { MapPin, Mail, Phone, MessageSquare, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// Array de artigos de psiquiatria
const allArticles = [
  {
    id: 1,
    title: "Depressão: Muito Além da Tristeza",
    excerpt: "A depressão é uma condição que afeta milhões de pessoas ao redor do mundo. Entenda os sintomas, causas e tratamentos disponíveis.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Ansiedade na Era Digital",
    excerpt: "Como o uso excessivo de tecnologia e redes sociais pode contribuir para transtornos de ansiedade e estratégias para lidar com isso.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    title: "TDAH em Adultos",
    excerpt: "O Transtorno de Déficit de Atenção e Hiperatividade não afeta apenas crianças. Saiba como identificar e tratar o TDAH na vida adulta.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Burnout: Quando o Trabalho Adoece",
    excerpt: "O esgotamento profissional é cada vez mais comum no mundo corporativo. Conheça os sinais, fatores de risco e formas de prevenção.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Sono e Saúde Mental",
    excerpt: "A qualidade do sono tem impacto direto na saúde mental. Descubra como melhorar seus hábitos de sono e beneficiar sua mente.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Transtornos Alimentares",
    excerpt: "Uma análise sobre anorexia, bulimia e compulsão alimentar, seus impactos psicológicos e abordagens terapêuticas.",
    imageUrl: "/placeholder.svg",
  }
];

const Index = () => {
  const phoneNumber = "5567991000575";
  const address = "Edifício Class Tower\nAv. Afonso Pena, 4496 - Sala 1305\nCampo Grande - MS";
  const [articles, setArticles] = useState<typeof allArticles>([]);
  const location = useLocation();
  const contactRef = useRef<HTMLElement>(null);
  
  // Função para embaralhar artigos e selecionar 3 aleatórios
  useEffect(() => {
    const shuffledArticles = [...allArticles].sort(() => 0.5 - Math.random()).slice(0, 3);
    setArticles(shuffledArticles);
  }, []);
  
  // Efeito para rolar para a seção de contato quando vindo de outras páginas
  useEffect(() => {
    if (location.state && location.state.scrollToContact && contactRef.current) {
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
    
    // Verificar hash na URL para scrolls diretos
    if (location.hash === '#contact' && contactRef.current) {
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, [location]);
  
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
            <Link to="/sobre" className="text-background hover:text-background/80 transition-colors">Formação e Trajetória</Link>
            <Link to="/psiquiatria" className="text-background hover:text-background/80 transition-colors">Psiquiatria</Link>
            <a href="#contact" className="text-background hover:text-background/80 transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 opacity-0 animate-fade-up">
            <h2 className="text-4xl md:text-6xl font-nicholas text-primary leading-tight">
              Psiquiatria dedicada à atenção ao ser humano, valorizando saber, escuta e a singularidade.
            </h2>
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
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl md:text-4xl font-nicholas text-primary mb-8 opacity-0 animate-fade-up">
                  Sobre mim
                </h3>
                <div className="prose prose-lg text-accent-dark opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                  <p>
                    Desde a faculdade de medicina, a psiquiatria me chamou a atenção por ser a especialidade médica 
                    que conjuga o lado técnico, investigativo e clínico com a necessidade imperativa de olhar para 
                    o ser humano à sua frente e ouvir sua história. Sempre me foi muito claro que não se cuida 
                    apenas de doenças ou transtornos, mas sim de pessoas.
                  </p>
                  <div className="mt-4">
                    <Link 
                      to="/sobre" 
                      className="text-primary hover:text-accent font-semibold transition-colors inline-flex items-center"
                    >
                      Conheça mais sobre minha trajetória profissional
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <div className="relative max-w-[80%] mx-auto">
                  <div className="absolute inset-0 bg-primary/10 rounded-lg transform rotate-3 scale-95"></div>
                  <img 
                    src="/lovable-uploads/5b15a1b5-d4f3-49dc-8449-3a2bb4ff7f5f.png"
                    alt="Dr. Matheus Casquer"
                    className="w-full h-auto rounded-lg shadow-xl relative z-10 transform transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Psychiatry Section (Articles) */}
      <section id="psychiatry" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-3xl md:text-4xl font-nicholas text-primary opacity-0 animate-fade-up">
                Psiquiatria
              </h3>
              <Link 
                to="/psiquiatria" 
                className="flex items-center text-primary hover:text-accent transition-colors font-semibold opacity-0 animate-fade-up"
              >
                Ver todos os artigos
                <ChevronRight className="ml-1 w-5 h-5" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div 
                  key={article.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow opacity-0 animate-fade-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="font-nicholas text-primary text-xl mb-3">{article.title}</h4>
                    <p className="text-accent-dark mb-4 line-clamp-3">{article.excerpt}</p>
                    <Link 
                      to={`/psiquiatria`} 
                      className="text-primary hover:text-accent font-semibold inline-flex items-center"
                    >
                      Leia mais
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20">
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
              </div>
              <div className="flex flex-col gap-4">
                <div className="h-[300px] w-full opacity-0 animate-fade-up rounded-lg overflow-hidden shadow-lg" style={{ animationDelay: "0.3s" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.8008413887287!2d-54.61912392374866!3d-20.4621245572989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e89c22fc5555%3A0x4b3947915336767b!2sEdif%C3%ADcio%20Class%20Tower%2C%20Av.%20Afonso%20Pena%2C%204496%20-%20Jardim%20dos%20Estados%2C%20Campo%20Grande%20-%20MS%2C%2079020-001!5e0!3m2!1spt-BR!2sbr!4v1710526428443!5m2!1spt-BR!2sbr"
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
