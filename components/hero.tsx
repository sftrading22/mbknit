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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/factory-hero.jpg"
          alt="MB Knit Fashion factory production floor"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-20 right-10 w-96 h-96 rounded-full border border-white/20 hidden lg:block"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full border border-white/20 hidden lg:block"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32 lg:px-8 lg:py-40 w-full">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-white/60 mb-4 sm:mb-6"
          >
            Established 1992 — Bangladesh
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] text-balance"
          >
            Precision Knit Manufacturing for Global Brands
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-white/70 max-w-xl"
          >
            100% export-oriented garment manufacturing facility delivering consistent,
            high-volume retail programs for EU, UK and U.S. markets with a 30+ year
            track record of excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/90 font-medium h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base group"
            >
              <Link href="#capabilities">
                Explore Our Capabilities
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 bg-white/5 h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base"
            >
              <Link href="#contact">Request a Quote</Link>
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-3 top-0 bottom-0 w-px bg-gradient-to-b from-white/30 to-transparent hidden sm:block" />
                <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-xs sm:text-sm text-white/50 mt-1">{stat.label}</p>
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
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-white/40">Scroll</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
