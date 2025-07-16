import React from 'react'
import Header from '@/header'
import { Button } from '@/components/ui/button'
import { Trophy, Star, Target, BookOpen, Clock, TrendingUp, Calendar, Award, Play, CheckCircle, Heart, Brain, Activity } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Welcome Section */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, Sarah!</h1>
              <p className="text-gray-600 mt-2">Ready to continue your medical learning journey?</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">12</div>
                <div className="text-sm text-gray-600">Day Streak</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">87%</div>
                <div className="text-sm text-gray-600">Avg Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Progress Overview */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Learning Progress</h2>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Continue Learning
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Cardiovascular System",
                      icon: Heart,
                      color: "red",
                      progress: 85,
                      lessons: "8 of 12 completed",
                      nextLesson: "Heart Valves"
                    },
                    {
                      title: "Respiratory System",
                      icon: Activity,
                      color: "blue",
                      progress: 60,
                      lessons: "6 of 10 completed",
                      nextLesson: "Gas Exchange"
                    },
                    {
                      title: "Nervous System",
                      icon: Brain,
                      color: "purple",
                      progress: 30,
                      lessons: "4 of 15 completed",
                      nextLesson: "Neuron Structure"
                    }
                  ].map((system, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <div className={`bg-${system.color}-100 rounded-full p-2 w-10 h-10 flex items-center justify-center mr-3`}>
                          <system.icon className={`h-5 w-5 text-${system.color}-600`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm">{system.title}</h3>
                          <p className="text-xs text-gray-600">{system.lessons}</p>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium">{system.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`bg-${system.color}-600 h-2 rounded-full transition-all duration-300`}
                            style={{ width: `${system.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-600 mb-3">
                        Next: {system.nextLesson}
                      </div>
                      
                      <Button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm">
                        Continue
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
                
                <div className="space-y-4">
                  {[
                    {
                      type: "quiz",
                      title: "Cardiovascular Quiz",
                      score: 92,
                      time: "2 hours ago",
                      icon: Target,
                      color: "green"
                    },
                    {
                      type: "lab",
                      title: "Heart Rate Lab",
                      score: null,
                      time: "1 day ago",
                      icon: Play,
                      color: "purple"
                    },
                    {
                      type: "lesson",
                      title: "Blood Circulation",
                      score: null,
                      time: "2 days ago",
                      icon: BookOpen,
                      color: "blue"
                    },
                    {
                      type: "achievement",
                      title: "Heart Expert Badge",
                      score: null,
                      time: "3 days ago",
                      icon: Trophy,
                      color: "yellow"
                    }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className={`bg-${activity.color}-100 rounded-full p-2 w-10 h-10 flex items-center justify-center`}>
                        <activity.icon className={`h-5 w-5 text-${activity.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                        <p className="text-sm text-gray-600">{activity.time}</p>
                      </div>
                      {activity.score && (
                        <div className="text-right">
                          <div className="font-bold text-green-600">{activity.score}%</div>
                          <div className="text-xs text-gray-600">Score</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Analytics */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Performance Analytics</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Quiz Scores Trend</h3>
                    <div className="bg-gray-50 rounded-lg p-4 h-48 flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Improving! +5% this week</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Learning Time</h3>
                    <div className="bg-gray-50 rounded-lg p-4 h-48 flex items-center justify-center">
                      <div className="text-center">
                        <Clock className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">2.5 hours this week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Achievements */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Achievements</h2>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Heart Expert",
                      description: "Completed all cardiovascular lessons",
                      icon: Heart,
                      color: "red",
                      earned: true
                    },
                    {
                      title: "Quiz Master",
                      description: "Scored 90%+ on 5 quizzes",
                      icon: Target,
                      color: "green",
                      earned: true
                    },
                    {
                      title: "Lab Researcher",
                      description: "Completed 10 virtual labs",
                      icon: Play,
                      color: "purple",
                      earned: false
                    },
                    {
                      title: "Streak Champion",
                      description: "15-day learning streak",
                      icon: Trophy,
                      color: "yellow",
                      earned: false
                    }
                  ].map((achievement, index) => (
                    <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${
                      achievement.earned ? 'bg-green-50' : 'bg-gray-50'
                    }`}>
                      <div className={`rounded-full p-2 w-10 h-10 flex items-center justify-center ${
                        achievement.earned ? `bg-${achievement.color}-100` : 'bg-gray-200'
                      }`}>
                        <achievement.icon className={`h-5 w-5 ${
                          achievement.earned ? `text-${achievement.color}-600` : 'text-gray-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold ${
                          achievement.earned ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {achievement.title}
                        </h3>
                        <p className="text-xs text-gray-600">{achievement.description}</p>
                      </div>
                      {achievement.earned && (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Sessions */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Sessions</h2>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Q&A with Dr. Martinez",
                      time: "Today, 4:00 PM",
                      type: "Live Session"
                    },
                    {
                      title: "Respiratory System Quiz",
                      time: "Tomorrow, 3:00 PM",
                      type: "Quiz"
                    },
                    {
                      title: "Brain Anatomy Workshop",
                      time: "Friday, 4:00 PM",
                      type: "Workshop"
                    }
                  ].map((session, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 text-sm">{session.title}</h3>
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                          {session.type}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{session.time}</span>
                      </div>
                      <Button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm">
                        Join
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                
                <div className="space-y-3">
                  <Link href="/quizzes">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white justify-start">
                      <Target className="h-4 w-4 mr-2" />
                      Take a Quiz
                    </Button>
                  </Link>
                  
                  <Link href="/virtual-labs">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white justify-start">
                      <Play className="h-4 w-4 mr-2" />
                      Start Virtual Lab
                    </Button>
                  </Link>
                  
                  <Link href="/community">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white justify-start">
                      <Star className="h-4 w-4 mr-2" />
                      Ask Question
                    </Button>
                  </Link>
                  
                  <Link href="/courses">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white justify-start">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Browse Courses
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 