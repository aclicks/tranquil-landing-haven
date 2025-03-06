import React, { useState, useEffect, useRef } from "react";
import { MapPin, Mail, Phone, MessageSquare, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// Array de artigos de conteúdos
const allArticles = [
  {
    id: 1,
    title: "Depressão: Muito além de Fraqueza ou Escolha",
    excerpt: "Por que alguém que tem uma vida aparentemente boa sente um vazio tão grande que nada parece ter sentido? Será falta de fé? Falta de força de vontade? Apenas tristeza passageira?",
    imageUrl: "/lovable-uploads/5214b07d-2dde-4da8-80c0-0ca51479223a.png",
  },
  {
    id: 2,
    title: "Ansiedade: Quando a razão conflita com o descontrole",
    excerpt: "Algumas pessoas sentem uma angústia constante, mesmo sem motivo aparente. O coração dispara, a respiração fica curta e a mente parece presa em um turbilhão de preocupações que nunca cessam.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    title: "TDAH: Desatenção, Impulsividade ou Algo Além?",
    excerpt: "A luta para manter o foco, mesmo quando se quer prestar atenção. Por que alguns parecem estar sempre um passo atrás, esquecendo prazos, perdendo objetos e interrompendo conversas sem perceber?",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Autismo: Singularidade, Não Deficiência",
    excerpt: "Algumas crianças evitam o contato visual. Outras parecem alheias ao que acontece ao redor. Há aquelas que reagem intensamente a sons, toques ou pequenas mudanças na rotina.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Transtorno de Personalidade Borderline: Entre a Intensidade e a Ruptura",
    excerpt: "A dor de quem vive com Transtorno de Personalidade Borderline (TPB) não se explica com palavras simples. É um estado constante de transbordamento, onde emoções parecem não ter limites.",
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
            <Link to="/psiquiatria" className="text-background hover:text-background/80 transition-colors">Conteúdos</Link>
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

      {/* Conteúdos Section */}
      <section id="conteudos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-3xl md:text-4xl font-nicholas text-primary opacity-0 animate-fade-up">
                Conteúdos
              </h3>
              <Link 
                to="/psiquiatria" 
                className="flex items-center text-primary hover:text-accent transition-colors font-semibold opacity-0 animate-fade-up"
              >
                Ver todos os conteúdos
                <ChevronRight className="ml-1 w-5 h-5" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {articles.slice(0, 3).map((article, index) => (
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
                <ContactInfo icon={<Mail />} title="E-mail" content="drmatheuscasquer@gmail.com" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="h-[300px] w-full opacity-0 animate-fade-up rounded-lg overflow-hidden shadow-lg" style={{ animationDelay: "0.3s" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1824.2052094336664!2d-54.62201643123016!3d-20.462234481864585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e89c9a273ad5%3A0x9ae4b9b09d02d2e1!2sAv.%20Afonso%20Pena%2C%204496%20-%20Jardim%20dos%20Estados%2C%20Campo%20Grande%20-%20MS%2C%2079020-001!5e0!3m2!1spt-BR!2sbr!4v1710547532075!5m2!1spt-BR!2sbr"
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
