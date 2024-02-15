const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

const operationZone = document.querySelector('.operationZone');
const buttons = document.querySelector('.button-container');

let evaluator = '0';
let running = evaluator;

operationZone.textContent = running;

zero.addEventListener('click', (e) => {
    if ((running[0] == '0') && (running.length === 1)) {
        running = running.slice(1);
    }
    if (running.length > 14) {
        running = running;
    }else { running = running + '0';}
    operationZone.textContent = running;
    evaluator = evaluator + '0';
});
one.addEventListener('click', (e) => {
    if ((running[0] == '0') && (running.length === 1)) {
        running = running.slice(1);
    }
    if (running.length > 14) {
        running = running;
    } else {running = running + '1';}
    operationZone.textContent = running;
    evaluator = evaluator + '1';
});
two.addEventListener('click', (e) => {
    if ((running[0] == '0') && (running.length === 1)) {
        running = running.slice(1);
    }
    if (running.length > 14) {
        running = running;
    } else{running = running + '2';};

    operationZone.textContent = running;
    evaluator = evaluator + '2';
});
three.addEventListener('click', (e) => {
    if ((running[0] == '0') && (running.length === 1)) {
        running = running.slice(1);
    }
    if (running.length > 14) {
        running = running;
    }else{running = running + '3';}
    
    operationZone.textContent = running;
    evaluator = evaluator + '3';
});
four.addEventListener('click', (e) => {
    if ((running[0] == '0') && (running.length === 1)) {
        running = running.slice(1);
    }
    if (running.length > 14) {
        running = running;
    }else{running = running + '4';}
    
    operationZone.textContent = running;
    evaluator = evaluator + '4';
});
five.addEventListener('click', (e) => {
    if ((running[0] == '0') && (running.length === 1)) {
        running = running.slice(1);
    }
    if (running.length > 14) {
        running = running;
    }else{running = running + '5';}
    
    operationZone.textContent = running;
    evaluator = evaluator + '5';
});
six.addEventListener('click', (e) => {
    if ((running[0] == '0') && (running.length === 1)) {
        running = running.slice(1);
    }
    if (running.length > 14) {
        running = running;
    }else{running = running + '6';}
    
    operationZone.textContent = running;
    evaluator = evaluator + '6';
});
seven.addEventListener('click', (e) => {
    if ((running[0] == '0') && (running.length === 1)) {
        running = running.slice(1);
    }
    if (running.length > 14) {
        running = running;
    }else{running = running + '7';}
    
    operationZone.textContent = running;
    evaluator = evaluator + '7';
});
eight.addEventListener('click', (e) => {
    if ((running[0] == '0') && (running.length === 1)) {
        running = running.slice(1);
    }
    if (running.length > 14) {
        running = running;
    }else{running = running + '8';}
    
    operationZone.textContent = running;
    evaluator = evaluator + '8';
});
nine.addEventListener('click', (e) => {
    if ((running[0] == '0') && (running.length === 1)) {
        running = running.slice(1);
    }
    if (running.length > 14) {
        running = running;
    }else{running = running + '9';}
    
    operationZone.textContent = running;
    evaluator = evaluator + '9';
});

const clear = document.querySelector('.clear');
clear.addEventListener('click' , (e) => {
    running = '0';
    evaluator = '0';
    operationZone.textContent = running;
})

const equals = document.querySelector('.equals');
equals.addEventListener('click', (e) =>{
    while (evaluator.charAt(0) === '0') {
        evaluator = evaluator.substring(1);
    }
    running = eval(evaluator).toString();
    if (running.length > 15) {
        running = running.substring(0, 14);
    }
    evaluator = running;
    operationZone.textContent = running;
});

const sum = document.querySelector('.plus');
sum.addEventListener('click', () => {
    evaluator = evaluator + ' + ';
    running = '0';
    operationZone.textContent = running;
});

const product = document.querySelector('.multiplication');
product.addEventListener('click', () => {
    evaluator = evaluator + ' * ';
    running = '0';
    operationZone.textContent = running;
});

const division = document.querySelector('.division');
division.addEventListener('click', () => {
    evaluator = evaluator + ' / ';
    running = '0';
    operationZone.textContent = running;
});

const difference= document.querySelector('.minus');
difference.addEventListener('click', () => {
    evaluator = evaluator + ' - ';
    running = '0';
    operationZone.textContent = running;
});

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', () => {
    if (!running.includes('.')){
        running = running + '.';
        evaluator = evaluator + '.';
        operationZone.textContent = running;
    }
});

const percentage = document.querySelector('.percent');
percentage.addEventListener('click', () => {
    evaluator = evaluator + ' / 100 * ';
    running = '0';
    operationZone.textContent = running;
})

const signChange = document.querySelector('.sign');
signChange.addEventListener('click', () => {
    alert("It hasn't been implemented yet");
});