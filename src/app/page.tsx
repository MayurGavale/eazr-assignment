'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const router = useRouter()

  const handleNavigateToLogin = () => {
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex flex-col justify-center items-center px-6 py-12 text-center relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-purple-100 opacity-50 -z-10" />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Admin Dashboard Portal
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
          Welcome to the centralized management hub for your application. This secure portal provides
          authorized personnel with powerful tools to oversee user accounts, monitor system
          performance, and maintain data integrity.
        </p>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          To access the full suite of administrative features and ensure the smooth operation of your
          platform, please proceed to the login page.
        </p>
        
        {/* Button Container - Make sure button is centered */}
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={handleNavigateToLogin}
            className="flex items-center justify-center text-lg px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-xl transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Access Admin Panel
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Support Info */}
      <div className="mt-16 text-gray-600">
        <p>Need assistance? Contact our support team at <a href="mailto:support@example.com" className="text-indigo-600 hover:underline">support@example.com</a></p>
      </div>
    </div>
  )
}
