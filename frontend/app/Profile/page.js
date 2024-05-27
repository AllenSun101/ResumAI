'use client'

import {useState} from 'react'
import Link from 'next/link';

async function fetchData(props) {
    console.log(props);
    const profileName = props.profileName;

    var data = await axios.get('http://127.0.0.1:5000/Fetch_Profile/', {
        params: {
            profile_name: profileName,
        }
    });
    return data.data;
}

export default function Profile(){
    // fetch profile from global state

    var profileName;
    profileName = "Allen";

    if(profileName != undefined){
        //fields = fetchData(profileName);
    }

    // if undefined, render screen that directs to login
    // else, allow editing of profiles
    if(profileName == undefined){
        return(
            <div className='bg-white mx-auto py-32 md:px-24 px-8'>
                <h1 className='text-4xl font-bold text-center mb-[25vh]'>My Profile</h1>
                <p className='text-lg text-center mb-24'>Please login or create an account to access your profile!</p>
                <ul className='text-lg text-center'>
                    <li className='mb-4'>
                        <Link href="/Login">Login</Link>
                    </li>
                    <li>
                        <Link href="/SignUp">Don't have an account? Sign Up</Link>
                    </li>
                </ul>
            </div>
        )
    }

    // In future, allow for additional links/profile
    const [profile, setProfile] = useState({Name: 'Hai', GitHub: '', LinkedIn: '', Portfolio: ''});

    // fetch database and read the results for custom fields
    const [fields, setFields] = useState({ Education: '', 'Professional Experience': '', Activities: 
        '', Coursework: '', Skills: ''
    });

    // Handle adding a new field
    const handleAddField = () => {
        setFields([...fields, {fuck: ''}]);
    };

    // Handle changing the value of a field
    const handleFieldChange = (index, event) => {
    const newFields = fields.map((field, idx) => {
        if (idx === index) {
        return { ...field, [event.target.name]: event.target.value };
        }
        return field;
    });
    setFields(newFields);
    };

    // Handle form submission
    const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', fields);
    // Perform any submission logic (e.g., API call) here
    };


    // Add alert if unsaved changes
    // Add support for deleting categories
    return(
        <div className='bg-white mx-auto py-32 md:px-24 px-8'>
            <div className='mb-6'>
                <h1 className='text-4xl font-bold text-center mb-6'>My Profile: {profileName}</h1>
                <p className='text-lg'>Customize your personal profile for tailored resumes! We have provided a few 
                    common sections commonly found on resumes, but you can add custom fields as well!
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='text-center text-lg'>
                    <h2 className='text-xl font-semibold'>Personal Information</h2>
                    <p>Name: {profile['Name']}</p>
                    <p>GitHub: {profile['GitHub']}</p>
                    <p>LinkedIn: {profile['LinkedIn']}</p>
                    <p>Portfolio: {profile['Portfolio']}</p>
                </div>

                {Object.entries(fields).map(([name, value]) => (
                    <div key={name} style={{ marginBottom: '1em' }}>
                    <h2 className='text-xl font-semibold'> {name} </h2>
                    <textarea
                        name={name}
                        value={value}
                        onChange={(e) => handleFieldChange(name, e)}
                        style={{ marginLeft: '0.5em' }}
                        />
                    </div>
                ))}

                <label>New Field</label>
                <button type="button" onClick={handleAddField} className=''>
                    Add Custom Category
                </button>
                <button type="submit">Save</button>
            </form>
            
        </div>
    )
}