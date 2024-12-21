// Signup.jsx
import React, { useState } from 'react';

const Signup = () => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <section className={`min-h-screen flex items-center justify-center p-4 ${mode === 'light' ? 'bg-cream-50' : 'bg-rustic-900'}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }}>
      <div
        className={`w-full max-w-md ${mode === 'light' ? 'bg-cream-100' : 'bg-rustic-800'} rounded-xl shadow-lg overflow-hidden`}
      >
        <div className="p-8 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className={`text-2xl font-bold font-serif ${mode === 'light' ? 'text-rustic-700' : 'text-cream-200'}`}>
              Join the Knowledge Quest!
            </h1>
            <button
              onClick={toggleMode}
              className={`p-2 rounded-full ${mode === 'light' ? 'bg-rustic-100 text-rustic-700' : 'bg-rustic-700 text-cream-200'}`}
            >
              {mode === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
          <form className="space-y-4" action="#">
            <div className="space-y-2">
              <label htmlFor="firstname" className={`block text-sm font-medium ${mode === 'light' ? 'text-rustic-700' : 'text-cream-300'}`}>
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Sambit"
                className={`w-full px-3 py-2 border rounded-md ${mode === 'light' ? 'bg-cream-50 border-rustic-300 focus:border-rustic-500' : 'bg-rustic-700 border-rustic-600 focus:border-cream-500'} focus:outline-none focus:ring-2 focus:ring-opacity-50 ${mode === 'light' ? 'focus:ring-rustic-500' : 'focus:ring-cream-500'}`}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastname" className={`block text-sm font-medium ${mode === 'light' ? 'text-rustic-700' : 'text-cream-300'}`}>
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Mohanty"
                className={`w-full px-3 py-2 border rounded-md ${mode === 'light' ? 'bg-cream-50 border-rustic-300 focus:border-rustic-500' : 'bg-rustic-700 border-rustic-600 focus:border-cream-500'} focus:outline-none focus:ring-2 focus:ring-opacity-50 ${mode === 'light' ? 'focus:ring-rustic-500' : 'focus:ring-cream-500'}`}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className={`block text-sm font-medium ${mode === 'light' ? 'text-rustic-700' : 'text-cream-300'}`}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="ada@example.com"
                className={`w-full px-3 py-2 border rounded-md ${mode === 'light' ? 'bg-cream-50 border-rustic-300 focus:border-rustic-500' : 'bg-rustic-700 border-rustic-600 focus:border-cream-500'} focus:outline-none focus:ring-2 focus:ring-opacity-50 ${mode === 'light' ? 'focus:ring-rustic-500' : 'focus:ring-cream-500'}`}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className={`block text-sm font-medium ${mode === 'light' ? 'text-rustic-700' : 'text-cream-300'}`}>
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className={`w-full px-3 py-2 border rounded-md ${mode === 'light' ? 'bg-cream-50 border-rustic-300 focus:border-rustic-500' : 'bg-rustic-700 border-rustic-600 focus:border-cream-500'} focus:outline-none focus:ring-2 focus:ring-opacity-50 ${mode === 'light' ? 'focus:ring-rustic-500' : 'focus:ring-cream-500'}`}
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors ${mode === 'light' ? 'bg-rustic-600 hover:bg-rustic-700' : 'bg-cream-700 hover:bg-cream-800'}`}
            >
              See the Question Papers
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
