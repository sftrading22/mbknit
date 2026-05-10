"use client"

import { Factory, Scissors, Layers, Clock, Users, Settings } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"

const capabilities = [
  {
    icon: Factory,
    title: "Production Capacity",
    description: "48 production lines with average monthly capacity of ~1.41M pieces across basic, semi-critical and critical programs.",
    stats: "1.41M pcs/month"
  },
  {
    icon: Scissors,
    title: "In-House Cutting",
    description: "Advanced cutting section supported by CAD marker, pattern cutter and scanner for precision and efficiency.",
    stats: "CAD Integrated"
  },
  {
    icon: Layers,
    title: "Backward Linkage",
    description: "Strong backward linkage through partner composite, dyeing, printing and finishing units for full control.",
    stats: "Full Integration"
  },
  {
    icon: Clock,
    title: "Lead Time",
    description: "Structured lead time of 45-90 days depending on program complexity, ensuring reliable delivery schedules.",
    stats: "45-90 Days"
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    description: "1,115+ skilled professionals supporting stable production output with quality-focused manufacturing.",
    stats: "1,115+ Team"
  },
  {
    icon: Settings,
    title: "Modern Machinery",
    description: "754 machines including Juki, Pegasus, Brother and Hikai for versatile production capabilities.",
    stats: "754 Machines"
  },
]

const capacityMix = [
  { type: "Basic", capacity: "2.187M", description: "High-volume essential knits" },
  { type: "Semi-Critical", capacity: "0.9M", description: "Mid-complexity programs" },
  { type: "Critical", capacity: "0.7M", description: "Complex, detail-oriented" },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="py-16 sm:py-24 lg:py-32 bg-muted overflow-hidden">
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
            Manufacturing Capabilities
          </motion.p>
          <motion.h2 
            variants={fadeInUp}
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance"
          >
            Built for Scale, Designed for Quality
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base"
          >
            Our integrated manufacturing setup combines modern infrastructure with 
            proven processes to deliver consistent results at scale.
          </motion.p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {capabilities.map((capability) => (
            <motion.div
              key={capability.title}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-card rounded-xl p-6 sm:p-8 border border-border hover:shadow-xl hover:border-accent/20 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                <capability.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                <h3 className="font-semibold text-base sm:text-lg text-foreground">{capability.title}</h3>
                <span className="text-[10px] sm:text-xs font-medium bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full whitespace-nowrap self-start">
                  {capability.stats}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Capacity Mix */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-16 bg-card rounded-xl border border-border p-6 sm:p-8 lg:p-12 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center relative">
            Monthly Production Capacity Mix
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 relative">
            {capacityMix.map((item, index) => (
              <motion.div 
                key={item.type} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center relative"
              >
                {index > 0 && (
                  <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border" />
                )}
                <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">{item.capacity}</p>
                <p className="text-base sm:text-lg font-semibold text-foreground mt-2">{item.type}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
