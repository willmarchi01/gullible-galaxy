const InputTel = ({ placeholder, type, name }) => {
    const [value, setValue] = useState(""); // Estado para armazenar o valor do input
  
    // Função para formatar o número de telefone enquanto o usuário digita
    const formatPhoneNumber = (input) => {
      const phoneNumber = input.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
      const phoneNumberLength = phoneNumber.length;
  
      if (phoneNumberLength < 4) {
        return phoneNumber;
      } else if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
      } else if (phoneNumberLength < 11) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
      } else {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7, 11)}`;
      }
    };
  
    // Manipulador de evento para atualizar o valor do input e aplicar a formatação
    const handleChange = (event) => {
      const formattedValue = formatPhoneNumber(event.target.value);
      setValue(formattedValue);
    };
  
    return (
      <input
        className="px-4 py-3 rounded-lg bg-transparent border border-white border-opacity-30 placeholder-white placeholder-opacity-50 focus:outline-none focus:border-opacity-70 focus:border-white focus:placeholder-opacity-70"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    );
  };
  
  export default InputTel;
  