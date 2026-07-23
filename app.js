const clockCanvas = document.getElementById('clockCanvas');
clockCanvas.height = 400;
clockCanvas.width = 400;
const ctx = clockCanvas.getContext('2d');

const centerX = clockCanvas.width / 2;
const centerY = clockCanvas.height / 2;
const radius = 180;

// Малюємо біле коло з чорним ободком
ctx.beginPath();                                   // починає новий шлях.
ctx.arc(centerX, centerY, radius, 0, Math.PI * 2); // малює коло з координатами centerX, centerY
ctx.fillStyle = "white";
ctx.fill();                                        // заливає фігуру кольором.
ctx.strokeStyle = "black";
ctx.stroke();                                      // робить лінію видимою.

// Малюємо позначки годин
ctx.beginPath();                                   // починає новий шлях.
ctx.moveTo(centerX, centerY - 180);                // переміщує олівець і ставить точку на аркуші (не малює)
ctx.lineTo(centerX, centerY - 160);                // малює лінію.
ctx.stroke();                                      // робить лінію видимою.