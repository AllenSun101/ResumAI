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

@app.route('/Fetch_Profile/<profile_name>', methods=['GET'])
def fetch_profile(profile_name):
    print("LOL")
    print(profile_name)

    # MongoDB Find Profile and Return
    db = mongo_db_client.Profiles
    profiles_collection = db.Users
    profile = profiles_collection.find_one({'_id': profile_name})
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
    pass

@app.route('/Generate_Resume', methods=['POST'])
def generate_resume():
    data = request.get_json()
    resume = data.get('resume')
    jobDesc = data.get('jobDesc')
    
    print(jobDesc)
    print(resume)    
    
    prompt = (
        "Improve this resume to better fit job description provided.\n\n"
        "Job Description:\n"
        f"{jobDesc}\n\n"
        "Current Resume:\n"
        f"{resume}"
    )
    
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a professional resume reviser."},
            {"role": "user", "content": prompt}
        ]
    )
    
    updated_resume = completion.choices[0].message.content
    
    return jsonify({'updated_resume': updated_resume})

if __name__ == '__main__':
    app.run(debug=True)
