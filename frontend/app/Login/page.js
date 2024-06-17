export default function Login() {
    return (
        <main data-theme="light" className="pt-32 pb-16 bg-white">
            <div className="flex justify-center mb-6">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"> Log In </h2>
            </div>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]">
                    <form action="" method="POST">
                        <div className="form-control w-full max-w-xl mb-6">
                            <div className="mb-2">
                                <label className="label">
                                    <p className="label-text text-lg">Email</p>
                                </label>
                            </div>
                            <input type="email" name="" placeholder="Insert Email" className="input input-bordered w-full max-w-xl py-2 px-2 rounded-lg border-2 border-purple-700" required />
                        </div>

                        <div className="form-control w-full max-w-xl mb-6">
                            <div className="mb-2">
                                <label className="label">
                                    <p className="label-text text-lg">Password</p>
                                </label>
                            </div>
                            <input type="password" name="" placeholder="Insert Password" className="input input-bordered w-full max-w-xl py-2 px-2 rounded-lg border-2 border-purple-700" required />
                        </div>

                        <label className="label text-center">
                            <p className="label-text-alt"><a href="/ForgotPassword" className="text-gray-400 focus:outline-none focus:text-black-500 hover:text-black-500 dark:hover:text-black-300">Forgot password?</a></p>
                        </label>

                        <div className="text-center">
                            <button type="submit" className="bg-purple-700 hover:bg-purple-400 hover:text-white text-white text-lg font-semibold py-2 px-8 rounded-xl mt-6 btn btn-block">Log In</button>
                        </div>
                    </form>

                    <div className="text-center pt-8">
                        <p className="text-center text-black">Don&#x27;t have an account yet? <a href="/SignUp" className="link text-black-400 focus:outline-none focus:underline focus:text-black-500 dark:focus:border-gray-800">Sign up</a></p>
                    </div>
                </div>
            </div>
        </main>
    )
}
