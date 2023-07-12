import { useState } from "react";
import "../..//styles/Theme.css";
import { Menu } from "lucide-react";
import { MenuMobile } from "./MenuMob";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="text-[#fffaf4] py-2 px-3">
      <header className="max-w-7xl m-auto flex justify-between items-center">
        <a href="/">
          <img src="../../../public/img/nebuloz.svg" width={200} />
        </a>
        <nav className="hidden md:flex gap-10 font-medium uppercase">
          <a href="" className="header_link">
            Início
          </a>
          <a href="#class-about-us" className="header_link">
            Sobre Nós
          </a>
          <a href="#techs" className="header_link">
            Tecnologias
          </a>
          <a href="#team" className="header_link">
            Nosso Time
          </a>
        </nav>
        <div 
          className="flex gap-1 items-center header_link text-xl uppercase font-bold md:hidden" 
          onClick={() => {setIsMenuOpen(true)}}
        >
          Menu
          <Menu />
        </div>
      </header>
      {isMenuOpen && <MenuMobile closeMenu={setIsMenuOpen}/>}
    </div>
  );
};
