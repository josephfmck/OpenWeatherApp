//  Init/Instantiate object
const weather = new Weather('Topeka', 'Kansas');

const ui = new UI();

//  Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//weather.changeLocation('Miami', 'Florida');

function getWeather() {
    //returns promise cuz its async func so need .then to resolve data
    weather.getWeather()
        .then(results => {
            console.log(results);
            ui.paint(results);
        })
        .catch(err => console.log(err)); 
}