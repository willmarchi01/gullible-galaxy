import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/Theme.css'

const Carousel = () => {
  const technologies = [
    { src: 'https://seeklogo.com/images/A/astro-icon-logo-44253BACEE-seeklogo.com.png', alt: 'Tecnologia 1' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png', alt: 'Tecnologia 2' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png', alt: 'Tecnologia 3' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', alt: 'Tecnologia 4' },
    { src: 'https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png', alt: 'Tecnologia 5' },
    { src: 'https://www.svgrepo.com/download/331488/mongodb.svg', alt: 'Tecnologia 6' },
    { src: 'https://www.svgrepo.com/show/303251/mysql-logo.svg', alt: 'Tecnologia 7' },
    { src: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg', alt: 'Tecnologia 7' },
    // Adicione mais objetos para cada tecnologia
  ];

  const renderTechnologies = () => {
    return technologies.map((technology, index) => (
      <div key={index}>
        <div className='w-full h-full flex justify-center items-center'>
            <div className='w-20 h-20 overflow-hidden rounded-lg bg-gray-200 shadow-lg flex justify-center items-center transition-colors'>
                <img src={technology.src} alt={technology.alt} className='h-full w-full object-scale-down object-center p-2'/>
            </div>
        </div>
      </div>
    ));
  };

  return (
    <AliceCarousel
      items={renderTechnologies()}
      autoPlay
      autoPlayInterval={800}
      infinite
      responsive={{
        0: { items: 1 },
        100: { items: 2 },
        500: { items: 4 },
      }}
    />
  );
};

export default Carousel;
