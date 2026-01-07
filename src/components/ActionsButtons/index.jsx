export function ActionsButtons({ as = "button", href, label }) {
  const baseClasses = 
  "flex items-center justify-center sm:text-[20px] text-center font-Poppins font-medium bg-(--color-color-yellow) w-80 h-16 rounded-3xl p-4 cursor-pointer shadow-lg opacity-90 hover:font-bold hover:opacity-100 transition";

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

  return <button className={baseClasses}>{label}</button>;
}