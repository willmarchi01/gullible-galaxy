import { Linkedin, Twitter } from "lucide-react"

export const PersonTeam = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center rounded-lg bg-gray-100 p-12 gap-5">
        <div className="w-40 h-40 overflow-hidden rounded-full bg-gray-200 shadow-lg">
          <img
            src={props.personimg}
            alt={props.altimg}
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-[#ff5757] text-center">
            {props.name}
          </h1>
          <p className="text-center font-semibold text-lg">{props.ocupation}</p>
          <div className="flex justify-center gap-3">
            <Linkedin color="#181818" size={30} strokeWidth={1.5} />
            <Twitter color="#181818" size={30} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </div>
  );
};
