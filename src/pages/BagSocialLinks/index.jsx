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

const unionsAndPartnerships = [
    {
        id: 0,
        name: 'LAFoca',
        img: LaFoca,
        description: 'O Laboratório de Abordagens de Ensino Focadas no Aluno (LAFoca) foi fundado em 2017. O grupo é formado por alunos e professores, além de parceiros de outras instituições de ensino.',
        link: 'https://www.instagram.com/lafocameta/'            
      },
      {
        id:   1,
        name: 'SHMusic',
        img: SHMusic,
        description: 'A SHMusic oferece cursos de música para crianças, jovens e adultos, com aulas dinâmicas e acessíveis que estimulam criatividade, desenvolvimento técnico e paixão pela arte.',
        link: 'https://www.instagram.com/shmusic.escola2/', 
      },
];

export default function BagSocialLinks() {
  const [open01, setOpen01] = useState(false);
  const [open02, setOpen02] = useState(false);

  const partnershipsArray = Object.values(unionsAndPartnerships);
  const [currentPartnershipIndex, setCurrentPartnershipIndex] = useState(0);
  const partnership = partnershipsArray[currentPartnershipIndex];

  return (
    <div className="bg-gradient-01 max-w-110 md:max-w-210 lg:max-w-432 min-h-200 md:min-h-320 lg:min-h-200 flex justify-center items-center gap-6">
      <img className="hidden lg:block lg:scale-90" src={BgYellowBagEdu01} alt="Background YellowBagEdu" />
         <div className="flex flex-col items-center justify-center gap-8">
          <Header />
          <img className="z-0 top-0 -translate-y-20 absolute pointer-events-none lg:hidden" src={BgYellowBagEdu} alt="Background de formas geométricas da YellowBagEdu" />
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
      > SAIBA MAIS</button>
    </div>
    <div>
      <button
      className="w-52 h-12 bg-red-500 rounded-2xl 
      text-(--color-white) font-semibold hover:scale-95 transition-transform duration-200 cursor-pointer"
      onClick={() => setOpen01(false)}
      > SAIR </button>
    </div>
    </ModalBag>}
    { open02 && <Modal isOpen={open02} onClose={() => setOpen02(false)}>
      <div className="bg-(--color-white) w-84 h-90 rounded-2xl flex flex-col gap-0.5">
          <button
              className="self-end cursor-pointer"
              onClick={() => setOpen02(false)}
            >
            <img src={IconCircle} alt="ícone para sair do Modal" />
          </button>
          <div key={partnership.id} className="flex flex-col items-center gap-3 px-4">
              <img src={partnership.img} alt={`${partnership.name} logo`} />
              <span>@{partnership.name}</span>
              <p className="text-(--color-color-dark-gray) text-sm text-center pb-2">
                {partnership.description}
              </p>
              <button
              className="w-52 h-12 bg-(--color-tech-blue-light) rounded-2xl 
              text-(--color-white) font-semibold hover:scale-95 transition-transform duration-200 cursor-pointer"
              onClick={() => window.open(partnership.link, '_blank', 'noopener,noreferrer')}
              > SAIBA MAIS </button>
            </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-3">
          <div className="flex flex-row-reverse items-center justify-center gap-2">              
          <button
          className="w-40 h-12 bg-emerald-500 rounded-2xl 
          text-(--color-white) font-semibold hover:scale-95 transition-transform duration-200 cursor-pointer"
            onClick={() =>
              setCurrentPartnershipIndex((prev) => prev + 1 < partnershipsArray.length ? prev + 1 : 0
              )}> PRÓXIMO </button>
              {currentPartnershipIndex > 0 && (
                <button
                  className="w-40 h-12 bg-blue-400 rounded-2xl
                  text-(--color-white) font-semibold hover:scale-95 transition-transform duration-200 cursor-pointer"
                  onClick={() =>
                    setCurrentPartnershipIndex((prev) =>
                      prev - 1 >= 0 ? prev - 1 : partnershipsArray.length - 1
                    )
                  }
                >
                  ANTERIOR
                </button>
              )}
        </div>
        </div>
        <button
          className="w-40 h-12 bg-red-500 rounded-2xl
          text-(--color-white) font-semibold hover:scale-95 transition-transform duration-200 cursor-pointer"
          onClick={() => setOpen02(false)}
          > SAIR </button>
    </Modal>}  
    </div>
  )
}  