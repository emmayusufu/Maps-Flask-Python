from flask_cors import CORS
from flask import Flask, jsonify
import json
app = Flask(__name__)

file_name = 'interview.json'

json_data = None

with open(file_name, 'r', encoding='utf-8') as data:
    json_data = json.load(data)

CORS(app)


@app.route('/')
def hello_world():
    return jsonify(json_data)
