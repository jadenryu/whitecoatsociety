"use client"

import { Button } from "@/components/ui/button"
import { Stethoscope, Menu, X, ChevronDown, User, LogOut } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLearningOpen, setIsLearningOpen] = useState(false)
  const [isToolsOpen, setIsToolsOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isSigningOut, setIsSigningOut] = useState(false)
  const router = useRouter()
  const { user, profile, signOut, loading } = useAuth()

  const handleStartFree = () => {
    router.push("/signup")
  }

  const handleSignOut = async () => {
    if (isSigningOut) return
    
    setIsSigningOut(true)
    try {
      console.log('Starting sign out process...')
      await signOut()
      
      console.log('Sign out completed, redirecting to home...')
      setIsUserMenuOpen(false)
      
      // Force a page reload to ensure clean state
      window.location.href = "/"
    } catch (error) {
      console.error('Error signing out:', error)
      alert('Error signing out. Please try again.')
      setIsSigningOut(false)
    }
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
                  <Link href="/virtual-labs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Virtual Labs
                  </Link>
                  <Link href="/videos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Educational Videos
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
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-20">
                  <Link href="/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Study Resources
                  </Link>
                  <Link href="/community" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Community
                  </Link>
                  <Link href="/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Career Paths
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

          {/* Desktop Auth Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Dashboard
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    <User className="h-5 w-5" />
                    <span>{profile?.display_name || user.email}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-20">
                      <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                        Dashboard
                      </Link>
                      <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                        Profile Settings
                      </Link>
                      <div className="border-t border-gray-100 my-1"></div>
                      <button
                        onClick={handleSignOut}
                        disabled={isSigningOut}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 flex items-center disabled:opacity-50"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        {isSigningOut ? 'Signing Out...' : 'Sign Out'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Sign In
                </Link>
                <Button onClick={handleStartFree} className="bg-blue-600 hover:bg-blue-700 text-white">
                  Start Free
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {user ? (
                <div className="space-y-1">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium text-gray-900">
                      {profile?.display_name || user.email}
                    </p>
                  </div>
                  <Link href="/dashboard" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                    Dashboard
                  </Link>
                  <Link href="/profile" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                    Profile Settings
                  </Link>
                  <div className="border-t border-gray-100 my-2"></div>
                  <button
                    onClick={handleSignOut}
                    disabled={isSigningOut}
                    className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 flex items-center disabled:opacity-50"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    {isSigningOut ? 'Signing Out...' : 'Sign Out'}
                  </button>
                </div>
              ) : (
                <div className="space-y-1">
                  <Link href="/login" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                    Sign In
                  </Link>
                  <Link href="/signup" className="block px-3 py-2 text-base font-medium text-blue-600 hover:text-blue-700">
                    Start Free
                  </Link>
                </div>
              )}
              
              <div className="border-t border-gray-100 my-2"></div>
              
              <Link href="/courses" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Body Systems Courses
              </Link>
              <Link href="/quizzes" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Interactive Quizzes
              </Link>
              <Link href="/virtual-labs" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Virtual Labs
              </Link>
              <Link href="/videos" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Educational Videos
              </Link>
              <Link href="/resources" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Study Resources
              </Link>
              <Link href="/community" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Community
              </Link>
              <Link href="/careers" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Career Paths
              </Link>
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
