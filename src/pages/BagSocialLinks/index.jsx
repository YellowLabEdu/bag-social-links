import { useState } from "react";
import Header from "../../components/Header";
import { ActionsButtons } from "../../components/ActionsButtons";
import { Footer } from "../../components/Footer";
import { ModalBag } from "../../components/Modals/ModalBag";
import { Modal } from "../../components/Modals/ModalUnionAndPartnerships";

import toggleImg from "../../assets/Switch.svg";
import BgYellowBagEdu01 from "../../assets/bg-ybedu-01.svg";
import BgYellowBagEdu02 from "../../assets/bg-ybedu-02.svg";
import IconCircle from "../../assets/icon-circle.svg";
import LaFoca from "../../assets/logo-lafoca.svg";
import SHMusic from "../../assets/logo-shmusic.svg";

const actions = [
    {
    as: "a",
    label: "Ajude a mapear a educação tecnológica",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSesumxy3eq8Yrp6mEUKT9Ag_ZMW_7DfyxJ5ZFQbKUm7SgNgjw/viewform",
  },
  /*
  {
    as: "a",
    label: "Agende uma experiência grátis",
    href: "https://forms.gle/VNJrn1twk2L1gYiBA",
  },
  */
  {
    as: "a",
    label: "Jornada CriAnima",
    href: "https://canva.link/2n9gyil4cz093tg",
  },
  {
    as: "a",
    label: "Movimento Social",
    href: "https://whatsapp.com/channel/0029VbAjLtbLtOjLVcWJO12o",
  },
  {
    as: "button",
    id: 1,
    label: "A YellowBagEdu",
  },
  {
    as: "button",
    id: 2,
    label: "Uniões e parcerias",
  },
];

export default function BagSocialLinks() {
  const [open01, setOpen01] = useState(false);
  const [open02, setOpen02] = useState(false);
  const [theme, setTheme] = useState(false);

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center px-4 py-8 sm:px-6 sm:py-12 md:py-16 gap-4 lg:gap-8 xl:gap-12 overflow-x-hidden transition-colors duration-300 ${
        theme ? "bg-gradient-02" : "bg-gradient-01"
      }`}
    >
      <img
        className="hidden lg:block max-w-2xs xl:max-w-xs shrink-0 select-none pointer-events-none"
        src={BgYellowBagEdu01}
        alt="Background YellowBagEdu"
      />
      <div className="w-full max-w-md md:max-w-xl flex flex-col items-center justify-center gap-6 sm:gap-8 mx-auto">
        <Header
          Color={
            theme ? "text-(--color-color-dark-gray)" : "text-(--color-white)"
          }
        />
        <button
          className={`flex items-center justify-center my-1 sm:my-2 active:scale-95 transition-transform duration-200 cursor-pointer ${
            theme ? "rotate-y-0" : "rotate-y-180"
          }`}
          aria-label="Alternar Tema"
          onClick={() => {
            console.log("clicou");
            setTheme(!theme);
          }}
        >
          <img src={toggleImg} alt="Toggle de Temas" className="w-17 h-12" />
        </button>
        <main className="w-full flex flex-col items-center justify-center gap-4 sm:gap-5 my-2">
          {actions.map((action) => {
            return (
              <ActionsButtons
                key={action.label}
                as={action.as}
                href={action.href}
                label={action.label}
                onClick={() =>
                  action.id === 1 ? setOpen01(true) : setOpen02(true)
                }
                Color={
                  theme
                    ? "bg-(--color-tech-blue-light) text-(--color-white)"
                    : "bg-(--color-color-yellow) text-(--color-color-dark-gray)"
                }
              />
            );
          })}
        </main>
        <div className="mt-2 sm:mt-4 flex justify-center w-full">
          <Footer
            Color={
              theme ? "bg-(--color-tech-blue-light)" : "bg-(--color-color-yellow)"
            }
          />
        </div>
      </div>
      <img
        className="hidden lg:block max-w-2xs xl:max-w-xs shrink-0 select-none pointer-events-none"
        src={BgYellowBagEdu02}
        alt="Background YellowBagEdu"
      />
      {open01 && (
        <ModalBag
          isOpen={open01}
          onClose={() => setOpen01(false)}
          Color={theme ? "bg-(--color-color-yellow)" : "bg-(--color-blue-dark)"}
        >
          <div className="bg-white w-full h-78 max-w-sm rounded-2xl flex flex-col items-center justify-center sm:p-6 shadow-xl">
            <button
              className="self-end cursor-pointer p-1 mb-2 hover:opacity-75 transition-opacity"
              onClick={() => setOpen01(false)}
              aria-label="Fechar modal"
            >
              <img src={IconCircle} alt="ícone para sair do Modal" />
            </button>
            <div className="w-full flex flex-col items-center justify-start sm:gap-8">
              <div className="w-90 flex flex-col items-center sm:gap-6 text-center">
                <h2 className="text-(--color-color-dark-gray) text-xl font-semibold">
                  Sobre a YellowBagEdu
                </h2>
                <p className="text-(--color-color-dark-gray) text-sm text-justify leading-relaxed">
                  Somos uma Startup da Região Norte do Brasil que inova no
                  ensino do Pensamento Computacional, unindo inclusão,
                  criatividade e acessibilidade. Nossa missão é clara: todos
                  merecem aprender tecnologia de forma prática e intuitiva.
                  Preparamos seu(sua) filho(a) para o futuro digital.
                </p>
              </div>
              <button
                className="w-52 h-14 bg-(--color-tech-blue-light) rounded-2xl text-white font-semibold hover:scale-95 transition-transform duration-200 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/yellowbagedu/",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                >
              SAIBA MAIS
            </button>  
            </div>
          </div>
        </ModalBag>
      )}
      {open02 && (
        <Modal
          isOpen={open02}
          onClose={() => setOpen02(false)}
          Color={theme ? "bg-(--color-color-yellow)" : "bg-(--color-blue-dark)"}
        >
          <div className="bg-white w-full max-w-sm rounded-2xl flex flex-col gap-6 p-5 sm:p-6 shadow-xl">
            <button
              className="self-end cursor-pointer p-1 hover:opacity-75 transition-opacity"
              onClick={() => setOpen02(false)}
              aria-label="Fechar modal"
            >
              <img src={IconCircle} alt="ícone para sair do Modal" />
            </button>
            <div className="flex justify-center items-center gap-8 py-2">
              <div className="flex flex-col justify-center items-center gap-4">
                <a
                  className="cursor-pointer hover:scale-110 transition-transform duration-200"
                  href="https://www.instagram.com/lafocameta/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LaFoca} alt={`LaFoca logo`} />
                </a>
                <span className="text-sm font-medium">@LAFoca</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <a
                  className="cursor-pointer hover:scale-110 transition-transform duration-200"
                  href="https://www.instagram.com/shmusic.escola2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={SHMusic} alt={`SHMusic logo`} />
                </a>
                <span className="text-sm font-medium">@SHMusic</span>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}