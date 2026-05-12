"use client"

import { motion } from "framer-motion"

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  gradient?: string
}

export function PageHero({ eyebrow, title, description, gradient }: PageHeroProps) {
  return (
    <section
      className={`relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden ${
        gradient ?? "bg-primary"
      }`}
      style={!gradient ? {
        background: "linear-gradient(135deg, oklch(0.18 0.04 255) 0%, oklch(0.13 0.03 255) 100%)",
      } : undefined}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-6 bg-accent/60" />
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-accent">
            {eyebrow}
          </p>
          <div className="h-px w-6 bg-accent/60" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white text-balance leading-[1.15]"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-light"
        >
          {description}
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 h-px w-32 bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        />
      </div>
    </section>
  )
}
