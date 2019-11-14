class Forecast {
  constructor(apikey) {
    this.apikey = apikey;
    this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search';
  }

  async getCity(city) {
    const query = `?q=${city}&apikey=${this.apikey}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();

    return data[0];
  }

  async getWeather(id) {
    const query = `${id}?apikey=${this.apikey}`;
    const response = await fetch(this.weatherURI + query);
    const data = await response.json();

    return data[0];
  }

  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    const cityWeather = await this.getWeather(cityDetails.Key);

    return { cityDetails, cityWeather };
  };
}
