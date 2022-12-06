import os
from flask import Flask
from flask_cors import CORS
import sqlite3
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
CORS(app)

def get_db_connection():
    connection = sqlite3.connect(os.getenv("DATABASE_FILE"))
    connection.row_factory = sqlite3.Row
    return connection

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api/test-results')
def citizens():
    connection = get_db_connection()
    results = connection.execute('SELECT * FROM testResults').fetchall()
    connection.close()
    return {'results': [dict(result) for result in results]}

@app.route('/api/test-results/cpr/<string:cpr>')
def citizen_by_cpr(cpr):
    connection = get_db_connection()
    results = connection.execute('SELECT * FROM testResults WHERE CPRnummer = ?',
                                 (cpr,)).fetchall()
    connection.close()
    return {'results': [dict(result) for result in results]}
