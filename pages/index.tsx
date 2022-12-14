import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-sm font-bold">
          <a target="_blank" href="https://www.instagram.com/advenjarr">@advenjar</a>
        </h1>

        <p className="mt-3 text-2xl font-fancy">
          brb. 🔨
        </p>

      </main>

      <footer className="flex h-20 w-full items-center justify-center text-sm">
        
        <a href="mailto:hi@advenjar.com">hi@advenjar.com</a>
      </footer>
    </div>
  )
}

export default Home
