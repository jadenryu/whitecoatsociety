import React from 'react'
import Header from '@/header'
import { Button } from '@/components/ui/button'
import { Play, Clock, Star, Eye, BookOpen, Filter, Search, Heart, Brain, Activity } from 'lucide-react'
import Link from 'next/link'

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Video Tutorials
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
              High-quality animations and explanations created with medical professionals to make complex concepts simple and engaging.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Button className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-6 h-auto">
                <Play className="h-5 w-5 mr-2" />
                Watch Now
              </Button>
              <Button className="bg-transparent border border-white hover:bg-orange-700 text-lg px-8 py-6 h-auto">
                Browse Categories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search video tutorials..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex space-x-2">
              <Button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option>All Systems</option>
                <option>Cardiovascular</option>
                <option>Respiratory</option>
                <option>Nervous</option>
                <option>Skeletal</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Video Tutorials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and comprehensive video explanations, created in collaboration with medical professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "How the Heart Pumps Blood",
                description: "Watch blood flow through the heart chambers and understand the cardiac cycle",
                duration: "8:45",
                views: "12,847",
                rating: 4.9,
                system: "Cardiovascular",
                icon: Heart,
                color: "red",
                level: "Beginner",
                instructor: "Dr. Sarah Martinez"
              },
              {
                title: "Breathing and Gas Exchange",
                description: "Explore how oxygen enters your blood and carbon dioxide is removed",
                duration: "7:32",
                views: "9,234",
                rating: 4.8,
                system: "Respiratory",
                icon: Activity,
                color: "blue",
                level: "Beginner",
                instructor: "Dr. Michael Chen"
              },
              {
                title: "Neuron Communication",
                description: "See how nerve cells send electrical signals throughout your body",
                duration: "10:15",
                views: "8,567",
                rating: 4.9,
                system: "Nervous",
                icon: Brain,
                color: "purple",
                level: "Intermediate",
                instructor: "Dr. Lisa Park"
              },
              {
                title: "Heart Valve Function",
                description: "Detailed animation of how heart valves prevent blood backflow",
                duration: "6:23",
                views: "7,892",
                rating: 4.7,
                system: "Cardiovascular",
                icon: Heart,
                color: "red",
                level: "Intermediate",
                instructor: "Dr. Sarah Martinez"
              },
              {
                title: "Lung Structure and Function",
                description: "Journey through the respiratory system from nose to alveoli",
                duration: "9:18",
                views: "6,543",
                rating: 4.8,
                system: "Respiratory",
                icon: Activity,
                color: "blue",
                level: "Beginner",
                instructor: "Dr. Michael Chen"
              },
              {
                title: "Brain Regions and Functions",
                description: "Explore different areas of the brain and what they control",
                duration: "11:47",
                views: "5,234",
                rating: 4.9,
                system: "Nervous",
                icon: Brain,
                color: "purple",
                level: "Intermediate",
                instructor: "Dr. Lisa Park"
              }
            ].map((video, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`bg-${video.color}-100 rounded-full p-4 w-16 h-16 flex items-center justify-center`}>
                      <video.icon className={`h-8 w-8 text-${video.color}-600`} />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <Play className="h-4 w-4 text-gray-700" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 text-xs px-2 py-1 rounded">
                    {video.level}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full bg-${video.color}-100 text-${video.color}-800`}>
                      {video.system}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{video.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>{video.views} views</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{video.duration}</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-600 mb-4">
                    By {video.instructor}
                  </div>
                  
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    <Play className="h-4 w-4 mr-2" />
                    Watch Video
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Series */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Video Series
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive video series that take you through entire body systems step by step.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Complete Cardiovascular System",
                description: "12-part series covering heart anatomy, blood flow, and circulation",
                videos: 12,
                totalDuration: "2h 15m",
                enrolled: "3,247 students",
                system: "Cardiovascular",
                color: "red",
                progress: 0
              },
              {
                title: "Respiratory System Masterclass",
                description: "10-part series on breathing, lungs, and gas exchange",
                videos: 10,
                totalDuration: "1h 45m",
                enrolled: "2,856 students",
                system: "Respiratory",
                color: "blue",
                progress: 0
              },
              {
                title: "Nervous System Deep Dive",
                description: "15-part series exploring brain, nerves, and neural communication",
                videos: 15,
                totalDuration: "3h 20m",
                enrolled: "1,923 students",
                system: "Nervous",
                color: "purple",
                progress: 0
              }
            ].map((series, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs px-2 py-1 rounded-full bg-${series.color}-100 text-${series.color}-800`}>
                    {series.system} Series
                  </span>
                  <div className="text-sm text-gray-600">{series.videos} videos</div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{series.title}</h3>
                <p className="text-gray-600 mb-4">{series.description}</p>
                
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{series.totalDuration} total duration</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span>{series.enrolled} enrolled</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{series.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`bg-${series.color}-600 h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${series.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Start Series
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Video Tutorials Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Created specifically for middle school students with input from medical professionals and educators.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Play className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">High-Quality Animation</h3>
              <p className="text-gray-600">Professional 3D animations that bring anatomy to life.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Narration</h3>
              <p className="text-gray-600">Explained by real doctors and medical professionals.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Age-Appropriate</h3>
              <p className="text-gray-600">Content designed specifically for middle school level.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Perfect Length</h3>
              <p className="text-gray-600">Bite-sized videos that maintain attention and focus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Watching?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Dive into our comprehensive video library and start learning about the amazing human body today.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-6 h-auto">
              <Play className="h-5 w-5 mr-2" />
              Watch First Video
            </Button>
            <Link href="/signup">
              <Button className="bg-transparent border border-white hover:bg-orange-700 text-lg px-8 py-6 h-auto">
                Sign Up Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 