export function ActionsButtons({ as = "button", href, label, onClick, Color}) {
  const baseClasses = 
  `flex flex-col items-center justify-center gap-[24rem] text-[1.25rem] text-center ${Color}
  font-Poppins font-medium cursor-pointer w-80 md:w-[26rem] h-16  rounded-3xl 
  p-4 shadow-lg hover:font-bold hover:scale-90 transition`;

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