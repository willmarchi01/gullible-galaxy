import { motion } from "framer-motion";

import { NebulozLogoMini } from "../../public/assets/NebulozLogoMini";
import { ProjectsCard } from "./ProjectsCard";

const projects =[
  {
    id: 123456789,
    title: 'E-commerce',
    description: 'Loja virtual moderna e única para uma floricultura, com login, controle de estoque, carrinho de compras e muito mais!',
    src: '../src/assets/images/case1.png',
    technologies: ['nextjs', 'tailwind', 'mongodb', 'nodejs', 'stripe'],
    demo: 'httpshttps://nebuloz.com',
    github: 'https://github.com/Nebuloz/Nebuloz'
  },
  {
    id: 987654321,
    title: 'Site Institucional',
    description: 'Um site institucional é uma presença online oficial que representa uma organização ou empresa.',
    src: '../src/assets/images/case2.png',
    technologies: ['nextjs', 'tailwind', 'mysql', 'aws', 'graphql'],
    demo: 'httpshttps://nebuloz.com',
    github: 'https://github.com/Nebuloz/Nebuloz'
  },
  {
    id: 555555555,
    title: 'Landing Page',
    description: 'Uma landing page é uma página da web focada em converter visitantes em leads ou clientes.',
    src: '../src/assets/images/case3.png',
    technologies: ['astro', 'tailwind', 'framer'],
    demo: 'httpshttps://nebuloz.com',
    github: 'https://github.com/Nebuloz/Nebuloz'
  },
]


export const Projects = () => {
  return (
    <section
      className="flex justify-center items-center py-10"
      id="projects"
    >
      <div className="bg-[#fafafa] w-3/4 flex flex-col md:flex-row rounded-2xl p-4">
        <div className="flex flex-col md:gap-14 md:w-1/2">
          <div className="hidden md:flex justify-center">
            <NebulozLogoMini width={450} height={300}/>
          </div>
          <div className="text-center md:text-start flex flex-col text-[#383838]">
            <div className="text-5xl font-bold">
              Projetos Realizados
            </div>
            <div className="text-2xl">
              Alguns dos nossos Astros que entraram em contato com o Telescópio Nebuloz :p
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center text-[#383838]">
          {projects.map(project => (
            <div className="">
              <ProjectsCard key={project.id} project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
