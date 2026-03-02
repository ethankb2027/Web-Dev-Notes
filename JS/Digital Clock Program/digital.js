
function updateClock(){

    const timeNow = new Date();
    let hour = timeNow.getHours();
    const meridiem = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    hour = hour.toString().padStart(2, 0);
    const minute = timeNow.getMinutes().toString().padStart(2, 0);
    const second = timeNow.getSeconds().toString().padStart(2, 0);
    const ms = timeNow.getMilliseconds().toString().padStart(2, 0);
    const timeString = `${hour}:${minute}:${second}.${ms} ${meridiem}`;
    document.getElementById("clockTime").textContent = timeString;
    //console.log("Time updated to", timeString);

}

setInterval(updateClock, 1000);
