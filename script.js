document.addEventListener("DOMContentLoaded", updateTime);

function updateTime() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.toLocaleString("pt-br", {month: 'long'});
    let weekDay = date.toLocaleString("pt-br", {weekday: "long"});
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let hPointer = document.getElementById("hPointer");
    let mPointer = document.getElementById("mPointer");
    let sPointer = document.getElementById("sPointer");
    let hDisplay = document.getElementById("hDisplay");
    let mDisplay = document.getElementById("mDisplay");
    let sDisplay = document.getElementById("sDisplay");
    let dateDisplay = document.getElementById("dateDisplay");

    if (hour != 0) {
        setAnim(hPointer, hour, 12);
    } else {
        removeAnim(hPointer, 720);
    }

    if (minute != 0) {
        setAnim(mPointer, minute, 60);
    } else {
        removeAnim(mPointer, 360);
    }

    if (second != 0) {
        setAnim(sPointer, second, 60);
    } else {
        removeAnim(sPointer, 360);
    }

    hDisplay.innerText = hour >= 10 ? hour : "0" + hour;
    mDisplay.innerText = minute >= 10 ? minute : "0" + minute;
    sDisplay.innerText = second >= 10 ? second : "0" + second;
    dateDisplay.innerText = `${weekDay}, ${day} de ${month} de ${year}`;
}

function setAnim(element, time, denominator) {
    element.style.transition = ".3s";
    element.style.rotate =  time * 360 / denominator + "deg";
}

function removeAnim(element, degrees) {
    element.style.rotate = degrees + "deg";
    setTimeout(() => {
        element.style.transition = "none";
        element.style.rotate = 0 + "deg";
    }, 300);
}

setInterval(updateTime, 1000);