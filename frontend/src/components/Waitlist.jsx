const Waitlist = () => {
  return <>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className={`flex items-center border-b-2 ${mode === 'light' ? 'border-rustic-300' : 'border-cream-400'} py-2`}>
        <input
          className={`appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none ${mode === 'light' ? 'text-rustic-800 placeholder-rustic-400' : 'text-cream-100 placeholder-cream-500'}`}
          type="email"
          placeholder="Enter your email"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          className={`flex-shrink-0 ${mode === 'light' ? 'bg-rustic-600 hover:bg-rustic-700 border-rustic-600 hover:border-rustic-700' : 'bg-cream-700 hover:bg-cream-800 border-cream-700 hover:border-cream-800'} text-sm border-4 text-white py-1 px-2 rounded`}
          type="submit"
        >
          Join Waitlist
        </button>
      </div>
    </form>
  </>
}

export default Waitlist;
