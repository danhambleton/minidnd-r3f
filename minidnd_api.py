import flask
from flask import jsonify
from flask import render_template, redirect, url_for, request, flash, send_from_directory
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os
import json
from werkzeug.utils import secure_filename
from werkzeug.security import generate_password_hash, check_password_hash
import subprocess
import shutil
import nanoid
import math  
import random
import datetime

ALLOWED_EXTENSIONS = {'spec', 'obj', 'stl', 'ply', 'txt', 'png', 'jpg', 'jpeg', 'gif'}

app = flask.Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'X0UQR7OkPcN2zAhdwAf5HU2G9tIGip31'
app.config['MAX_CONTENT_LENGTH'] = 1e10
app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:////home/daniel/Dev/minidnd-r3f/minidnd_data.sqlite3'
charset = '1234567890abcdefghijklmnopqrstuvwxyz'
db = SQLAlchemy(app)

@app.route("/api/hello", methods=['GET', 'POST'])
def api_hello():
    return jsonify({ "hello" : "there "})
