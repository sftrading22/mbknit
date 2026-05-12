import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Sustainability } from "@/components/sustainability"
import { Capabilities } from "@/components/capabilities"
import { Products } from "@/components/products"
import { Certifications } from "@/components/certifications"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Sustainability />
      <Capabilities />
      <Products />
      <Certifications />
    </main>
  )
}
