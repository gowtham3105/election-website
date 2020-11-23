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
    tokenId = request.args.get('tokenId')
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

@app.route("/userType", methods=['GET'])
def userType():
    tokenId = request.args.get('tokenId')
    return jsonify(id = tokenId, type='adminANDvoter')


@app.route("/changeImpDates", methods=['GET','POST'])
def changeImpDates():
    print(request.method)
    print(request.form)
    return jsonify(responseMessage='Dates Changed Successfully')

@app.route("/getimportantDates", methods=['GET'])
def getimportantDates():
    return jsonify(resultsDate="2020-11-04T18:30:00.000Z", electionDate="2020-11-12T18:30:00.000Z")
app.run(debug='true', host='0.0.0.0')
