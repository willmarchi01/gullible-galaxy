import { Facebook, Github, Instagram, Linkedin } from "lucide-react"

export const TrustedBy = () => {
    return (
        <div className="flex flex-col gap-5 bg-[#fffaf4] py-10">
            <h3
                className="text-[#080808] text-3xl text-center font-bold"
            >
                Algumas empresas que confiaram em nós:
            </h3>
            <div className="flex justify-center gap-5 cursor-pointer">
                <Facebook size={40} />
                <Instagram size={40} />
                <Github size={40}/>
                <Linkedin size={40}/>
            </div>
        </div>
    )
}