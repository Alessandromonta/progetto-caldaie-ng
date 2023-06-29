--GENERATO PALESEMENTE CON CHAT GPT PERCHE NON C'HO SBATTI
CREATE DATABASE AutoclimaRepair
GO
USE AutoclimaRepair
GO

CREATE TABLE TipologieCaldaia (
    IdTipologia INT IDENTITY(1,1) PRIMARY KEY,
    NomeTipologia VARCHAR(255)
);

CREATE TABLE Utenti (
    IdUtente INT IDENTITY(1,1) PRIMARY KEY,
    NomeUtente VARCHAR(255),
    Password VARCHAR(255),
    AltreInformazioniUtente VARCHAR(255)
);

CREATE TABLE Caldaie (
    IdCaldaia INT IDENTITY(1,1) PRIMARY KEY,
    IdTipologia INT,
    IdUtente INT,
    AltreInformazioniCaldaia VARCHAR(255),
    FOREIGN KEY (IDTipologia) REFERENCES TipologieCaldaia(IDTipologia),
    FOREIGN KEY (IDUtente) REFERENCES Utenti(IDUtente)
);

CREATE TABLE ErroriCaldaia (
    IdErrore INT IDENTITY(1,1) PRIMARY KEY,
    IdCaldaia INT,
    CodiceErrore VARCHAR(255),
    DescrizioneErrore TEXT,
    SoluzioneErrore TEXT,
    FOREIGN KEY (IDCaldaia) REFERENCES Caldaie(IDCaldaia)
);
