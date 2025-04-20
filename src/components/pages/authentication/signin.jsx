import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";

const SignIn = () => {
  const [view, setView] = useState("google");
  const navigate = useNavigate();

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="WPDeveloper Support Portal"
            src="/Wpdeveloper.png"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <AnimatePresence mode="wait">
            {view === "google" && (
              <motion.div
                key="google-login"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <button
                  className="flex w-full justify-center items-center gap-2 rounded-md bg-white border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 cursor-pointer"
                  onClick={() => {
                    alert("Google Login");
                    navigate("/");
                  }}
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="h-5 w-5"
                  />
                  Login with Google
                </button>

                <button
                  onClick={() => setView("login")}
                  className="w-full text-sm text-indigo-600 hover:text-indigo-500 text-center cursor-pointer"
                >
                  Login with username and password
                </button>
              </motion.div>
            )}

            {view === "login" && (
              <motion.div
                key="password-login"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Password
                      </label>
                      <div className="text-sm">
                        <button
                          type="button"
                          onClick={() => setView("forgot")}
                          className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
                        >
                          Forgot password?
                        </button>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => {
                        alert("Google Login");
                        navigate("/");
                      }}
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <div className="mt-4 text-center">
                  <button
                    onClick={() => setView("google")}
                    className="text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer"
                  >
                    Login with Google instead
                  </button>
                </div>
              </motion.div>
            )}

            {view === "forgot" && (
              <motion.div
                key="forgot-password"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="forgot-email"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Enter your email
                    </label>
                    <div className="mt-2">
                      <input
                        id="forgot-email"
                        name="forgot-email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                    >
                      Send reset link
                    </button>
                  </div>
                </form>

                <div className="mt-4 text-center">
                  <button
                    onClick={() => setView("login")}
                    className="text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer"
                  >
                    Back to Sign in
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default SignIn;
