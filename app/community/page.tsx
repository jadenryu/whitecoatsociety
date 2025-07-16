import React from 'react'
import Header from '@/header'
import { Button } from '@/components/ui/button'
import { Users, MessageCircle, Star, Calendar, Clock, ThumbsUp, Reply, Search, Filter } from 'lucide-react'
import Link from 'next/link'

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Learning Community
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Connect with fellow students, get help from mentors, and join discussions with certified healthcare professionals.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Button className="bg-white text-teal-600 hover:bg-teal-50 text-lg px-8 py-6 h-auto">
                Join Discussion
              </Button>
              <Button className="bg-transparent border border-white hover:bg-teal-700 text-lg px-8 py-6 h-auto">
                Meet Mentors
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">5,847</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">142</div>
              <div className="text-gray-600">Expert Mentors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">1,234</div>
              <div className="text-gray-600">Questions Answered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
              <div className="text-gray-600">Response Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Forum Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Forum */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Student Forum</h2>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                  Ask Question
                </Button>
              </div>
              
              {/* Search and Filter */}
              <div className="flex space-x-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <Button className="bg-gray-100 hover:bg-gray-200 text-gray-700">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
              
              {/* Forum Posts */}
              <div className="space-y-6">
                {[
                  {
                    title: "How does the heart pump blood through the body?",
                    author: "Sarah M.",
                    timeAgo: "2 hours ago",
                    replies: 8,
                    likes: 12,
                    category: "Cardiovascular System",
                    answered: true,
                    excerpt: "I'm having trouble understanding how the heart creates pressure to push blood through all the vessels..."
                  },
                  {
                    title: "What's the difference between arteries and veins?",
                    author: "Mike R.",
                    timeAgo: "4 hours ago",
                    replies: 5,
                    likes: 9,
                    category: "Cardiovascular System",
                    answered: true,
                    excerpt: "Can someone explain the main differences between arteries and veins in simple terms?"
                  },
                  {
                    title: "Help with respiratory system quiz preparation",
                    author: "Emma L.",
                    timeAgo: "6 hours ago",
                    replies: 3,
                    likes: 7,
                    category: "Respiratory System",
                    answered: false,
                    excerpt: "I have a quiz tomorrow on the respiratory system. Any tips for remembering the parts of the lungs?"
                  },
                  {
                    title: "Virtual lab experiment not working properly",
                    author: "Alex K.",
                    timeAgo: "1 day ago",
                    replies: 12,
                    likes: 4,
                    category: "Technical Support",
                    answered: true,
                    excerpt: "The heart rate lab simulation keeps freezing when I try to start the experiment..."
                  }
                ].map((post, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            post.category === 'Technical Support' ? 'bg-red-100 text-red-800' :
                            post.category === 'Cardiovascular System' ? 'bg-red-100 text-red-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {post.category}
                          </span>
                          {post.answered && (
                            <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                              Answered
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span>By {post.author}</span>
                        <span>{post.timeAgo}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Reply className="h-4 w-4" />
                          <span>{post.replies}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Upcoming Q&A Sessions */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Q&A Sessions</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Heart Health with Dr. Martinez",
                      date: "Today",
                      time: "4:00 PM EST",
                      mentor: "Dr. Sarah Martinez",
                      participants: 47
                    },
                    {
                      title: "Nursing Career Panel",
                      date: "Tomorrow",
                      time: "3:00 PM EST",
                      mentor: "Multiple Nurses",
                      participants: 32
                    },
                    {
                      title: "Brain Anatomy Deep Dive",
                      date: "Friday",
                      time: "4:00 PM EST",
                      mentor: "Dr. Marcus Johnson",
                      participants: 28
                    }
                  ].map((session, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">{session.title}</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{session.date} at {session.time}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{session.participants} registered</span>
                        </div>
                      </div>
                      <Button className="w-full mt-3 bg-teal-600 hover:bg-teal-700 text-white text-sm">
                        Join Session
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Top Contributors */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Top Contributors</h3>
                <div className="space-y-3">
                  {[
                    { name: "Dr. Sarah Martinez", role: "Pediatric Cardiologist", points: 1247, badge: "gold" },
                    { name: "Nurse Emily Chen", role: "ER Nurse", points: 892, badge: "silver" },
                    { name: "Dr. Marcus Johnson", role: "Neurosurgeon", points: 756, badge: "bronze" },
                    { name: "Jessica T.", role: "Student Mentor", points: 423, badge: "none" }
                  ].map((contributor, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-teal-100 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-900">{contributor.name}</span>
                          {contributor.badge !== 'none' && (
                            <Star className={`h-4 w-4 ${
                              contributor.badge === 'gold' ? 'text-yellow-500' :
                              contributor.badge === 'silver' ? 'text-gray-400' :
                              'text-orange-600'
                            }`} />
                          )}
                        </div>
                        <div className="text-sm text-gray-600">{contributor.role}</div>
                      </div>
                      <div className="text-sm text-gray-500">{contributor.points} pts</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Mentors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Mentors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certified healthcare professionals ready to answer your questions and guide your learning journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Sarah Martinez",
                role: "Pediatric Cardiologist",
                specialties: ["Heart Health", "Pediatric Care"],
                rating: 4.9,
                responses: 247,
                availability: "Available now"
              },
              {
                name: "Nurse Emily Chen",
                role: "Emergency Room Nurse",
                specialties: ["Emergency Care", "Patient Care"],
                rating: 4.8,
                responses: 189,
                availability: "Available now"
              },
              {
                name: "Dr. Marcus Johnson",
                role: "Neurosurgeon",
                specialties: ["Brain Surgery", "Neurology"],
                rating: 4.9,
                responses: 156,
                availability: "Next session: Friday"
              },
              {
                name: "Dr. Lisa Park",
                role: "Physical Therapist",
                specialties: ["Rehabilitation", "Sports Medicine"],
                rating: 4.7,
                responses: 203,
                availability: "Available now"
              }
            ].map((mentor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-teal-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-1">{mentor.name}</h3>
                <p className="text-teal-600 font-medium mb-3">{mentor.role}</p>
                
                <div className="flex items-center justify-center mb-3">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{mentor.rating} ({mentor.responses} responses)</span>
                </div>
                
                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {mentor.specialties.map((specialty, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <div className="text-sm text-gray-600 mb-4">{mentor.availability}</div>
                
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  Ask Question
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Community Guidelines
            </h2>
            <p className="text-xl text-gray-600">
              Help us maintain a safe, supportive, and educational environment for all students.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Be Respectful</h3>
                  <p className="text-gray-600">Treat all community members with kindness and respect, regardless of their background or knowledge level.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Stay On Topic</h3>
                  <p className="text-gray-600">Keep discussions focused on medical education, health topics, and career guidance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                  <Star className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Share Knowledge</h3>
                  <p className="text-gray-600">Help others by sharing your knowledge and experiences, and don't hesitate to ask questions.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 rounded-full p-2 flex-shrink-0">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Be Patient</h3>
                  <p className="text-gray-600">Remember that everyone learns at their own pace. Give thoughtful, helpful responses.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 rounded-full p-2 flex-shrink-0">
                  <Search className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Search First</h3>
                  <p className="text-gray-600">Before asking a question, search to see if it has already been answered.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 rounded-full p-2 flex-shrink-0">
                  <ThumbsUp className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Give Feedback</h3>
                  <p className="text-gray-600">Use likes and helpful responses to show appreciation for quality contributions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Connect with thousands of students and healthcare professionals who are passionate about medical education.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button className="bg-white text-teal-600 hover:bg-teal-50 text-lg px-8 py-6 h-auto">
              Join Discussion
            </Button>
            <Link href="/signup">
              <Button className="bg-transparent border border-white hover:bg-teal-700 text-lg px-8 py-6 h-auto">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 