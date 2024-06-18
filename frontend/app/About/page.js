export default function About() {
    return (
        <main data-theme="light" className="py-32 bg-white lg:px-24">
            <div className="flex justify-center mb-12">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    About ResumAI
                </h2>
            </div>
            <p className="text-lg lg:px-24 px-8">
                ResumAI seeks to simplify the process of applications by tailoring resumes from a user profile within seconds. 
                By effectively leveraging artificial intelligence, ResumAI offers both strong resumes with interactive revision
                tools and personalized advising.
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-24 px-8 text-zinc-800 lg:mt-24 mt-16">
                <div className="flex flex-col items-center bg-slate-100 p-12 rounded-lg shadow-lg max-w-sm">
                    <div>
                        <h2 className="font-extrabold text-3xl text-center mb-2">Other Services</h2>
                        <p className="opacity-60 text-center">Paid AI-based resume generators.</p>
                        <div className="flex flex-col items-center my-8">
                            <p className="font-extrabold text-4xl">$$$
                            </p>
                            <p className="text-sm opacity-60">/month
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.364 5.636a1 1 0 010 1.414L13.414 12l4.95 4.95a1 1 0 01-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 01-1.414-1.414L10.586 12 5.636 7.05a1 1 0 011.414-1.414L12 10.586l4.95-4.95a1 1 0 011.414 0z"></path>
                        </svg>
                            <b>One-size-fits-all resume solutions</b>
                        </p>
                        <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.364 5.636a1 1 0 010 1.414L13.414 12l4.95 4.95a1 1 0 01-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 01-1.414-1.414L10.586 12 5.636 7.05a1 1 0 011.414-1.414L12 10.586l4.95-4.95a1 1 0 011.414 0z"></path>
                        </svg>
                            <b>Resumes based on user-provided ones</b>
                        </p>
                        <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.364 5.636a1 1 0 010 1.414L13.414 12l4.95 4.95a1 1 0 01-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 01-1.414-1.414L10.586 12 5.636 7.05a1 1 0 011.414-1.414L12 10.586l4.95-4.95a1 1 0 011.414 0z"></path>
                        </svg>
                            <b>No integrated resume consulting</b>
                        </p>
                        <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.364 5.636a1 1 0 010 1.414L13.414 12l4.95 4.95a1 1 0 01-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 01-1.414-1.414L10.586 12 5.636 7.05a1 1 0 011.414-1.414L12 10.586l4.95-4.95a1 1 0 011.414 0z"></path>
                        </svg>
                            <b>No interactive interface with AI</b>
                        </p>
                        <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.364 5.636a1 1 0 010 1.414L13.414 12l4.95 4.95a1 1 0 01-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 01-1.414-1.414L10.586 12 5.636 7.05a1 1 0 011.414-1.414L12 10.586l4.95-4.95a1 1 0 011.414 0z"></path>
                        </svg>
                            <b>Monthly subscriptions or ads</b>
                        </p>
                    </div>
                </div>
                <div
                    className="flex flex-col items-center bg-gradient-to-br from-blue-100 via-purple-100 to-white-100 p-12 rounded-lg shadow-lg relative border-8 border-purple-200 max-w-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        className="w-20 h-20 absolute -top-11 -left-11 fill-red-400">
                        <path fill-rule="evenodd"
                            d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <div>
                        <div className="flex gap-4 justify-center">
                            <p className="font-extrabold text-3xl mb-2">ResumAI</p>
                        </div>
                        <p className="opacity-60 text-center">ResumAI's no-cost services.</p>
                        <div className="flex flex-col items-center my-8">
                            <p className="font-extrabold text-4xl">$0
                            </p>
                            <p className="text-sm opacity-60">/month
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <b>Tailored to specific job descriptions</b>
                        </p>
                        <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <b>Resumes based on overall profile</b>
                        </p>
                        <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <b>Resume feedback and consulting</b>
                        </p>
                        <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <b>Interactive UI for generated resumes</b>
                        </p>
                        <p className="flex items-center text-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                fill="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
                                <path fill-rule="evenodd"
                                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <b>Free to use</b>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
