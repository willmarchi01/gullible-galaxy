import React, { useState } from "react";
import { motion } from "framer-motion";

export const Tech = ({ technologies }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className='grid grid-cols-2 gap-10 w-full mb-2 md:flex md:gap-0'>
      {technologies.map((technology, index) => (
        <motion.div
          key={index}
          className='rounded-lg text-white flex flex-col items-center justify-center bg-[#070707] mx-auto p-4 md:p-0 md:flex-row'
          initial={{ width: "4rem" }}
          whileHover={{ width: "8rem" }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <img
            src={`../public/img/${technology}.png`}
            className='w-10 lg:w-16 rounded-md md:p-2'
            alt={technology}
          />
          {hoveredIndex === index && <span>{technology}</span>}
        </motion.div>
      ))}
    </div>
  );
};
