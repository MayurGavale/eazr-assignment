'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [contactNumber, setContactNumber] = useState('7710957578')
  const [otp, setOtp] = useState('')
  const [isOtpSent, setIsOtpSent] = useState(false)
  const router = useRouter()

  const handleSendOtp = async () => {
    try {
      // In a real application, you would use this API call
      // await axios.post('https://eazrdaily.eazr.in/auth/admin/sendOtp', {
      //   contactNumber: contactNumber,
      // })
      setIsOtpSent(true)
    } catch (error) {
      console.error('Error sending OTP:', error)
      alert('Failed to send OTP. Please try again.')
    }
  }

  const handleVerifyOtp = async () => {
    if (otp === '7710') {
      // In a real app, call the API to verify OTP and get a token
      // const response = await axios.post('https://your-api-endpoint/verify-otp', {
      //   contactNumber,
      //   otp
      // })
      // const token = response.data.token
      // document.cookie = `token=${token}; path=/`
      router.push('/admin/dashboard')
    } else {
      alert('Invalid OTP. Please try again.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-center text-gray-800">Admin Login</h2>
            <p className="text-center text-gray-600 mt-1">
              Enter your credentials to access the admin panel
            </p>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <div>
              <p className="text-sm font-medium text-blue-800">Contact Number</p>
              <p className="text-lg font-bold text-blue-900">{contactNumber}</p>
            </div>
          </div>
          {!isOtpSent ? (
            <div className="space-y-2">
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <input
                id="contactNumber"
                type="tel"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your mobile number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
          ) : (
            <div className="space-y-2">
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                OTP
              </label>
              <input
                id="otp"
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          )}
          {!isOtpSent ? (
            <button
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleSendOtp}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Send OTP
            </button>
          ) : (
            <button
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={handleVerifyOtp}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Verify OTP
            </button>
          )}
        </div>
      </div>
    </div>
  )
}