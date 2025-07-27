export default function ConnectPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-white text-center p-6">
      <h1 className="text-3xl font-bold mb-4">Connect your Canva account</h1>
      <p className="text-gray-600 mb-8 max-w-xl">
        You'll be redirected to Canva to authorize your account. Once done, we'll bring you right back here.
      </p>
      <a
        href={`https://www.canva.com/apps/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_CANVA_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_CANVA_REDIRECT_URI}`}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-semibold"
      >
        Connect with Canva
      </a>
    </main>
  );
}
