'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="bg-white py-32">
        <div className="flex justify-center mb-[20vh]">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"> Login </h2>
        </div>
        <div className="text-center mb-6">
            <p className="text-lg mb-[16vh]">Signed in as {session.user.email} <br /></p>
            <button className="bg-purple-700 hover:bg-purple-400 hover:text-white text-white text-lg font-semibold py-2 px-8 rounded-xl mt-6 btn btn-block" onClick={() => signOut()}>Sign out</button>
        </div>
      </div>
    )
  }

  return(
    <div className="bg-white py-32">
        <div className="flex justify-center mb-[20vh]">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"> Login </h2>
        </div>
        <div className="text-center mb-6">
            <p className="text-lg mb-[16vh]">Signed in with Google to create and save your profiles and resumes! <br /></p>
            <button className="bg-purple-700 hover:bg-purple-400 hover:text-white text-white text-lg font-semibold py-2 px-8 rounded-xl mt-6 btn btn-block" onClick={() => signIn("google")}>Sign in</button>
        </div>
      </div>
  )
}
