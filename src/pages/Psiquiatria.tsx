
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, MessageSquare } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Array of article content
const articles = [
  {
    id: 1,
    title: "Depressão: Muito além de Fraqueza ou Escolha",
    subtitle: "Por que alguém que tem uma vida aparentemente boa sente um vazio tão grande que nada parece ter sentido?",
    image: "/placeholder.svg",
    content: [
      "Por que alguém que tem uma vida aparentemente boa sente um vazio tão grande que nada parece ter sentido?",
      "Será falta de fé? Falta de força de vontade? Apenas tristeza passageira?",
      "Essas ideias equivocadas apenas reforçam o sofrimento de quem vive com depressão. Não se trata de um simples desânimo, mas de uma condição séria, que afeta profundamente o modo como a pessoa percebe a si mesma e o mundo ao seu redor. Não é questão de querer melhorar – muitas vezes, o deprimido sequer consegue desejar.",
      "Um impacto real no cérebro e no corpo",
      "Do ponto de vista biológico, a depressão provoca mudanças profundas. Desequilíbrios químicos e alterações nos circuitos cerebrais prejudicam a regulação do humor, a motivação e até mesmo a capacidade de sentir prazer.",
      "Aos poucos, a vida torna-se cinza, pesada e, não raro, o próprio ato de viver adquire tons de insuportabilidade.",
      "Além disso, o estresse constante ativa mecanismos de defesa do organismo, liberando substâncias que podem piorar os sintomas e enfraquecer tanto a mente quanto o body. Com o tempo, áreas do cérebro responsáveis pela memória e pelo controle emocional podem sofrer danos, tornando a recuperação ainda mais desafiadora.",
      "As marcas invisíveis",
      "Mas a depressão não se resume à biologia.",
      "Muitas vezes, ela nasce de dores profundas da história de vida, de experiências que deixaram marcas invisíveis, mas que ainda ecoam no presente.",
      "É como se a pessoa perdesse o vínculo com o que antes fazia sentido e, sem perceber, se afastasse do próprio desejo. O futuro parece distante, e o presente, apenas um peso difícil de carregar.",
      "O caminho para recuperar a luz e as cores da vida",
      "Superar a depressão não é apenas questão de pensamento positivo ou esforço pessoal.",
      "O tratamento envolve suporte especializado de um psiquiatra e de um psicólogo que consigam estabelecer vínculo com o paciente, ajudando tanto a reequilibrar os processos do cérebro quanto a reconstruir caminhos para que a pessoa possa, pouco a pouco, recuperar a luz e as cores da vida.",
      "Com a ajuda certa, aquilo que antes parecia distante e inalcançável pode gradualmente se iluminar, tornando-se novamente acessível.",
      "O peso que antes paralisava se dissipa, a energia retorna, e o sujeito reencontra, não apenas ao fim do tratamento médico, mas na própria reconstrução do viver, a alegria de existir. Retoma seus projetos, sonhos e relações com uma nova perspectiva, mais leve e autêntica."
    ]
  },
  {
    id: 2,
    title: "Ansiedade: Quando a razão conflita com o descontrole",
    subtitle: "Algumas pessoas sentem uma angústia constante, mesmo sem motivo aparente.",
    image: "/placeholder.svg",
    content: [
      "Algumas pessoas sentem uma angústia constante, mesmo sem motivo aparente.",
      "O coração dispara, a respiração fica curta e a mente parece presa em um turbilhão de preocupações que nunca cessam.",
      "Por vezes se ganha o rótulo de 'exagero', 'falta de controle emocional' ou até mesmo de 'fraqueza'.",
      "Nada disso. Os transtornos de ansiedade não são simplesmente uma reação ao estresse cotidiano – são manifestações de um sofrimento que ultrapassa o limite do que a pessoa consegue controlar voluntariamente. O medo e a inquietação se tornam tão intensos que dominam os pensamentos, o corpo e a própria forma de existir no mundo.",
      "Ansiedade à flor da pele: o corpo fala",
      "Do ponto de vista biológico, os transtornos de ansiedade envolvem um complexo sistema de alarme cerebral que está constantemente ativado.",
      "A amígdala, estrutura responsável por processar ameaças, torna-se hiper-reativa, enviando sinais de perigo mesmo quando não há motivo real. O córtex pré-frontal, que deveria regular essa resposta, tem dificuldade em exercer seu papel inibidor. Isso faz com que o corpo permaneça em um estado de alerta exagerado, com a liberação constante de cortisol e adrenalina, substâncias que deveriam ser reservadas para situações de risco real.",
      "O resultado?",
      "Coração acelerado, sudorese, tontura, aperto no peito, tremores e uma sensação de catástrofe iminente. No Transtorno de Ansiedade Generalizada (TAG), esses sintomas se manifestam de forma crônica, com preocupações excessivas e incontroláveis sobre o futuro, a saúde, o trabalho e até mesmo pequenas decisões do dia a dia.",
      "Na Síndrome do Pânico, os episódios são súbitos e intensos: o medo toma conta, o ar parece faltar, e a pessoa tem a sensação de que vai perder o controle, desmaiar ou até morrer. Já nas fobias, o terror se concentra em objetos, situações ou lugares específicos – mas a reação é igualmente avassaladora.",
      "O medo se inscreve no sujeito",
      "Mas a ansiedade não é apenas um erro da química cerebral.",
      "Ela também fala de algo mais profundo, algo que o sujeito carrega consigo, muitas vezes sem perceber. Há medos que não nasceram hoje, mas que foram se acumulando ao longo da vida – experiências que marcaram, palavras que deixaram cicatrizes, relações que ensinaram, de forma silenciosa, que o mundo pode ser uma ameaça constante.",
      "O ansioso não teme apenas o que pode acontecer. Ele teme perder o controle, teme o olhar do outro, teme que algo dentro dele falhe de forma irreversível. Muitas vezes, esse medo se torna paralisante, porque não encontra um nome claro – é um mal-estar difuso, uma angústia que se infiltra nos pensamentos e no corpo.",
      "Reencontrando o equilíbrio",
      "Superar os transtornos de ansiedade não é apenas 'aprender a relaxar' ou 'pensar positivo'.",
      "O tratamento envolve um trabalho que equilibra os processos cerebrais e, ao mesmo tempo, permite que o sujeito compreenda e ressignifique sua relação com o medo. A psicoterapia ajuda a identificar os padrões que mantêm a ansiedade ativa, enquanto o suporte psiquiátrico pode atuar na regulação dos circuitos neurais para que o sistema de alarme interno volte ao seu estado natural.",
      "Com acompanhamento adequado, o medo perde sua força paralisante. A mente se torna mais leve, o corpo responde com mais calma, e o futuro deixa de ser uma ameaça para se tornar, novamente, um campo de possibilidades."
    ]
  },
  {
    id: 3,
    title: "TDAH: Desatenção, Impulsividade ou Algo Além?",
    subtitle: "A luta para manter o foco, mesmo quando se quer prestar atenção.",
    image: "/placeholder.svg",
    content: [
      "A luta para manter o foco, mesmo quando se quer prestar atenção.",
      "Por que alguns parecem estar sempre um passo atrás, esquecendo prazos, perdendo objetos e interrompendo conversas sem perceber?",
      "Seria falta de disciplina? Desinteresse? Falta de maturidade?",
      "O Transtorno do Déficit de Atenção e Hiperatividade (TDAH) não pode ser reduzido a meros traços de personalidade. Ele envolve um funcionamento cerebral distinto, que afeta não apenas a capacidade de concentração, mas também a organização, o controle de impulsos e a percepção do tempo. Ainda assim, seu diagnóstico exige cautela. Em um mundo acelerado, onde distração e inquietação são cada vez mais comuns, distinguir o transtorno de padrões normais de comportamento requer um olhar clínico minucioso.",
      "O TDAH e o cérebro: uma engrenagem fora de sintonia",
      "A ideia de que o TDAH se resume à 'falta de atenção' é um equívoco.",
      "O transtorno está hipoteticamente ligado a alterações no funcionamento do córtex pré-frontal, região responsável pelo planejamento, controle inibitório e regulação emocional. Para muitas pessoas, seguir um plano, esperar sua vez ou concluir uma tarefa parece natural. Para quem tem TDAH, essas ações exigem um esforço monumental.",
      "Isso ocorre porque alguns neurotransmissores fundamentais para a manutenção do foco e da motivação, funcionariam de maneira diferente nesse grupo. A dificuldade em regular a excitação mental faz com que estímulos externos ou pensamentos aleatórios tomem o centro da atenção, desviando o indivíduo do que realmente precisa ser feito.",
      "Essa configuração não é escolha, nem preguiça. Mas também não pode ser diagnosticada sem critério.",
      "Quando o rótulo se torna um risco",
      "O TDAH afeta a vida de forma significativa.",
      "Muitos pacientes relatam frustração por não conseguirem cumprir suas próprias expectativas, acumulando anos de autocrítica e insegurança. A desorganização crônica pode levar a dificuldades acadêmicas e profissionais, enquanto a impulsividade pode gerar conflitos interpessoais. A sensação de 'não dar conta' do que parece simples para os outros pode, inclusive, aumentar o risco de ansiedade e depressão.",
      "Entretanto, a banalização do diagnóstico também preocupa.",
      "Esquecer compromissos, procrastinar e perder a paciência rapidamente são comportamentos humanos – e, na era da hiperconectividade, estão mais presentes do que nunca. O desafio está em diferenciar hábitos comuns de um transtorno que realmente compromete o funcionamento diário. O diagnóstico de TDAH não deve ser precipitado, baseado apenas em testes rápidos ou em sintomas pontuais.",
      "O que realmente importa no tratamento",
      "O primeiro passo para lidar com o TDAH é a avaliação criteriosa de um especialista.",
      "O diagnóstico preciso permite não apenas confirmar a condição, mas também compreender suas nuances e impactos específicos. Cada pessoa com TDAH tem um perfil diferente – alguns enfrentam mais dificuldade com a atenção, outros com a impulsividade, e há aqueles que apresentam uma combinação dos dois.",
      "O tratamento é sempre individualizado. Algumas estratégias envolvem organização externa, técnicas de manejo do tempo e ajustes na rotina. Em alguns casos, a medicação pode ser um recurso valioso para facilitar a regulação cerebral. Além disso, a psicoterapia desempenha um papel fundamental ao ajudar o paciente a compreender sua forma única de funcionamento e desenvolver habilidades para lidar com desafios.",
      "Com suporte adequado, o TDAH não precisa ser uma barreira. Pelo contrário: ao aprender a trabalhar com sua própria forma de pensar, o indivíduo pode transformar dificuldades em potencialidades e conduzir sua vida com mais autonomia e equilíbrio."
    ]
  },
  {
    id: 4,
    title: "Autismo: Singularidade, Não Deficiência",
    subtitle: "Algumas crianças evitam o contato visual. Outras parecem alheias ao que acontece ao redor.",
    image: "/placeholder.svg",
    content: [
      "Algumas crianças evitam o contato visual. Outras parecem alheias ao que acontece ao redor.",
      "Há aquelas que reagem intensamente a sons, toques ou pequenas mudanças na rotina.",
      "Por quê?",
      "Seria falta de interesse pelo outro? Um 'mundo fechado' onde a comunicação não é possível?",
      "O Transtorno do Espectro Autista (TEA) não se traduz em isolamento ou falta de emoção, tampouco pode ser reduzido a um déficit de socialização. O que chamamos de autismo é, na verdade, um modo singular de existir no mundo, uma forma diferente de perceber, processar e responder aos estímulos da realidade.",
      "No entanto, essa singularidade não pode ser negligenciada nem confundida com um rótulo vago, pois exige um olhar clínico atento e uma compreensão que vá além da mera classificação diagnóstica.",
      "O cérebro autista: uma conexão intensa com o mundo",
      "Não há um único tipo de cérebro autista – há múltiplas configurações neurológicas que se manifestam de formas distintas.",
      "Estudos apontam que o autismo está relacionado a diferenças no desenvolvimento e funcionamento de redes neurais, especialmente nas conexões entre áreas responsáveis pelo processamento sensorial, linguagem e interação social. Essas conexões, por vezes excessivamente intensas, fazem com que estímulos comuns sejam percebidos de forma amplificada, enquanto outros, socialmente relevantes, passem despercebidos.",
      "Para quem não vive essa experiência, pode ser difícil compreender.",
      "O ruído de uma conversa paralela pode ser ensurdecedor. O toque de um tecido pode parecer insuportável. O olhar do outro pode ser avassalador. O mundo neurotípico se organiza em um jogo de gestos, expressões e nuances que não são intuitivos para quem está no espectro – e isso não significa falta de empatia, mas uma forma distinta de estabelecer laços.",
      "A neurobiologia, entretanto, não dá conta de tudo.",
      "O sujeito no espectro: além da biologia, a experiência singular",
      "A criança autista não está ausente – ela está presente à sua maneira.",
      "Seus gestos, sua linguagem e seus interesses específicos são formas de se inscrever no mundo, ainda que nem sempre sejam compreendidos pelo olhar neurotípico. O que a clínica nos ensina é que a singularidade do autismo não pode ser encaixada em uma régua de normalidade, mas precisa ser escutada em sua própria lógica.",
      "Não se trata de 'ensinar' a criança a ser como as outras, mas de compreender sua forma única de significar o mundo.",
      "O erro comum é interpretar a ausência de resposta dentro dos padrões convencionais como desinteresse ou desconexão. Muitas vezes, há um excesso de afeto, de estímulo, de sensações que não encontram um canal tradicional de expressão. O silêncio pode dizer tanto quanto a palavra, o movimento repetitivo pode ser um modo de organizar o que escapa.",
      "Cada sujeito no espectro tem sua própria forma de estar no mundo – e é a partir dessa lógica singular que a clínica deve operar.",
      "Diagnóstico e acompanhamento: um olhar cuidadoso",
      "O diagnóstico do autismo não pode ser apressado nem reduzido a listas de critérios rígidos.",
      "Embora existam sinais precoces, como dificuldades na comunicação social e comportamentos repetitivos, cada caso precisa ser analisado em sua totalidade. O acompanhamento de um especialista experiente é essencial para diferenciar padrões individuais de características que realmente indicam um funcionamento autista.",
      "O suporte terapêutico também deve ser ajustado à necessidade de cada paciente. Estratégias que respeitam o tempo e a forma de interação da pessoa autista tendem a trazer melhores resultados do que intervenções padronizadas que buscam 'corrigir' comportamentos.",
      "O objetivo não é forçar uma adaptação ao mundo neurotípico, mas sim oferecer ferramentas para que o sujeito possa desenvolver sua autonomia sem perder sua essência.",
      "Com o acompanhamento certo, o autismo deixa de ser um enigma e passa a ser reconhecido como uma forma legítima e autêntica de ser."
    ]
  },
  {
    id: 5,
    title: "Transtorno de Personalidade Borderline: Entre a Intensidade e a Ruptura",
    subtitle: "A dor de quem vive com Transtorno de Personalidade Borderline (TPB) não se explica com palavras simples.",
    image: "/placeholder.svg",
    content: [
      "A dor de quem vive com Transtorno de Personalidade Borderline (TPB) não se explica com palavras simples.",
      "É um estado constante de transbordamento, onde emoções parecem não ter limites. O amor e a raiva se sucedem em segundos. O outro é tudo ou nada. A presença é indispensável, mas a ausência se torna insuportável.",
      "Não se trata de uma 'personalidade difícil', nem de um simples 'drama emocional'. O TPB envolve um modo de funcionamento psíquico onde o vínculo é vivido como ameaça, o abandono, como catástrofe, e a própria identidade parece se dissolver diante das oscilações emocionais.",
      "Mas, afinal, o que há por trás dessa intensidade avassaladora?",
      "O cérebro borderline: emoção sem filtro, impulso sem freio",
      "A neurobiologia do TPB revela um sistema emocional hiper-reativo.",
      "A amígdala, centro do processamento emocional, responde com força desproporcional a estímulos afetivos, ativando um estado de alarme constante. Ao mesmo tempo, o córtex pré-frontal, responsável pelo controle racional das emoções, tem dificuldades em modular essa resposta, resultando em reações impulsivas e explosivas.",
      "A regulação da alguns neurotransmissores também apresenta falhas, contribuindo para mudanças abruptas de humor, impulsividade e uma busca incessante por estímulos que aliviem o sofrimento interno.",
      "Mas não é apenas o cérebro que conta essa história.",
      "Entre o apego e o medo: a marca subjetiva do borderline",
      "O TPB não surge do nada.",
      "Muitas vezes, ele se enraíza em vivências precoces de instabilidade afetiva, relações imprevisíveis ou experiências de abandono – reais ou simbólicas.",
      "A pessoa borderline não sente apenas medo da solidão; ela sente o pavor de deixar de existir se o outro se afastar. A ausência se traduz em um vazio insuportável, que precisa ser preenchido a qualquer custo. O problema é que, ao mesmo tempo em que busca desesperadamente a presença do outro, teme ser ferida por essa proximidade, oscilando entre a entrega total e a rejeição abrupta.",
      "Essa instabilidade atinge todos os aspectos da vida. A autoimagem se fragmenta, os relacionamentos tornam-se intensos e caóticos, e as emoções, incontroláveis. Um pequeno gesto pode ser interpretado como traição. Um tom de voz pode parecer um adeus definitivo. O mundo interno é um território de extremos, onde a segurança nunca é plena e a dor nunca parece ter fim.",
      "Tratamento: encontrar um centro em meio ao caos",
      "Lidar com o TPB exige um olhar clínico cuidadoso e sem julgamentos.",
      "O diagnóstico não deve ser feito com pressa nem baseado apenas no comportamento visível. O sofrimento borderline é profundo, e sua manifestação pode variar – alguns expressam sua dor com explosões emocionais, outros a dirigem para si mesmos, em gestos autodestrutivos silenciosos.",
      "O tratamento envolve tanto a regulação emocional quanto o resgate da própria identidade.",
      "A psicoterapia – especialmente abordagens como a terapia dialética comportamental (TDC) e a psicanálise – ajuda a criar ferramentas para modular emoções, compreender os padrões de vínculo e desenvolver um senso mais estável de si. O acompanhamento psiquiátrico pode auxiliar na estabilização da impulsividade e das oscilações emocionais mais intensas, permitindo que a pessoa borderline respire sem sentir que está à beira de um colapso constante.",
      "Com suporte adequado, é possível transformar a intensidade do borderline em potência. Não se trata de apagar a sensibilidade, mas de aprender a habitá-la sem ser consumido por ela. Encontrar equilíbrio não significa perder a intensidade, mas fazer dela uma força que constrói, e não que destrói."
    ]
  }
];

const Psiquiatria = () => {
  const navigate = useNavigate();
  const phoneNumber = "5567991000575";
  
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { scrollToContact: true } });
  };

  const handleWhatsAppClick = (message: string = "") => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const renderArticleContent = (paragraphs: string[]) => {
    return paragraphs.map((paragraph, i) => {
      const endsWithPeriod = paragraph.trim().endsWith('.');
      const isOResultado = paragraph.trim() === "O resultado?";
      
      return endsWithPeriod || isOResultado ? (
        <p key={i} className={`${i === 0 || i === 1 ? "font-semibold text-lg" : ""} tracking-normal`}>
          {paragraph}
        </p>
      ) : (
        <h2 key={i} className="text-xl font-semibold text-primary mt-8 mb-4 tracking-normal">
          {paragraph}
        </h2>
      );
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full bg-primary z-50 border-b border-background/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/681564cc-330e-4186-adb8-806a5af1785c.png" 
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

      <section className="pt-32 pb-20 px-4 flex-grow">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-16">
              <img 
                src="/lovable-uploads/a5033a84-10f4-4925-ae81-feb9f7dc314c.png" 
                alt="Logo" 
                className="h-10 w-auto opacity-0 animate-fade-up"
              />
              <h2 className="text-3xl md:text-4xl font-nicholas text-primary opacity-0 animate-fade-up"
                  style={{ animationDelay: "0.1s" }}>
                Conteúdos
              </h2>
            </div>
            
            <div className="mb-10 flex flex-col md:flex-row items-center gap-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg md:w-1/2 text-center md:text-left">
                Este espaço foi criado para trazer informações confiáveis, esclarecer conceitos e desmistificar temas sobre saúde mental e psiquiatria.
              </p>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="/lovable-uploads/a20c0175-1dc5-4333-b2f7-9ab29c3f7939.png" 
                  alt="Dr. Matheus Casquer" 
                  className="rounded-lg shadow-md w-full max-w-sm object-cover"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <div 
                  key={article.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="cursor-pointer">
                        <div className="p-6">
                          <h3 className="font-nicholas text-primary text-xl mb-3 line-clamp-2">{article.title}</h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">{article.subtitle}</p>
                          <Button className="flex items-center gap-2 text-white">
                            Saiba mais <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-4xl flex flex-col gap-0 p-0 max-h-[80vh]">
                      <DialogHeader className="contents">
                        <DialogTitle className="border-b border-border px-6 py-4 text-xl md:text-2xl font-nicholas text-primary">
                          {article.title}
                        </DialogTitle>
                        <div className="overflow-y-auto px-6 py-4">
                          <div className="space-y-6 text-justify leading-relaxed">
                            {renderArticleContent(article.content)}
                          </div>
                          <div className="mt-8">
                            <Button 
                              onClick={() => handleWhatsAppClick("Olá, gostaria de agendar uma consulta.")}
                              className="inline-flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-lg hover:bg-accent transition-colors duration-300"
                            >
                              <MessageSquare className="w-5 h-5" />
                              Se precisar de suporte, agende sua consulta aqui
                            </Button>
                          </div>
                        </div>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
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

export default Psiquiatria;
