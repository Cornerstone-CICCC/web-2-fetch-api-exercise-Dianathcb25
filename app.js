// YOUR JS CODE HERE
const btnFetchWeather = document.getElementById("btn-fetch-weather")
const weatherDisplay = document.getElementById("weather-display")

btnFetchWeather.addEventListener("click", () => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1")
    .then(res => res.json())
    .then(data => {
        console.log(data)

        const temp = data.current.temperature_2m
        const tempU = data.current_units.temperature_2m

        const wind = data.current.wind_speed_10m
        const windU = data.current_units.wind_speed_10m

        const timeZ = data.timezone
        const currentT = new Date(data.current.time).toLocaleString()

        weatherDisplay.innerHTML = 
        `<br>
        <h2> Today's Weather: </h2> <br>
        <h1>${temp} ${tempU}</h1> <br>
        <h3>Wind speed: ${wind} ${windU}</h3> <br>
        <h2>${timeZ}</h2> <br>
        <h3>Last updated: ${currentT}</h3>`
        
        })
        .catch(err => console.error(err))
    })