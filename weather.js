class Weather {
    constructor(city, state) {
        this.apiKey = '2865baaa67887ff570eead7c3419898e';
        this.city = city;
        this.state = state;
    }

    //  Fetch weather from API
    async getWeather() {
        const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);

        const responseData = response.json();

        console.log(responseData);

        return responseData;
    }

    //  Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}