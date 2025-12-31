import Buttons from "../../components/Buttons"
import Header from "../../components/Header"
import bgImage from "../../assets/bg-yellowbagedu.png"

export default function BagSocialLinks() {
  return (
    <section className="sm:w-104 h-230 flex flex-col justify-center items-center 
    gap-12">
      <Header />
      <main className="sm:mt-4 flex flex-col items-center justify-center">
        <section className="sm:mt-4 flex flex-col items-center 
        justify-center gap-6.5 z-1">
          <Buttons />
        </section>
        <img src={bgImage} className="sm:block absolute h-150 z-0" 
        alt="Background Image" />
      </main>
    </section>
  )
}  