import baglogo from "../../assets/bag-logo.svg";


export default function Header({Color}) {

  return (
    <header className="flex flex-col justify-center items-center">
      <img className="w-32 h-32" src={baglogo} alt="Logo da Bag"/>
      <span className={`w-45 h-8 text-2xl font-Nunito ${Color}
      font-semibold`}>
        @yellowbagedu
      </span>
    </header>
  );
}
