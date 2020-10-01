import json

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)


@app.route("/positions")
def positions():
    f = open('positions.json', "r")
    r = f.read()
    r = json.loads(r)
    return jsonify(r)


@app.route("/accountdetails", methods=['GET'])
def details():
    email = request.args.get('email')
    print(email)
    f = open('voter.json', "r")
    r = f.read()
    r = json.loads(r)
    return jsonify(r)


@app.route("/results", methods=['GET'])
def results():
    f = open('results.json', "r")
    r = f.read()
    r = json.loads(r)
    return jsonify(r)


app.run(debug='true', host='0.0.0.0')
