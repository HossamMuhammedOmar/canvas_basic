const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "brown";
ctx.fillRect(0, 0, 300, 300);

ctx.fillStyle = "#000";
ctx.fillRect(60, 70, 150, 150);

ctx.fillStyle = "yellow";
ctx.fillRect(95, 105, 75, 75);
