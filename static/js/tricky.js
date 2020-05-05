var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, canvas.width, canvas.height);
initDMC()

ctx.font = "600px franklin-gothic-heavy";
ctx.textBaseline = "middle";
ctx.textAlign = "left";

function download() {
    var download = document.getElementById("download");
    var image = document.getElementById("myCanvas").toDataURL("image/jpeg").replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
}

function initDMC() {
    ctx.fillStyle = "#BE0A26";
    ctx.fillRect(30, 30, 1120, 163); //x, y, width, height
    ctx.fillRect(30, 1099, 1120, 163);
}

function clearText(y, height) {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, y, 1180, height); //x, y, width, height
}

function drawText(text, y) {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(text.toString().toUpperCase(), 30, y, 1120); // text, x, y, maxwidth
}

line1Input = document.querySelector('#line-1');
line1Input.onkeyup = function() {
    if (ctx) {
        clearText(193, 453)
        drawText(line1Input.value, 442)
    }
}

line2Input = document.querySelector('#line-2');
line2Input.onkeyup = function() {
    if (ctx) {
        clearText(646, 468)
        drawText(line2Input.value, 895)
    }
}
