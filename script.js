document.addEventListener("DOMContentLoaded", updateTime);

function updateTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let hPointer = document.getElementById("hPointer");
    let mPointer = document.getElementById("mPointer");
    let sPointer = document.getElementById("sPointer");
    let hDisplay = document.getElementById("hDisplay");
    let mDisplay = document.getElementById("mDisplay");
    let sDisplay = document.getElementById("sDisplay");

    if (hour != 0) {
        hPointer.style.transition = ".3s";
        hPointer.style.rotate = hour * 360 / 12 + "deg";
    } else {
        removeAnim(hPointer, 720);
    }

    if (minute != 0) {
        mPointer.style.transition = ".3s";
        mPointer.style.rotate = minute * 360 / 60 + "deg";
    } else {
        removeAnim(mPointer, 360);
    }

    if (second != 0) {
        sPointer.style.transition = ".3s";
        sPointer.style.rotate =  second * 360 / 60 + "deg";
    } else {
        removeAnim(sPointer, 360);
    }

    hDisplay.innerText = hour >= 10 ? hour : "0" + hour;
    mDisplay.innerText = minute >= 10 ? minute : "0" + minute;
    sDisplay.innerText = second >= 10 ? second : "0" + second;
}

function removeAnim(element, degrees) {
    element.style.rotate = degrees + "deg";
    setTimeout(() => {
        element.style.transition = "none";
        element.style.rotate = 0 + "deg";
    }, 300);
}

setInterval(updateTime, 1000);