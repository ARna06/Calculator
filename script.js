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

let number = '0';
operationZone.textContent = number;

zero.addEventListener('click', (e) => {
    if (number[0] == '0') {
        number = number.slice(1);
    }
    if (number.length > 9) {
        number = number;
    }else { number = number + '0';}
    operationZone.textContent = number;
});
one.addEventListener('click', (e) => {
    if (number[0] == '0') {
        number = number.slice(1);
    }
    if (number.length > 9) {
        number = number;
    } else {number = number + '1';}
    operationZone.textContent = number;
});
two.addEventListener('click', (e) => {
    if (number[0] == '0') {
        number = number.slice(1);
    }
    if (number.length > 9) {
        number = number;
    } else{number = number + '2';};

    operationZone.textContent = number;
});
three.addEventListener('click', (e) => {
    if (number[0] == '0') {
        number = number.slice(1);
    }
    if (number.length > 9) {
        number = number;
    }else{number = number + '3';}
    
    operationZone.textContent = number;
});
four.addEventListener('click', (e) => {
    if (number[0] == '0') {
        number = number.slice(1);
    }
    if (number.length > 9) {
        number = number;
    }else{number = number + '4';}
    
    operationZone.textContent = number;
});
five.addEventListener('click', (e) => {
    if (number[0] == '0') {
        number = number.slice(1);
    }
    if (number.length > 9) {
        number = number;
    }else{number = number + '5';}
    
    operationZone.textContent = number;
});
six.addEventListener('click', (e) => {
    if (number[0] == '0') {
        number = number.slice(1);
    }
    if (number.length > 9) {
        number = number;
    }else{number = number + '6';}
    
    operationZone.textContent = number;
});
seven.addEventListener('click', (e) => {
    if (number[0] == '0') {
        number = number.slice(1);
    }
    if (number.length > 9) {
        number = number;
    }else{number = number + '7';}
    
    operationZone.textContent = number;
});
eight.addEventListener('click', (e) => {
    if (number[0] == '0') {
        number = number.slice(1);
    }
    if (number.length > 9) {
        number = number;
    }else{number = number + '8';}
    
    operationZone.textContent = number;
});
nine.addEventListener('click', (e) => {
    if (number[0] == '0') {
        number = number.slice(1);
    }
    if (number.length > 9) {
        number = number;
    }else{number = number + '9';}
    
    operationZone.textContent = number;
});

const clear = document.querySelector('.clear');
clear.addEventListener('click' , (e) => {
    number = '0';
    operationZone.textContent = number;
})

let number1 = '0';
let number2 = '0';
result = '0';

const product = document.querySelector('.multiplication');
product.addEventListener('click', () => {
    number1 = number;
    number = '0';
    operationZone.textContent = number;
    number2 = number1;
    number = '0';
    result = (Number(number1)*Number(number2)).toString();
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', (e) =>{
    operationZone.textContent = result;
});