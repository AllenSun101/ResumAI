import axios from 'axios';

async function fetchData(props) {
    console.log(props);
    const jobDesc = props.description;
    const resume = props.resume;

    var data = await axios.post('http://127.0.0.1:5000/Consult_Resume', {
      jobDesc: jobDesc,
      resume: resume
    });

    return data.data.suggestions;
}

export default async function ConsultResume(props){

    console.log(props);

    var results = props.searchParams;

    var suggestions = "LOLLERS";

    if (results.resume != undefined && results.resume != '') {

        suggestions = await fetchData(results);
        console.log(suggestions);
    }

    return (
        <div className='bg-white dark:bg-gray-900 pt-32 pb-16'>
        <div className="flex items-center">
            <div className="container mx-auto">
                <div className="flex justify-center mb-12">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"> Resume Consultant </h2>
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
                    <div className="mb-6">
                      <div className="flex mb-4">
                          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"> Paste Resume </h2>
                      </div>                      
                      <textarea
                          rows="10"
                          name="resume"
                          id="resume"
                          placeholder="Enter Resume"
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
        {
            suggestions != undefined ? <div className='lg:mx-24'> 
                <div className="flex mb-4">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"> Resume Feedback </h2>
                </div> 
                <p className='text-gray-900 text-xl'>{suggestions != undefined ? suggestions : "" }</p>
            </div> 
            : ""
        }
        </div>
    )
}
