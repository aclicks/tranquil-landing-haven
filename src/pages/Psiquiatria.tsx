import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Replace these paragraph components with justified text and spacing
const ParagraphBlock = ({ children }: { children: React.ReactNode }) => (
  <p className="text-justify mb-4">
    {children}
  </p>
);

const articles = [
  {
    id: 1,
    title: "Depressão: Muito além de Fraqueza ou Escolha",
    image: "/lovable-uploads/5214b07d-2dde-4da8-80c0-0ca51479223a.png",
    content: (
      <>
        <ParagraphBlock>
          Por que alguém que tem uma vida aparentemente boa sente um vazio tão grande que nada parece ter sentido? Será falta de fé? Falta de força de vontade? Apenas tristeza passageira?
        </ParagraphBlock>
        <ParagraphBlock>
          A depressão é muito mais do que uma tristeza profunda. É um transtorno mental complexo que afeta a forma como a pessoa se sente, pensa e se comporta. Mas o preconceito ainda existe e muitas vezes impede que as pessoas busquem ajuda. 
        </ParagraphBlock>
        <ParagraphBlock>
          O cansaço persistente, a falta de energia para realizar até as atividades mais simples, a dificuldade de concentração, o vazio emocional, entre tantos outros sintomas, atrapalham a vida de quem convive com esse transtorno, prejudicando significativamente sua qualidade de vida.
        </ParagraphBlock>
        <ParagraphBlock>
          Muitos acreditam que superar a depressão é apenas uma questão de "pensar positivo" ou "seguir em frente". Mas isso é um mito que contribui para o sofrimento silencioso de muitas pessoas.
        </ParagraphBlock>
        <ParagraphBlock>
          A boa notícia é que a depressão tem tratamento. A combinação de medicamentos, psicoterapia e mudanças no estilo de vida pode transformar completamente a vida de quem convive com esse transtorno. O primeiro passo é buscar ajuda profissional.
        </ParagraphBlock>
      </>
    ),
  },
  {
    id: 2,
    title: "Ansiedade: Quando a razão conflita com o descontrole",
    image: "/placeholder.svg",
    content: (
      <>
        <ParagraphBlock>
          Algumas pessoas sentem uma angústia constante, mesmo sem motivo aparente. O coração dispara, a respiração fica curta e a mente parece presa em um turbilhão de preocupações que nunca cessam.
        </ParagraphBlock>
        <ParagraphBlock>
          A ansiedade é uma reação natural do nosso corpo diante de situações de perigo ou estresse, porém, quando essa sensação se torna frequente e desproporcional, podemos estar diante de um transtorno de ansiedade.
        </ParagraphBlock>
        <ParagraphBlock>
          São diversas as manifestações da ansiedade: ataques de pânico, fobias específicas, ansiedade social, ansiedade generalizada, entre outras. Cada uma com suas particularidades, mas todas igualmente impactantes na vida de quem as experimenta.
        </ParagraphBlock>
        <ParagraphBlock>
          O tratamento para os transtornos de ansiedade envolve uma abordagem multidisciplinar, incluindo medicamentos, psicoterapia, técnicas de relaxamento e mudanças no estilo de vida. O importante é não ignorar os sintomas e buscar ajuda profissional.
        </ParagraphBlock>
      </>
    ),
  },
  {
    id: 3,
    title: "TDAH: Desatenção, Impulsividade ou Algo Além?",
    image: "/placeholder.svg",
    content: (
      <>
        <ParagraphBlock>
          A luta para manter o foco, mesmo quando se quer prestar atenção. Por que alguns parecem estar sempre um passo atrás, esquecendo prazos, perdendo objetos e interrompendo conversas sem perceber?
        </ParagraphBlock>
        <ParagraphBlock>
          O Transtorno do Déficit de Atenção com Hiperatividade (TDAH) é um transtorno neurobiológico que afeta a atenção, o controle dos impulsos e o nível de atividade. É mais comum em crianças, mas pode persistir na vida adulta.
        </ParagraphBlock>
         <ParagraphBlock>
          Os sintomas do TDAH podem variar de pessoa para pessoa, mas geralmente incluem dificuldade de concentração, impulsividade, hiperatividade, desorganização e dificuldade em seguir instruções.
        </ParagraphBlock>
        <ParagraphBlock>
          O diagnóstico do TDAH é feito por um profissional de saúde mental, como um psiquiatra ou psicólogo, através de uma avaliação clínica e, em alguns casos, com o auxílio de testes neuropsicológicos.
        </ParagraphBlock>
        <ParagraphBlock>
          O tratamento para o TDAH pode incluir medicamentos, psicoterapia, orientação aos pais e professores, e mudanças no estilo de vida. O importante é buscar ajuda profissional para um diagnóstico e tratamento adequados.
        </ParagraphBlock>
      </>
    ),
  },
  {
    id: 4,
    title: "Autismo: Singularidade, Não Deficiência",
    image: "/placeholder.svg",
    content: (
      <>
        <ParagraphBlock>
          Algumas crianças evitam o contato visual. Outras parecem alheias ao que acontece ao redor. Há aquelas que reagem intensamente a sons, toques ou pequenas mudanças na rotina.
        </ParagraphBlock>
        <ParagraphBlock>
          O Transtorno do Espectro Autista (TEA) é um transtorno do neurodesenvolvimento que afeta a comunicação, a interação social e o comportamento. É chamado de "espectro" porque se manifesta de formas diferentes em cada pessoa.
        </ParagraphBlock>
        <ParagraphBlock>
          As pessoas com autismo podem ter dificuldades em se comunicar, interagir socialmente, compreender as emoções dos outros e apresentar comportamentos repetitivos ou interesses restritos.
        </ParagraphBlock>
        <ParagraphBlock>
          O diagnóstico do autismo é feito por um profissional de saúde mental, como um neuropediatra, psiquiatra ou psicólogo, através de uma avaliação clínica e observação do comportamento.
        </ParagraphBlock>
        <ParagraphBlock>
          O tratamento para o autismo é multidisciplinar e pode incluir terapia ocupacional, fonoaudiologia, psicoterapia, acompanhamento pedagógico e, em alguns casos, medicamentos. O importante é oferecer suporte e oportunidades para que a pessoa com autismo possa desenvolver suas habilidades e alcançar seu pleno potencial.
        </ParagraphBlock>
      </>
    ),
  },
  {
    id: 5,
    title: "Transtorno de Personalidade Borderline: Entre a Intensidade e a Ruptura",
    image: "/placeholder.svg",
    content: (
      <>
        <ParagraphBlock>
          A dor de quem vive com Transtorno de Personalidade Borderline (TPB) não se explica com palavras simples. É um estado constante de transbordamento, onde emoções parecem não ter limites.
        </ParagraphBlock>
        <ParagraphBlock>
          O Transtorno de Personalidade Borderline (TPB) é um transtorno mental caracterizado por instabilidade emocional, impulsividade, dificuldade nos relacionamentos e medo do abandono.
        </ParagraphBlock>
        <ParagraphBlock>
          As pessoas com TPB podem ter mudanças de humor repentinas e intensas, passar por crises de raiva, ter comportamentos impulsivos como gastos excessivos, uso de substâncias, compulsão alimentar e tentativas de suicídio.
        </ParagraphBlock>
        <ParagraphBlock>
          O diagnóstico do TPB é feito por um profissional de saúde mental, como um psiquiatra ou psicólogo, através de uma avaliação clínica e entrevista.
        </ParagraphBlock>
        <ParagraphBlock>
          O tratamento para o TPB geralmente envolve psicoterapia, como a Terapia Comportamental Dialética (DBT), que ajuda a pessoa a desenvolver habilidades para lidar com as emoções, melhorar os relacionamentos e reduzir os comportamentos impulsivos. Em alguns casos, o uso de medicamentos pode ser indicado para controlar os sintomas.
        </ParagraphBlock>
      </>
    ),
  }
];

const Psiquiatria = () => {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="bg-background min-h-screen">
      <nav className="fixed w-full bg-primary z-50 border-b border-background/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/681564cc-330e-4186-adb8-806a5af1785c.png"
                alt="Logo"
                className="h-8 w-auto mr-2"
              />
              <h1 className="text-background font-nicholas text-2xl">Dr. Matheus Casquer</h1>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-background hover:text-background/80 transition-colors">Sobre</Link>
            <Link to="/sobre" className="text-background hover:text-background/80 transition-colors">Formação e Trajetória</Link>
            <a href="/psiquiatria" className="text-background hover:text-background/80 transition-colors">Conteúdos</a>
            <Link to="/#contact" className="text-background hover:text-background/80 transition-colors">Contato</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-nicholas text-primary text-center leading-tight mb-8 opacity-0 animate-fade-up">
            Conteúdos
          </h2>
          <p className="text-accent-dark text-center text-lg opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Artigos e informações sobre saúde mental e bem-estar.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden opacity-0 animate-fade-up" id={`article-${article.id}`}>
                <div className="p-6">
                  <h3 className="font-nicholas text-primary text-2xl mb-4">{article.title}</h3>
                  <div>{article.content}</div>
                  <div className="mt-4">
                    <Link to="/" className="text-primary hover:text-accent font-semibold inline-flex items-center">
                      Voltar para a página inicial
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="opacity-80">&copy; {new Date().getFullYear()} Dr. Matheus Casquer. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Psiquiatria;
