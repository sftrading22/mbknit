"use client"

import { useEffect, useRef, useState } from "react"
import { Factory, Scissors, Layers, Clock, Users, Settings } from "lucide-react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"

// --------------- CounterUp ---------------
function parseValue(raw: string): { number: number; prefix: string; suffix: string } {
  // e.g. "2.187M", "0.9M", "0.7M"
  const match = raw.match(/^([^\d]*?)([\d.]+)([^\d.]*)$/)
  if (!match) return { number: 0, prefix: "", suffix: raw }
  return { number: parseFloat(match[2]), prefix: match[1], suffix: match[3] }
}

function CounterUp({ value, className }: { value: string; className?: string }) {
  const { number, prefix, suffix } = parseValue(value)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20, mass: 1 })
  const [display, setDisplay] = useState("0")

  useEffect(() => {
    if (inView) motionVal.set(number)
  }, [inView, number, motionVal])

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => {
      // preserve original decimal places
      const decimals = (value.split(".")[1] ?? "").replace(/[^\d]/g, "").length
      setDisplay(v.toFixed(decimals))
    })
    return unsubscribe
  }, [spring, value])

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  )
}
// -----------------------------------------

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
    <section id="capabilities" className="py-20 sm:py-32 lg:py-40 bg-muted/30 overflow-hidden relative">
      {/* Decorative background blur */}
      <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

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
              Manufacturing Strength
            </p>
            <div className="h-px w-6 bg-accent" />
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance leading-[1.2]"
          >
            Built for Scale, <span className="text-accent italic font-light">Designed for Quality</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg font-light max-w-2xl mx-auto"
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {capabilities.map((capability) => (
            <motion.div
              key={capability.title}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card rounded-2xl p-8 border border-border/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-accent/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Card hover effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full translate-x-12 -translate-y-12 transition-transform duration-500 group-hover:translate-x-0 group-hover:-translate-y-0" />

              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-accent/10 transition-colors duration-300">
                <capability.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              
              <div className="flex flex-col gap-2 mb-4">
                <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">{capability.title}</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full w-fit">
                  {capability.stats}
                </span>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
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
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 sm:mt-32 bg-primary rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-white/10 rounded-bl-3xl translate-x-8 -translate-y-8" />
          
          <div className="relative z-10">
            <div className="flex flex-col items-center mb-12 sm:mb-16">
              <p className="text-accent text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-4">Production Volume</p>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
                Monthly Capacity Mix
              </h3>
            </div>

            <div className="grid sm:grid-cols-3 gap-12 sm:gap-8 relative">
              {capacityMix.map((item, index) => (
                <motion.div
                  key={item.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center group"
                >
                  <CounterUp
                    value={item.capacity}
                    className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-accent mb-4 block group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="h-px w-8 bg-white/20 mx-auto mb-4" />
                  <p className="text-lg sm:text-xl font-bold text-white mb-2">{item.type}</p>
                  <p className="text-sm text-primary-foreground/60 font-light leading-relaxed max-w-[200px] mx-auto">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
