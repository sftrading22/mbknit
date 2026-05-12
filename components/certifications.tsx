"use client"

import Image from "next/image"
import { Shield, Award, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem, slideInLeft, slideInRight } from "@/lib/animations"

const certifications = [
  {
    name: "RSC / ACCORD",
    id: "ID 24201",
    description: "Building and Fire Safety Compliance",
    icon: Shield,
  },
]

const complianceFeatures = [
  "Building & Fire Safety Standards",
  "Worker Health & Safety Programs",
  "Environmental Compliance",
  "Ethical Manufacturing Practices",
  "Quality Management Systems",
  "Social Accountability Standards",
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-32 lg:py-40 bg-primary text-primary-foreground overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 sm:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-accent">
                Compliance & Quality
              </p>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.2]"
            >
              Committed to <br />
              <span className="text-accent italic font-light">Global Standards</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="mt-8 text-primary-foreground/70 leading-relaxed text-base sm:text-lg font-light"
            >
              Our facility maintains rigorous compliance with international safety and 
              quality standards, ensuring reliable, ethical, and stable partnerships 
              with global brands.
            </motion.p>

            {/* Certification Badge */}
            <motion.div 
              variants={fadeInUp}
              className="mt-10 sm:mt-12"
            >
              {certifications.map((cert) => (
                <motion.div 
                  key={cert.name}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full translate-x-8 -translate-y-8" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <cert.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">{cert.id}</p>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed font-light">{cert.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Compliance Features */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="bg-white/5 rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 backdrop-blur-xl relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
            
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Compliance Standards</h3>
            </div>
            
            <motion.ul 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-5"
            >
              {complianceFeatures.map((feature) => (
                <motion.li 
                  key={feature} 
                  variants={staggerItem}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <CheckCircle className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <span className="text-primary-foreground/80 text-sm sm:text-base font-light group-hover:text-white transition-colors">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Quality Image Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 sm:mt-40 lg:mt-56 relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] shadow-2xl group"
        >
          <Image
            src="/images/quality-control.jpg"
            alt="Quality control at MB Knit"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-transparent" />
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute inset-0 flex items-center"
          >
            <div className="p-8 sm:p-16 lg:p-24 max-w-4xl">
              <div className="w-12 h-1 bg-accent mb-8" />
              <p className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight italic">
                {`"Quality, consistency, and reliability from raw material sourcing to final shipment."`}
              </p>
              <p className="mt-8 text-accent/80 font-bold uppercase tracking-widest text-xs sm:text-sm">— Production Standards</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
