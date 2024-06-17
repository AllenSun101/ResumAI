export default function ForgotPassword() {
    return (
        <main data-theme="light" className="py-32 bg-white">
            <div className="flex justify-center mb-6">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"> Reset Password </h2>
            </div>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]">
                    <form action="" method="POST">
                        <div className="form-control w-full max-w-xl mb-24">
                            <div className="mb-2">
                                <label className="label">
                                    <p className="label-text text-lg">Email</p>
                                </label>
                            </div>
                            <input type="email" name="" placeholder="Enter Email" className="input input-bordered w-full max-w-xl py-2 px-2 rounded-lg border-2 border-purple-700" required />
                        </div>

                        <p className="text-center"> An email will be sent with instructions on resetting your password.</p>

                        <div className="text-center">
                            <button type="submit" className="bg-purple-700 hover:bg-purple-400 hover:text-white text-white text-lg font-semibold py-2 px-8 rounded-xl mt-6 btn btn-block">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
