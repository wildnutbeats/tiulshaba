import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-white text-gray-900 px-6 md:px-12 py-16 space-y-16">
      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Fastest AI-powered content engine
          <br />
          for Instagram & LinkedIn
        </h1>
        <p className="text-xl md:text-2xl text-gray-600">
          Build carousels, reels, captions & more in one click.
        </p>
        <Link
          href="#"
          className="inline-block bg-black text-white py-3 px-6 text-lg rounded-md font-semibold hover:bg-gray-800"
        >
          Get Started
        </Link>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Built on battle-tested tools</h2>
          <p className="text-gray-600">
            Powered by Next.js, Tailwind, Canva API & n8n — made for speed, scale & full automation.
          </p>
          <p className="text-gray-600">
            Trusted by indie hackers, startups & growth teams.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Built for creators, marketers & founders</h2>
          <p className="text-gray-600">
            Skip the grind. Generate carousels, reels, captions & posts in seconds — from trending news or your own ideas.
          </p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold">Turn news links into carousels</h3>
          <p className="text-gray-600">
            Paste any news link. Get a polished, 7-slide Instagram or LinkedIn carousel — fully editable in Canva.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Auto-post to Instagram & LinkedIn</h3>
          <p className="text-gray-600">
            Schedule or auto-publish your carousels with captions directly to your socials, without leaving the dashboard.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Use your own Canva template</h3>
          <p className="text-gray-600">
            No boring AI designs. Bring your own Canva brand template and our engine fills it perfectly.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center space-y-4">
        <p className="text-gray-700 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Link
          href="#"
          className="inline-block bg-blue-600 text-white py-3 px-6 text-lg rounded-md font-semibold hover:bg-blue-700"
        >
          Start your Free Trial
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="border-t pt-8 text-center text-sm text-gray-500 space-y-2">
        <p>© {new Date().getFullYear()} 10xSpeed. All rights reserved.</p>
        <nav className="space-x-4">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Sign in</Link>
          <Link href="#">GitHub</Link>
        </nav>
      </footer>
    </main>
  );
}
