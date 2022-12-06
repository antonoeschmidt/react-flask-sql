""" 
Rows in the database:
Prøvetagning, Prøvesvar, Prøvenummer, CPRnummer, Fornavn, Efternavn, Telefon, Samtykke, SORnummer, Teststed, PAX, Off_finans, Testtype, Materiale, Lokalisation, Resultat, Kommentar, Udlandsrejser, Rejsemål, Smittekontakt, Screening, DIN
"""
import os
import sqlite3
import pandas as pd
from dotenv import load_dotenv

load_dotenv()

root_dir = os.getenv("ROOT_DIR")
table_name = os.getenv("TABLE_NAME")
database_file = os.getenv("DATABASE_FILE")
print(f"root_dir: {root_dir}")
print(f"table_name: {table_name}")
print(f"database_file: {database_file}")


connection = sqlite3.connect(database_file)

print("Cleaning up and creating table")
with open("schema.sql") as f:
    connection.executescript(f.read())

files_list = []

print("Reading files...")
for root, dirs, files in os.walk(root_dir):
    for fi in files:
        if fi.split(".")[-1] == 'csv':
            files_list.append(f"{root}/{fi}")
print(f"Found {len(files_list)} files")

for index, file in enumerate(files_list):
    print(f'Processing file {index + 1} of {len(files_list)}')
    df = pd.read_csv(file, sep=';', on_bad_lines='warn', dtype='unicode')
    df.to_sql(table_name, connection, if_exists='append', index=False)
print("Finished processing files")

cur = connection.cursor()

# Adding index to CPRnummer for optimization
print("Creating index...")
cur.execute("CREATE INDEX Idx1 ON testResults(CPRnummer)")

connection.commit()
connection.close()

print("Finished")