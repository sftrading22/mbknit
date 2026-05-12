"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
const navigation = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Products", href: "#products" },
    { name: "Certifications", href: "#certifications" },
  ],
  contact: [
    { name: "Get in Touch", href: "#contact" },
    { name: "Request Quote", href: "#contact" },
  ],
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            {/* <Link href="/" className="inline-block group">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
                MB Knit
              </span>
            </Link> */}
            <Link href="/" className="-m-1.5 p-1.5 group flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="MB Knit Logo"
                width={200}
                height={70}
                className="object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/60 max-w-xs leading-relaxed">
              100% export-oriented knit garment manufacturing facility serving
              global brands since 1992.
            </p>
            <p className="mt-4 text-xs text-primary-foreground/40">
              RSC/ACCORD ID: 24201
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-2.5 sm:space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2.5 sm:space-y-3">
              {navigation.contact.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold">Factory Address</h3>
            <address className="mt-4 text-sm text-primary-foreground/60 not-italic leading-relaxed">
              B/164-166 & B/185-187<br />
              BSCIC I/E, Fatullah<br />
              Narayanganj, Bangladesh
            </address>
            <p className="mt-4 text-sm text-primary-foreground/60">
              <a href="tel:+88024767111213" className="hover:text-primary-foreground transition-colors">
                +88-02-47671112-3
              </a>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-primary-foreground/10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/40 text-center sm:text-left">
              {new Date().getFullYear()} MB Knit Fashion Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-xs text-primary-foreground/40">
                Part of{" "}
                <a
                  href="https://www.matrixglobalplatform.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors underline underline-offset-2"
                >
                  Matrix Global Platform
                </a>
              </p>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors group"
                aria-label="Scroll to top"
              >
                <svg
                  className="w-4 h-4 rotate-180 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
