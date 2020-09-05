window.onload = function () {
    changeTime();
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
    var m = formatMinutes(today.getMinutes());
    document.getElementById('time').innerHTML = h + ":" + m;
}
