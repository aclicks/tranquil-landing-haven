
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MessageSquare } from "lucide-react";

const Sobre = () => {
  const phoneNumber = "5567991000575";
  const navigate = useNavigate();
  
  const handleWhatsAppClick = (message: string = "") => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { scrollToContact: true } });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full bg-primary z-50 border-b border-background/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/a5033a84-10f4-4925-ae81-feb9f7dc314c.png" 
              alt="Logo" 
              className="h-8 w-auto mr-2"
            />
            <Link to="/" className="text-background font-nicholas text-2xl">Dr. Matheus Casquer</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/#about" className="text-background hover:text-background/80 transition-colors">Sobre</Link>
            <Link to="/sobre" className="text-background hover:text-background/80 transition-colors">Formação e Trajetória</Link>
            <Link to="/psiquiatria" className="text-background hover:text-background/80 transition-colors">Conteúdos</Link>
            <a href="#" onClick={handleContactClick} className="text-background hover:text-background/80 transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-nicholas text-primary mb-8 opacity-0 animate-fade-up">
              Formação e Trajetória
            </h2>
            
            <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
              <div className="md:w-2/3 prose prose-lg text-accent-dark max-w-none opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <p className="text-justify leading-relaxed mb-4">
                  Sou natural de São José do Rio Preto, interior do estado de São Paulo. Aos 18 anos, 
                  fui aprovado no vestibular de Medicina da Universidade Federal de Mato Grosso do Sul (UFMS), 
                  em Campo Grande – MS, ingressando no curso em 2013.
                </p>
                <p className="text-justify leading-relaxed mb-4">
                  Logo nos primeiros anos da graduação, a Psiquiatria despertou meu interesse e pareceu um 
                  caminho natural a ser seguido em minha carreira. Participei de diversas atividades, coordenei a Liga 
                  Acadêmica de Psiquiatria da universidade, organizei simpósios e direcionei minha formação 
                  para essa área.
                </p>
              </div>
              
              <div className="md:w-1/3 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <img 
                  src="/lovable-uploads/b5ee5e2b-e09f-438b-8ceb-5077d9cca25a.png" 
                  alt="Dr. Matheus Casquer sorrindo" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="prose prose-lg text-accent-dark max-w-none opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <p className="text-justify leading-relaxed mb-4">
                Após concluir a graduação, iniciei minha atuação na rede pública de saúde mental (SUS). 
                Trabalhei inicialmente como clínico assistente no CAPS III Adulto, no CAPS Infantojuvenil 
                e no CAPS Álcool e Drogas. No mesmo ano, fui aprovado para a Residência Médica em Psiquiatria 
                da Secretaria Municipal de Saúde (SESAU) de Campo Grande – MS.
              </p>
              <p className="text-justify leading-relaxed mb-4">
                Minha residência médica foi um período marcante, não apenas pelas boas recordações, mas também 
                pela formação sólida que recebi. Além de um amplo treinamento tradicional em ambulatório e enfermaria, 
                abrangendo transtornos do humor e de ansiedade, psicoses, dependências químicas, demências e 
                transtornos de personalidade, tive a oportunidade de aprofundar meus conhecimentos em áreas específicas, 
                como transtornos alimentares (com destaque para compulsão alimentar), psiquiatria infantil e transtornos 
                do neurodesenvolvimento (TDAH, autismo, entre outros).
              </p>
              <p className="text-justify leading-relaxed mb-4">
                Havia também uma atenção especial à abordagem social e ao tratamento humanizado dos pacientes, 
                princípios que se tornaram indissociáveis da minha prática médica e me inspiraram a ingressar 
                no Mestrado Profissional em Saúde da Família da Universidade Federal de Mato Grosso do Sul (UFMS).
              </p>
              <p className="text-justify leading-relaxed mb-4">
                Após a titulação como médico psiquiatra, atuei em diversas frentes. Fui diretor técnico do CAPS III 
                Vila Almeida, em Campo Grande – MS, onde trabalhei na assistência a pacientes graves e na gestão da 
                equipe médica. Também atuei em psiquiatria infantil no CAPS III Infantil e nos Centros Especiais 
                de Reabilitação em Transtornos do Neurodesenvolvimento, incluindo o Cotolengo Sul-Mato-Grossense 
                e a Associação Juliano Varela.
              </p>
              <p className="text-justify leading-relaxed mb-4">
                Além disso, um chamado vocacional para o ensino, sempre presente ao longo da minha trajetória, 
                se consolidou quando passei a atuar como preceptor da Residência de Psiquiatria da SESAU-Campo Grande, em 2023, 
                auxiliando na formação de médicos residentes e atuando como assistente na área de Psiquiatria Forense.
              </p>
              <p className="text-justify leading-relaxed mb-4">
                Desde 2023, também sou preceptor da Residência Médica em Psiquiatria da Universidade Federal de 
                Mato Grosso do Sul (UFMS), inicialmente como voluntário e, a partir de 2025, como preceptor titular 
                e membro do corpo clínico de psiquiatras assistentes do Hospital Universitário Maria Aparecida 
                Pedrossian (HUMAP-UFMS/EBSERH).
              </p>
              <p className="text-justify leading-relaxed mb-4">
                Atualmente, além dessas atividades, atuo em consultório particular, oferecendo atendimento baseado 
                na boa prática médica, aliando rigor técnico e humanismo, sempre à disposição dos pacientes e de 
                seus familiares que buscam auxílio.
              </p>
              <div className="mt-8">
                <button
                  onClick={() => handleWhatsAppClick("Olá, gostaria de agendar uma consulta.")}
                  className="inline-flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-lg hover:bg-accent transition-colors duration-300"
                >
                  <MessageSquare className="w-5 h-5" />
                  Agende sua consulta
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-background py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="opacity-80">&copy; {new Date().getFullYear()} Dr. Matheus Casquer. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Sobre;
