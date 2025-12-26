import Buttons from "../../components/Buttons"
import Header from "../../components/Header"

export default function BagSocialLinks() {
  return (
    <section className="sm:w-104 h-230 flex flex-col items-center justify-center gap-16">
      <Header />
      <main className="sm:mt-9 flex flex-col items-center justify-center gap-6.5">
        <Buttons />
      </main>
    </section>
  )
}  