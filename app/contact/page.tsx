import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Contact | MB Knit Fashion Ltd.",
  description: "Get in touch with MB Knit Fashion. Contact our business development team to discuss your production requirements and partnership opportunities.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Discuss Your Requirements"
        description="Ready to explore a partnership? Our team is here to discuss your production needs and how we can support your programs."
      />
      <Contact />
    </>
  )
}
