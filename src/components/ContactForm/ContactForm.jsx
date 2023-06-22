import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import InputTel from "./InputTel";

export const ContactForm = () => {
  const form = useRef();
  const [buttonMessage, setButtonMessage] = useState("Entrar em Contato");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const changeMessage = () => {
    setButtonMessage("Enviando...");
    setTimeout(() => {
      setButtonMessage("Entrar em Contato");
    }, 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    changeMessage();

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
          }, 2000);
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
    <div className="flex flex-col items-center gap-5 md:w-1/2">
      <h1 className="text-center text-xl font-bold md:text-2xl">
        Um pequeno passo para você, um grande passo para o seu negócio.
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center justify-center w-full gap-2 md:w-4/5"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Insira seu e-mail..."
          className="p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light placeholder: font-bold"
        />
        <input
          type="tel"
          name="tel"
          required
          placeholder="Insira seu número de telefone..."
          className="p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light placeholder: font-bold"
        />
        <input
          type="text"
          name="name"
          required
          placeholder="Como podemos te chamar?"
          className="p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light placeholder: font-bold"
        />
        <input
            type="submit" 
            value={buttonMessage}
            onSubmit={sendEmail}
            className="bg- border border-[#ff5757] w-full py-3 rounded-lg mt-5 font-bold text-xl cursor-pointer hover:bg-[#ff5757] transition-colors"
        />
      </form>
      {showConfirmation && (
        <div>
          <p className="text-green-500 font-bold text-center">
            Enviado com Sucesso!
          </p>
        </div>
      )}
    </div>
  );
};
