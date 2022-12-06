FROM python:3.10.8-slim-bullseye AS py

WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt

# Init database
ARG DATABASE_FILE
ARG TABLE_NAME
ARG ROOT_DIR
RUN touch ${DATABASE_FILE}
RUN python init_db.py

ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

EXPOSE 5000

CMD ["flask", "run"]
