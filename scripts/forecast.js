const getCity = async (city) => {

  const resourceURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?q=${city}&apikey=${apikey}`;

  const response = await fetch(resourceURL + query);
  const data = await response.json();

  return data[0];
}

const getWeather = async (cityDetails) => {

  const resourceURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${cityDetails.Key}?apikey=${apikey}`;

  const response = await fetch(resourceURL + query);
  const data = await response.json();

  return data[0];
}
