const https = require('https');
const access_key = 'pk.eyJ1IjoiZHdhaW5yaWNoYXJkc29uIiwiYSI6ImNrcGJ1a2d4ODExYW0zMXBuMjQzMmNkZjAifQ.NQ0cgbgnG5CA0thqNdke7g';
const baseUrl = 'https://api.mapbox.com/';
const address = 'Los Angeles';
const url = `${baseUrl}geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${access_key}`;

const req = https.request(url, { rejectUnauthorized: false }, (response)=>{
    let data = '';
    response.on('data', (chunk) => {
        console.log(chunk)
        data += chunk.toString();
    })

    response.on('end', () => {
        console.log(JSON.parse(data));
    })
});

req.end();
