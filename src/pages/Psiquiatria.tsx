
import React from "react";
import { Link } from "react-router-dom";

const Psiquiatria = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full bg-primary z-50 border-b border-background/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-background font-nicholas text-2xl">Dr. Matheus Casquer</Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/#about" className="text-background hover:text-background/80 transition-colors">Sobre</Link>
            <Link to="/sobre" className="text-background hover:text-background/80 transition-colors">Formação e Trajetória</Link>
            <Link to="/psiquiatria" className="text-background hover:text-background/80 transition-colors">Psiquiatria</Link>
            <a href="/#contact" className="text-background hover:text-background/80 transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-20 px-4 flex-grow">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-nicholas text-primary mb-8 opacity-0 animate-fade-up">
              Psiquiatria
            </h2>
            <div className="prose prose-lg text-accent-dark max-w-none opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg font-semibold">
                Em breve, artigos e conteúdos sobre temas em psiquiatria serão publicados aqui.
              </p>
              <p>
                Este espaço é dedicado a compartilhar conhecimento, desmistificar conceitos e fornecer informações 
                confiáveis sobre saúde mental e tratamentos psiquiátricos.
              </p>
              <p>
                Volte em breve para conferir as atualizações.
              </p>
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
