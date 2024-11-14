'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Mail, Phone, MapPin, Calendar, UserIcon, Briefcase, Clock, Users2, Wrench } from 'lucide-react'
import { getUserById } from '@/app/mockdata'
import type { User } from '@/app/mockdata'
import { Badge } from "@/components/ui/badge"

interface PageProps {
  params: Promise<{ id: string }>
}

export default function UserProfile({ params }: PageProps) {
  const resolvedParams = React.use(params)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Simulate API loading delay
    const timer = setTimeout(() => {
      const userData = getUserById(resolvedParams.id)
      setUser(userData)
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [resolvedParams.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-600 mb-4">User not found</p>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </button>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          {/* Header */}
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center border-b border-gray-200">
            <div className="flex items-center">
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="h-16 w-16 rounded-full border-4 border-gray-200"
              />
              <div className="ml-4">
                <h1 className="text-2xl font-semibold text-gray-900">{user.name}</h1>
                <p className="text-sm text-gray-500">{user.role}</p>
              </div>
            </div>
            <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
              {user.status}
            </Badge>
          </div>

          {/* User Details */}
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-400" />
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.email}</dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Phone className="w-5 h-5 mr-2 text-gray-400" />
                Contact number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.contactNumber}</dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                Address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.address}</dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-gray-400" />
                Department
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.department}</dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-gray-400" />
                Last active
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.lastActive}</dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-gray-400" />
                Join date
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.joinDate}</dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Users2 className="w-5 h-5 mr-2 text-gray-400" />
                Projects
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="space-y-1">
                  {user.projects.map((project, index) => (
                    <li key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full inline-block mr-2 mb-2">
                      {project}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Wrench className="w-5 h-5 mr-2 text-gray-400" />
                Skills
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="space-y-1">
                  {user.skills.map((skill, index) => (
                    <li key={index} className="bg-green-50 text-green-700 px-3 py-1 rounded-full inline-block mr-2 mb-2">
                      {skill}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}