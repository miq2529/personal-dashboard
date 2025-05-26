import Head from 'next/head'
import Profile from '../components/Profile'
import Academics from '../components/Academics'
import Skills from '../components/Skills'
import Extras from '../components/Extras'

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      <Head>
        <title>Mustaqeem's Dashboard</title>
      </Head>
      <main className="max-w-4xl mx-auto p-6">
        <Profile />
        <Academics />
        <Skills />
        <Extras />
      </main>
    </div>
  )
}