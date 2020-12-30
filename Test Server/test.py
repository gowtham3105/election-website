import json

from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime
import pytz

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
    tz_IN = pytz.timezone('Asia/Kolkata') 
    datetime_IN = datetime.now(tz_IN)
    
    return jsonify(resultsDate="Mon Nov 24 2020 17:28:11 GMT+0530 (India Standard Time)",
     electionsDate="Mon Nov 23 2020 10:30:00 GMT+0530 (India Standard Time)",
      now=str(datetime_IN))

app.run(debug='true', host='0.0.0.0')
