export default function SignUp() {
    return (
        <main data-theme="light" className="pt-32 pb-16 bg-white">
            <div className="flex justify-center mb-6">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"> Sign Up </h2>
            </div>
            
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]">
                    <form action="" method="POST">
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="form-control w-full max-w-xs mb-6">
                                    <div className="mb-2">
                                        <label className="label">
                                            <p className="label-text text-lg">First Name</p>
                                        </label>
                                    </div>
                                    <input type="text" name="" placeholder="Enter First Name" className="input input-bordered w-full max-w-xl py-2 px-2 rounded-lg border-2 border-purple-700" required />
                                    </div>
                            </div>

                            <div className="w-full px-3 sm:w-1/2">
                                <div className="form-control w-full max-w-xs mb-6">
                                    <div className="mb-2">
                                        <label className="label">
                                            <p className="label-text text-lg">Last Name</p>
                                        </label>
                                    </div>
                                    <input type="text" name="" placeholder="Enter Last Name" className="input input-bordered w-full max-w-xl py-2 px-2 rounded-lg border-2 border-purple-700" required />
                                </div>
                            </div>
                        </div>

                        <div className="form-control w-full max-w-xl mb-6">
                            <div className="mb-2">
                                <label className="label">
                                    <p className="label-text text-lg">Email</p>
                                </label>
                            </div>
                            <input type="email" name="" placeholder="Enter Email" className="input input-bordered w-full max-w-xl py-2 px-2 rounded-lg border-2 border-purple-700" required />
                        </div>

                        <div className="form-control w-full max-w-xl mb-6">
                            <div className="mb-2">
                                <label className="label">
                                    <p className="label-text text-lg">Password</p>
                                </label>
                            </div>
                            <input type="password" name="" placeholder="Enter Password" className="input input-bordered w-full max-w-xl py-2 px-2 rounded-lg border-2 border-purple-700" required />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="bg-purple-700 hover:bg-purple-400 hover:text-white text-white text-lg font-semibold py-2 px-8 rounded-xl mt-6 btn btn-block">Sign Up</button>
                        </div>                    
                    </form>
                    <div className="text-center pt-8">
                        <p className="text-center text-black">Already have an account? <a href="/Login" className="link text-black-400 focus:outline-none focus:underline focus:text-black-500 dark:focus:border-gray-800">Login</a></p>
                    </div>
                </div>
            </div>
        </main>
    )
}
