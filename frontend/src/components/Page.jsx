
import React, { useState } from "react";

const Page = () => {
  const [mode, setMode] = useState("dark");
  const [email, setEmail] = useState("");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div
      className={`min-h-screen ${mode === "light"
        ? "bg-cream-50 text-rustic-800"
        : "bg-rustic-900 text-cream-200"
        }`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
    >
      {/* Navigation */}
      <nav
        className={`${mode === "light"
          ? "bg-cream-100 shadow-rustic-200"
          : "bg-rustic-800 shadow-rustic-900"
          } shadow-md`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span
                className={`text-2xl font-bold font-serif ${mode === "light" ? "text-rustic-700" : "text-cream-200"
                  }`}
              >
                QuestionBank
              </span>
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleMode}
                className={`p-2 rounded-full ${mode === "light"
                  ? "bg-rustic-100 text-rustic-700"
                  : "bg-rustic-700 text-cream-200"
                  }`}
              >
                {mode === "light" ? "🌙" : "☀️"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h1
            className={`text-4xl sm:text-5xl font-bold mb-4 font-serif ${mode === "light" ? "text-rustic-800" : "text-cream-100"
              }`}
            style={{
              textShadow:
                mode === "light"
                  ? "2px 2px 4px rgba(165, 42, 42, 0.1)"
                  : "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            Struggle to find previous year question papers for semester exams
            made easy
          </h1>
          <p
            className={`text-xl mb-8 ${mode === "light" ? "text-rustic-700" : "text-cream-300"
              }`}
          >
            Join our community for early access to a platform where you can
            contribute and access a growing database of question papers
            submitted by teachers and students.
          </p>

          {/* Coming Soon Button */}
          <button
            className={`
              relative overflow-hidden
              ${mode === "light"
                ? "bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700 text-white"
                : "bg-yellow-400 hover:bg-yellow-500 border-yellow-400 hover:border-yellow-500 text-gray-900"
              }
              text-lg font-bold border-4 py-3 px-6 rounded-lg
              transform hover:scale-105 transition-all duration-200
              before:content-[''] before:absolute before:inset-0 
              before:bg-[url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")]
              before:opacity-50 before:mix-blend-overlay
              active:translate-y-0.5
              shadow-lg hover:shadow-xl
            `}
            type="button"
          >
            <span className="relative z-10 tracking-wider">Coming Soon</span>
          </button>

          {/* Upload Question Papers Section */}
          <div className="mt-12">
            <div
              className={`text-xl mb-4 ${mode === "light" ? "text-rustic-700" : "text-cream-300"
                }`}
            >
              Do you have any question papers to give us?
            </div>
            <button
              className={`${mode === "light"
                ? "bg-rustic-600 hover:bg-rustic-700 border-rustic-600 hover:border-rustic-700 text-white"
                : "bg-cream-700 hover:bg-cream-800 border-cream-700 hover:border-cream-800 text-rustic-900"
                } text-sm border-4 py-2 px-4 rounded font-medium`}
              type="button"
              onClick={() =>
                window.location.href =
                "https://forms.gle/4u1rFqSQKK6AoGkY7"
              }
            >
              Upload Question Papers
            </button>
          </div>
        </section>

        {/* Why QuestionBank Section */}
        <section
          className={`text-center ${mode === "light" ? "bg-cream-100" : "bg-rustic-800"
            } p-8 rounded-lg shadow-md`}
          style={{
            boxShadow:
              mode === "light"
                ? "0 4px 6px rgba(165, 42, 42, 0.1)"
                : "0 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2
            className={`text-2xl font-bold mb-4 font-serif ${mode === "light" ? "text-rustic-800" : "text-cream-200"
              }`}
          >
            Why QuestionBank?
          </h2>
          <ul
            className={`text-left list-disc list-inside ${mode === "light" ? "text-rustic-700" : "text-cream-300"
              }`}
          >
            <li>Contribute your own questions to help others learn</li>
            <li>Access a diverse range of user-submitted questions</li>
            <li>Collaborate with a community of learners</li>
            <li>Perfect for students, educators for exam preparation</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer
        className={`mt-16 py-8 ${mode === "light"
          ? "bg-cream-100 text-rustic-600"
          : "bg-rustic-900 text-cream-400"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; Built by Sam</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
