
const SignInPage = () => {
    return (
        <div>
            <h1 className="font-bold text-2xl">Welcome Back :)</h1>
            <form
                className="flex flex-col bg-white rounded shadow-lg p-12 mt-12"
                action=""
            >
                <label className="font-semibold text-xs" htmlFor="usernameField">
                    Username or Email
                </label>
                <input
                    className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                    type="text"
                />
                <label className="font-semibold text-xs mt-3" htmlFor="passwordField">
                    Password
                </label>
                <input
                    className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                    type="password"
                />
                <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">
                    Login
                </button>
                <div className="flex mt-6 justify-center text-xs">
                    <a className="text-blue-400 hover:text-blue-500" href="#">
                        Forgot Password
                    </a>
                    <span className="mx-2 text-gray-300">/</span>
                    <a className="text-blue-400 hover:text-blue-500" href="/sign-up">
                        Sign Up
                    </a>
                </div>
            </form>
        </div>
    )
}

export default SignInPage
