let leaks = [];

document.getElementById('start-leak').addEventListener('click', () => {
    const intervalId = setInterval(() => {
        leaks.push(new Array(1000000).fill('leak'));
        console.log('Leaking memory...');
    }, 1000);
    
    document.getElementById('stop-leak').addEventListener('click', () => {
        clearInterval(intervalId);
        console.log('Stopped leaking memory.');
    });
});
