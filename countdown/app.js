let second = document.getElementById('second')
let minute = document.getElementById('minute')
let hour = document.getElementById('hour')
let day = document.getElementById('day')

let countDownDate = new Date("Feb 26, 2021 15:37:25").getTime();

let countDown = setInterval (() =>{
    let now = new Date().getTime()

    let interval = countDownDate - now

    let days = Math.floor(interval / (1000 * 60 * 60 * 24));
    let hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((interval % (1000 * 60)) / 1000);
    
    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;


    if (interval < 0){
        clearInterval(countDownDate)
    }
}, 1000)