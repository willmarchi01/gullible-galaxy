import { Linkedin, Twitter } from "lucide-react"
import { PersonTeam } from "./OurTeam/PersonTeam"

export const OurTeam = (props)  => {
    return (
        <div className="text-[#181818] bg-[#fffaf4]">
            <div className="max-w-7xl m-auto px-3 py-10 flex flex-col gap-10">
                <div className="flex flex-col gap-5 justify-center items-center">
                    <h1 className="text-4xl font-bold text-center">Conheça o nosso Time</h1>
                    <p className="text-xl text-center md:max-w-3xl">Atualmente nosso time é composto por dois membros, os quais atuam em conjunto em todas as fases do processo de desenvolver um software moderno.</p>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:max-w-2xl m-auto">
                    <PersonTeam
                        personimg="https://i.ibb.co/CBbvL33/130183145-3369995956456217-1515674437952224953-n.jpg"
                        altimg="Foto de Perfil de Willian"
                        name="Willian Marchi"
                        ocupation="Co-Fundador | CEO"
                        linkedin="https://www.linkedin.com/in/willianmarchi01/"
                    />
                    <PersonTeam 
                        personimg="https://i.ibb.co/dbQzFGh/1653520085565.jpg"
                        altimg="Foto de Perfil de Vinicius"
                        name="Vinicius Araújo"
                        ocupation="Co-Fundador | CEO"
                        linkedin="https://www.linkedin.com/in/vin%C3%ADcius-prates-ara%C3%BAjo/"
                    />
                </div>
            </div>
        </div>
    )
}