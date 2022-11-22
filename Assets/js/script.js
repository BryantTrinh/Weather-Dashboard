// set global variables

var weatherApiRootUrl = 'https://api.openweathermap.org';
var weatherApiKey = 'd91f911bcf2c0f925fb6535547a5ddc9';
var searchHistory = [];

// timezone plugin to day.js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

var searchForm = document.querySelector("search-form");
var searhInput = document.querySelector("search-input");
