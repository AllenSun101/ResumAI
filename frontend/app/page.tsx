import Link from "next/link";

export default function Home() {
  return (
    <main data-theme="light" className="py-24 bg-white">
      	<div className="hero h-[70vh] bg-cover bg-center relative" style={{ backgroundImage: 'url("/Hero.jpg")' }}>
          	<div className="absolute inset-0 bg-white bg-opacity-30"></div>
            <div className="hero-content text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="max-w-screen-md">
                    <span className="text-5xl font-bold">Welcome to </span>
                    <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">ResumAI</span>
                    <p className="py-6 text-xl mb-6">
                        Build personalized resumes in seconds
                    </p>
                    <Link
                        href="/Login"
                        className="btn bg-purple-700 btn-ghost text-white hover:bg-purple-500 px-4 py-3 font-semibold rounded-xl"
                    >
                        Create My Profile
                    </Link>
                </div>
            </div>
        </div>
        <div className="lg:px-24 px-8 text-lg mt-12">
          <p>ResumAI provides artificial intelligence-based solutions for creating effective employment applications.</p>
        </div>
		<p>Rundown of features and steps/procedures - create profile, generate</p>
    </main>
  );
}
