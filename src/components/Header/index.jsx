import baglogo from "../../assets/bag-logo.svg";

export default function Header({color}) {
  return (
    <header className="flex flex-col justify-center items-center gap-4">
      <img className="w-32 h-32" src={baglogo} alt="Logo da Bag"/>
      <span className={` w-45 h-8 text-2xl ${color} font-Nunito 
      font-semibold`}>
        @yellowbagedu
      </span>
    </header>
  );
}
