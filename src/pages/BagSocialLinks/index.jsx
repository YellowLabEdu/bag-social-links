import { useState } from "react";
import Header from "../../components/Header"
import { ActionsButtons } from "../../components/ActionsButtons";
import { Footer } from "../../components/Footer";
import { ModalBag } from "../../components/ModalsDark/ModalBag";

import BgYellowBagEdu from "../../assets/bg-yellowbagedu.png"
import IconCircle from "../../assets/icon-circle.svg"

const actions = [
    {
        as: 'a',
        label: 'Experiência YellowBagEdu',
        href: 'https://forms.gle/VNJrn1twk2L1gYiBA'
    },
    {
        as: 'a',
        label: 'Movimento Social',
        href: 'https://whatsapp.com/channel/0029VbAjLtbLtOjLVcWJO12o'
    },
    {   
        as: 'button',
        label: 'YellowBagEdu',
    },
    {
        as: 'button',
        label: 'Uniões & Parcerias',
    }
];

export default function BagSocialLinks() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gradient-01 w-98 h-230 flex flex-col justify-center items-center gap-6 m-auto">
      <Header />
      <div className="relative">
        <img className="z-0 top-0 -translate-y-20 absolute pointer-events-none " src={BgYellowBagEdu} alt="Background de formas geométricas da YellowBagEdu" />
        <main className="flex flex-col items-center justify-center gap-8">
          {actions.map((action) => {
            return (
                <ActionsButtons
                  key={action.label}
                  as={action.as}
                  href={action.href}
                  label={action.label}
                  onClick= {() => action.onClick = setOpen(true)}
                />
            );
          })}
          <ModalBag 
            isOpen={open} 
            onClose={() => setOpen(false)} 
          >          
            <div className="bg-(--color-white) w-84 h-86 rounded-2xl flex flex-col items-center justify-start gap-4">
              <button
                className="self-end cursor-pointer"
                onClick={() => setOpen(false)}
              >
                 <img src={IconCircle} alt="ícone para sair do Modal" />
              </button>
              <div className=" w-80 flex flex-col items-center gap-8 p-4">
                <h2 className="text-(--color-color-dark-gray) text-xl font-semibold">Sobre a YellowBagEdu</h2>
                <p className="text-(--color-color-dark-gray) text-sm text-justify">
                  Somos uma Startup da Região Norte do Brasil que inova no ensino do Pensamento Computacional, 
                  unindo inclusão, criatividade e acessibilidade. Nossa missão é clara: todos merecem aprender tecnologia de forma prática e intuitiva.  
                  Preparamos seu(sua) filho(a) para o futuro digital. <br /> <br />
                </p>
              </div>
              <button
              className="w-52 h-12 bg-(--color-tech-blue-light) rounded-2xl 
              text-(--color-white) font-semibold hover:scale-95 transition-transform duration-200 cursor-pointer"
              onClick={() => window.open('https://www.instagram.com/yellowbagedu/', '_blank', 'noopener,noreferrer')}
              > Saiba Mais</button>
            </div>
            <button
              className="w-52 h-12 bg-red-500 rounded-2xl 
              text-(--color-white) font-semibold hover:scale-95 transition-transform duration-200 cursor-pointer"
              onClick={() => setOpen(false)}
              > Sair </button>
          </ModalBag>  
        </main>    
      </div>  
      <Footer />  
    </div>
  )
}  