from flask import Flask, jsonify, request
import pandas as pd
from flask_cors import CORS

from openai import OpenAI

import os

api_key = os.environ.get("OPENAI_API_KEY")

client = OpenAI(api_key=api_key)


app = Flask(__name__)
app.config["JSON_SORT_KEYS"] = False
CORS(app)


@app.route('/Fetch_Profile', methods=['POST'])
def fetch_profile():
    pass


@app.route('/Profile_Changes', methods=['POST'])


@app.route('/Consult_Resume', methods=['POST'])


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

	print(completion.choices[0].message)
    
	updated_resume = completion.choices[0].message.content
    
	return jsonify({'updated_resume': updated_resume})


if __name__ == '__main__':
   app.run(debug = True)
