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
    <section id="about" className="py-20 sm:py-32 lg:py-40 bg-background overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="relative"
          >
            <div className="relative group">
              <div className="aspect-[4/5] sm:aspect-[4/3] relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                <Image
                  src="/images/production-line.jpg"
                  alt="MB Knit production line"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/20 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-8 -right-4 sm:-right-10 bg-primary p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/10"
              >
                <p className="font-serif text-4xl sm:text-5xl font-bold text-accent">30+</p>
                <p className="text-primary-foreground/70 text-xs sm:text-sm uppercase tracking-widest mt-2 font-semibold">
                  Years of <br /> Excellence
                </p>
              </motion.div>
            </div>

            {/* Decorative frames */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l border-t border-accent/40 rounded-tl-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <div className="h-px w-6 bg-accent" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Legacy & Vision
              </p>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance leading-[1.2]"
            >
              Manufacturing Strength <br />
              <span className="text-accent italic font-light">Built on Consistency</span>
            </motion.h2>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-6 sm:mt-8 space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg font-light"
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
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 sm:mt-12 grid sm:grid-cols-2 gap-4 sm:gap-6"
            >
              {highlights.map((item) => (
                <motion.div 
                  key={item} 
                  variants={staggerItem}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium text-sm sm:text-base leading-tight">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
