import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className=" text-[#fffaf4] hero_title py-10 px-3 bg-[#181818]">
      <div className="max-w-7xl m-auto flex flex-col gap-5 w-full border-b-2 border-red-500/50 py-10 md:flex-row">
        <div className="flex flex-col gap-3 text-center justify-center items-center w-full md:w-1/3 md:justify-start md:items-start md:text-start">
          <div className="flex flex-col">
            <a
              href="/"
              className="flex justify-center max-w-[200px] m-auto md:justify-start md:m-0"
            >
              <img
                src="../../public/img/nebuloz.svg"
                alt="Logo da Nebuloz"
                width={200}
              />
            </a>
          </div>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/nebulozltda/" target="blank">
              <Instagram />
            </a>
          </div>
          <div className="flex flex-col">
            <a href="mailto:nebulozltda@gmail.com" className="hover:text-[#ff5757] transition-colors">nebulozltda@gmail.com</a>
            <a href="tel:+5567992825111" className="hover:text-[#ff5757] transition-colors">(67) 9 9282-5111</a>
            <a href="tel:+5562999078095" className="hover:text-[#ff5757] transition-colors">(62) 9 9907-8095</a>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 justify-center text-center gap-3 items-center font-bold text-xl md:w-2/3 md:flex md:justify-around">
          <a href="" className="header_link">
            Início
          </a>
          <a href="" className="header_link">
            Sobre Nós
          </a>
          <a href="" className="header_link">
            Projetos
          </a>
          <a href="" className="header_link">
            Avaliações
          </a>
        </div>
      </div>
      <div className="py-10 w-full flex justify-center items-end">
        <h3>© Nebuloz 2023 - Todos os direitos reservados</h3>
      </div>
    </footer>
  );
};
