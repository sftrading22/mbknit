"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "About", href: "/about" },
  { name: "Capabilities", href: "/capabilities" },
  { name: "Products", href: "/products" },
  { name: "Certifications", href: "/certifications" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/98 backdrop-blur-md border-b border-border shadow-sm"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex lg:flex-1"
        >
          <Link href="/" className="-m-1.5 p-1.5 group flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="MB Knit Logo"
              width={200}
              height={70}
              className="object-contain"
              priority
            />
          </Link>
        </motion.div>

        <div className="flex lg:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors ${scrolled ? "text-foreground" : "text-white"
              }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </motion.button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors relative group ${scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? "bg-foreground" : "bg-white"
                  }`} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden lg:flex lg:flex-1 lg:justify-end"
        >
          <Button
            asChild
            className={`transition-all duration-300 ${scrolled
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-white text-black hover:bg-white/90"
              }`}
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-background px-6 py-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/logo.png"
                    alt="MB Knit Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
                    MB Knit
                  </span>
                </Link>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </motion.button>
              </div>
              <div className="mt-8 flow-root">
                <div className="-my-6 divide-y divide-border">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.05 } }
                    }}
                    className="space-y-1 py-6"
                  >
                    {navigation.map((item) => (
                      <motion.div
                        key={item.name}
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-muted transition-colors"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="py-6"
                  >
                    <Button asChild className="w-full bg-primary text-primary-foreground">
                      <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                        Get in Touch
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
