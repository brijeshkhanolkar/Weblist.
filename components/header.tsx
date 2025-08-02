"use client"

import { useState, useEffect } from "react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-white/95 backdrop-blur-md py-2 shadow-md" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo isScrolled={isScrolled} />

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <a
                  href="#services"
                  className="text-sm font-medium relative py-2 px-1 transition-colors
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                  after:bg-blue-600 after:transition-all hover:after:w-full"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm font-medium relative py-2 px-1 transition-colors
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                  after:bg-blue-600 after:transition-all hover:after:w-full"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-sm font-medium relative py-2 px-1 transition-colors
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                  after:bg-blue-600 after:transition-all hover:after:w-full"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm font-medium relative py-2 px-1 transition-colors
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                  after:bg-blue-600 after:transition-all hover:after:w-full"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-sm font-medium relative py-2 px-1 transition-colors
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                  after:bg-blue-600 after:transition-all hover:after:w-full"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm font-medium relative py-2 px-1 transition-colors
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 
                  after:bg-blue-600 after:transition-all hover:after:w-full"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="rounded-full">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
            <Button
              size="sm"
              className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 border-0"
            >
              Get Free Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full bg-blue-50 text-blue-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-in slide-in-from-top duration-300">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#services"
                  className="block py-2 px-4 hover:bg-blue-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="block py-2 px-4 hover:bg-blue-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="block py-2 px-4 hover:bg-blue-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-4 hover:bg-blue-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="block py-2 px-4 hover:bg-blue-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="block py-2 px-4 hover:bg-blue-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </a>
              </li>
              <li className="pt-2 border-t">
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 border-0"
                  >
                    Get Free Demo
                  </Button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
