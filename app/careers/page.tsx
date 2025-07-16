import React from 'react'
import Header from '@/header'
import { Button } from '@/components/ui/button'
import { Stethoscope, Heart, Brain, Users, Play, Calendar, MapPin, GraduationCap, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Healthcare Career Spotlights
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Discover your future in healthcare through real stories, day-in-the-life videos, and career pathways from medical professionals.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Button className="bg-white text-indigo-600 hover:bg-indigo-50 text-lg px-8 py-6 h-auto">
                Explore Careers
              </Button>
              <Button className="bg-transparent border border-white hover:bg-indigo-700 text-lg px-8 py-6 h-auto">
                Watch Videos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Professionals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Healthcare Heroes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from real healthcare professionals about their journeys, daily work, and advice for aspiring medical students.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Martinez",
                role: "Pediatric Cardiologist",
                hospital: "Children's Hospital of Philadelphia",
                experience: "12 years",
                specialty: "Heart conditions in children",
                image: "doctor-1",
                quote: "Every day I help young hearts beat stronger. It's the most rewarding career I could imagine.",
                education: "Harvard Medical School",
                videoLength: "8 min"
              },
              {
                name: "Nurse Emily Chen",
                role: "Emergency Room Nurse",
                hospital: "Mayo Clinic",
                experience: "8 years",
                specialty: "Critical care and emergency medicine",
                image: "nurse-1",
                quote: "Being an ER nurse means being ready for anything. I love the fast pace and helping people in crisis.",
                education: "Johns Hopkins Nursing School",
                videoLength: "6 min"
              },
              {
                name: "Dr. Marcus Johnson",
                role: "Neurosurgeon",
                hospital: "Cleveland Clinic",
                experience: "15 years",
                specialty: "Brain and spinal cord surgery",
                image: "doctor-2",
                quote: "Neurosurgery requires precision and patience. Every operation is a chance to change someone's life.",
                education: "Stanford Medical School",
                videoLength: "10 min"
              },
              {
                name: "Dr. Lisa Park",
                role: "Physical Therapist",
                hospital: "Sports Medicine Center",
                experience: "6 years",
                specialty: "Sports injury rehabilitation",
                image: "therapist-1",
                quote: "I help athletes and everyday people regain their strength and mobility. It's incredibly fulfilling.",
                education: "University of Southern California",
                videoLength: "7 min"
              },
              {
                name: "Dr. Ahmed Hassan",
                role: "Medical Researcher",
                hospital: "National Institutes of Health",
                experience: "10 years",
                specialty: "Cancer research and drug development",
                image: "researcher-1",
                quote: "Research is about hope. Every experiment brings us closer to curing diseases.",
                education: "MIT and Harvard",
                videoLength: "9 min"
              },
              {
                name: "Dr. Rachel Williams",
                role: "Family Medicine Doctor",
                hospital: "Community Health Center",
                experience: "9 years",
                specialty: "Primary care for all ages",
                image: "doctor-3",
                quote: "Family medicine lets me care for entire families throughout their lives. It's deeply meaningful.",
                education: "University of Michigan",
                videoLength: "8 min"
              }
            ].map((professional, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-indigo-100 to-indigo-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-indigo-600 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                      <Stethoscope className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <Play className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                    {professional.videoLength}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{professional.name}</h3>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">4.9</span>
                    </div>
                  </div>
                  
                  <p className="text-indigo-600 font-medium mb-1">{professional.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{professional.hospital}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{professional.experience} experience</span>
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      <span>{professional.education}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 italic text-sm mb-4">
                    "{professional.quote}"
                  </p>
                  
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Story
                    </Button>
                    <Button className="px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm">
                      Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healthcare Career Pathways
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore different routes to healthcare careers and understand the education and training required.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Medical Doctor",
                icon: Stethoscope,
                color: "blue",
                education: "4 years college + 4 years medical school + 3-7 years residency",
                timeToCareer: "11-15 years",
                averageSalary: "$200,000+",
                description: "Diagnose and treat patients, perform surgeries, and provide medical care."
              },
              {
                title: "Registered Nurse",
                icon: Heart,
                color: "red",
                education: "2-4 years nursing school + licensing exam",
                timeToCareer: "2-4 years",
                averageSalary: "$75,000+",
                description: "Provide patient care, administer medications, and support medical teams."
              },
              {
                title: "Physical Therapist",
                icon: Users,
                color: "green",
                education: "4 years college + 3 years PT school + licensing",
                timeToCareer: "7 years",
                averageSalary: "$85,000+",
                description: "Help patients recover from injuries and improve mobility and strength."
              },
              {
                title: "Medical Researcher",
                icon: Brain,
                color: "purple",
                education: "4 years college + 4-6 years graduate school",
                timeToCareer: "8-10 years",
                averageSalary: "$95,000+",
                description: "Conduct research to develop new treatments and understand diseases."
              }
            ].map((pathway, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className={`bg-${pathway.color}-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4`}>
                  <pathway.icon className={`h-6 w-6 text-${pathway.color}-600`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pathway.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{pathway.description}</p>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Education:</span>
                    <p className="text-gray-600">{pathway.education}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Time to Career:</span>
                    <p className="text-gray-600">{pathway.timeToCareer}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Average Salary:</span>
                    <p className="text-gray-600">{pathway.averageSalary}</p>
                  </div>
                </div>
                
                <Button className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Interactive Career Exploration
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Go beyond just reading about careers. Experience what it's like to work in healthcare through our interactive features.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <Play className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Day-in-the-Life Videos</h3>
                    <p className="text-gray-600">Follow healthcare professionals through their typical workday and see what they really do.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Live Q&A Sessions</h3>
                    <p className="text-gray-600">Ask questions directly to healthcare professionals during weekly virtual meetups.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Career Pathway Tool</h3>
                    <p className="text-gray-600">Interactive tool to explore different routes to your dream healthcare career.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/community">
                <Button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white">
                  Join Career Community
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute -left-8 -top-8 w-32 h-32 bg-indigo-200 rounded-full opacity-20"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-200 rounded-full opacity-20"></div>
              <div className="relative bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">This Week's Schedule</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Tuesday 4 PM</p>
                      <p className="text-sm text-gray-600">Q&A with Dr. Martinez</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Thursday 3 PM</p>
                      <p className="text-sm text-gray-600">Nursing Career Panel</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium text-gray-900">Friday 4 PM</p>
                      <p className="text-sm text-gray-600">Research Career Workshop</p>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white">
                  View Full Calendar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Your Future?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Start your healthcare career journey today by connecting with professionals and exploring different pathways.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button className="bg-white text-indigo-600 hover:bg-indigo-50 text-lg px-8 py-6 h-auto">
              Watch Career Videos
            </Button>
            <Link href="/signup">
              <Button className="bg-transparent border border-white hover:bg-indigo-700 text-lg px-8 py-6 h-auto">
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 