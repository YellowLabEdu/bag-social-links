import { useState } from "react";
import baglogo from "../../assets/bag-logo.svg";
import toggleImg from "../../assets/Switch.svg";


export default function Header({color, mode}) {
  const [Mode, setMode] = useState(true);

  return (
    <header className="flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col justify-center items-center">
        <img className="w-32 h-32" src={baglogo} alt="Logo da Bag"/>
        <span className={` w-45 h-8 text-2xl ${color} font-Nunito 
        font-semibold`}>
          @yellowbagedu
        </span>
      </div>
      <button className="flex items-center justify-center active:scale-95 transition rotate-y-0"  
      aria-label="Alternar Tema">
        <img
          src={toggleImg}
          alt="Toggle de Temas"
          className="w-17 h-12"/>
      </button>
    </header>
  );
}
