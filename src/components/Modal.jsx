import '../styles/Theme.css'

export const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 animation-modal">
      <div className="flex flex-col p-6 rounded-lg bg-gradient-to-r from-black/80 to-slate-950/80 border max-w-5xl">
        <button
            className='text-end text-2xl font-bold'
            onClick={() => closeModal(false)}
        > X </button>
        <div className='flex flex-row justify-between'>
            <div className='w-1/2'>
                <div className='text-3xl font-bold'>
                    <h1>Confie em nós!</h1>
                    <h1>Temos um céu de soluções para o seu problema.</h1>
                </div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="w-1/2">
                <h1>Um pequeno passo para você, um grande passo para o seu negócio.</h1>
            </div>
        </div>
      </div>
    </div>
  );
};
/*
export const Modal = ({ closeModal }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <div className="bg-white p-6 rounded-lg">
                <button onClick={() => closeModal(false)} className=" text-gray-500 hover:text-gray-700">
                    X
                </button>
                <div>
                    <h1 className="text-2xl font-bold mb-2">Are you Sure You Want To Continue?</h1>
                </div>
                <div>
                    <p className="text-gray-600">The Next Page is Awesome! You should move forward, you will enjoy it.</p>
                </div>
                <div className="mt-4">
                    <button onClick={() => closeModal(false)} className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2 hover:bg-gray-300">
                        Cancel
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}*/
