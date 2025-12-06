// src/App.tsx

function App() {
  return (
    <>
      {/* Full-screen centered background */}
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center">
        <div className="text-center p-10 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20">
          {/* Big fancy title */}
          <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6">
            Tailwind CSS
            <span className="block text-4xl md:text-5xl mt-4 text-yellow-300">
              is working! 🎉
            </span>
          </h1>

          {/* Some colorful test cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-red-500 p-6 rounded-xl text-white font-bold shadow-lg hover:scale-110 transition">
              Red
            </div>
            <div className="bg-blue-500 p-6 rounded-xl text-white font-bold shadow-lg hover:scale-110 transition">
              Blue
            </div>
            <div className="bg-green-500 p-6 rounded-xl text-white font-bold shadow-lg hover:scale-110 transition">
              Green
            </div>
            <div className="bg-yellow-500 p-6 rounded-xl text-white font-bold shadow-lg hover:scale-110 transition">
              Yellow
            </div>
          </div>

          {/* Small footer */}
          <p className="mt-10 text-white/80 text-lg">
            React + Vite + TypeScript + Tailwind v4 (or v3) →{' '}
            <span className="text-cyan-300 font-semibold">100% working</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default App