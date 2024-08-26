let weakMap = new WeakMap();
let weakSet = new WeakSet();

document.getElementById('start-leak').addEventListener('click', () => {
    let obj = {};
    weakMap.set(obj, new Array(1000000).fill('leak'));
    weakSet.add(obj);

    console.log('Memory allocated in WeakMap and WeakSet');
    
    // Simulate removing reference to obj
    obj = null;
});
