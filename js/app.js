window.onload = function () {
    setInterval(changeTime, 1000);
};


// formatMinutes adds a zero in front of numbers lower than 10
function formatMinutes(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function changeTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = formatMinutes(m);
    document.getElementById('time').innerHTML = h + ":" + m;
}
