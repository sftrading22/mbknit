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
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-muted overflow-hidden">
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
            Get In Touch
          </motion.p>
          <motion.h2 
            variants={fadeInUp}
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance"
          >
            {`Let's Discuss Your Requirements`}
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base"
          >
            Ready to explore a partnership? Contact our team to discuss your 
            production needs and how we can support your programs.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="bg-card rounded-xl p-6 sm:p-8 lg:p-10 border border-border shadow-sm"
          >
            <h3 className="font-semibold text-lg sm:text-xl text-foreground mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="h-11 sm:h-12"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your Company"
                    required
                    className="h-11 sm:h-12"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                  required
                  className="h-11 sm:h-12"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your requirements..."
                  className="flex w-full rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 sm:h-12 text-sm sm:text-base group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </>
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
            className="space-y-8 sm:space-y-10"
          >
            {/* Info Cards */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4"
            >
              {contactInfo.map((info) => (
                <motion.div 
                  key={info.label} 
                  variants={staggerItem}
                  className="flex gap-4 p-4 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="text-sm sm:text-base text-foreground hover:text-accent transition-colors break-words"
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base text-foreground break-words">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Persons */}
            <div>
              <h3 className="font-semibold text-base sm:text-lg text-foreground mb-4">Contact Persons</h3>
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3 sm:space-y-4"
              >
                {contacts.map((contact) => (
                  <motion.div 
                    key={contact.name}
                    variants={staggerItem}
                    whileHover={{ y: -2 }}
                    className="bg-card rounded-lg p-4 sm:p-5 border border-border hover:border-accent/30 hover:shadow-md transition-all"
                  >
                    <p className="font-medium text-foreground text-sm sm:text-base">{contact.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">{contact.title}</p>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-xs sm:text-sm text-accent hover:underline mt-2 inline-flex items-center gap-1"
                    >
                      <Mail className="h-3 w-3" />
                      {contact.email}
                    </a>
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
