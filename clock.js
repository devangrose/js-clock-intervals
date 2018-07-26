
function minuteRotation(min){
    return min / 60 * 360;
}
function hourRotation(hour){
    return (hour / 12) * 360;
} 

function setPosition (element, degrees){
    element.style.transform="rotate(" + degrees + "deg)";
}
function update (now){
    var currentSecond = now.getSeconds();
    var currentMinute = now.getMinutes();
    var currentHour = now.getHours();

    setPosition(second, minuteRotation(currentSecond));
    setPosition(minute, minuteRotation(currentMinute));
    setPosition(hour, hourRotation(currentHour));
}
function tick(){
    var date = new Date();
    update(date);
    setTimeout(tick,1000);

}
var second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");

var now = new Date();


update(now);
tick();
