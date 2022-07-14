const countDownDate = new Date("Jul 08, 2022 10:19:00").getTime();
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

// let now = new Date().getTime();
// let confettiDistance = countDownDate - now;
// let confettiSeconds = Math.floor((confettiDistance % (1000 * 60)) / 1000);

// if(confettiSeconds < 0) {
//     confetti({
//         spread: 150,
//         colors: ["#fda7ff", "fcff6d", "028200", "6ab2ff"]
//     });
// }