"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem, slideInLeft, slideInRight } from "@/lib/animations"

const highlights = [
  "30+ years of proven export experience",
  "90,974 sq. ft. modern production facility",
  "Integrated garment production setup",
  "Strong backward linkage support",
  "RSC/ACCORD certified operations",
]

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="relative"
          >
            <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/production-line.jpg"
                alt="MB Knit production line"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 sm:-right-6 bg-card p-4 sm:p-6 rounded-xl shadow-2xl border border-border max-w-[200px] sm:max-w-xs"
            >
              <p className="font-serif text-3xl sm:text-4xl font-bold text-foreground">30+</p>
              <p className="text-muted-foreground text-sm sm:text-base mt-1">Years of Manufacturing Excellence</p>
            </motion.div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-accent/30 rounded-tl-xl hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <motion.p 
              variants={fadeInUp}
              className="text-xs sm:text-sm font-medium uppercase tracking-[0.15em] text-accent mb-3 sm:mb-4"
            >
              About MB Knit
            </motion.p>
            <motion.h2 
              variants={fadeInUp}
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance leading-tight"
            >
              Manufacturing Strength Built on Consistency
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="mt-4 sm:mt-6 space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base"
            >
              <p>
                MB Knit Fashion Ltd. is a 100% export-oriented knit garment manufacturing 
                facility with a long-standing track record in delivering consistent, 
                high-volume retail programs for EU, UK and U.S. markets.
              </p>
              <p>
                Operating with integrated garment production and strong backward linkage 
                support, MB Knit ensures stable performance across jersey, fleece and 
                essential knit categories.
              </p>
            </motion.div>

            {/* Highlights List */}
            <motion.ul 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3"
            >
              {highlights.map((item) => (
                <motion.li 
                  key={item} 
                  variants={staggerItem}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-accent" />
                  </div>
                  <span className="text-foreground text-sm sm:text-base">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
