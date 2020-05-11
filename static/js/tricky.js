var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var cWidth = canvas.width;
var cHeight = canvas.height;
var verticalSpacerSize = 0.02321981424 * cHeight;
var horizontalSpacerSize = 0.02321981424 * cWidth;

ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, cWidth, cHeight);
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
    var redBarHeight = 0.12616099071 * cHeight;
    var redBarWidth = cWidth - (horizontalSpacerSize * 2);
    ctx.fillStyle = "#BE0A26";
    ctx.fillRect(horizontalSpacerSize, verticalSpacerSize, redBarWidth, redBarHeight); //x, y, width, height
    ctx.fillRect(horizontalSpacerSize, cHeight - verticalSpacerSize - redBarHeight, redBarWidth, redBarHeight);
}

function clearText(y, height) {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, y, 1180, height); //x, y, width, height
}

function drawText(text, y) {
    ctx.fillStyle = "#FFFFFF";
    //BREAK UP INTO THREE
    ctx.fillText(text.toString().toUpperCase(), 0, y, 1150); // text, x, y, maxwidth
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
