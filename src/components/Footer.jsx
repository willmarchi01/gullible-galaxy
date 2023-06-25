import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="max-w-7xl m-auto text-[#fffaf4] hero_title py-10 px-3 ">
            <div className="flex w-full border-b-2 border-red-500/50 py-10">
                <div className="flex flex-col gap-7 text-center justify-center items-center w-full md:w-1/3 md:justify-start md:items-start md:text-start">
                    <div className="flex flex-col">
                        <a href="/" className="flex justify-center max-w-[200px] m-auto md:justify-start md:m-0">
                            <img src="../../public/img/nebuloz.svg" alt="Logo da Nebuloz" width={200}/>
                        </a>                    
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, dolorum.</p>
                    </div>
                    <div className="flex gap-3">
                        <a href="">
                            <Instagram />
                        </a>
                        <a href="">
                            <Facebook />
                        </a>
                        <a href="">
                            <Twitter />
                        </a>
                        <a href="">
                            <Linkedin />
                        </a>
                    </div>
                </div>
            </div>
            <div className="py-10 w-full flex justify-center items-end">
                <h3>© Nebuloz 2023 - All rights reserved</h3>
            </div>
        </footer>
    )
}