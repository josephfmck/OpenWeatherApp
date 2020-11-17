//  Init/Instantiate object
const weather = new Weather('Topeka', 'Kansas');

//  Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//weather.changeLocation('Miami', 'Florida');

function getWeather() {
    //returns promise cuz its async func
    weather.getWeather()
        .then(results => {
            console.log(results);
        })
        .catch(err => console.log(err)); 
}