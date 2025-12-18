import baglogo from "../assets/bag-logo.png";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex flex-col items-center
        gap-8
        pt-11">
      <img 
        src={baglogo} 
        alt="Logo da Bag"
      />

      <span className="
      w-[180] h-[32] 
      text-[1.5em] 
      text-[white]
      font-Nunito 
      font-semibold">
        @yellowbagedu
      </span>
      
      <ThemeToggle />
    </header>
  );
}
