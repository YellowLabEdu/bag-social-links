import { useState } from "react";
import Header from "../../components/Header"
import { ActionsButtons } from "../../components/ActionsButtons";
import { Footer } from "../../components/Footer";
import { ModalBag } from "../../components/Modals/ModalBag";
import { Modal } from "../../components/Modals/ModalUnionAndPartnerships";

import BgYellowBagEdu01 from "../../assets/bg-ybedu-01.svg"
import BgYellowBagEdu02 from "../../assets/bg-ybedu-02.svg"
import IconCircle from "../../assets/icon-circle.svg"
import LaFoca from "../../assets/logo-lafoca.svg"
import SHMusic from "../../assets/logo-shmusic.svg"
import toggleImg from "../../assets/Switch.svg";


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
  const [Mode, setMode] = useState(true);

  return (
      <div className={Mode ? "bg-gradient-02 min-h-240 md:min-h-260 md:scale-130 lg:scale-100 flex items-center justify-center gap-6" : "bg-gradient-01 min-h-240 md:min-h-260 md:scale-130 lg:scale-100 flex items-center justify-center gap-6"}  >
        <img className="hidden lg:block lg:scale-90" src={BgYellowBagEdu01} alt="Background YellowBagEdu" />
         <div className="flex flex-col items-center justify-center gap-8 ">
          <Header 
          color={Mode ? "text-(--color-color-dark-gray)" : "text-(--color-white)"}
          />
          <button className={Mode ? "flex items-center justify-center active:scale-95 transition rotate-y-0" : "flex items-center justify-center active:scale-95 transition rotate-y-180"} aria-label="Alternar Tema"
          onClick={() => {
            console.log("clicou");
            setMode(!Mode);
          }}
          >
            <img
              src={toggleImg}
              alt="Toggle de Temas"
              className="w-17 h-12"/>
          </button>
          <main className="flex flex-col items-center justify-center gap-6">
            {actions.map((action) => {
              return (
                  <ActionsButtons
                    key={action.label}
                    as={action.as}
                    href={action.href}
                    label={action.label}
                    onClick={() => action.id === 1 ? setOpen01(true) : setOpen02(true)}
                    color={Mode ? "bg-(--color-tech-blue-light) text-(--color-white)" : "bg-(--color-color-yellow) text-(--color-color-dark-gray)"}
                  />
              );
            })} 
          </main>   
        <Footer
          color={Mode ? "bg-(--color-tech-blue-light)" : "bg-(--color-color-yellow)"}
        />  
      </div>
      <img className="hidden lg:block lg:scale-90" src={BgYellowBagEdu02} alt="Background YellowBagEdu" />  
      {open01 && <ModalBag isOpen={open01} onClose={() => setOpen01(false)} color={Mode ?  "bg-(--color-color-yellow)" : "bg-(--color-blue-dark)"}>         
    <div className="bg-(--color-white) w-84 h-88 rounded-2xl flex flex-col items-center justify-center gap-6">
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
    { open02 && <Modal isOpen={open02} onClose={() => setOpen02(false)} color={Mode ?  "bg-(--color-color-yellow)" : "bg-(--color-blue-dark)"}>
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