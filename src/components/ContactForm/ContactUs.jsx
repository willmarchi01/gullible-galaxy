import ButtonRotatingBackgroundGradient1 from "../Hero/Button";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [buttonMessage, setButtonMessage] = useState("Entrar em Contato");

  const changeMessage = () => {
    setButtonMessage("Enviando...");
    setTimeout(() => {
      setButtonMessage("Entrar em Contato")
    }, 3000);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j4lv11b",
        "template_qpc4ysi",
        form.current,
        "vgVHhCocTnMLQV3CD"
      )
      .then(
        (result) => {
          console.log(result.text);
          resetForm();
          setShowConfirmation(true);
          setTimeout(() => {
            setShowConfirmation(false);
          }, 2000); //Define o tempo de exibição da animação em milisegundos.

        },
        (error) => {
          console.log(error.text);
        }
      );

  };

  const resetForm = () => {
    if (form.current) {
      form.current.reset();
    }
  };

  return (
    <div className="flex flex-col gap-3 md:w-1/2">
      <h1 className="text-center text-xl font-bold md:text-2xl">
        Um pequeno passo para você, um grande passo para o seu negócio.
      </h1>
      <form
        action=""
        className="flex flex-col items-center justify-center w-full gap-2"
        ref={form}
      >
        <input
          type="email"
          placeholder="E-mail para contato"
          className="w-4/5 p-4 rounded-xl text-gray-500 font-bold text-center bg-gray-300 placeholder-black-css placeholder-gray-500"
          name="email"
        />
        <input
          type="tel"
          placeholder="Número para contato"
          className="w-4/5 p-4 rounded-xl text-gray-500 font-bold text-center bg-gray-300 placeholder-black-css placeholder-gray-500"
          name="tel"
        />
        <input
          type="text"
          placeholder="Como podemos te chamar?"
          className="w-4/5 p-4 rounded-xl text-gray-500 font-bold text-center bg-gray-300 placeholder-black-css placeholder-gray-500"
          name="name"
        />
      </form>
      <button
        onClick={sendEmail}
      >
        <button 
            className="w-full"
            onClick={changeMessage}
        >
            <ButtonRotatingBackgroundGradient1
                text={buttonMessage}
                classCSS="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] w-4/5 m-auto"
            />
        </button>
      </button>
      {showConfirmation && (
        <div className="text-center text-green-500 font-bold">
            Envio Concluído!
        </div>
      )}
    </div>
  );
};
