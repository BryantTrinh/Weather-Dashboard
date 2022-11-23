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





}