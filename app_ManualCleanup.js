let intervalId;
let leaks = [];

function startLeak() {
    intervalId = setInterval(() => {
        leaks.push(new Array(1000000).fill('leak'));
        console.log('Leaking memory...');
    }, 1000);
}

function stopLeak() {
    clearInterval(intervalId);
    leaks = [];
    console.log('Stopped leaking memory and cleared array.');
}

document.getElementById('start-leak').addEventListener('click', startLeak);
document.getElementById('stop-leak').addEventListener('click', stopLeak);
