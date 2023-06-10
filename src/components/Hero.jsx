import ButtonRotatingBackgroundGradient1 from "./Hero/Button"
import ButtonRotatingBackgroundGradient2 from "./Hero/Button2"
import TextEffect1 from "./Hero/TextEffect"

export const Hero = () => {
    return (
        <div className="h-screen w-screen text-white px-3">
            <div className="max-w-screen-2xl h-screen m-auto flex flex-col gap-12 justify-center items-center leading-relaxed">
                <h1 className="text-[#fffaf4] text-5xl text-center max-w-6xl font-bold md:text-7xl">
                    Criando soluções de <TextEffect1 text="Software"/> que estão anos-luz a frente
                </h1>
                <h2 className="text-[#ff5757] text-xl text-center">
                    Focados em transformar suas ideias em constelações de código
                </h2>
                <div className="flex flex-col justify-center items-center gap-2 md:flex-row md:gap-10">
                    <button className="text-[#fffaf4]">
                        <ButtonRotatingBackgroundGradient2 text="Entrar em Contato" />
                    </button>
                    <button className="text-[#fffaf4]">
                        <ButtonRotatingBackgroundGradient1 text="Explorar Projetos" />
                    </button>
                </div>
            </div>
        </div>
    )
}