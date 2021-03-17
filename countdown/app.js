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
    if(hours < 10){
        hour.innerHTML = '0' + hours;
    }

    minute.innerHTML = minutes;
    if (minutes < 10) {
        minute.innerHTML = '0'+ minutes
    }
   

    second.innerHTML = seconds;
    if (seconds < 10) {
        second.innerHTML ='0'+ seconds 
    }
    


    if (interval <= 0){
        clearInterval(countDown)
        hour.innerHTML = '00'
        minute.innerHTML = '00'
        second.innerHTML = '00'
        day.innerHTML = '00'
        document.getElementById('launch').innerHTML = "Time Expired"
    }
}, 1000)