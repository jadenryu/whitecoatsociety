import React from 'react'
import Header from '@/header'
import { Button } from '@/components/ui/button'
import { Microscope, Heart, Brain, Activity, Beaker, Play, Users, Clock, Target, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function VirtualLabsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Virtual Laboratory
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Explore the human body through safe, interactive 3D simulations and virtual experiments designed for middle school students.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-6 h-auto">
                Start Lab Session
              </Button>
              <Button className="bg-transparent border border-white hover:bg-purple-700 text-lg px-8 py-6 h-auto">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interactive Lab Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conduct virtual experiments and explore 3D anatomical models in a safe, controlled environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Heart Rate Lab",
                icon: Heart,
                color: "red",
                description: "Measure and analyze heart rate under different conditions",
                duration: "15 minutes",
                difficulty: "Beginner",
                participants: "3,247 students",
                type: "Virtual Experiment"
              },
              {
                title: "Lung Capacity Test", 
                icon: Activity,
                color: "blue",
                description: "Simulate breathing tests and measure lung function",
                duration: "12 minutes",
                difficulty: "Beginner",
                participants: "2,856 students",
                type: "Virtual Experiment"
              },
              {
                title: "Brain Anatomy Explorer",
                icon: Brain,
                color: "purple", 
                description: "Navigate through 3D brain models and learn about regions",
                duration: "20 minutes",
                difficulty: "Intermediate",
                participants: "1,923 students",
                type: "3D Model"
              },
              {
                title: "Blood Flow Simulation",
                icon: Target,
                color: "red",
                description: "Follow blood through the circulatory system",
                duration: "18 minutes",
                difficulty: "Intermediate",
                participants: "2,134 students",
                type: "3D Simulation"
              },
              {
                title: "Muscle Movement Lab",
                icon: Target,
                color: "orange",
                description: "Explore how muscles contract and create movement",
                duration: "16 minutes",
                difficulty: "Beginner", 
                participants: "1,767 students",
                type: "Virtual Experiment"
              },
              {
                title: "Digestive Journey",
                icon: Beaker,
                color: "green",
                description: "Follow food through the digestive system",
                duration: "22 minutes",
                difficulty: "Beginner",
                participants: "2,445 students",
                type: "3D Simulation"
              }
            ].map((lab, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-${lab.color}-100 rounded-full p-3 w-12 h-12 flex items-center justify-center`}>
                    <lab.icon className={`h-6 w-6 text-${lab.color}-600`} />
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                    {lab.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{lab.title}</h3>
                <p className="text-gray-600 mb-4">{lab.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {lab.duration}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs bg-${lab.color}-100 text-${lab.color}-800`}>
                      {lab.difficulty}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    <Users className="h-3 w-3 inline mr-1" />
                    {lab.participants} completed
                  </div>
                </div>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Play className="h-4 w-4 mr-2" />
                  Start Lab
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Lab Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our virtual labs provide realistic, hands-on learning experiences without any safety concerns.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Microscope className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">3D Interactions</h3>
              <p className="text-gray-600">Manipulate organs, zoom in on details, and observe functions in real-time.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Safe Environment</h3>
              <p className="text-gray-600">Practice procedures without any physical risks or expensive equipment.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Real-time Data</h3>
              <p className="text-gray-600">Get immediate feedback and measurements just like in a real laboratory.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Collaborative</h3>
              <p className="text-gray-600">Work together with classmates in shared virtual lab spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Labs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Most Popular This Week
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of students exploring these trending virtual experiments and simulations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-red-100 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">Heart Rate Lab</h3>
                    <p className="text-sm text-gray-600">Completed by 847 students this week</p>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700 text-white text-sm">
                    Try Now
                  </Button>
                </div>
                
                <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-blue-100 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                    <Activity className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">Lung Capacity Test</h3>
                    <p className="text-sm text-gray-600">Completed by 623 students this week</p>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm">
                    Try Now
                  </Button>
                </div>
                
                <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-purple-100 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                    <Brain className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">Brain Anatomy Explorer</h3>
                    <p className="text-sm text-gray-600">Completed by 512 students this week</p>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white text-sm">
                    Try Now
                  </Button>
                </div>
              </div>
              
              <Link href="/dashboard">
                <Button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white">
                  View All Labs
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute -left-8 -top-8 w-32 h-32 bg-purple-200 rounded-full opacity-20"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
              <div className="relative bg-white rounded-lg shadow-xl p-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Microscope className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Virtual Lab Benefits</h3>
                  
                  <div className="space-y-4 text-left">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">No equipment needed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">100% safe environment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Repeat experiments anytime</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Real-time data collection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Experimenting?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Dive into our virtual laboratory and discover the wonders of human anatomy through hands-on exploration.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-6 h-auto">
              Start First Lab
            </Button>
            <Link href="/signup">
              <Button className="bg-transparent border border-white hover:bg-purple-700 text-lg px-8 py-6 h-auto">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 