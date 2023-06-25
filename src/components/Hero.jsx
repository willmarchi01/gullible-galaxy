import ButtonRotatingBackgroundGradient1 from "./Hero/Button";
import ButtonRotatingBackgroundGradient2 from "./Hero/Button2";
import TextEffect1 from "./Hero/TextEffect";
import { TrustedBy } from "./Hero/TrustedBy";
import { Modal } from "./Modal";
import { useState } from "react";

export const Hero = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      className="text-white px-3 h-screen flex flex-col justify-center relative"
      style={{
        backgroundImage: "url('../../public/img/bg_01.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <div className="max-w-7xl mx-auto flex flex-col gap-12 justify-center items-center leading-relaxed relative z-10">
        <h1 className="text-[#fffaf4] text-4xl text-center max-w-6xl font-bold md:text-6xl hero_title">
          Criando soluções de <TextEffect1 text="Software" /> que estão anos-luz
          a frente.
        </h1>
        <h2 className="text-[#ff5757] text-center text-xl hero_subtitle md:text-xl">
          Focados em transformar suas ideias em constelações de código.
        </h2>
        <div className="flex flex-col justify-center items-center gap-2 md:flex-row md:gap-10">
          <button
            className="text-[#fffaf4]"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <ButtonRotatingBackgroundGradient2 text="Entrar em Contato" />
          </button>
          <button className="hidden md:flex text-[#fffaf4]">
            <ButtonRotatingBackgroundGradient1
              text="Explorar Projetos"
              classCSS="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px]"
            />
          </button>
        </div>
      </div>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};
