export const Advantages = () => {
  return (
    <div className="bg-[#181818] flex px-3 py-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="text-center flex flex-col gap-5 justify-center items-center">
          <h1 className="text-4xl font-bold text-[#fffaf4]">
            Nossa vantagem competitiva
          </h1>
          <p className="hidden md:flex text-lg max-w-4xl text-[#fffaf4]">
            Na Nebuloz estamos orgulhosos de poder oferecer uma série de
            vantagens competitivas, nos permitindo atender às necessidades de
            nossos clientes de forma excepcional.
          </p>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
          <div class="flex flex-col items-center">
            <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff5757] text-[#fffaf4] shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>

            <h3 class="mb-2 text-center text-2xl font-semibold md:text-2xl text-[#fffaf4]">
              Crescimento
            </h3>
            <p class="mb-2 text-center text-[#fffaf4]">
              Na Nebuloz, nossa vantagem competitiva reside em nossa capacidade
              de impulsionar o crescimento, tanto para nossos clientes quanto
              para nós mesmos.
            </p>
          </div>
          <div class="flex flex-col items-center">
            <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff5757] text-[#fffaf4] shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>

            <h3 class="mb-2 text-center text-2xl font-semibold md:text-2xl text-[#fffaf4]">
              Segurança
            </h3>
            <p class="mb-2 text-center text-[#fffaf4]">
              Reconhecemos que a proteção dos dados, informações confidenciais e
              a privacidade dos nossos clientes são essenciais para o sucesso do
              seu negócio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
