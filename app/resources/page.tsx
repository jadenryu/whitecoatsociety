import React from 'react'
import Header from '@/header'
import { Button } from '@/components/ui/button'
import { BookOpen, FileText, Download, ExternalLink, Search, Filter, Tag, ChevronRight } from 'lucide-react'
import Link from 'next/link'

// Sample resources data
const resources = [
  {
    id: 1,
    title: 'Complete Anatomy Study Guide',
    description: 'Comprehensive study materials covering all major body systems with detailed illustrations.',
    type: 'PDF',
    size: '12.5 MB',
    category: 'Anatomy',
    downloads: 3452,
    tags: ['anatomy', 'study guide', 'illustrations']
  },
  {
    id: 2,
    title: 'Pharmacology Quick Reference',
    description: 'Quick reference guide for commonly prescribed medications, including dosages, mechanisms, and side effects.',
    type: 'PDF',
    size: '8.2 MB',
    category: 'Pharmacology',
    downloads: 2876,
    tags: ['pharmacology', 'medications', 'reference']
  },
  {
    id: 3,
    title: 'Clinical Examination Techniques',
    description: 'Step-by-step guide to performing thorough clinical examinations across different body systems.',
    type: 'PDF',
    size: '15.7 MB',
    category: 'Clinical Skills',
    downloads: 4128,
    tags: ['clinical', 'examination', 'techniques']
  },
  {
    id: 4,
    title: 'Medical Terminology Flashcards',
    description: 'Digital flashcards covering essential medical terminology for students and professionals.',
    type: 'ZIP',
    size: '5.3 MB',
    category: 'Medical Terminology',
    downloads: 1985,
    tags: ['flashcards', 'terminology', 'study aid']
  },
  {
    id: 5,
    title: 'Pathology Case Studies Collection',
    description: 'Collection of 50+ pathology case studies with histology images and clinical correlations.',
    type: 'PDF',
    size: '24.1 MB',
    category: 'Pathology',
    downloads: 3217,
    tags: ['pathology', 'case studies', 'histology']
  },
  {
    id: 6,
    title: 'ECG Interpretation Guide',
    description: 'Comprehensive guide to ECG interpretation with examples of normal and pathological patterns.',
    type: 'PDF',
    size: '10.8 MB',
    category: 'Cardiology',
    downloads: 5432,
    tags: ['ECG', 'cardiology', 'interpretation']
  },
  {
    id: 7,
    title: 'Medical Ethics Case Discussions',
    description: 'Discussion of common ethical dilemmas in medicine with analysis and recommendations.',
    type: 'PDF',
    size: '7.6 MB',
    category: 'Medical Ethics',
    downloads: 1245,
    tags: ['ethics', 'case discussions', 'professional development']
  },
  {
    id: 8,
    title: 'Laboratory Values Reference Sheet',
    description: 'Quick reference for common laboratory values with normal ranges and clinical significance.',
    type: 'PDF',
    size: '3.2 MB',
    category: 'Laboratory Medicine',
    downloads: 6789,
    tags: ['laboratory', 'reference', 'clinical']
  }
];

// Categories for filtering
const categories = [
  'All Categories',
  'Anatomy',
  'Pharmacology',
  'Clinical Skills',
  'Medical Terminology',
  'Pathology',
  'Cardiology',
  'Medical Ethics',
  'Laboratory Medicine'
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Study Resources</h1>
            <p className="text-xl text-blue-100">
              Access our comprehensive collection of medical study materials, guides, and references.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search resources..."
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select className="appearance-none pl-3 pr-10 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  {categories.map((category, index) => (
                    <option key={index}>{category}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronRight className="h-4 w-4 rotate-90" />
                </div>
              </div>
              
              <div className="relative">
                <select className="appearance-none pl-3 pr-10 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>All Types</option>
                  <option>PDF</option>
                  <option>ZIP</option>
                  <option>DOC</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronRight className="h-4 w-4 rotate-90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {resource.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <FileText className="h-4 w-4 mr-1" />
                      <span>{resource.type}</span>
                      <span className="mx-1">•</span>
                      <span>{resource.size}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {resource.tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {resource.downloads.toLocaleString()} downloads
                    </span>
                    <div className="flex space-x-2">
                      <Button className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 p-2 h-9 w-9">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white p-2 h-9">
                        <Download className="h-4 w-4 mr-1" />
                        <span>Download</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Load More Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Collections</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Curated collections of resources to help you master specific medical topics and skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'USMLE Step 1 Preparation',
                description: 'Comprehensive collection of study materials for USMLE Step 1 preparation.',
                items: 24
              },
              {
                title: 'Clinical Skills Essentials',
                description: 'Essential resources for developing and refining your clinical examination skills.',
                items: 18
              },
              {
                title: 'Medical Imaging Interpretation',
                description: 'Guides and case studies for interpreting various medical imaging modalities.',
                items: 15
              }
            ].map((collection, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{collection.title}</h3>
                <p className="text-gray-600 mb-4">{collection.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{collection.items} items</span>
                  <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                    View Collection <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl text-white p-8 md:p-12 lg:p-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Contribute to Our Resources</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Are you a medical professional or educator? Share your knowledge by contributing study materials to our platform.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                Submit a Resource
              </Button>
            </div>
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
              <p className="text-gray-400 mb-4">
                Providing accessible, high-quality medical education for students and professionals worldwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
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