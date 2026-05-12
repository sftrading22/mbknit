"use client"

import { motion } from "framer-motion"
import { Leaf, Recycle, Droplets, Wind, ShieldCheck } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"

const sustainabilityGoals = [
  {
    title: "Eco-Friendly Materials",
    description: "Prioritizing organic cotton and recycled polyester to reduce our environmental footprint.",
    icon: Leaf,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Water Conservation",
    description: "Implementing advanced ETP systems and water-efficient dyeing processes.",
    icon: Droplets,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Energy Efficiency",
    description: "Utilizing LED lighting and energy-efficient machinery throughout our facility.",
    icon: Wind,
    color: "bg-cyan-500/10 text-cyan-500",
  },
  {
    title: "Waste Management",
    description: "Rigorous fabric waste recycling and zero-waste initiatives in production.",
    icon: Recycle,
    color: "bg-emerald-500/10 text-emerald-500",
  },
]

export function Sustainability() {
  return (
    <section id="sustainability" className="py-20 sm:py-32 lg:py-40 bg-muted/30 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 sm:gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-accent">
                Our Commitment
              </p>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance leading-[1.2]"
            >
              Responsible Manufacturing for a <br />
              <span className="text-accent italic font-light">Sustainable Future</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="mt-8 text-muted-foreground leading-relaxed text-base sm:text-lg font-light max-w-2xl"
            >
              At MB Knit, sustainability isn't just a goal—it's woven into our operations. 
              We are dedicated to reducing our environmental impact while maintaining 
              the highest standards of ethical production and worker welfare.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-sm">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span className="text-xs font-bold uppercase tracking-widest text-foreground">OEKO-TEX Standard 100</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-sm">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span className="text-xs font-bold uppercase tracking-widest text-foreground">GOTS Certified</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {sustainabilityGoals.map((goal) => (
              <motion.div
                key={goal.title}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="bg-card rounded-2xl p-6 sm:p-8 border border-border/60 hover:border-accent/20 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${goal.color}`}>
                  <goal.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {goal.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
