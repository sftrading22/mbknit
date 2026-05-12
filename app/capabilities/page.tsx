import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Capabilities } from "@/components/capabilities"

export const metadata: Metadata = {
  title: "Capabilities | MB Knit Fashion Ltd.",
  description: "48 production lines, 1.41M pcs/month capacity, 754 machines. Explore MB Knit's full manufacturing capabilities and integrated production setup.",
}

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing Capabilities"
        title="Built for Scale, Designed for Quality"
        description="48 production lines, 1.41M pieces monthly capacity, and 754 modern machines — our integrated setup delivers consistency at scale."
      />
      <Capabilities />
    </>
  )
}
