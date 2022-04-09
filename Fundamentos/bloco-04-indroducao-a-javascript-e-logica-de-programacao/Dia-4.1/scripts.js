// Questão 1
console.log("----- Questão 1 -----");

const a = 2;
const b = 6;

// Adição
let somar = a + b;
console.log(somar);

// Subtração
let subtrair = a - b;
console.log(subtrair);

// Multiplicação
let multiplicar = a * b;
console.log(multiplicar);

// Divisão
let dividir = a / b;
console.log(dividir);

// Módulo
let modulo = a % b;
console.log(modulo);


// Questão 2
console.log("----- Questão 2 -----");

const num1 = 102;
const num2 = 103;

if(num1 > num2){
    console.log("Número 1 é maior que o número 2");
}else if(num1 == num2){
    console.log("São iguais");
}
else{
    console.log("Número 2 é maior que o número 1");
}

// Questão 3
console.log("----- Questão 3 -----");

const number1 = 100;
const number2 = 100;
const number3 = 100;

if( number1 > number2 && number1 > number3 ){
    console.log("Número 1 é maior");
}else if( number2 > number1 && number2 > number3 ){
    console.log("Número 2 é maior");
}else if( number3 > number1 && number3 > number2 ){
    console.log("Número 3 é maior");
}else{
    console.log("São números iguais");
}


// Questão 4
console.log("----- Questão 4 -----");

const check = 0;

if (check > 0){
    console.log('positivo');
}else if(check < 0){
    console.log('negativo');
}else{
    console.log('Zero');
}


// Questão 5
console.log("----- Questão 5 -----");

const lado1 = 60;
const lado2 = 40;
const lado3 = 80;

if (lado1 + lado2 + lado3 == 180){
    console.log('Triângulo Válido');
}
else if(lado1 || lado2 || lado3 < 0){
    console.log('Todos os lados tem que ser positivos');
}
else{
    console.log('Falso');
}

// Questão 6
console.log("----- Questão 6 -----");

const xadrez = 'Bispo';

switch(xadrez.toLowerCase()){
    case 'bispo':
        console.log('Diagonais')
        break;

    case 'cavalo':
        console.log('pula duas casas e um vire para algum dos lados')
        break;

    case 'rei':
        console.log('uma casa a sua volta')
        break;

    default:
        console.log('Inválida')

}

// Questão 7
console.log("----- Questão 7 -----");

let notaPorcentagem = -10;

if (notaPorcentagem < 101 && notaPorcentagem > 0) {

    if (notaPorcentagem >= 90) {
        console.log('A');
    }else if (notaPorcentagem >= 80) {
        console.log('B');
    }else if (notaPorcentagem >= 70) {
        console.log('C');
    }else if (notaPorcentagem >= 60) {
        console.log('D');
    }else if (notaPorcentagem >= 50) {
        console.log('E');
    }else if (notaPorcentagem < 50) {
        console.log('F');
    }

} else {
    console.log('Erro nota invalida');
}


// Questão 8
console.log("----- Questão 8 -----");

const var1 = 2;
const var2 = 1;
const var3 = 16;

let result = 0;
if (var1 % 2 !== 1 && var3 % 2 !== 1 && var2 % 2 !== 1 ) {
    result = true;
}else{
    result = false;
}
console.log(result);
