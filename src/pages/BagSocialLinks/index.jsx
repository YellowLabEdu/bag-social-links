import { useState } from "react";
import Header from "../../components/Header"
import { ActionsButtons } from "../../components/ActionsButtons";
import { Footer } from "../../components/Footer";
import { ModalBag } from "../../components/ModalsDark/ModalBag";
import { Modal } from "../../components/ModalsDark/ModalUnionAndPartnerships";

import BgYellowBagEdu from "../../assets/bg-yellowbagedu.png"
import BgYellowBagEdu01 from "../../assets/bg-ybedu1.png"
import BgYellowBagEdu02 from "../../assets/bg-ybedu2.png"
import IconCircle from "../../assets/icon-circle.svg"
import LaFoca from "../../assets/logo-lafoca.svg"
import SHMusic from "../../assets/logo-shmusic.png"


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
        id: 1,
        label: 'YellowBagEdu',
    },
    {
        as: 'button',
        id: 2,
        label: 'Uniões & Parcerias',
    }
];

export default function BagSocialLinks() {
  const [open01, setOpen01] = useState(false);
  const [open02, setOpen02] = useState(false);

  return (
    <div className="bg-gradient-01 max-w-110 md:max-w-210 lg:max-w-432 min-h-screen md:min-h-320 lg:min-h-200 flex justify-center items-center gap-4">
      <img className="hidden lg:block lg:scale-90" src={BgYellowBagEdu01} alt="Background YellowBagEdu" />
         <div className="flex flex-col items-center justify-center gap-8 ">
          <Header />
          <img className="z-0 top-32 absolute pointer-events-none lg:hidden" src={BgYellowBagEdu} alt="Background de formas geométricas da YellowBagEdu" />
          <main className="flex flex-col items-center justify-center gap-6">
            {actions.map((action) => {
              return (
                  <ActionsButtons
                    key={action.label}
                    as={action.as}
                    href={action.href}
                    label={action.label}
                    onClick={() => action.id === 1 ? setOpen01(true) : setOpen02(true)}
                  />
              );
            })} 
          </main>   
        <Footer />  
      </div>
      <img className="hidden lg:block lg:scale-90" src={BgYellowBagEdu02} alt="Background YellowBagEdu" />   
      {open01 && <ModalBag isOpen={open01} onClose={() => setOpen01(false)}>         
    <div className="bg-(--color-white) w-84 h-88 rounded-2xl flex flex-col items-center justify-center gap-8">
      <button
        className="self-end cursor-pointer"
        onClick={() => setOpen01(false)}
      >
        <img src={IconCircle} alt="ícone para sair do Modal" />
      </button>
      <div className=" w-80 flex flex-col items-center gap-8">
        <h2 className="text-(--color-color-dark-gray) text-xl font-semibold">Sobre a YellowBagEdu</h2>
        <p className="text-(--color-color-dark-gray) text-sm text-justify">
          Somos uma Startup da Região Norte do Brasil que inova no ensino do Pensamento Computacional, 
          unindo inclusão, criatividade e acessibilidade. Nossa missão é clara: todos merecem aprender tecnologia de forma prática e intuitiva.  
          Preparamos seu(sua) filho(a) para o futuro digital. <br /> <br />
        </p>
        <button
        className="w-52 h-12 bg-(--color-tech-blue-light) rounded-2xl 
       text-(--color-white) font-semibold hover:scale-95 transition-transform duration-200 cursor-pointer"
        onClick={() => window.open('https://www.instagram.com/yellowbagedu/', '_blank', 'noopener,noreferrer')}
        > SAIBA MAIS</button>
      </div>
    </div>
    </ModalBag>}
    { open02 && <Modal isOpen={open02} onClose={() => setOpen02(false)}>
      <div className="bg-(--color-white) w-80 h-58 rounded-2xl flex flex-col gap-6">
          <button
              className="self-end cursor-pointer"
              onClick={() => setOpen02(false)}
            >
            <img src={IconCircle} alt="ícone para sair do Modal" />
          </button>
          <div  className="flex flex justify-center items-center gap-6">
            <div className="flex flex-col justify-center items-center gap-4">
              <a className="cursor-pointer" href="https://www.instagram.com/lafocameta/" target="_blank" rel="noopener noreferrer">
                <img src={LaFoca} alt={`LaFoca logo`} />
              </a>
              <span>@LAFoca</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <a className="cursor-pointer" href="https://www.instagram.com/shmusic.escola2/" target="_blank" rel="noopener noreferrer">
                <img src={SHMusic} alt={`SHMusic logo`} />
              </a>
              <span>@SHMusic</span>
            </div>
          </div>
        </div>
        </Modal>}
    </div>
  )
}  