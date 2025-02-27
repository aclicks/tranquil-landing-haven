
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
          <Link to="/" className="text-background font-nicholas text-2xl">Dr. Matheus Casquer</Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/#about" className="text-background hover:text-background/80 transition-colors">Sobre</Link>
            <Link to="/sobre" className="text-background hover:text-background/80 transition-colors">Formação e Trajetória</Link>
            <Link to="/psiquiatria" className="text-background hover:text-background/80 transition-colors">Psiquiatria</Link>
            <a href="#" onClick={handleContactClick} className="text-background hover:text-background/80 transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-nicholas text-primary mb-8 opacity-0 animate-fade-up">
              Formação e Trajetória
            </h2>
            <div className="prose prose-lg text-accent-dark max-w-none opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <p>
                Sou natural de São José do Rio Preto, interior do estado de São Paulo. Aos 18 anos, 
                fui aprovado no vestibular de Medicina da Universidade Federal de Mato Grosso do Sul (UFMS), 
                em Campo Grande – MS, ingressando no curso em 2013.
              </p>
              <p>
                Logo nos primeiros anos da graduação, a Psiquiatria despertou meu interesse e me pareceu um 
                caminho natural para minha carreira. Participei de diversas atividades, coordenei a Liga 
                Acadêmica de Psiquiatria da universidade, organizei simpósios e direcionei minha formação 
                para essa área.
              </p>
              <p>
                Após concluir a graduação, iniciei minha atuação na rede pública de saúde mental (SUS). 
                Trabalhei inicialmente como clínico assistente no CAPS III Adulto, no CAPS Infantojuvenil 
                e no CAPS Álcool e Drogas. No mesmo ano, fui aprovado para a Residência Médica em Psiquiatria 
                da Secretaria Municipal de Saúde (SESAU) de Campo Grande – MS.
              </p>
              <p>
                Minha residência médica foi um período marcante, não apenas pelas boas recordações, mas também 
                pela formação sólida que recebi. Além de um amplo treinamento tradicional em ambulatório e enfermaria, 
                abrangendo transtornos do humor e de ansiedade, psicoses, dependências químicas, demências e 
                transtornos de personalidade, tive a oportunidade de aprofundar meus conhecimentos em áreas específicas, 
                como transtornos alimentares (com destaque para compulsão alimentar), psiquiatria infantil e transtornos 
                do neurodesenvolvimento (TDAH, autismo, entre outros). Havia também uma atenção especial à abordagem 
                social e ao tratamento humanizado dos pacientes, princípios que se tornaram indissociáveis da minha 
                prática médica e me inspiraram a ingressar no Mestrado Profissional em Saúde da Família da 
                Universidade Federal de Mato Grosso do Sul (UFMS).
              </p>
              <p>
                Após a titulação como médico psiquiatra, atuei em diversas frentes. Fui diretor técnico do CAPS III 
                Vila Almeida, em Campo Grande – MS, onde trabalhei na assistência a pacientes graves e na gestão da 
                equipe médica. Também atuei em psiquiatria infantil no CAPS III Infantil e nos Centros Especiais 
                de Reabilitação em Transtornos do Neurodesenvolvimento, incluindo o Cotolengo Sul-Mato-Grossense 
                e a Associação Juliano Varela.
              </p>
              <p>
                Além disso, minha vocação para o ensino, sempre presente ao longo da minha trajetória, se consolidou 
                quando passei a atuar como preceptor da Residência de Psiquiatria da SESAU-Campo Grande, em 2023, 
                auxiliando na formação de médicos residentes e atuando como assistente na área de Psiquiatria Forense. 
                Desde 2023, também sou preceptor da Residência Médica em Psiquiatria da Universidade Federal de 
                Mato Grosso do Sul (UFMS), inicialmente como voluntário e, a partir de 2025, como preceptor titular 
                e membro do corpo clínico de psiquiatras assistentes do Hospital Universitário Maria Aparecida 
                Pedrossian (HUMAP-UFMS/EBSERH).
              </p>
              <p>
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
