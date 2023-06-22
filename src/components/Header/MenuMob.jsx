export const MenuMobile = ({ closeMenu }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#ff5757] animation-modal h-screen md:hidden">
      <button
        className="text-end text-3xl font-bold mb-10 w-full p-4"
        onClick={() => closeMenu(false)}
      >
        X
      </button>
      <nav className="flex flex-col mb-10 items-center gap-10 font-bold uppercase text-4xl p-4">
        <a href="" className="text-white">
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
    </div>
  );
};
