from flask import Flask, jsonify
import json
from flask_cors import CORS

app =Flask(__name__)
cors = CORS(app)
@app.route("/")
def index():
    f = open('test.json', "r")
    r=f.read()
    r= json.loads(r)
    print("hiih11111111")
    print(r)
    print("hiihi111111111")
    return jsonify(r)

@app.route("/positions")
def positions():
    f = open('positions.json', "r")
    r=f.read()
    r= json.loads(r)
    print("hiih")
    print(r)
    print("hiihi")
    return jsonify(r)

app.run(debug = 'true', host='0.0.0.0')