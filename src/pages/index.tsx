import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>10xSpeed – AI Content Engine</title>
      </Head>

      <main className="min-h-screen bg-white text-black px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Fastest AI-powered content engine<br />
            <span className="text-blue-600">for Instagram & LinkedIn</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Build carousels, reels, captions & more in one click.
          </p>

          <div className="space-x-4 mb-12">
            <Link href="/connect">
              <span className="inline-block bg-black text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-800 cursor-pointer">
                Get Started
              </span>
            </Link>

            <Link href="/connect">
              <span className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 cursor-pointer">
                Start your Free Trial
              </span>
            </Link>
          </div>

          <p className="text-gray-600 mb-4">Built on battle-tested tools</p>
          <p className="text-sm text-gray-500 mb-8">
            Powered by Next.js, Tailwind, Canva API & n8n — made for speed, scale & full automation.
          </p>

          <p className="text-gray-700">
            Trusted by indie hackers, startups & growth teams.<br />
            Built for creators, marketers & founders.
          </p>
        </div>
      </main>

      <footer className="text-center text-sm text-gray-500 mt-20">
        © 2025 10xSpeed. All rights reserved.
      </footer>
    </>
  )
}
