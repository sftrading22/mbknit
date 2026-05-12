import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Certifications } from "@/components/certifications"

export const metadata: Metadata = {
  title: "Certifications | MB Knit Fashion Ltd.",
  description: "RSC/ACCORD certified (ID 24201). MB Knit upholds the highest international standards for building safety, worker welfare and quality management.",
}

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Certifications & Compliance"
        title="Committed to Global Standards"
        description="RSC/ACCORD certified operations with rigorous compliance across building safety, worker welfare, environmental standards and ethical manufacturing."
      />
      <Certifications />
    </>
  )
}
