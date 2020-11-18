//  Init/Instantiate object
const storage = new Storage();

//  Get stored location data
//should return obj with city and state
const weatherLocation = storage.getLocationData();


//  Init/Instantiate object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//  Init/Instantiate object
const ui = new UI();


//  Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//  Change location event
document.querySelector('#w-change-btn').addEventListener('click', (e)=> {
    const city = document.querySelector('#city').value;
    const state = document.querySelector('#state').value;

    //  Change location
    weather.changeLocation(city, state);

    //  Set location in LS
    storage.setLocationData(city, state);

    // Get and display weather after changelocation
    getWeather();

    //  Close modal with jquery
    $('#locModal').modal('hide');
});





function getWeather() {
    //returns promise cuz its async func so need .then to resolve data
    weather.getWeather()
        .then(results => {
            console.log(results);
            ui.paint(results);
        })
        .catch(err => console.log(err)); 
}

