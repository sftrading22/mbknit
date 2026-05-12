import { PageHero } from "@/components/page-hero"
import { Sustainability } from "@/components/sustainability"

export const metadata = {
  title: "Sustainability | MB Knit Fashion Ltd.",
  description: "Our commitment to ethical and eco-friendly garment manufacturing.",
}

export default function SustainabilityPage() {
  return (
    <main>
      <PageHero
        eyebrow="Commitment"
        title="Eco-Friendly Manufacturing"
        description="We are dedicated to reducing our environmental impact and promoting ethical production across all operations."
      />
      <Sustainability />
    </main>
  )
}
