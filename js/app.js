// Request('https://darksky.net/widget/graph-bar/41.919,-87.7067/uk212/en.js?width=100%&height=400&title=Full Forecast&textColor=ffffff&bgColor=fb0505&transparency=true&skyColor=undefined&fontFamily=Default&customFont=&units=uk2&timeColor=ffffff&tempColor=000000&currentDetailsOption=true')

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
    }, 500);
}
startTime()