import Header from "../../components/Header"
import { ActionsButtons } from "../../components/ActionsButtons";

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
    <div className="sm:w-104 h-230 flex flex-col justify-center items-center 
    gap-12">
      <Header />
      <main className="flex flex-col items-center gap-7 justify-center mt-4 mr-auto ml-auto mb-2">
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
  )
}  