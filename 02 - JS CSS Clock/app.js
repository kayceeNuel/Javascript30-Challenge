const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand'); 

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;

    const mins = now.getMinutes();
    const minDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
