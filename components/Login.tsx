import { Logo } from "./ui";

export default function Login() {
  return (
    <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm ">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <Logo />
          <h1 className="block text-2xl font-bold text-gray-800 ">Sign in</h1>
          <p className="mt-2 text-sm text-gray-600 ">
            {`Don't have an account yet?`}
            <a
              className="text-flushOrange-600 decoration-2 hover:underline font-medium"
              href="../examples/html/signup.html"
            >
              Sign up here
            </a>
          </p>
        </div>

        <div className="mt-5">
          <form>
            <div className="grid gap-y-4">
              <div>
                <label htmlFor="email" className="block text-sm mb-2 ">
                  Email address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-flushOrange-500 focus:ring-flushOrange-500"
                    required
                    aria-describedby="email-error"
                  />
                  <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                    <svg
                      className="h-5 w-5 text-red-500"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>
                <p
                  className="hidden text-xs text-red-600 mt-2"
                  id="email-error"
                >
                  Please include a valid email address so we can get back to you
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="block text-sm mb-2">
                    Password
                  </label>
                  <a
                    className="text-sm text-flushOrange-600 decoration-2 hover:underline font-medium"
                    href="../examples/html/recover-account.html"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-flushOrange-500 focus:ring-flushOrange-500 "
                    required
                    aria-describedby="password-error"
                  />
                  <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                    <svg
                      className="h-5 w-5 text-red-500"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>
                <p
                  className="hidden text-xs text-red-600 mt-2"
                  id="password-error"
                >
                  8+ characters required
                </p>
              </div>

              <button
                type="submit"
                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-flushOrange-500 text-white hover:bg-flushOrange-600 focus:outline-none focus:ring-2 focus:ring-flushOrange-500 focus:ring-offset-2 transition-all text-sm"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}