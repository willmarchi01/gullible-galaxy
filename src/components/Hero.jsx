import ButtonRotatingBackgroundGradient1 from "./Hero/Button"
import ButtonRotatingBackgroundGradient2 from "./Hero/Button2"
import TextEffect1 from "./Hero/TextEffect"
import { Modal } from "./Modal"
import { useState } from "react"

export const Hero = () => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="h-screen text-white px-3">
            <div className="max-w-screen-2xl h-screen m-auto flex flex-col gap-12 justify-center items-center leading-relaxed">
                <h1 className="text-[#fffaf4] text-5xl text-center max-w-6xl font-bold md:text-7xl">
                    Criando soluções de <TextEffect1 text="Software"/> que estão anos-luz a frente
                </h1>
                <h2 className="text-[#ff5757] text-2xl text-center">
                    Focados em transformar suas ideias em constelações de código
                </h2>
                <div className="flex flex-col justify-center items-center gap-2 md:flex-row md:gap-10">
                    <button 
                        className="text-[#fffaf4]"
                        onClick={() => {setOpenModal(true)}}
                    >
                        <ButtonRotatingBackgroundGradient2 text="Entrar em Contato" />
                    </button>
                    <button className="text-[#fffaf4]">
                        <ButtonRotatingBackgroundGradient1 
                            text="Explorar Projetos" 
                            classCSS="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px]"
                        />
                    </button>
                </div>
            </div>
           {openModal && <Modal closeModal={setOpenModal}/>}
        </div>
    )
}