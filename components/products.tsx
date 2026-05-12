"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"

// ── Inline SVG Flags ──────────────────────────────────────────────
function FlagEU({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={className}>
      <rect width="900" height="600" fill="#003399" />
      {/* 12 gold stars arranged in a circle */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180)
        const cx = 450 + 150 * Math.cos(angle)
        const cy = 300 + 150 * Math.sin(angle)
        return (
          <polygon
            key={i}
            points="0,-18 4.5,-6.2 17,-6.2 7,2.4 11,15 0,8 -11,15 -7,2.4 -17,-6.2 -4.5,-6.2"
            transform={`translate(${cx},${cy})`}
            fill="#FFCC00"
          />
        )
      })}
    </svg>
  )
}

function FlagUK({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className={className}>
      <clipPath id="uk-clip">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      {/* diagonals white */}
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      {/* diagonals red */}
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#uk-clip)" />
      {/* cross white */}
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      {/* cross red */}
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  )
}

function FlagUS({ className }: { className?: string }) {
  const stripes = Array.from({ length: 13 })
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 100" className={className}>
      {stripes.map((_, i) => (
        <rect key={i} x="0" y={i * (100 / 13)} width="190" height={100 / 13}
          fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"} />
      ))}
      {/* canton */}
      <rect x="0" y="0" width="76" height={100 * 7 / 13} fill="#3C3B6E" />
      {/* 50 stars — simplified as a 5×9 + 4×6 grid */}
      {Array.from({ length: 9 }).map((_, row) =>
        Array.from({ length: row % 2 === 0 ? 6 : 5 }).map((_, col) => (
          <circle key={`${row}-${col}`}
            cx={row % 2 === 0 ? 5.5 + col * 12.5 : 11.75 + col * 12.5}
            cy={4.5 + row * 5.7}
            r="2"
            fill="#FFFFFF"
          />
        ))
      )}
    </svg>
  )
}
// ─────────────────────────────────────────────────────────────────

const products = [
  {
    category: "Jersey",
    items: ["T-Shirts", "Polo Shirts", "Tank Tops", "Long Sleeves"],
    description: "Premium single jersey knits for everyday essentials"
  },
  {
    category: "Fleece",
    items: ["Hoodies", "Sweatshirts", "Joggers", "Crew Necks"],
    description: "Comfortable fleece garments for loungewear and activewear"
  },
  {
    category: "Essential Knits",
    items: ["Underwear", "Loungewear", "Basics", "Nightwear"],
    description: "High-volume essential knit programs for retail"
  },
]

const markets = [
  { region: "European Union", Flag: FlagEU },
  { region: "United Kingdom", Flag: FlagUK },
  { region: "United States",  Flag: FlagUS },
]

export function Products() {
  return (
    <section id="products" className="py-16 sm:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs sm:text-sm font-medium uppercase tracking-[0.15em] text-accent mb-3 sm:mb-4"
          >
            Product Categories
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance"
          >
            Specialized in Knit Excellence
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base"
          >
            Our expertise spans across jersey, fleece, and essential knit categories,
            delivering quality garments for global retail programs.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.category}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-muted rounded-xl p-6 sm:p-8 hover:bg-card hover:shadow-xl border border-transparent hover:border-border transition-all duration-300"
            >
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 relative">
                {product.category}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 sm:mb-6 relative">
                {product.description}
              </p>
              <ul className="space-y-2 sm:space-y-2.5 relative">
                {product.items.map((item) => (
                  <li key={item} className="text-foreground flex items-center gap-2.5 sm:gap-3 text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Markets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground mb-6 sm:mb-8">
            Serving Global Markets
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10">
            {markets.map((market, index) => (
              <motion.div
                key={market.region}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -2 }}
                className="flex items-center gap-3 bg-muted px-5 sm:px-6 py-3 sm:py-4 rounded-full border border-border hover:border-accent/30 transition-colors"
              >
                <span className="w-9 h-6 sm:w-11 sm:h-7 rounded overflow-hidden flex-shrink-0 shadow-sm border border-border/40">
                  <market.Flag className="w-full h-full" />
                </span>
                <span className="text-sm sm:text-base font-medium text-foreground">{market.region}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
