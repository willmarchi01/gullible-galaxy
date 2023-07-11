import '../styles/Theme.css'
import Carousel from './Carousel';

export const Technologies = () => {
  return (
    <div className="bg-[#181818] py-6 sm:py-8 lg:py-8" id='techs'>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-8 md:mb-12">
          <h2 className="mb-4 text-center text-2xl font-bold text-[#fffaf4] md:mb-6 lg:text-3xl">
            Algumas tecnologias que utilizamos na <span className='text-[#ff5757]'>Nebuloz</span>
          </h2>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    </div>
  );
};
