import React from "react";
import { Tech } from "./Tech";
import ButtonRotatingBackgroundGradient from "./Hero/Button";

export const ProjectsCard = ({ project }) => {
  return (
    <div className="w-full bg-[#fafafa] shadow-sm border-[#070707] border hover:border-[#FF5858] hover:shadow-xl hover:translate-y-1 duration-200 ease-in-out flex-col p-2 my-3 rounded-lg">
      <div className="md:grid grid-flow-row grid-cols-2">
        <div className="p-2">
          <div className="font-medium text-center text-2xl">{project.title}</div>
          <div className="text-center">{project.description}</div>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <img
            src={project.src}
            className="w-4/5 h-4/5 object-cover rounded-md"
          />
        </div>
      </div>
      <div className="flex">
        <Tech technologies={project.technologies} />
        <div
          className="custom-button-colored"
          onClick={() => setIsModalOpen(true)}
        >

        </div>
      </div>
    </div>
  );
};
