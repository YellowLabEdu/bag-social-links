export function ActionsButtons({ as = "button", href, label, onClick, color }) {
  const baseClasses = 
  `z-1 flex items-center justify-center text-[20px] text-center font-Poppins font-medium cursor-pointer ${color} w-80 h-16 rounded-3xl p-4 shadow-lg hover:font-bold hover:scale-90 transition`;

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