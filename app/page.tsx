import React from 'react'
import Header from '@/header'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Users, Award, ChevronRight, Heart, Brain, Activity, Microscope, Play, Star, Trophy, Target, Globe, Shield, Stethoscope } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Discover Medicine <br />
                <span className="text-blue-200">For Middle School</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Explore the fascinating world of human anatomy and medical science through interactive learning, virtual labs, and career exploration designed specifically for middle school students.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <Link href="/signup">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto">
                    Start Learning Free
                  </Button>
                </Link>
                <Link href="/virtual-labs">
                  <Button className="bg-transparent border border-white hover:bg-blue-700 text-lg px-8 py-6 h-auto">
                    Try Virtual Labs
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute -left-8 -top-8 w-64 h-64 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-300 rounded-full opacity-20"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="relative h-64 w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Heart className="h-12 w-12 text-red-500" />
                      <Brain className="h-12 w-12 text-purple-500" />
                      <Activity className="h-12 w-12 text-blue-500" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Body Systems Explorer</h3>
                  <p className="text-gray-600">Interactive 3D models of heart, lungs, bones, and more!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose White Coats Society?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive platform designed specifically for middle school students to explore medical science in an engaging, interactive way.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Microscope className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Virtual Labs</h3>
              <p className="text-gray-600 mb-6">
                Safe, simulated medical experiments and anatomical explorations with 3D interactive models.
              </p>
              <Link href="/virtual-labs">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Explore Labs
                </Button>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interactive Quizzes</h3>
              <p className="text-gray-600 mb-6">
                Adaptive quizzes that adjust difficulty based on your progress and learning style.
              </p>
              <Link href="/quizzes">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Take Quiz
                </Button>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career Exploration</h3>
              <p className="text-gray-600 mb-6">
                Meet real healthcare professionals and explore different medical career paths.
              </p>
              <Link href="/careers">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Explore Careers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Body Systems Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Body Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about essential body systems through interactive lessons, videos, and virtual experiments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Cardiovascular System", 
                icon: Heart, 
                color: "red", 
                description: "Explore how the heart pumps blood throughout your body",
                lessons: 12,
                difficulty: "Beginner"
              },
                             { 
                 title: "Respiratory System", 
                 icon: Activity, 
                 color: "blue", 
                 description: "Discover how we breathe and exchange oxygen",
                 lessons: 10,
                 difficulty: "Beginner"
               },
              { 
                title: "Nervous System", 
                icon: Brain, 
                color: "purple", 
                description: "Learn how the brain controls everything we do",
                lessons: 15,
                difficulty: "Intermediate"
              },
              { 
                title: "Skeletal System", 
                icon: Award, 
                color: "gray", 
                description: "Understand bones, joints, and how we move",
                lessons: 8,
                difficulty: "Beginner"
              },
              { 
                title: "Digestive System", 
                icon: Target, 
                color: "orange", 
                description: "Follow food's journey through your body",
                lessons: 11,
                difficulty: "Beginner"
              },
              { 
                title: "Immune System", 
                icon: Shield, 
                color: "green", 
                description: "See how your body fights off infections",
                lessons: 9,
                difficulty: "Intermediate"
              }
            ].map((system, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className={`bg-${system.color}-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4`}>
                  <system.icon className={`h-6 w-6 text-${system.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{system.title}</h3>
                <p className="text-gray-600 mb-4">{system.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{system.lessons} lessons</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">{system.difficulty}</span>
                </div>
                <Link href={`/courses?system=${system.title.toLowerCase().replace(' ', '-')}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Start Learning
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Learn Through Interactive Experience
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our platform combines cutting-edge technology with proven educational methods to make learning medicine fun and engaging.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <Play className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Video Tutorials</h3>
                    <p className="text-gray-600">High-quality animations created with medical professionals to explain complex concepts simply.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                    <Target className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Adaptive Learning</h3>
                    <p className="text-gray-600">Quizzes that adjust to your learning pace and provide personalized feedback.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                    <Microscope className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Virtual Experiments</h3>
                    <p className="text-gray-600">Safe simulations of medical procedures like measuring heart rate and lung capacity.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-8 -top-8 w-32 h-32 bg-blue-200 rounded-full opacity-20"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-200 rounded-full opacity-20"></div>
              <div className="relative bg-white rounded-lg shadow-xl p-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Track Your Progress</h3>
                  <p className="text-gray-600 mb-6">Earn badges, certificates, and track your learning journey with detailed analytics.</p>
                  <Link href="/dashboard">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      View Dashboard
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Learning Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with fellow students, ask questions, and get mentorship from certified healthcare professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Student Forum</h3>
              <p className="text-gray-600 mb-4">Ask questions and help classmates in our moderated community forum.</p>
              <Link href="/community">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Join Discussion
                </Button>
              </Link>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <Star className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Mentors</h3>
              <p className="text-gray-600 mb-4">Weekly Q&A sessions with real doctors, nurses, and healthcare professionals.</p>
              <Link href="/community?tab=mentors">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Meet Mentors
                </Button>
              </Link>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Access</h3>
              <p className="text-gray-600 mb-4">Multilingual support to make medical education accessible to all students.</p>
              <Link href="/about">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Medical Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of middle school students already exploring the fascinating world of medicine with White Coats Society.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link href="/signup">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto">
                Sign Up Free
              </Button>
            </Link>
            <Link href="/courses">
              <Button className="bg-transparent border border-white hover:bg-blue-700 text-lg px-8 py-6 h-auto">
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Stethoscope className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">White Coats Society</h3>
                  <p className="text-xs text-gray-400">Free Medical Education</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Inspiring the next generation of healthcare professionals through interactive medical education.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Learning</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/courses" className="hover:text-white">Body Systems</Link></li>
                <li><Link href="/quizzes" className="hover:text-white">Interactive Quizzes</Link></li>
                <li><Link href="/virtual-labs" className="hover:text-white">Virtual Labs</Link></li>
                <li><Link href="/videos" className="hover:text-white">Video Tutorials</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/community" className="hover:text-white">Student Forum</Link></li>
                <li><Link href="/careers" className="hover:text-white">Career Spotlights</Link></li>
                <li><Link href="/resources" className="hover:text-white">Parent Resources</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 White Coats Society. All rights reserved. Making medical education accessible to all.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
