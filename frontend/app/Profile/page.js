'use client'

import {useState} from 'react'
import Link from 'next/link';
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from 'react';


export default function Profile(){
    // fetch profile from global state

    var profileName;
    profileName = "Allen";

    // In future, allow for additional links/profile
    const [profile, setProfile] = useState({Name: 'Hai', GitHub: '', LinkedIn: '', Portfolio: ''});

    // fetch database and read the results for custom fields
    const [fields, setFields] = useState({ Education: '', 'Professional Experience': '', Activities: 
        '', Coursework: '', Skills: ''
    });
    
    /*
        params: {
            profile_name: profileName,
        }
    */

    // if undefined, render screen that directs to login
    // else, allow editing of profiles
    if(profileName == undefined){
        return(
            <div className='bg-white mx-auto py-32 md:px-24 px-8'>
                <div className="flex justify-center mb-[25vh]">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"> My Profile </h2>
                </div>
                <p className='text-lg text-center mb-24'>Please login or create an account to access your profile!</p>
                <ul className='text-lg text-center'>
                    <li className='mb-4'>
                        <Link className='link text-black-400 focus:outline-none focus:underline focus:text-black-500 dark:focus:border-gray-800' href="/Login">Login</Link>
                    </li>
                    <li>
                        <span>Don't have an account? </span>
                        <Link className='link text-black-400 focus:outline-none focus:underline focus:text-black-500 dark:focus:border-gray-800' href="/SignUp">Sign Up</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const [success, setSuccess] = useState(false);

    const mutation = useMutation({
		mutationFn: (params) => {
			return axios.post('http://127.0.0.1:5000/Update_Profile', params);
		},
		onSuccess: () => {
			setSuccess(true);
            refetch();
		},
	})

    const [customField, setCustomField] = useState("");

    //fields = fetchData(profileName);
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['Testing', profileName], // Include profileName in the queryKey for re-fetching when it changes
        queryFn: async () => {
            const response = await axios.get(`http://127.0.0.1:5000/Fetch_Profile/${profileName}`);
            return response.data;
        }
    });

    React.useEffect(() => {
        if(data != undefined){
            setProfile(data.profile);
            setFields(data.fields);
        }
    }, [data]);

    if (isLoading) return 'Loading...';

    else if (error) return 'An error has occurred: ' + error.message;

    // Handle adding a new field
    const handleCustomFieldChange = (event) => {
        setCustomField(event.target.value);
    };

    const handleAddField = (event) => {
        if(customField != ""){
            setFields({...fields, [customField]: ""});
            setCustomField("");
        } 
    };

    // Handle changing the value of a field
    const handleFieldChange = (event) => {
        const { name, value } = event.target;
        setFields({
            ...fields,
            [name]: value
        });
    };

    const handleProfileChange = (event) => {
        const { name, value } = event.target;
        setProfile({
            ...profile,
            [name]: value
        });
    };


    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Write to Database, Reload with newly saved data
        mutation.mutate({
			profileName: profileName,
            profile: profile,
            fields: fields
		});
    };


    // Add alert if unsaved changes
    // Add support for deleting categories
    return(
        <div className='bg-white mx-auto py-32 md:px-24 px-8'>
            <div className='mb-12'>
                <div className="flex justify-center mb-12">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"> My Profile: {profileName} </h2>
                </div>
                <p className='text-lg mb-6'>Customize your personal profile for tailored resumes! We have provided a few 
                    common sections commonly found on resumes, but you can add custom fields as well!
                </p>
                <p className='text-lg'>For each category, add relevant information, especially metrics on your impact! The
                    more information, the better!
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='text-lg lg:mx-24 mb-12'>
                    <div className="flex mb-4">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"> Personal Information </h2>
                    </div>
                    <div className='mb-4'>
                        <label className='mr-4'>Name:</label>
                        <input
                            className='input input-bordered w-full max-w-xl py-2 px-2 rounded-lg border-2 border-purple-700'
                            type="text"
                            id="Name"
                            name="Name"
                            value={profile['Name']}
                            onChange={handleProfileChange}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='mr-4'>GitHub:</label>
                        <input
                            className='input input-bordered w-full max-w-xl py-2 px-2 rounded-lg border-2 border-purple-700'
                            type="text"
                            id="GitHub"
                            name="GitHub"
                            value={profile['GitHub']}
                            onChange={handleProfileChange}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='mr-4'>LinkedIn:</label>
                        <input
                            className='input input-bordered w-full max-w-xl py-2 px-2 rounded-lg border-2 border-purple-700'
                            type="text"
                            id="LinkedIn"
                            name="LinkedIn"
                            value={profile['LinkedIn']}
                            onChange={handleProfileChange}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='mr-4'>Portfolio:</label>
                        <input
                            className='input input-bordered w-full max-w-xl py-2 px-2 rounded-lg border-2 border-purple-700'
                            type="text"
                            id="Portfolio"
                            name="Portfolio"
                            value={profile['Portfolio']}
                            onChange={handleProfileChange}
                        />
                    </div>
                </div>

                {Object.entries(fields).map(([name, value]) => (
                    <div key={name} style={{ marginBottom: '1em' }} className='lg:mx-24'>
                    <div className="flex mb-4">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"> {name} </h2>
                    </div>
                    <textarea
                        className='input input-bordered w-full max-w-xl py-2 px-2 rounded-lg border-2 border-purple-700'
                        name={name}
                        value={value}
                        onChange={handleFieldChange}
                        style={{ marginLeft: '0.5em' }}
                        />
                    </div>
                ))}

                <div className='mt-12'>
                    <div className="flex mb-2">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"> Custom Category </h2>
                    </div>                    
                    <input
                        className='input input-bordered w-full max-w-xl py-2 px-2 rounded-lg border-2 border-purple-700'
                        type="text"
                        id="customField"
                        value={customField}
                        onChange={handleCustomFieldChange}
                    />
                
                    <button type="button" onClick={handleAddField} className='mx-10 bg-purple-700 hover:bg-purple-400 hover:text-white text-white text-lg font-semibold py-2 px-8 rounded-xl mt-6 btn btn-block'>
                        Add Category
                    </button>
                </div>
                <div className='mt-12'>
                    <button type="submit" onClick={handleSubmit} className="bg-purple-700 hover:bg-purple-400 hover:text-white text-white text-lg font-semibold py-2 px-8 rounded-xl mt-6 btn btn-block"> Save Changes </button>
                </div>
                <div className='mt-4'>
                    {success ? <p className='text-lg'> Successfully Saved! </p> : 
                    <p className='text-lg'> Unsaved Changes </p>}
                </div>
            </form>
            
        </div>
    )
}