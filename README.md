# SWE Projekt Aufgabe 1: ME(A)N

1. Node module installieren mit `npm i`

Projekt:
(y) – Node
(y) – Express als Middleware zzgl. body-parser
(y) MongoDB und mongoose
(y) TypeScript mit TSLint
(y) validator
(y) nodemailer
(y) bcrypt
(y) JWT
(y) winston
– Mocha als Testrunner, supertest für Integrationstests, Chai als Assertion-Bibliothek
(y) npm als Package Manager und Task Runner
(y) GraphQL als Alternative zu REST

Erwartet:
– Projektplan mit Project Professional https://hs-karlsruhe.onthehub.com/WebStore/Welcome.aspx https://www.hs-karlsruhe.de/iz/servicekatalog/microsoft-imagine-premium
– Zeiterfassungmitz.B.Excel

##Routineaufgaben

## Starten der Entwicklungs-Preview

```CMD
    npm run dev
```

### Starten und Herunterfahren von MongoDB

Manueller start mit Compass

### Übersetzung durch den TypeScript-Compiler in einer Powershell

```CMD
    npm run tsc
```

-   Zuerst die Codequalität mit _tslint_ prüfen und dann
-   .ts-Dateien durch _tsc_ in das Verzeichnis `dist` übersetzen

### Starten des Appservers (mit Node.js und Express) mit \_nodemon

Durch _nodemon_ (= Node Monitor) wird der Appserver so gestartet, dass er
JavaScript-Dateien im laufenden Betrieb nachlädt, wenn sie später aktualisiert
werden, weil z.B. eine TypeScript-Datei neu übersetzt wird.
Beim Starten des Appservers wird mit _mongoose_ auf _MongoDB_ zugegriffen.

```CMD
    npm start
```

Von Zeit zu Zeit hängt sich nodemon auf und muss dann halt neu gestartet werden.

Falls _nodemon_ nicht vernünftig funktioniert, kann man auch den Appserver
direkt starten (s.u.) und muss diesen dann _bei jeder Änderung_ neu starten.

## Tests aufrufen

### Voraussetzungen

-   Der MongoDB-Server muss laufen
-   Der Appserver darf _nicht_ laufen

### Aufruf in einer Powershell

```CMD
    npm t
```
