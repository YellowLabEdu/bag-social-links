import {Link, BrowserRouter} from "react-router-dom";
import IconEmail from "./assets/icon-gmail.png";
import IconWhatsApp from "./assets/icon-whatsapp.png";
import IconInstagram from "./assets/icon-instagram.png";
import iconLinkedin from "./assets/icon-linkedin.png";

//* Predefined email parameters */
const email = "institucional@yellowbagedu.com";
const subject = encodeURIComponent("Contato via YellowBagEdu Social Links");
const body = encodeURIComponent("Olá, gostaria de mais informações sobre a YellowBagEdu.");

//* Predefined WhatsApp parameters */
const wppPhone = "5591993412953";
const wppMessage = encodeURIComponent("Olá, gostaria de mais informações sobre a YellowBagEdu."); 

export default function Buttons() {
    return (
      <>
        <BrowserRouter>
            <a href="https://forms.gle/VNJrn1twk2L1gYiBA" target="_blank" className="flex items-center justify-center sm:text-[20px] 
            text-center font-Poppins font-medium bg-(--color-color-yellow) 
            w-80 h-16 rounded-3xl p-4 cursor-pointer shadow-lg opacity-90 hover:font-bold hover:opacity-100">Experiência YellowBagEdu</a>
            <a href="https://whatsapp.com/channel/0029VbAjLtbLtOjLVcWJO12o" target="_blank" className="flex items-center justify-center sm:text-[20px] 
            text-center font-Poppins font-medium bg-(--color-color-yellow) 
            w-80 h-16 rounded-3xl p-4 cursor-pointer shadow-lg opacity-90 hover:font-bold hover:opacity-100">Movimento Social</a>
            <button className="flex items-center justify-center sm:text-[20px] 
            text-center font-Poppins font-medium bg-(--color-color-yellow) 
            w-80 h-16 rounded-3xl p-4 cursor-pointer shadow-lg opacity-90 hover:font-bold hover:opacity-100">YellowBagEdu</button>
            <button className="flex items-center justify-center sm:text-[20px] 
            text-center font-Poppins font-medium bg-(--color-color-yellow) 
            w-80 h-16 rounded-3xl p-4 cursor-pointer shadow-lg opacity-90 hover:font-bold hover:opacity-100">Uniões & Parcerias</button>
            <footer className="sm: w-64 h-16 flex items-center justify-center 
            gap-8 rounded-3xl bg-(--color-color-yellow) border-4 border-solid 
            border-(--color-color-light-white) pr-1 pl-1 pt-0.5 pb-0.5 shadow-lg 
            hover:scale-95 transition-transform duration-200">
                <a className="cursor-pointer hover:scale-125" 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                >
                    <img src={IconEmail} alt="Logotipo Gmail" />
                </a>
                <a className="cursor-pointer hover:scale-125" 
                href={`https://wa.me/${wppPhone}?text=${wppMessage}`} 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <img src={IconWhatsApp} alt="Logotipo WhatsApp" />
                </a>
                <a className="cursor-pointer hover:scale-125" 
                href="https://www.instagram.com/yellowbagedu/" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <img src={IconInstagram} alt="Logotipo Instagram" />
                </a>
                <a className="cursor-pointer hover:scale-125" 
                href="https://www.linkedin.com/company/yellowbagedu/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <img src={iconLinkedin} alt="Logotipo LinkedIn" />
                </a>
            </footer>
        </BrowserRouter>
      </>  
    );
}

