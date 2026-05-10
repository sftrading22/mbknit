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
    <section id="certifications" className="py-16 sm:py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <motion.p 
              variants={fadeInUp}
              className="text-xs sm:text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground/60 mb-3 sm:mb-4"
            >
              Certifications & Compliance
            </motion.p>
            <motion.h2 
              variants={fadeInUp}
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance leading-tight"
            >
              Committed to Global Standards
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="mt-4 sm:mt-6 text-primary-foreground/70 leading-relaxed text-sm sm:text-base"
            >
              Our facility maintains rigorous compliance with international safety and 
              quality standards, ensuring reliable partnerships with global brands.
            </motion.p>

            {/* Certification Badge */}
            <motion.div 
              variants={fadeInUp}
              className="mt-8 sm:mt-10"
            >
              {certifications.map((cert) => (
                <motion.div 
                  key={cert.name}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-primary-foreground/10 rounded-xl p-5 sm:p-6 border border-primary-foreground/20 backdrop-blur-sm inline-block"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4">
                    <cert.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg sm:text-xl">{cert.name}</h3>
                  <p className="text-sm text-primary-foreground/60 mt-1">{cert.id}</p>
                  <p className="text-sm text-primary-foreground/80 mt-2">{cert.description}</p>
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
            className="bg-primary-foreground/5 rounded-xl p-6 sm:p-8 lg:p-10 border border-primary-foreground/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <Award className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="font-semibold text-lg sm:text-xl">Compliance Standards</h3>
            </div>
            <motion.ul 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4"
            >
              {complianceFeatures.map((feature) => (
                <motion.li 
                  key={feature} 
                  variants={staggerItem}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary-foreground/70" />
                  </div>
                  <span className="text-primary-foreground/90 text-sm sm:text-base">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Quality Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 sm:mt-20 relative rounded-xl overflow-hidden aspect-[16/9] sm:aspect-[21/9]"
        >
          <Image
            src="/images/quality-control.jpg"
            alt="Quality control at MB Knit"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute inset-0 flex items-end"
          >
            <div className="p-6 sm:p-8 lg:p-12">
              <p className="font-serif text-lg sm:text-2xl lg:text-3xl font-bold text-primary-foreground max-w-2xl text-balance leading-snug">
                {`"Quality, consistency, and reliability from raw material sourcing to final shipment."`}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
