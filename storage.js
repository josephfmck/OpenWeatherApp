//  For persisting local storage on page load
//  Defaults if nothing persisted
class Storage {
    constructor() {
        this.city;
        this.state;
        this.defaultCity = 'Miami';
        this.defaultState = 'Florida';
    }

    getLocationData() {
        //if nothing in LS set to default
        if(localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            //get city from LS
            this.city = localStorage.getItem('city');
        }

        //if nothing in LS set to default
        if(localStorage.getItem('state') === null) {
            this.state = this.defaultState;
        } else {
            //get state from LS
            this.state = localStorage.getItem('state');
        }

        //return obj 
        return {
            city: this.city,
            state: this.state
        }
    }

    setLocationData(city, state) {
        localStorage.setItem('city', city); //saving as a string
        localStorage.setItem('state', state);
    }
}