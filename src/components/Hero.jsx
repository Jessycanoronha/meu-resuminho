import { resumin, resuminho2 } from "../assets";
const Hero = () => {
  return (
    <header className="w-full justify-center items-center flex flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={resumin} alt="jessyca-logo" className="w-16 object-contain" />
        <button
          className="black_btn"
          type="button"
          data-testid="github-btn"
          onClick={() => window.open("https://github.com/Jessycanoronha/meu-resuminho")}
        >
          Github
        </button>
      </nav>
      <h1 className="head_text flex justify-center items-center h-60" data-testid="hero">
        <img src={resuminho2} alt="jessyca-logo" className="w-96 h-96" />
      </h1>
      <h3 className="desc" data-testid="hero-desc">
        Simplifique sua leitura com o Meu Resuminho, um sumarizador de artigos
        de código aberto que transforma artigos longos em resumos claros e
        concisos.
      </h3>
    </header>
  );
};

export default Hero;
