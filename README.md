# Online POS replacement

## Running backend
```
pip install -r requirements.txt
python init_db.py
export FLASK_APP=app.py
export FLASK_DEBUG=true
flask run
```

## Running frontend
```
cd client
npm i
npm start
```

## Run with docker-compose
Provide a `.env` with the following variables and their values:
- ROOT_DIR
- TABLE_NAME
- DATABASE_FILE
- REACT_APP_BACKEND