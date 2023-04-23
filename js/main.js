let topsCounter = 1;
document.getElementById('tops-radio1').checked = true;
setInterval(() => {
    document.getElementById('tops-radio' + topsCounter).checked = true;
    topsCounter++;
    if (topsCounter > 6) {
        topsCounter = 1;
    }
}, 4000);

let jeansCounter = 1;
document.getElementById('jeans-radio1').checked = true;
setInterval(() => {
    document.getElementById('jeans-radio' + jeansCounter).checked = true;
    jeansCounter++;
    if (jeansCounter > 6) {
        jeansCounter = 1;
    }
}, 5000);
