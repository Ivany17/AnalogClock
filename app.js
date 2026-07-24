const clockCanvas = document.getElementById('clockCanvas');
clockCanvas.height = 400;
clockCanvas.width = 400;
const ctx = clockCanvas.getContext('2d');

const centerX = clockCanvas.width / 2;
const centerY = clockCanvas.height / 2;
const radius = 180;

function drawClock() {
    ctx.clearRect(0, 0, clockCanvas.width, clockCanvas.height); // очистити canvas 
    // Малюємо білий циферблат з чорним ободком
    ctx.beginPath();                                   // починає новий шлях.
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2); // малює коло з координатами centerX, centerY
    ctx.fillStyle = "white";
    ctx.fill();                                        // заливає фігуру кольором.
    ctx.strokeStyle = "black";
    ctx.stroke();                                      // робить лінію видимою.

    // Малюємо позначки годин
    for (let i = 0; i < 12; i++) {
        const angle = (i/12) * Math.PI * 2;
        const startX = centerX + Math.sin(angle) * radius;
        const startY = centerY - Math.cos(angle) * radius;
        const endX = centerX + Math.sin(angle) * (radius - 20);
        const endY = centerY - Math.cos(angle) * (radius - 20);
        ctx.beginPath();                                   // починає новий шлях.
        ctx.moveTo(startX, startY);                        // переміщує олівець і ставить точку на аркуші (не малює)
        ctx.lineTo(endX, endY);                            // малює лінію.
        ctx.stroke();                                      // робить лінію видимою.
    }

    // Малюємо годинникову стрілку годинника
    const hours = new Date().getHours();
    const hourAngle = ((hours % 12) / 12) * Math.PI * 2;
    const hourLength = radius * 0.5;
    const endHourX = centerX + Math.sin(hourAngle) * hourLength;
    const endHourY = centerY - Math.cos(hourAngle) * hourLength;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(endHourX, endHourY);
    ctx.stroke();

    // Малюємо хвилинну стрілку годинника
    const minutes = new Date().getMinutes();
    const minuteAngle = (minutes / 60) * Math.PI * 2;
    const minuteLength = radius * 0.7;
    ctx.lineWidth = 2;
    const endMinuteX = centerX + Math.sin(minuteAngle) * minuteLength;
    const endMinuteY = centerY - Math.cos(minuteAngle) * minuteLength;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(endMinuteX, endMinuteY);
    ctx.stroke();
}

drawClock();
setInterval(drawClock, 1000);