import toggleImg from "../assets/Component - Switch.png";

export default function ThemeToggle() {
  return (
    <button
      className="
        flex items-center justify-center
        active:scale-95
        transition
      "
      aria-label="Alternar tema"
    >
      <img
        src={toggleImg}
        alt="Toggle de tema"
        className="
          w-19
          sm:w-17
          md:w-19
          max-w-full
        "
      />
    </button>
  );
}
