import React from 'react'
import Header from '@/header'
import { Button } from '@/components/ui/button'
import { Heart, Brain, Activity, Target, Clock, Star, Trophy, CheckCircle, Play, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function QuizzesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Interactive Quizzes
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              Test your knowledge with adaptive quizzes that adjust to your learning pace and provide personalized feedback.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Button className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-6 h-auto">
                Start Quiz Now
              </Button>
              <Button className="bg-transparent border border-white hover:bg-green-700 text-lg px-8 py-6 h-auto">
                View My Progress
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Quiz Topic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our comprehensive collection of body system quizzes, each designed to reinforce learning and track your progress.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cardiovascular System",
                icon: Heart,
                color: "red",
                description: "Test your knowledge of heart anatomy and blood circulation",
                questions: 25,
                difficulty: "Beginner",
                completedBy: "2,847 students",
                avgScore: 87
              },
              {
                title: "Respiratory System", 
                icon: Activity,
                color: "blue",
                description: "Quiz on breathing, lungs, and oxygen exchange",
                questions: 20,
                difficulty: "Beginner",
                completedBy: "2,156 students",
                avgScore: 82
              },
              {
                title: "Nervous System",
                icon: Brain,
                color: "purple", 
                description: "Challenge yourself with brain and nerve questions",
                questions: 30,
                difficulty: "Intermediate",
                completedBy: "1,523 students",
                avgScore: 78
              },
              {
                title: "Skeletal System",
                icon: Target,
                color: "gray",
                description: "Learn about bones, joints, and movement",
                questions: 18,
                difficulty: "Beginner",
                completedBy: "2,234 students",
                avgScore: 85
              },
              {
                title: "Digestive System",
                icon: Target,
                color: "orange",
                description: "Follow food's journey through your body",
                questions: 22,
                difficulty: "Beginner", 
                completedBy: "1,967 students",
                avgScore: 89
              },
              {
                title: "Immune System",
                icon: Target,
                color: "green",
                description: "Discover how your body fights infections",
                questions: 24,
                difficulty: "Intermediate",
                completedBy: "1,445 students",
                avgScore: 76
              }
            ].map((quiz, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-${quiz.color}-100 rounded-full p-3 w-12 h-12 flex items-center justify-center`}>
                    <quiz.icon className={`h-6 w-6 text-${quiz.color}-600`} />
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full bg-${quiz.color}-100 text-${quiz.color}-800`}>
                    {quiz.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{quiz.title}</h3>
                <p className="text-gray-600 mb-4">{quiz.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{quiz.questions} questions</span>
                    <span>Avg: {quiz.avgScore}%</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Completed by {quiz.completedBy}
                  </div>
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Play className="h-4 w-4 mr-2" />
                  Start Quiz
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
              Smart Learning Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our adaptive quiz system personalizes your learning experience for maximum effectiveness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Adaptive Difficulty</h3>
              <p className="text-gray-600">Questions adjust based on your performance to keep you challenged but not overwhelmed.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Instant Feedback</h3>
              <p className="text-gray-600">Get immediate explanations for each answer to reinforce learning.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Trophy className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Progress Tracking</h3>
              <p className="text-gray-600">Monitor your improvement with detailed analytics and achievement badges.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Timed Challenges</h3>
              <p className="text-gray-600">Optional time limits to simulate exam conditions and improve speed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Track Your Learning Journey
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                See your progress, identify areas for improvement, and celebrate your achievements with our comprehensive tracking system.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Cardiovascular Quiz</h3>
                    <p className="text-sm text-gray-600">Score: 92% • Completed 2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                    <Star className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Respiratory Quiz</h3>
                    <p className="text-sm text-gray-600">Score: 88% • Completed yesterday</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Achievement Unlocked!</h3>
                    <p className="text-sm text-gray-600">Heart Expert Badge • Earned 3 days ago</p>
                  </div>
                </div>
              </div>
              
              <Link href="/dashboard">
                <Button className="mt-8 bg-green-600 hover:bg-green-700 text-white">
                  View Full Dashboard
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute -left-8 -top-8 w-32 h-32 bg-green-200 rounded-full opacity-20"></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
              <div className="relative bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Stats</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">15</div>
                    <div className="text-sm text-gray-600">Quizzes Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">87%</div>
                    <div className="text-sm text-gray-600">Average Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
                    <div className="text-sm text-gray-600">Badges Earned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">12</div>
                    <div className="text-sm text-gray-600">Day Streak</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Test Your Knowledge?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Start with any quiz and watch your medical knowledge grow with our adaptive learning system.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-6 h-auto">
              Take Your First Quiz
            </Button>
            <Link href="/signup">
              <Button className="bg-transparent border border-white hover:bg-green-700 text-lg px-8 py-6 h-auto">
                Sign Up Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 