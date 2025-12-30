import toggleImg from "../../assets/switch.png";

export default function ThemeToggle() {
  return (
    <button className=" flex items-center justify-center 
    active:scale-95 transition" aria-label="Alternar Tema">
      <img
        src={toggleImg}
        alt="Toggle de Temas"
        className="w-17 h-12"/>
    </button>
  );
}
