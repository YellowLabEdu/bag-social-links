import {Link, BrowserRouter} from "react-router-dom";
import IconEmail from "./assets/icon-gmail.png";
import IconWhatsApp from "./assets/icon-whatsapp.png";
import IconInstagram from "./assets/icon-instagram.png";
import iconLinkedin from "./assets/icon-linkedin.png";

export default function Buttons() {
    return (
      <>
        <BrowserRouter>
            <Link to="#" target="_blank" className="flex items-center justify-center sm:text-[20px] 
            text-center font-Poppins font-medium bg-(--color-color-yellow) 
            w-80 h-16 rounded-3xl p-4 cursor-pointer shadow-lg opacity-95 hover:font-bold hover:opacity-100">Experiência YellowBagEdu</Link>
            <Link to="#" target="_blank" className="flex items-center justify-center sm:text-[20px] 
            text-center font-Poppins font-medium bg-(--color-color-yellow) 
            w-80 h-16 rounded-3xl p-4 cursor-pointer shadow-lg opacity-95 hover:font-bold hover:opacity-100">Movimento Social</Link>
            <Link to="#" target="_blank" className="flex items-center justify-center sm:text-[20px] 
            text-center font-Poppins font-medium bg-(--color-color-yellow) 
            w-80 h-16 rounded-3xl p-4 cursor-pointer shadow-lg opacity-95 hover:font-bold hover:opacity-100">YellowBagEdu</Link>
            <Link to="#" target="_blank" className="flex items-center justify-center sm:text-[20px] 
            text-center font-Poppins font-medium bg-(--color-color-yellow) 
            w-80 h-16 rounded-3xl p-4 cursor-pointer shadow-lg opacity-95 hover:font-bold hover:opacity-100">Uniões & Parcerias</Link>
            <footer className="sm: w-64 h-16 flex items-center justify-center 
            gap-8 rounded-3xl bg-(--color-color-yellow) border-4 border-solid 
            border-(--color-color-light-white) pr-1 pl-1 pt-0.5 pb-0.5 shadow-lg 
            hover:scale-95 transition-transform duration-200">
                <Link className="cursor-pointer hover:scale-125" to="#" target="_blank" >
                    <img src={IconEmail} alt="Logotipo Gmail" />
                </Link>
                <Link className="cursor-pointer hover:scale-125" to="#" target="_blank" >
                    <img src={IconWhatsApp} alt="Logotipo WhatsApp" />
                </Link>
                <Link className="cursor-pointer hover:scale-125" to="#" target="_blank" >
                    <img src={IconInstagram} alt="Logotipo Instagram" />
                </Link>
                <Link className="cursor-pointer hover:scale-125" to="#" target="_blank" >
                    <img src={iconLinkedin} alt="Logotipo LinkedIn" />
                </Link>
            </footer>
        </BrowserRouter>
      </>  
    );
}

