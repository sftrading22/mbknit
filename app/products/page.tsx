import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Products } from "@/components/products"

export const metadata: Metadata = {
  title: "Products | MB Knit Fashion Ltd.",
  description: "Jersey, Fleece and Essential Knit categories for global retail programs. Serving EU, UK and US markets with premium knit garments.",
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Categories"
        title="Specialized in Knit Excellence"
        description="Our expertise spans jersey, fleece, and essential knit categories — delivering quality garments for global retail programs across three continents."
      />
      <Products />
    </>
  )
}
