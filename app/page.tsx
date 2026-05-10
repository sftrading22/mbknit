import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Capabilities } from "@/components/capabilities"
import { Products } from "@/components/products"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Products />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
