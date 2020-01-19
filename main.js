const btnMain = document.querySelector('button.main');
const btnReset = document.querySelector('button.reset');
const showTime = document.querySelector('div.time div');

let interval;

let clicks = 1;
let time = 0;

const timer = () => {
    clicks++;
    if (clicks % 2 == 0) {
    btnMain.textContent = 'Pauza';
    interval = setInterval(start, 10);
    } else {
    btnMain.textContent = 'Start';
    clearInterval(interval)
    }
}

const start = () => {
    time++;
    showTime.textContent = (time / 100).toFixed(2);
}

const reset = () => {
    time = 0;
    clicks = 1;
    btnMain.textContent = 'Start';
    showTime.textContent = '0.00';
    clearInterval(interval)
}

btnMain.addEventListener('click', timer);
btnReset.addEventListener('click', reset);





