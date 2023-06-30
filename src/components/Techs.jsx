import '../styles/Theme.css'

export const Technologies = () => {
  return (
    <div className="bg-[#181818] py-6 sm:py-8 lg:py-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-8 md:mb-12">
          <h2 className="mb-4 text-center text-2xl font-bold text-[#fffaf4] md:mb-6 lg:text-3xl">
            Algumas tecnologias que usamos
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-10 lg:gap-2">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-20 h-20 overflow-hidden rounded-full bg-gray-200 shadow-lg flex justify-center items-center transition-colors">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="Logo ReactJS"
                className="h-full w-full object-scale-down object-center p-2"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-20 h-20 overflow-hidden rounded-full bg-gray-200 shadow-lg flex justify-center items-center">
              <img
                src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png"
                alt="Logo NextJS"
                className="h-full w-full object-scale-down object-center p-2"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-20 h-20 overflow-hidden rounded-full bg-gray-200 shadow-lg flex justify-center items-center">
              <img
                src="https://seeklogo.com/images/A/astro-icon-logo-44253BACEE-seeklogo.com.png"
                alt="Logo Astro"
                className="h-full w-full object-scale-down object-center p-2"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-20 h-20 overflow-hidden rounded-full bg-gray-200 shadow-lg flex justify-center items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                alt="Logo Tailwind CSS"
                className="h-full w-full object-scale-down object-center p-2"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-20 h-20 overflow-hidden rounded-full bg-gray-200 shadow-lg flex justify-center items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
                alt="Logo NodeJS"
                className="h-full w-full object-scale-down object-center p-2"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
