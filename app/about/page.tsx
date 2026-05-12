import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { About } from "@/components/about"

export const metadata: Metadata = {
  title: "About Us | MB Knit Fashion Ltd.",
  description: "30+ years of knit garment manufacturing excellence. Learn about MB Knit's history, integrated production facility, and commitment to global quality standards.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MB Knit"
        title="Manufacturing Strength Built on Consistency"
        description="A 100% export-oriented knit garment facility with 30+ years of proven performance delivering to EU, UK and U.S. markets."
      />
      <About />
    </>
  )
}
