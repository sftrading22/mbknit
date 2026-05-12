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

import { Globe2 } from "lucide-react"

const products = [
  {
    category: "Jersey",
    items: ["T-Shirts", "Polo Shirts", "Tank Tops", "Long Sleeves"],
    description: "Premium single jersey knits for everyday essentials and high-volume retail programs."
  },
  {
    category: "Fleece",
    items: ["Hoodies", "Sweatshirts", "Joggers", "Crew Necks"],
    description: "Comfortable fleece garments optimized for loungewear, activewear and fashion retail."
  },
  {
    category: "Essential Knits",
    items: ["Underwear", "Loungewear", "Basics", "Nightwear"],
    description: "High-volume essential knit programs delivering consistency and comfort at scale."
  },
]

const markets = [
  { region: "European Union", Flag: FlagEU, info: "Strategic supply to 27 nations" },
  { region: "United Kingdom", Flag: FlagUK, info: "Core partner for UK retail" },
  { region: "United States",  Flag: FlagUS, info: "High-volume US retail programs" },
]

export function Products() {
  return (
    <section id="products" className="py-20 sm:py-32 lg:py-40 bg-background overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]">
        <svg width="100%" height="100%">
          <pattern id="dotPattern" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-24"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-6 bg-accent" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Product Categories
            </p>
            <div className="h-px w-6 bg-accent" />
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance leading-[1.2]"
          >
            Specialized in <span className="text-accent italic font-light">Knit Excellence</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg font-light max-w-2xl mx-auto"
          >
            Our expertise spans across specialized knit categories, delivering quality 
            garments that meet the rigorous standards of global retail programs.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          {products.map((product) => (
            <motion.div
              key={product.category}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-card rounded-2xl p-8 sm:p-10 border border-border/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {product.category}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-8 font-light leading-relaxed">
                {product.description}
              </p>
              
              <ul className="space-y-4">
                {product.items.map((item) => (
                  <li key={item} className="text-foreground font-medium flex items-center gap-3 text-sm sm:text-base">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Markets Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 sm:mt-40 lg:mt-56"
        >
          <div className="grid lg:grid-cols-2 gap-16 sm:gap-24 items-center">
            <div>
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-accent" />
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-accent">
                  Global Footprint
                </p>
              </motion.div>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Serving the <span className="text-accent italic font-light">World's Leading</span> Retailers
              </h2>
              
              <p className="mt-8 text-muted-foreground leading-relaxed text-base sm:text-lg font-light">
                Our export network spans across three major continents, maintaining 
                long-term partnerships with premier retailers in Europe, the United Kingdom, 
                and the United States.
              </p>
              
              <div className="mt-12 space-y-6">
                {markets.map((market, index) => (
                  <motion.div
                    key={market.region}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-6 p-4 rounded-2xl bg-card border border-border/60 hover:border-accent/20 hover:shadow-md transition-all group"
                  >
                    <div className="w-16 h-10 sm:w-20 sm:h-12 rounded-lg overflow-hidden flex-shrink-0 shadow-sm border border-border/40 group-hover:scale-105 transition-transform duration-300">
                      <market.Flag className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground group-hover:text-accent transition-colors">{market.region}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground font-light">{market.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual Globe element */}
            <div className="relative">
              <div className="aspect-square relative rounded-full bg-primary/5 p-12 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/20 animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-8 rounded-full border border-primary/20 animate-[spin_40s_linear_infinite_reverse]" />
                
                <div className="relative z-10 text-center">
                  <div className="relative mb-6 mx-auto w-24 h-24 sm:w-32 sm:h-32">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-accent/40 animate-[spin_120s_linear_infinite]">
                      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                      <path d="M50 2 A48 48 0 0 1 50 98 A48 48 0 0 1 50 2" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      <path d="M2 50 A48 48 0 0 1 98 50 A48 48 0 0 1 2 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      {/* Stylized Continents */}
                      <path d="M30 35c5-2 10-5 15-2s8 8 5 12-10 5-15 2-8-8-5-12zM65 45c5-2 10-5 15-2s8 8 5 12-10 5-15 2-8-8-5-12zM40 65c5-2 10-5 15-2s8 8 5 12-10 5-15 2-8-8-5-12z" fill="currentColor" opacity="0.4" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Globe2 className="h-10 w-10 sm:h-12 sm:w-12 text-accent/60" />
                    </div>
                  </div>
                  <div className="font-serif text-6xl sm:text-7xl font-bold text-primary/80 leading-none">3</div>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-accent mt-2">Continents</p>
                </div>

                {/* Floating flag indicators */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 -right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-2xl flex items-center justify-center p-2.5 sm:p-3 border border-border"
                >
                  <FlagEU className="w-full h-auto rounded-sm" />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-1/4 -left-4 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white shadow-2xl flex items-center justify-center p-2 sm:p-3 border border-border"
                >
                  <FlagUK className="w-full h-auto rounded-sm" />
                </motion.div>
                <motion.div 
                  animate={{ x: [0, 15, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-2xl flex items-center justify-center p-2.5 sm:p-3 border border-border"
                >
                  <FlagUS className="w-full h-auto rounded-sm" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
