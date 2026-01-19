import Header from "../../components/Header"
import { ActionsButtons } from "../../components/ActionsButtons";
import { Footer } from "../../components/Footer";

import BgYellowBagEdu from "../../assets/bg-yellowbagedu.png"

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
              />
            );
          })}
        </main>    
      </div>
      <Footer />  
    </div>
  )
}  