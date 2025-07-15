"use client"

import { Button } from "@/components/ui/button"
import { Stethoscope, Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const router = useRouter()

  const handleStartFree = () => {
    router.push("/signup")
  }

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Stethoscope className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">White Coats Society</h1>
              <p className="text-xs text-gray-600">Free Medical Education</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isProductsOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-20">
                  <Link href="/courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Medical Courses
                  </Link>
                  <Link href="/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Study Resources
                  </Link>
                  <Link href="/tools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Clinical Tools
                  </Link>
                </div>
              )}
            </div>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Log in
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6" onClick={handleStartFree}>
              Start Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <div className="py-2">
                <button 
                  className="flex items-center text-gray-700 font-medium"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  Products <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isProductsOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link href="/courses" className="block py-1 text-sm text-gray-700">
                      Medical Courses
                    </Link>
                    <Link href="/resources" className="block py-1 text-sm text-gray-700">
                      Study Resources
                    </Link>
                    <Link href="/tools" className="block py-1 text-sm text-gray-700">
                      Clinical Tools
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/about" className="text-gray-700 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 font-medium">
                Contact
              </Link>
              <div className="pt-2 flex flex-col space-y-3">
                <Link href="/login" className="text-gray-700 font-medium">
                  Log in
                </Link>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full" onClick={handleStartFree}>
                  Start Free
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
