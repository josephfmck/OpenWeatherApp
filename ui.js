class UI {
    constructor() {
        this.location = document.querySelector('#w-location');
        this.description = document.querySelector('#w-description');
        this.string = document.querySelector('#w-string');
        this.details = document.querySelector('#w-details');
        this.icon = document.querySelector('#w-icon');
        this.humidity = document.querySelector('#w-humidity');
        this.feelsLike = document.querySelector('#w-feels-like');
        this.windDirection = document.querySelector('#w-wind-direction');
        this.windSpeed = document.querySelector('#w-wind-speed');
    }

    //  Paints the UI with the results
    //weather = results from getWeather
    paint(weather) {
        this.location.textContent = weather.name;
        this.description.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp;
        //found src to use icons in docs
        this.icon.setAttribute(
            'src', 
            `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}F`;
        this.windDirection.textContent = `Wind Direction: ${weather.wind.deg}deg`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}mph`
    }
}