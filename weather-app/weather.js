const request = require('postman-request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

/*
https://api.mapbox.com/geocoding/v5/mapbox.places/Los Angeles.json?access_token=pk.eyJ1IjoiZHdhaW5yaWNoYXJkc29uIiwiYSI6ImNrcGJ1a2d4ODExYW0zMXBuMjQzMmNkZjAifQ.NQ0cgbgnG5CA0thqNdke7g

 request(`${baseUrl}geocoding/v5/mapbox.places/${location}.json?access_token=${access_key}`,
     { rejectUnauthorized: false },
     (error, response, body) => {
  if(error) {
      console.log(error);
  }
  else if(response.body.error){
      console.log(response.body.error)
  }
  else{
      const parsedBody = JSON.parse(body);
      console.log(`Longitude: ${parsedBody.features[0].center[0]}`);
      console.log(`Latitude:  ${parsedBody.features[0].center[1]}`);
  }

 })


*/

//'40.7306','-73.9866'
/*
forecast('40.7306','-73.9866',(error, data) => {
    if(error) {
        console.log(error);
    }
    if(data) {
        console.log(data.current.temperature);
        console.log(data.current.weather_descriptions[0]);
    }
});
*/
geocode(location, (error,data) => {

    if(error) {
        console.log(`Error: ${error}`);
    }
    if(data) {

        const {center} = data.features[0];

        console.log(`Longitude: ${center[0]}`);
        console.log(`Latitude:  ${center[1]}`);

        forecast(center[1], center[0], (error, forecastData) =>{
            if(error) {
                console.log(error);
                return;
            }
            if(forecastData) {
                const { observation_time,temperature, weather_descriptions } = forecastData.current;
                const  {name} = forecastData.location;

             //   console.log(forecastData);
               // console.log(`The current forecast in ${forecastData.location.name} as of ${forecastData.current.observation_time} is ${forecastData.current.temperature} degrees. Conditions are ${forecastData.current.weather_descriptions[0]}` );
               console.log(`The current forecast in ${name} as of ${observation_time} is ${temperature} degrees. Conditions are ${weather_descriptions[0]}` );
            }
        });
    }
});




