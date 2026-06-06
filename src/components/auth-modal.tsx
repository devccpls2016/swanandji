"use client";

import { useState } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback({
      type: "success",
      message: mode === "login" ? "Successfully signed in!" : "Successfully registered!"
    });
    setTimeout(() => {
      setFeedback(null);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bark/40 p-4 backdrop-blur-sm">
      {/* Modal Card */}
      <div className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-bark/10 bg-[#fbfaf6] p-8 md:p-10 shadow-soft animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-white border border-bark/10 text-bark hover:bg-cream"
          aria-label="Close modal"
        >
          ✕
        </button>

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
            <h2 className="text-center font-serif text-4xl font-bold text-bark">Login</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-bark/10 bg-white px-4 py-3.5 text-sm text-bark outline-none focus:border-forest/30 focus:ring-2 focus:ring-forest/10"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-bark/10 bg-white px-4 py-3.5 text-sm text-bark outline-none focus:border-forest/30 focus:ring-2 focus:ring-forest/10"
                />
              </div>
              
              <div className="text-left">
                <button
                  type="button"
                  onClick={() => alert("Password reset link sent to your email.")}
                  className="text-xs text-bark/60 underline hover:text-forest"
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
                className="text-xs font-semibold text-bark/75 underline hover:text-forest"
              >
                Create account
              </button>
            </div>

            {/* Separator */}
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-bark/10"></div>
              <span className="flex-shrink mx-4 text-xs uppercase tracking-wider text-bark/40 font-semibold">OR</span>
              <div className="flex-grow border-t border-bark/10"></div>
            </div>

            {/* Google Sign In */}
            <button
              onClick={() => {
                setFeedback({ type: "success", message: "Signed in with Google!" });
                setTimeout(() => {
                  setFeedback(null);
                  onClose();
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
          </div>
        ) : (
          /* Register Form */
          <div className="space-y-6">
            <h2 className="text-center font-serif text-4xl font-bold text-bark">Create Account</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-bark/10 bg-white px-4 py-3 text-sm text-bark outline-none focus:border-forest/30 focus:ring-2 focus:ring-forest/10"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-bark/10 bg-white px-4 py-3 text-sm text-bark outline-none focus:border-forest/30 focus:ring-2 focus:ring-forest/10"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-bark/10 bg-white px-4 py-3.5 text-sm text-bark outline-none focus:border-forest/30 focus:ring-2 focus:ring-forest/10"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-bark/10 bg-white px-4 py-3.5 text-sm text-bark outline-none focus:border-forest/30 focus:ring-2 focus:ring-forest/10"
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
                className="text-xs font-semibold text-bark/75 underline hover:text-forest"
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
