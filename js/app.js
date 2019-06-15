window.onload = function() {
    startTime();
    weatherData();
};

var currentTemperature = null;


function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    // add a zero in front of numbers<10
    m = checkTime(m);
    document.getElementById('time').innerHTML = h + ":" + m;
    t = setTimeout(function() {
        startTime()
    }, 1000);
}

const retrieveData = async () => {
    const response = await fetch(url);
    const weatherData = await response.json(); //extract JSON from the http response
    // console.log(weatherData.currently);
    currentTemperature = weatherData.currently.temperature;
    document.getElementById('temperature-fahrenheit').innerHTML = currentTemperature.toFixed(0) + 'ºF';
    document.getElementById('temperature-celsius').innerHTML = toCelsius(currentTemperature) + 'ºC';
}

function weatherData() {
    retrieveData()
    t = setTimeout(function() {
        weatherData()
    }, 600000);
}

function toCelsius(f) {
    var c = (f - 32) * 5/9;
    return c.toFixed(0);
}