import '../styles/Theme.css'
import ButtonRotatingBackgroundGradient1 from './Hero/Button';

export const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 animation-modal">
      <div className="flex flex-col p-10 m-4 rounded-lg bg-gradient-to-r from-black/80 to-slate-950/80 border border-[#ff5757]/30 max-w-5xl">
        <button
            className='text-end text-2xl font-bold mb-5'
            onClick={() => closeModal(false)}
        > X </button>
        <div className='flex flex-row gap-2 justify-between'>
            <div className='w-1/2 flex flex-col gap-10'>
                <div className='font-bold flex flex-col gap-3'>
                    <h1 className='text-[#fffaf4] text-5xl'>Confie em nós!</h1>
                    <h1 className='text-[#ff5757] text-4xl'>Temos um céu de soluções para o seu problema.</h1>
                </div>
                <div className='flex flex-col gap-3 text-lg'>
                    <span>Planejamento Estruturado</span>
                    <span>Soluções com Tecnologia de Ponta</span>
                    <span>Suporte ao Cliente 24/7</span>
                </div>
            </div>
            <div className="w-1/2 flex flex-col gap-3">
                <h1 className='text-center text-2xl font-bold'>Um pequeno passo para você, um grande passo para o seu negócio.</h1>
                <form action="" className='flex flex-col items-center justify-center w-full gap-2'>
                    <input 
                        type="email" 
                        placeholder='E-mail para contato' 
                        className='w-4/5 p-4 rounded-xl text-gray-500 font-bold text-center bg-gray-300 placeholder-black-css placeholder-gray-500'
                    />
                    <input 
                        type="tel" 
                        placeholder='Número para contato' 
                        className='w-4/5 p-4 rounded-xl text-gray-500 font-bold text-center bg-gray-300 placeholder-black-css placeholder-gray-500'
                    />
                    <input 
                        type="text" 
                        placeholder='Como podemos te chamar?' 
                        className='w-4/5 p-4 rounded-xl text-gray-500 font-bold text-center bg-gray-300 placeholder-black-css placeholder-gray-500'
                    />
                </form>
                <ButtonRotatingBackgroundGradient1 
                    text="Entrar em Contato"
                    classCSS="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] w-4/5 m-auto"
                />
            </div>
        </div>
      </div>
    </div>
  );
};
