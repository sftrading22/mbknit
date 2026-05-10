"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"

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
  { region: "European Union", code: "EU" },
  { region: "United Kingdom", code: "UK" },
  { region: "United States", code: "US" },
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
              {/* Category number */}
              <span className="absolute top-4 right-4 sm:top-6 sm:right-6 text-5xl sm:text-6xl font-serif font-bold text-muted-foreground/10 group-hover:text-accent/10 transition-colors">
                0{index + 1}
              </span>
              
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 relative">
                {product.category}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 sm:mb-6 relative">
                {product.description}
              </p>
              <ul className="space-y-2 sm:space-y-2.5 relative">
                {product.items.map((item) => (
                  <li 
                    key={item} 
                    className="text-foreground flex items-center gap-2.5 sm:gap-3 text-sm sm:text-base"
                  >
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
                <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-xs sm:text-sm text-primary">
                  {market.code}
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
