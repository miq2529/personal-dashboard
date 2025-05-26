// pages/index.js
import Profile from '@/components/Profile'
import Academics from '@/components/Academics'
import Skills from '@/components/Skills'
import Extras from '@/components/Extras'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">🌟 Personal Dashboard</h1>
        <Profile />
        <Academics />
        <Skills />
        <Extras />
      </div>
    </div>
  )
}
