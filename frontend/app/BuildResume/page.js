import axios from 'axios';

async function fetchData(props) {
    console.log(props);
    const jobDesc = props.description;
    const resume = props.resume;

    var data = await axios.post('http://127.0.0.1:5000/Generate_Resume', {
      jobDesc: jobDesc,
      resume: resume
    });

    return data.data.updated_resume;
}

export default async function BuildResume(props){

    // Paste Job Description

    // Paste Resume

    console.log(props);

    var results = props.searchParams;
    //console.log(results);

    var updatedResume;

    if (results.resume != undefined && results.resume != '') {

        updatedResume = await fetchData(results);
        console.log(updatedResume);
    }

    return (
        <div>
        <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
            <div className="container mx-auto">
                <div className="max-w-md mx-auto my-10 bg-white dark:bg-gray-800 p-5 rounded-md shadow-sm">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Build Resume</h1>
                    </div>
                        <form id="form">
                        <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Paste Job Description</label>
                                <textarea
                                    rows="5"
                                    name="description"
                                    id="description"
                                    placeholder="Job Description"
                                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Paste Resume</label>
                                <textarea
                                    rows="5"
                                    name="resume"
                                    id="resume"
                                    placeholder="Resume"
                                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-6">
                                <button
                                    type="submit"
                                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                                >
                                    Submit
                                </button>
                            </div>
                            <p className="text-base text-center text-gray-400" id="result"></p>
                        </form>
                </div>
            </div>
        </div>
        <p className='text-gray-900 text-xl'>{updatedResume != undefined ? updatedResume : "" }</p>
        </div>
    )
}

/*



async function MapRatings(props) {
  console.log(props);
  if (props.ratings == undefined) {
    return (
      <>
      </>
    )
  }

  return (
    <div>
      <div className="w-full xl:w-8/12 mb-12 px-4 mx-auto mt-24 mb-24">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <h1 className="text-3xl tracking-tight mb-12 text-center">Personalized Professor Matches for {props.course}</h1>

          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-center">
                    Rank
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-center">
                    Professor Name
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-center">
                    Rating
                  </th>
                </tr>
              </thead>

              <tbody>
                {Object.entries(props.ratings).map(([professor, rating], index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-blueGray-700 text-center">
                      {index + 1}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-center">
                      {professor}
                    </td>
                    <td className={`border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-center ${rating >= 4
                      ? 'text-green-500'
                      : rating >= 3
                        ? 'text-yellow-500' : rating === 0 ? 'text-black'
                        : 'text-red-500'
                      }`}>
                        {rating === 0 ? "N/A" : rating}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  )
}


export default async function Search(props) {

  console.log(props);

  var results = props.searchParams;
  console.log(results);

  var professorRatings;
  if (results.course != undefined && results.course != '') {
    // update results weightings for exponential

    for (const field in results) {
      if (results.hasOwnProperty(field) && field !== 'course') {
          // Convert the value to an integer
          const value = parseInt(results[field]);

          // Update values based on the specified mapping
          if (value === 2) {
              results[field] = '3';
          } else if (value === 3) {
              results[field] = '9';
          }
      }
    }

    professorRatings = await fetchData(results);
  }

  console.log(professorRatings);

  return (
    <main className='bg-white'>

      <div className="flex flex-col items-center justify-center p-12">

        <div className="mx-auto w-full max-w-[550px]">

          <form>

            <div className="mb-12">
              <label
                className="mb-3 block text-base font-medium text-3xl text-[#07074D]"
              >
                (For Search) Enter the course name:
              </label>
              <input
                type="text"
                name="course"
                id="course"
                placeholder="ENGR 102"
                min="0"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#500000] focus:shadow-md"
              />
            </div>

            <h2 className="text-3xl tracking-tight mb-12 text-center">How important is it that the professor:</h2>

            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Gives quality feedback
              </label>

              <div className="flex flex-col space-y-2 p-2">
                <ul className="flex justify-between flex-wrap w-full px-2 md:px-10 mb-6">
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Not&nbsp;<br className="md:hidden" />Important</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Somewhat&nbsp;<br className="md:hidden" />Important</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute">Important&nbsp;</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Very&nbsp;<br className="md:hidden" />Important</span></li>
                </ul>
                <input data-theme="cupcake" type="range" name="feedback" min="0" max="3" defaultValue="2" className="range" step="1" />
              </div>

            </div>

            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Helps me learn concepts or skills
              </label>
              <div className="flex flex-col space-y-2 p-2">
                <ul className="flex justify-between flex-wrap w-full px-2 md:px-10 mb-6">
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Not&nbsp;<br className="md:hidden" />Important</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Somewhat&nbsp;<br className="md:hidden" />Important</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute">Important&nbsp;</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Very&nbsp;<br className="md:hidden" />Important</span></li>
                </ul>
                <input type="range" name="learn" min="0" max="3" defaultValue="2" className="range" step="1" />
              </div>
            </div>

            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Has clear expectations
              </label>
              <div className="flex flex-col space-y-2 p-2">
                <ul className="flex justify-between flex-wrap w-full px-2 md:px-10 mb-6">
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Not&nbsp;<br className="md:hidden" />Important</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Somewhat&nbsp;<br className="md:hidden" />Important</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute">Important&nbsp;</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Very&nbsp;<br className="md:hidden" />Important</span></li>
                </ul>
                <input type="range" name="expectations" min="0" max="3" defaultValue="2" className="range" step="1" />
              </div>
            </div>

            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Facilitates critical thinking
              </label>
              <div className="flex flex-col space-y-2 p-2">
                <ul className="flex justify-between flex-wrap w-full px-2 md:px-10 mb-6">
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Not&nbsp;<br className="md:hidden" />Important</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Somewhat&nbsp;<br className="md:hidden" />Important</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute">Important&nbsp;</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Very&nbsp;<br className="md:hidden" />Important</span></li>
                </ul>
                <input type="range" name="critical" min="0" max="3" defaultValue="2" className="range" step="1" />
              </div>
            </div>

            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Promotes diverse ideas
              </label>
              <div className="flex flex-col space-y-2 p-2">
                <ul className="flex justify-between flex-wrap w-full px-2 md:px-10 mb-6">
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Not&nbsp;<br className="md:hidden" />Important</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Somewhat&nbsp;<br className="md:hidden" />Important</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute">Important&nbsp;</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Very&nbsp;<br className="md:hidden" />Important</span></li>
                </ul>
                <input type="range" name="diverse" min="0" max="3" defaultValue="2" className="range" step="1" />
              </div>
            </div>

            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Organizes the course clearly
              </label>
              <div className="flex flex-col space-y-2 p-2">
                <ul className="flex justify-between flex-wrap w-full px-2 md:px-10 mb-6">
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Not&nbsp;<br className="md:hidden" />Important</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Somewhat&nbsp;<br className="md:hidden" />Important</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute">Important&nbsp;</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Very&nbsp;<br className="md:hidden" />Important</span></li>
                </ul>
                <input type="range" name="clear" min="0" max="3" defaultValue="2" className="range" step="1" />
              </div>
            </div>

            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Has a high grade distribution
              </label>
              <div className="flex flex-col space-y-2 p-2">
                <ul className="flex justify-between flex-wrap w-full px-2 md:px-10 mb-6">
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Not&nbsp;<br className="md:hidden" />Important</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Somewhat&nbsp;<br className="md:hidden" />Important</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute">Important&nbsp;</span></li>
                  <li className="flex justify-center text-sm mb-6 md:mb-2"><span className="absolute md:inline">Very&nbsp;<br className="md:hidden" />Important</span></li>
                </ul>
                <input type="range" name="grade" min="0" max="3" defaultValue="2" className="range" step="1" />
              </div>
            </div>

            <div className='text-center'>
              <input type="submit" value="Submit" className="hover:shadow-form rounded-md bg-[#500000] py-3 px-8 text-center text-base font-semibold text-white outline-none mx-auto" />
            </div>
          </form>
        </div>
      </div>
      <MapRatings ratings={professorRatings} course={results.course} />

    </main>
  )
}
*/