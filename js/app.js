window.onload = function () {
    changeTime();
    setInterval(changeTime, 1000);
};

function randomizeFont() {
    // var fontType = ["Roboto Condensed", "Comfortaa"];
    var fontType = ["Roboto Condensed", "Rokkitt"];
    var num;
    num = Math.floor(Math.random() * fontType.length);
    document.getElementById("time").style.fontFamily = fontType[num];
}


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
