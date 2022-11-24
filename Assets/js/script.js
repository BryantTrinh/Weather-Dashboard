// set global variables

var weatherApiRootUrl = 'https://api.openweathermap.org';
var weatherApiKey = 'd91f911bcf2c0f925fb6535547a5ddc9';
var searchHistory = [];

// timezone plugin to day.js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

// DOM reference for elements

var searchForm = document.querySelector("search-form");
var searhInput = document.querySelector("search-input");
var todayContainer = document.querySelector("today");
var forecastContainer = document.querySelector("forecast");
var searchHistoryContainer = document.querySelector("#history");

// function to show search history list

function renderSearchHistory() {
  searchHistoryContainer.innerHTML = '';
  console.log(renderSearchHistory)

  // we want to start at the end of history array. After, we want to count down til most recent.

  for (var i= searchHistory.length-1; i>=0; i--) {
  var btn = document.createElement ("button");
  
    btn.setAttribute("aria-controls", "today forecast");
  
    btn.setAttribute ("type", "button");
  
    btn.classList.add("history-btn", "btn-history");

    btn.setAttribute ("data-search", searchHistory[i]);
    btn.textContent = searchHistory[i];
    searchHistoryContainer.append(btn);

    // console.log(btn);
  }
}

// update history in local storage and update history in browser

function appendToHistory(search) {
  if (searchHistory.indexOf(search) !== -1) {
    return;
  } searchHistory.push(search);
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  renderSearchHistory(); 
  // console.log("ping");
}

// Display current weather data

function renderCurrentWeather(city, weather) {
  var date= dayjs().format('M/D/YYYY');


  // var to store datas, save response data from fetch request

  // var iconUrl
  // var iconDescription
  var tempF = main.weather.temp;
  var windMph = weather.wind.speed;
  var humidity = main.weather.humidity;

  // variable for cards in html

  var card = document.createElement('div');
  var cardBody = document.createElement('div');
  var heading = document.createElement('h2');
  var weatherIcon = document.createElement('img');
  var temperatureEl = document.createElement('p');
  var windEl = document.createElement('p');
  var humidityEl = document.createElement('p');

// attribute for cards, card.append to cardBody

  card.setAttribute('class', 'card');
  cardBody.setAttribute('class', 'card-body');
  card.append(cardBody);

  heading.setAttribute('class', 'h3 card-title');
  temperatureEl.setAttribute('class', 'card-text');
  windEl.setAttribute('class', 'card-text');
  humidityEl.setAttribute('class', 'card-text');


// use jquery? to set attributes

  //WORK TO BE DONE/ CODE HERE
  // heading, weatherIcons, tempEl, windEl, humidityEl, then combine them all into cardbody (append)
  // 

  cardBody.append(heading);
// set markup contained in element
  todayContainer.innerHTML = "";
  todayContainer.append(card);
}

// Function to display forecast card from object in api

function renderForecastCard(city, forecast) {
  var iconUrl= 'https://openweathermap.org/img/w/${forecast.weather[0].icon}.png';
  var iconDescription= forecast.weather[0].description;
  var tempF = forecast.main.temp;
  var humidity = forecast.main.humidity;
  var windMph = forecast.wind.speed;

// next we have to create element for our forecast card

var col = document.createElement('div');
var card = document.createElement('div');
var cardBody = document.createElement('div');
var cardTitle = document.createElement('h5');
var weatherIcon = document.createElement('img');
var temperatureEl = document.createElement('p');
var windEl = document.createElement('p');
var humidityEl = document.createElement('p');

col.append(card);
card.append(cardBody);
cardBody.append(cardTitle, weatherIcon, temperatureEl, windEl, humidityEl);

// set attributes

col.setAttribute('class', 'col-md');
col.classList.add('five-day-card');
card.setAttribute('class', 'card bg-primary h-100 text-white');
cardBody.setAttribute('class', 'card-body p-2');
cardTitle.setAttribute('class', 'card-title');
temperatureEl.setAttribute('class', 'card-text');
windEl.setAttribute('class', 'card-text');
humidityEl.setAttribute('class', 'card-text');

// now we need to append content to these elements

  cardTitle.textContent = dayjs(forecast.dt_txt).format('M/D/YYYY');
  weatherIcon.setAttribute('src', iconUrl);
  weatherIcon.setAttribute('alt', iconDescription);
  tempEl.textContent = `Temp: ${tempF} °F`;
  windEl.textContent = `Wind: ${windMph} MPH`;
  humidityEl.textContent = `Humidity: ${humidity} %`;

  forecastContainer.append(col);
}



// create elements for cards

var col = document.createElement('div');
var card = document.createElement('div');
var cardBody = document.createElement('div');
var cardTitle = document.createElement('h5');
var weatherIcon = document.createElement('img');
var temperatureEl = document.createElement('p');
var windEl = document.createElement('p');
var humidityEl = document.createElement('p');

col.append(card);
card.append(cardBody);
cardBody.append(weatherIcon, cardTitle, temperatureEl, windEl, humidityEl);

// set attribute for columns, card, and elements. col-md for medium devices, so we need to go back into HTML and make a div with max-width. add 5 day card to column using classlist.add

card.setAttribute('class', 'card bg-primary text-white');
cardBody.setAttribute('class', 'card-body');
cardTitle.setAttribute('class', 'card-title p-3');
col.setAttribute('class', 'col-md');
col.classList.add('five-day-card');
temperatureEl.setAttribute('class', 'card-text');
windEl.setAttribute('class', 'card-text');
humidityEl.setAttribute('class', 'card-text');

// append content to elements

cardTitle.textContent = dayjs(forecast.dt_txt).format('M/D/YYYY');
  weatherIcon.setAttribute('alt', iconDescription);
  tempEl.textContent = `Temp: ${tempF} °F`;
  windEl.textContent = `Wind: ${windMph} MPH`;
  humidityEl.textContent = `Humidity: ${humidity} %`;

  forecastContainer.append(col);
}

