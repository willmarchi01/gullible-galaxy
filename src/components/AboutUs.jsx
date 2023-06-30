export const AboutUs = () => {
  return (
    <div className="bg-[#fffaf4] flex px-3">
      <div className="max-w-7xl m-auto flex h-screen">
        <div className="text-center flex flex-col justify-center gap-5 text-[#181818] md:text-start">
          <h1 className="text-5xl font-bold">prazer em conhecer você!</h1>
          <p className="text-xl max-w-xl text-justify md:text-start">
            Nós somos Willian e Vinicius, co-fundadores da{" "}
            <span className="text-[#ff5757] font-bold">Nebuloz</span>. Nossa
            jornada teve início quando nós, dois desenvolvedores de software
            apaixonados por tecnologia, decidimos abrir nossa própria empresa,
            permitindo-nos trabalhar de acordo com nossa visão e valores.
            Queríamos criar um ambiente onde a inovação e a criatividade
            pudessem prosperar, e onde pudéssemos desenvolver soluções
            tecnológicas de ponta que impactassem positivamente o mundo ao nosso
            redor. Com essa ambição em mente, estabelecemos a Nebuloz, um lugar
            onde podemos transformar ideias em realidade.
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('../../public/img/bg-05.png')",
          backgroundSize: "cover",
        }}
        className="hidden md:flex md:w-1/2"
      ></div>
    </div>
  );
};
