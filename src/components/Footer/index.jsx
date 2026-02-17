import IconEmail from "./assets/icon-gmail.svg";
import IconWhatsApp from "./assets/icon-whatsapp.svg";
import iconLinkedin from "./assets/icon-linkedin.svg";

//* Predefined email parameters */
const email = "institucional@yellowbagedu.com";
const subject = encodeURIComponent("Contato via YellowBagEdu Social Links");
const body = encodeURIComponent("Olá, gostaria de mais informações sobre a YellowBagEdu.");

//* Predefined WhatsApp parameters */
const wppPhone = "5591993412953";
const wppMessage = encodeURIComponent("Olá, gostaria de mais informações sobre a YellowBagEdu.");

const socialLinks = [
    {
        href: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
        imgSrc: IconEmail,
        altText: "Logotipo Gmail",
    },
    {
        href: `https://wa.me/${wppPhone}?text=${wppMessage}`,
        imgSrc: IconWhatsApp,
        altText: "Logotipo WhatsApp"
    },
    {
        href: "https://www.linkedin.com/company/yellowbagedu/?viewAsMember=true",
        imgSrc: iconLinkedin,
        altText: "Logotipo LinkedIn"
    }
]

export function Footer({Color}) {
    const baseFooterClass = `w-64 h-16 z-1 ${Color} flex items-center justify-center gap-6 rounded-3xl border-4 border-(--color-white) p-2 shadow-lg hover:scale-95 transition-transform duration-200 cursor-pointer`;
    
    return (
        <footer className={baseFooterClass}>
            {socialLinks.map(({ href, imgSrc, altText }) => (
                <a 
                    key={altText}
                    className="cursor-pointer hover:scale-125"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={imgSrc} alt={altText} />
                </a>
            ))    
            }
        </footer>
    );
}