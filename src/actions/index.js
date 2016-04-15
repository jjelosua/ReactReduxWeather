import axios from 'axios';

const API_KEY = '229817b1f05e9bf116bc6add880d54af'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// To sync with our reducers
export const FETCH_WEATHER = 'FETCH_WEATHER'



export function fetchWeather(city) {
    //Select book is an action creator
    const url = `${ROOT_URL}&q=${city},es`
    console.log('url: ',url)

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}