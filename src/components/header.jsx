import baglogo from "../assets/bag-logo.png";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center sm:w-32 h-66 
    gap-8 mt-2 pt-11 ">
      <img className="w-32 h-32" src={baglogo} alt="Logo da Bag"/>
      <span className=" w-45 h-8 text-2xl text-(--color-color-light-white) font-Nunito 
      font-semibold">
        @yellowbagedu
      </span>
      <ThemeToggle />
    </header>
  );
}
