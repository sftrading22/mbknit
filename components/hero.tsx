"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const stats = [
  { value: "1992", label: "Established" },
  { value: "1.41M", label: "Monthly Capacity" },
  { value: "48", label: "Production Lines" },
  { value: "1,115+", label: "Team Members" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/factory-hero.jpg"
          alt="MB Knit Fashion factory production floor"
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Cinematic Overlays (Max 50% Intensity) */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-[100px] hidden lg:block"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] hidden lg:block"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32 lg:px-8 lg:py-40 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-accent" />
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Established 1992 — Bangladesh
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] text-balance"
          >
            Precision Knit <br className="hidden md:block" /> 
            <span className="text-accent italic font-light">Manufacturing</span> <br className="hidden md:block" />
            for Global Brands
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 sm:mt-8 text-lg sm:text-xl leading-relaxed text-white/70 max-w-2xl font-light"
          >
            100% export-oriented garment manufacturing facility delivering consistent,
            high-volume retail programs for EU, UK and U.S. markets with a 30+ year
            track record of excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg group rounded-full"
            >
              <Link href="/capabilities">
                Our Capabilities
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-md h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg rounded-full"
            >
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 sm:mt-24 lg:mt-32 grid grid-cols-2 gap-8 lg:grid-cols-4 p-8 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="relative text-center sm:text-left"
              >
                <p className="font-serif text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-accent/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent/60 vertical-text">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
