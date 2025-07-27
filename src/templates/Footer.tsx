import Link from 'next/link';

const Footer = () => (
  <footer className="border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-500">
    <div className="mb-2">
      ©{' '}
      {new Date().getFullYear()} 10xSpeed. All rights reserved.
    </div>
    <div className="space-x-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/signin">Sign in</Link>
      <Link href="https://github.com/wildnutbeats/tiulshaba">GitHub</Link>
    </div>
  </footer>
);

export { Footer };
