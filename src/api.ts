import axios from 'axios';

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const WEATHER_API_KEY = "ed608eba947b4b93b00ec6b0a1216018";
const GEO_API_OPTIONS = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "d1539773e1msha1871479e130804p1ab93bjsn6270aaa05384",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
};


export async function fetchWeatherData(lat: number, lon: number) {
    try {
        const weatherResponse = await axios.get(
            `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const forcastResponse = await axios.get(
            `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        return [weatherResponse.data, forcastResponse.data];
    } catch (error) {
        console.log(error);
    }
}

export async function fetchCities(input: any) {
    try {
        const response = await axios.get(
            `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`,
            GEO_API_OPTIONS
        );

        if (response && response.data) {
            return response.data; 
        } else {
            return []; 
        }
    } catch (error) {
        console.log(error);
        return [];
    }
}
