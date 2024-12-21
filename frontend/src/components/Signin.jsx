// Signin.jsx
import React, { useState } from 'react';

const Signin = () => {
  const [mode, setMode] = useState('light');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.welcomeMessage);
        localStorage.setItem('token', data.token);
      } else {
        setError(data.message || 'An error occurred during sign in');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
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
              Welcome Back, Scholar!
            </h1>
            <button
              onClick={toggleMode}
              className={`p-2 rounded-full ${mode === 'light' ? 'bg-rustic-100 text-rustic-700' : 'bg-rustic-700 text-cream-200'}`}
            >
              {mode === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="email" className={`block text-sm font-medium ${mode === 'light' ? 'text-rustic-700' : 'text-cream-300'}`}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full px-3 py-2 border rounded-md ${mode === 'light' ? 'bg-cream-50 border-rustic-300 focus:border-rustic-500' : 'bg-rustic-700 border-rustic-600 focus:border-cream-500'} focus:outline-none focus:ring-2 focus:ring-opacity-50 ${mode === 'light' ? 'focus:ring-rustic-500' : 'focus:ring-cream-500'}`}
                required
              />
            </div>
            {error && (
              <p className={`text-sm ${mode === 'light' ? 'text-rustic-600' : 'text-cream-400'}`}>
                {error}
              </p>
            )}
            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors ${mode === 'light' ? 'bg-rustic-600 hover:bg-rustic-700' : 'bg-cream-700 hover:bg-cream-800'}`}
            >
              Continue Your Learning Journey
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signin;
