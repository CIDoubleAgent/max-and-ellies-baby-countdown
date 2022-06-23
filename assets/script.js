const countDownDate = new Date("Jul 13, 2022 12:00:01").getTime();
const x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer-div").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes and " + seconds + " Seconds! ";

}, 1000);