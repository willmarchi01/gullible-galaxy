import ButtonRotatingBackgroundGradient1 from "../Hero/Button";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import InputSpotlightBorder from "./InputEffect";

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
    <div className="flex flex-col gap-5 md:w-1/2">
      <h1 className="hidden md:flex text-center text-xl font-bold md:text-2xl">
        Um pequeno passo para você, um grande passo para o seu negócio.
      </h1>
      <form
        action=""
        className="flex flex-col items-center justify-center w-full gap-2"
        ref={form}
        onSubmit={sendEmail}
      >
        <InputSpotlightBorder 
          placeholder="E-mail para contato"
          type="email"
          name="email"
        />
        <InputSpotlightBorder 
          placeholder="Número de telefone para contato"
          type="tel"
          name="tel"
        />
        <InputSpotlightBorder 
          placeholder="Como podemos te chamar?"
          type="text"
          name="name"
        />
      </form>
      <button
          onClick={sendEmail}
          className="w-full"
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
