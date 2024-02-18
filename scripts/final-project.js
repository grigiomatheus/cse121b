const weatherApiKey = "6687f299af86bf33c4059e8bffc39152";

const cityInput = document.querySelector("#city-input");
const searchButton = document.querySelector("#search");
const clearButton = document.querySelector("#clear");
const dropdown = document.querySelector('#autocomplete-dropdown');
const cityElement = document.querySelector("#city");
const cityName = document.querySelector("#city-name");
const temperatureCelsius = document.querySelector("#celsius");
const temperatureFahrenheit = document.querySelector("#fahrenheit");
const weatherDescription = document.querySelector("#description");

let citiesData = [];

const getWorldCities = async () => {
    const request = await fetch("https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json");
    const cities = await request.json();

    console.log(cities)
    citiesData = cities;
}

// Dropdown configuration
cityInput.addEventListener('input', function() {
    const inputValue = this.value.trim().toLowerCase();

    if (inputValue === '') {
        dropdown.classList.remove('active');
        dropdown.innerHTML = '';
    } else {
        const suggestions = citiesData.filter(city => city.name.toLowerCase().startsWith(inputValue));
        renderDropdown(suggestions);
    }
});

cityInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      searchButton.click();
    }
  });

const renderDropdown = (suggestions) => {
    dropdown.innerHTML = '';
    const limitedSuggestions = suggestions.slice(0, 6);

    if (limitedSuggestions.length > 0) {
        dropdown.classList.add('active');

        limitedSuggestions.forEach(city => {
            const div = document.createElement('div');

            div.classList.add('autocomplete-item');
            div.textContent = `City: ${city.name} - Country: ${city.country}`;

            //Click
            div.addEventListener('click', function() {
                cityInput.value = city.name; 
                dropdown.classList.remove('active');
                cityInput.focus();
            });

            dropdown.appendChild(div);
        });
    } else {
        dropdown.classList.remove('active');
    }
}

window.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target) && e.target !== cityInput)
        dropdown.classList.remove('active');
});

//End dropdown configuration

//Button click configuration
searchButton.addEventListener("click", (event) => {
    const city = cityInput.value;
    getWeatherData(city);
})


clearButton.addEventListener("click", (event) =>{
    cityInput.value = "";
    cityName.innerHTML = "";
    temperatureCelsius.innerHTML = "";
    temperatureFahrenheit.innerHTML = "";
    weatherDescription.innerHTML = "";

    cityInput.focus();
});

const getWeatherData = async(city) => {
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`;
    const request = await fetch(apiWeatherUrl);
    const response = await request.json();

    if(response.cod == "404")
        window.alert("City not found in weather system! Try another city.");
    else
        showWeatherData(response);
}

const showWeatherData = (cityData) => {
    cityName.innerHTML = `City: ${cityData.name} - Country: ${cityData.sys.country}`;
    temperatureCelsius.innerHTML = `Temperature in Celsius: ${kelvinToCelsius(cityData.main.temp).toFixed(1)}°C`;
    temperatureFahrenheit.innerHTML = `Temperature in Fahnrenheit: ${kelvinToFahrenheit(cityData.main.temp).toFixed(1)}F`
    weatherDescription.innerHTML = `Weather condition: ${cityData.weather[0].description}`
}


const kelvinToFahrenheit = (kelvin) => (kelvin - 273.15) * 9/5 + 32;
const kelvinToCelsius = (kelvin) => kelvin - 273.15;

getWorldCities();