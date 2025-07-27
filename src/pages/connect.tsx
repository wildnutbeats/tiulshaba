export default function ConnectPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-6 text-center">
      <h1 className="mb-4 text-3xl font-bold">Connect your Canva account</h1>
      <p className="mb-8 max-w-xl text-gray-600">
        You&apos;ll be redirected to Canva to authorize your account. Once done, we&apos;ll bring you right back here.
      </p>
      <a
        href={`https://www.canva.com/apps/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_CANVA_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_CANVA_REDIRECT_URI}`}
        className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Connect with Canva
      </a>
    </main>
  );
}
