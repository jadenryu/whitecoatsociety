"use client"

import { Button } from "@/components/ui/button"
import { Stethoscope, Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLearningOpen, setIsLearningOpen] = useState(false)
  const [isToolsOpen, setIsToolsOpen] = useState(false)
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
              <p className="text-xs text-gray-600">Free Medical Education for Middle School</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsLearningOpen(!isLearningOpen)}
              >
                Learning <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isLearningOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-20">
                  <Link href="/courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Body Systems Courses
                  </Link>
                  <Link href="/quizzes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Interactive Quizzes
                  </Link>
                  <Link href="/videos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Video Tutorials
                  </Link>
                  <Link href="/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Study Resources
                  </Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsToolsOpen(!isToolsOpen)}
              >
                Tools <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isToolsOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-20">
                  <Link href="/virtual-labs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Virtual Labs
                  </Link>
                  <Link href="/simulations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    3D Simulations
                  </Link>
                  <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    My Dashboard
                  </Link>
                </div>
              )}
            </div>

            <Link href="/careers" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Career Spotlights
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Community
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Sign In
              </Button>
            </Link>
            <Button 
              onClick={handleStartFree}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Start Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4">
            <div className="space-y-2">
              <Link href="/courses" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
                Body Systems Courses
              </Link>
              <Link href="/quizzes" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
                Interactive Quizzes
              </Link>
              <Link href="/videos" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
                Video Tutorials
              </Link>
              <Link href="/virtual-labs" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
                Virtual Labs
              </Link>
              <Link href="/simulations" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
                3D Simulations
              </Link>
              <Link href="/careers" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
                Career Spotlights
              </Link>
              <Link href="/community" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
                Community
              </Link>
              <Link href="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
                My Dashboard
              </Link>
              <Link href="/resources" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
                Study Resources
              </Link>
              <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
                About
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <Link href="/login" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">
                  Sign In
                </Link>
                <Button 
                  onClick={handleStartFree}
                  className="w-full mx-4 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Start Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
