import axios from 'axios';
import PDFGenerator from './PDFGenerator'
import { getServerSession } from 'next-auth/next';
import Link from 'next/link';
import { authOptions } from "./auth"

async function fetchData(props) {
    console.log(props);
    const jobDesc = props.description;
    const user = props.user;

    var data = await axios.post('http://127.0.0.1:5000/Generate_Resume', {
      jobDesc: jobDesc,
      user: user
    });

    return data.data.resume;
}

export default async function BuildResume(props){

    // Paste Job Description, use Profile
    const session = await getServerSession(authOptions)

    const profileName = session ? session.user.email : undefined;

    console.log(props);

    var user = profileName;

    var submission = {};
    submission.description = props.searchParams.description;
    submission.user = user;
    //console.log(results);

    var resume;

    if (submission.description != undefined && submission.description != '') {

        resume = await fetchData(submission);
        console.log(resume);
    }

    if (profileName === undefined) {
      return (
        <div className="bg-white mx-auto py-32 md:px-24 px-8">
          <div className="flex justify-center mb-[25vh]">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Resume Builder
            </h2>
          </div>
          <p className="text-lg text-center mb-24">Please login to access your profile!</p>
          <ul className="text-lg text-center">
            <li className="mb-12">
              <Link
                className="link text-black-400 focus:outline-none focus:underline focus:text-black-500 dark:focus:border-gray-800"
                href="/Login"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      );
    }

    return (
        <div className='pt-32 pb-16 bg-white'>
        <div className="flex items-center dark:bg-gray-900">
            <div className="container mx-auto">
                <div className="flex justify-center mb-12">
                  <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"> Resume Builder </h2>
                </div>
                <div className="max-w-lg mx-auto my-10 bg-white dark:bg-gray-800 p-5">
                  <form id="form">
                    <div className="mb-6">
                      <div className="flex mb-4">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"> Paste Job Description </h2>
                      </div>
                      <textarea
                          rows="10"
                          name="description"
                          id="description"
                          placeholder="Enter Job Description"
                          className='input input-bordered w-full max-w-xl py-2 px-2 rounded-lg border-2 border-purple-700'
                          required
                      ></textarea>
                    </div>
                    <div className="mb-6 text-center">
                        <button type="submit" className="bg-purple-700 hover:bg-purple-400 hover:text-white text-white text-lg font-semibold py-2 px-8 rounded-xl btn btn-block"> Submit </button>
                    </div>
                    <p className="text-base text-center text-gray-400" id="result"></p>
                </form>
              </div>
            </div>
        </div>
        <p className='text-gray-900 text-xl'>{resume != undefined ? resume : "" }</p>
        <PDFGenerator resume={resume}/>
        </div>
    )
}

