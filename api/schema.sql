DROP TABLE IF EXISTS testResults;

CREATE TABLE testResults (
	ID INTEGER PRIMARY KEY AUTOINCREMENT,
	Prøvetagning TEXT,
	Prøvesvar TEXT,
	Prøvenummer TEXT,
	CPRnummer TEXT,
	Fornavn TEXT,
	Efternavn TEXT,
	Telefon TEXT,
	Samtykke TEXT,
	SORnummer TEXT,
	Teststed TEXT,
	PAX TEXT,
	Off_finans TEXT,
	Testtype TEXT,
	Materiale TEXT,
	Lokalisation TEXT,
	Resultat TEXT,
	Kommentar TEXT,
	Udlandsrejser TEXT,
	Rejsemål TEXT,
	Smittekontakt TEXT,
	Screening TEXT,
	DIN TEXT
);

-- Prøvetagning;Prøvesvar;Prøvenummer;CPRnummer;Fornavn;Efternavn;Telefon;
-- Samtykke;SORnummer;Teststed;PAX;Off_finans;Testtype;Materiale;Lokalisation;
-- Resultat;Kommentar;Udlandsrejser;Rejsemål;Smittekontakt;Screening;DIN
