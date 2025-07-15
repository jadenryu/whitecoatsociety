import React from 'react'
import Header from '@/header'
import { Button } from '@/components/ui/button'
import { BookOpen, Users, Award, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About White Coats Society</h1>
            <p className="text-xl text-blue-100">
              We're dedicated to providing free, high-quality medical education to students and professionals around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                White Coats Society is dedicated to providing free, high-quality medical education
                to students and professionals around the world. Our mission is to make medical
                knowledge accessible to everyone, regardless of their background or financial situation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that medical education should be accessible to all. By removing financial
                barriers, we aim to empower the next generation of healthcare professionals with the
                knowledge they need to excel in their careers and provide the best possible care to
                their patients.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Accessible education for all medical students and professionals</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Up-to-date content reflecting the latest medical advancements</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Community-driven platform supporting peer learning</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg relative">
              <div className="absolute -left-4 -top-4 w-20 h-20 bg-blue-100 rounded-lg"></div>
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-blue-100 rounded-lg"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-md">
                <div className="bg-blue-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
                <p className="text-gray-600 text-center">
                  To create a world where quality medical education is available to everyone, 
                  breaking down barriers and empowering healthcare professionals globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team consists of experienced medical professionals, educators, and technologists
              who are passionate about transforming medical education.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Johnson',
                role: 'Founder & Medical Director',
                bio: 'Cardiologist with over 15 years of experience in medical education and clinical practice.'
              },
              {
                name: 'Prof. Michael Chen',
                role: 'Chief Educational Officer',
                bio: 'Former dean of a leading medical school with expertise in curriculum development.'
              },
              {
                name: 'Dr. Emily Rodriguez',
                role: 'Content Director',
                bio: 'Specializes in creating accessible medical content for students at all levels.'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-blue-100 w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{member.name}</h3>
                <p className="text-blue-600 mb-4 text-center">{member.role}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core principles that guide everything we do at White Coats Society.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: 'Accessibility',
                description: 'We believe education should be available to everyone, regardless of financial means.'
              },
              {
                title: 'Excellence',
                description: 'We maintain the highest standards in all educational content we provide.'
              },
              {
                title: 'Innovation',
                description: 'We continuously explore new ways to improve medical education.'
              },
              {
                title: 'Community',
                description: 'We foster a supportive environment for learning and collaboration.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Become part of our growing community of medical students and professionals dedicated to lifelong learning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto">
              Sign Up for Free
            </Button>
            <Button className="bg-transparent border border-white hover:bg-blue-700 text-lg px-8 py-6 h-auto">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">White Coats Society</h1>
                  <p className="text-xs text-gray-400">Free Medical Education</p>
                </div>
              </div>
              <p className="text-gray-400">
                Providing accessible, high-quality medical education for students and professionals worldwide.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/courses" className="text-gray-400 hover:text-white">Courses</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/resources" className="text-gray-400 hover:text-white">Study Materials</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                <li><Link href="/support" className="text-gray-400 hover:text-white">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400 mb-4">
                Have questions? Reach out to our team for assistance.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Get in Touch
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} White Coats Society. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
