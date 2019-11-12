const searchWeather = document.querySelector('.search-weather');
const card = document.querySelector('.card');
const icon = document.querySelector('.icon img');
const details = document.querySelector('.details');
const time = document.querySelector('.time');

searchWeather.addEventListener('submit', e => {
  e.preventDefault();

  const city = searchWeather.city.value;

  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));


  localStorage.setItem('city', city);

  searchWeather.reset();

});

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const cityWeather = await getWeather(cityDetails.Key);

  return { cityDetails, cityWeather };
};


const updateUI = data => {

  // const cityDetails = data.cityDetails;
  // const cityWeather = data.cityWeather;

  const { cityDetails, cityWeather } = data;

  details.innerHTML = `
    <h5 class="my-4">${cityDetails.EnglishName}</h5>
    <div class="my-3">${cityWeather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${cityWeather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;


  const iconSrc = `./img/icons/${cityWeather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);

  let timeSrc = '';

  if (cityWeather.IsDayTime) {
    timeSrc = './img/day.svg';
  } else {
    timeSrc = './img/night.svg';
  }

  time.setAttribute('src', timeSrc);

  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }

};

if (localStorage.getItem('city')) {
  updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(err));
}