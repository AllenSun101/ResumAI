import json
from flask import Flask, jsonify, request
import pandas as pd
from flask_cors import CORS
from openai import OpenAI
import os
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


uri = os.environ.get("MONGO_DB_URI")

# Create a new client and connect to the server
mongo_db_client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    mongo_db_client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


api_key = os.environ.get("OPENAI_API_KEY")
client = OpenAI(api_key=api_key)

app = Flask(__name__)
app.config["JSON_SORT_KEYS"] = False
CORS(app)

@app.route('/Fetch_Profile/<profile_email>', methods=['GET'])
def fetch_profile(profile_email):
    print(profile_email)

    # MongoDB Find Profile and Return
    db = mongo_db_client.Profiles
    profiles_collection = db.Users
    profile = profiles_collection.find_one({'_id': profile_email})

    if profile is None:
        profile = {"_id":profile_email,
            "fields":{"Activities":"","Coursework":"","Education":"",
                   "Professional Experience":"","Skills":""},
            "profile":{"GitHub":"","LinkedIn":"","Name":"","Portfolio":""},"profileName":""}
        profiles_collection.insert_one(profile)
    
    print(profile)

    return jsonify(profile)


@app.route('/Update_Profile', methods=['POST'])
def update_profile():
    data = request.get_json()
    
    profile_name = data['profileName']
    #profile = data['profile']
    #categories = data['fields']
        
    # MongoDB Find Profile and Rewrite
    db = mongo_db_client.Profiles
    profiles_collection = db.Users
    profiles_collection.update_one({'_id': profile_name}, {'$set': data}, upsert=True)
    
    return data


@app.route('/Consult_Resume', methods=['POST'])
def consult_resume():
    data = request.get_json()
    resume = data.get('resume')
    jobDesc = data.get('jobDesc')
    
    print(jobDesc)
    print(resume)    
    
    prompt = (
        "Give thorough and specific suggestions on how this resume could better align with the role description and stand out. Only include advice, especially on specific content (no summary)\n\n"
        "Job Description:\n"
        f"{jobDesc}\n\n"
        "Current Resume:\n"
        f"{resume}"
    )
    
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a recruiter evaluating resumes for a competitive job opening."},
            {"role": "user", "content": prompt}
        ]
    )
    
    suggestions = completion.choices[0].message.content
    
    return jsonify({'suggestions': suggestions})


@app.route('/Generate_Resume', methods=['POST'])
def generate_resume():
    data = request.get_json()
    user = data.get('user')
    jobDesc = data.get('jobDesc')

    # MongoDB Find Profile and Return
    db = mongo_db_client.Profiles
    profiles_collection = db.Users
    profile = profiles_collection.find_one({'_id': user})

    if profile is None:
        return jsonify({'error': "Insufficient profile information."})

    print(profile)    

    #profile_info = profile["profile"]
    #profile_fields = profile["fields"]

    #print(profile_info)

    # Extract Profile

    prompt = (
        "Build a resume to fit job description provided, given this profile information. \
         Highlight key accomplishments, measurable results, and significant contributions. \n\n"
        "Job Description:\n"
        f"{jobDesc}\n\n"
        "Profile:\n"
        f"{profile}"
    )

    print(prompt)

    """
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a professional resume writer."},
            {"role": "user", "content": prompt}
        ]
    )
    
    resume = completion.choices[0].message.content"""
    
    return jsonify({'resume': "lol"})

if __name__ == '__main__':
    app.run(debug=True)
