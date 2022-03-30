"devDependencies": {
    "gulp": "^4.0.2",
    "gulp-connect": "^5.7.0",
    "json-server": "^0.17.0"

npm i --save-dev json-server

Mike har lavet et script i package.json der kører: 
"start": "json-server --watch database-1.json --port 3001"

Derefter skriv:
npm start