export function ActionsButtons({ as = "button", href, label, onClick }) {
  const baseClasses = 
  "z-1 flex items-center justify-center text-[20px] text-center font-Poppins font-medium cursor-pointer bg-(--color-color-yellow) w-80 h-16 rounded-3xl p-4 shadow-lg opacity-90 hover:font-bold hover:opacity-100 transition";

  if (as === "a") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {label}
      </a>
    );
  }

  return <button className={baseClasses} onClick={onClick}>{label}</button>;
}