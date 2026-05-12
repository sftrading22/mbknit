"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Globe, Send, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem, slideInLeft, slideInRight } from "@/lib/animations"

const contactInfo = [
  {
    icon: MapPin,
    label: "Factory Address",
    value: "B/164-166 & B/185-187 BSCIC I/E, Fatullah, Narayanganj, Bangladesh",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+88-02-47671112-3",
  },
  {
    icon: Mail,
    label: "Email",
    value: "arman@mbknit.com",
    href: "mailto:arman@mbknit.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.mbknit.com",
    href: "https://www.mbknit.com",
  },
]

const contacts = [
  {
    name: "Hasin Arman",
    title: "Director - Business Development & Marketing",
    email: "arman@mbknit.com",
  },
  {
    name: "Md Al Amin (Shohel)",
    title: "Director - Product Innovation and Marketing",
    email: "shohel@matrixapparels.com",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const mailtoLink = `mailto:arman@mbknit.com?subject=Inquiry from ${formData.company}&body=Name: ${formData.name}%0D%0ACompany: ${formData.company}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = mailtoLink
    
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <section id="contact" className="py-20 sm:py-32 lg:py-40 bg-muted/30 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

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
              Connect With Us
            </p>
            <div className="h-px w-6 bg-accent" />
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance leading-[1.2]"
          >
            {`Let's Discuss Your`} <span className="text-accent italic font-light">Requirements</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg font-light max-w-2xl mx-auto"
          >
            Ready to explore a partnership? Contact our business development team 
            to discuss your production needs and how we can support your retail programs.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-start">
          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="bg-card rounded-3xl p-8 sm:p-12 border border-border/60 shadow-xl shadow-black/5 relative overflow-hidden"
          >
            {/* Subtle form decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none" />
            
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    required
                    className="h-14 bg-background/50 border-border/60 focus:border-accent transition-colors rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                    Company
                  </label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your Company Name"
                    required
                    className="h-14 bg-background/50 border-border/60 focus:border-accent transition-colors rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  required
                  className="h-14 bg-background/50 border-border/60 focus:border-accent transition-colors rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Message Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help with your production needs?"
                  className="flex w-full rounded-xl border border-border/60 bg-background/50 px-4 py-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus:border-accent transition-colors disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-16 text-base font-bold rounded-xl group transition-all duration-300 shadow-lg shadow-primary/10"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Inquiry
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="space-y-12 sm:space-y-16"
          >
            {/* Info Items */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6"
            >
              {contactInfo.map((info) => (
                <motion.div 
                  key={info.label} 
                  variants={staggerItem}
                  className="flex gap-6 p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                    <info.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-1">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="text-base sm:text-lg text-foreground font-medium hover:text-accent transition-colors break-words leading-tight"
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-base sm:text-lg text-foreground font-medium break-words leading-snug">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Persons */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-6 bg-accent" />
                <h3 className="font-serif text-2xl font-bold text-foreground">Contact Persons</h3>
              </div>
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-6"
              >
                {contacts.map((contact) => (
                  <motion.div 
                    key={contact.name}
                    variants={staggerItem}
                    whileHover={{ x: 5 }}
                    className="bg-card rounded-2xl p-6 border border-border/60 hover:border-accent/20 transition-all group"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-foreground text-lg group-hover:text-accent transition-colors">{contact.name}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-light italic">{contact.title}</p>
                      </div>
                      <a 
                        href={`mailto:${contact.email}`}
                        className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all shadow-sm"
                        title={contact.email}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
