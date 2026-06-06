"use client";

import type { Metadata } from "next";
import { useState } from "react";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback({
      type: "success",
      message: mode === "login" ? "Successfully signed in!" : "Successfully registered!"
    });
    setTimeout(() => {
      setFeedback(null);
      window.location.href = "/";
    }, 1500);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md space-y-6">
        {feedback ? (
          <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest text-cream text-2xl font-bold animate-bounce">
              ✓
            </div>
            <p className="text-lg font-serif font-semibold text-bark">{feedback.message}</p>
          </div>
        ) : mode === "login" ? (
          /* Login Form */
          <div className="space-y-6">
            <h1 className="text-center font-serif text-5xl font-semibold text-bark">Login</h1>
            
            <div className="space-y-3 pt-4">
              {/* Google Sign In */}
              <button
                onClick={() => {
                  setFeedback({ type: "success", message: "Signed in with Google!" });
                  setTimeout(() => {
                    setFeedback(null);
                    window.location.href = "/";
                  }, 1500);
                }}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#4285F4] py-3.5 text-sm font-semibold text-white transition hover:bg-[#357AE8]"
              >
                {/* Google G Icon */}
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69c-.29 1.5-.14 2.64-1.21 3.66v3.04h1.96c4.66-4.3 7.3-10.66 7.3-17.55z" fill="#FFF" />
                  <path d="M12 24c3.24 0 5.97-1.08 7.96-2.91l-3.86-3c-1.08.72-2.45 1.16-4.1 1.16-3.14 0-5.8-2.11-6.76-4.96H1.26v3.13C3.26 21.39 7.37 24 12 24z" fill="#FFF" />
                  <path d="M5.24 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.57H1.26C.46 8.17 0 9.97 0 12s.46 3.83 1.26 5.43l3.98-3.14z" fill="#FFF" />
                  <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.22 0 12 0 7.37 0 3.26 2.61 1.26 6.57l3.98 3.14c.96-2.85 3.62-4.96 6.76-4.96z" fill="#FFF" />
                </svg>
                Sign in with Google
              </button>

              {/* Apple Sign In */}
              <button
                onClick={() => {
                  setFeedback({ type: "success", message: "Signed in with Apple!" });
                  setTimeout(() => {
                    setFeedback(null);
                    window.location.href = "/";
                  }, 1500);
                }}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-black py-3.5 text-sm font-semibold text-white transition hover:bg-black/80"
              >
                {/* Apple Icon */}
                <svg className="h-5 w-5 fill-current" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                Sign in with Apple
              </button>
            </div>

            {/* Separator */}
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-bark/15"></div>
              <span className="flex-shrink mx-4 text-xs uppercase tracking-wider text-bark/40 font-semibold">OR</span>
              <div className="flex-grow border-t border-bark/15"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-1">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-bark/15 bg-white px-4 py-3.5 text-sm text-bark outline-none focus:border-forest/40 focus:ring-1 focus:ring-forest/10"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-bark/15 bg-white px-4 py-3.5 text-sm text-bark outline-none focus:border-forest/40 focus:ring-1 focus:ring-forest/10"
                />
              </div>
              
              <div className="text-left">
                <button
                  type="button"
                  onClick={() => alert("Password reset link sent to your email.")}
                  className="text-sm text-bark/60 underline hover:text-forest"
                >
                  Forgot your password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-forest py-3.5 text-sm font-semibold tracking-wider text-cream transition hover:bg-bark"
              >
                SIGN IN
              </button>
            </form>

            <div className="text-center">
              <button
                onClick={() => setMode("register")}
                className="text-sm font-semibold text-bark/75 underline hover:text-forest"
              >
                Create account
              </button>
            </div>
          </div>
        ) : (
          /* Register Form */
          <div className="space-y-6">
            <h1 className="text-center font-serif text-5xl font-semibold text-bark">Create Account</h1>
            
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-bark/15 bg-white px-4 py-3 text-sm text-bark outline-none focus:border-forest/40 focus:ring-1 focus:ring-forest/10"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-bark/15 bg-white px-4 py-3 text-sm text-bark outline-none focus:border-forest/40 focus:ring-1 focus:ring-forest/10"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-bark/15 bg-white px-4 py-3.5 text-sm text-bark outline-none focus:border-forest/40 focus:ring-1 focus:ring-forest/10"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-bark/15 bg-white px-4 py-3.5 text-sm text-bark outline-none focus:border-forest/40 focus:ring-1 focus:ring-forest/10"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-forest py-3.5 text-sm font-semibold tracking-wider text-cream transition hover:bg-bark"
              >
                CREATE
              </button>
            </form>

            <div className="text-center">
              <button
                onClick={() => setMode("login")}
                className="text-sm font-semibold text-bark/75 underline hover:text-forest"
              >
                Already have an account? Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
