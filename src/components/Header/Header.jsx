import { useState } from "react";
import "../..//styles/Theme.css";
import { Menu } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="text-[#fffaf4] px-5 py-3">
      <header className="max-w-screen-2xl m-auto flex justify-between items-center h-1/5">
        <a href="/">
          <img src="../../../public/img/nebuloz.svg" width={200} />
        </a>
        <nav className="hidden md:flex gap-10 font-medium uppercase">
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
        </nav>
        <div className="flex gap-1 items-center header_link text-xl uppercase font-bold md:hidden">
          Menu
          <Menu />
        </div>
      </header>
    </div>
  );
};