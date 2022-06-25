const countDownDate = new Date("Jul 13, 2022 00:00:01").getTime();
setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer-div").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes and " + seconds + " Seconds! ";
    countdownDiv = document.getElementById("countdown");
    targetDiv = document.getElementById("target")

    if(seconds < 0) {
        targetDiv.style.display = "block";
        confetti({
            spread: 150,
            colors: ["#fda7ff", "fcff6d", "028200", "6ab2ff"]
        });
    } else {
        countdownDiv.style.display = "block";
    }

}, 1000);