const getCity = async (city) => {

  const resourceURL = 'https://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?q=${city}&apikey=${apikey}`;

  const response = await fetch(resourceURL + query);
  const data = await response.json();

  return data[0];
}

const getWeather = async (key) => {

  const resourceURL = 'https://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${key}?apikey=${apikey}`;

  const response = await fetch(resourceURL + query);
  const data = await response.json();

  return data[0];
}
