from flask import Flask
import pandas as pd
from flask_cors import CORS


app = Flask(__name__)
app.config["JSON_SORT_KEYS"] = False
CORS(app)

@app.route('/Generate_Resume/<jobDesc>/<resume>', methods=['GET'])
def generate_resume(jobDesc, resume):
    print(jobDesc)
    print(resume)
    return "GPT Generated"

if __name__ == '__main__':
   app.run(debug = True)
