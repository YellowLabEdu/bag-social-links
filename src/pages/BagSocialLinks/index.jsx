import Header from "../../components/Header"
import { ActionsButtons } from "../../components/ActionsButtons";
import { Footer } from "../../components/Footer";

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
    <>
      <Header />
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
      <Footer />      
    </>
  )
}  