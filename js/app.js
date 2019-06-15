

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
startTime()

const userAction = async () => {
    var url = 'https://api.darksky.net/forecast/' + config.apiKey + config.locationCoords;
    const response = await fetch(url);
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson);
}
userAction()