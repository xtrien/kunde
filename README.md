# SWE Projekt Aufgabe 1: ME(A)N

#### Projekt:
- (y)  Node
- (y) MongoDB und mongoose
- (y) TypeScript mit TSLint
- (y) validator
- (y) nodemailer
- (y) bcrypt
- (y) JWT
- (y) winston
- (y) npm als Package Manager und Task Runner
- (y) GraphQL als Alternative zu REST
- TODO: rest. Express als Middleware zzgl. body-parser
- TODO: Mocha als Testrunner, supertest für Integrationstests, Chai als Assertion-Bibliothek

#### Erwartet:
- Projektplan mit Project Professional
- Zeiterfassung mit z.B. Excel

## Routineaufgaben

Node module installieren mit `npm i`

## Starten der Entwicklungs-Preview

```CMD
    npm run dev
```

### Starten und Herunterfahren von MongoDB

Manueller Start mit Compass

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

### Nodemailer starten

```CMD
    npm run nodemailer
```



## Tests aufrufen

### Voraussetzungen

-   Der MongoDB-Server muss laufen
-   Der Appserver darf _nicht_ laufen

### Aufruf in einer Powershell

(Tests noch nicht implementiert)

```CMD
    npm t
```
