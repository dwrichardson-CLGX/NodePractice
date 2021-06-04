const fs = require('fs');
const log = console.log;

const dataBuffer = fs.readFileSync('json.json');
const dataJson = dataBuffer.toString();
let data = JSON.parse(dataJson);
data.name = 'Dwain';
data.age = 37;

const changedData = JSON.stringify(data);
fs.writeFileSync('json.json',changedData);

log(data);
