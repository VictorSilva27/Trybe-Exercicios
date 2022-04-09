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

let notaPorcentagem = 10;

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

const var1 = 29;
const var2 = 10;
const var3 = 17;

let numeroPar = 0;
if (var1 % 2 !== 1 || var3 % 2 !== 1 || var2 % 2 !== 1 ) {

    numeroPar = true;
}else{
    
    numeroPar = false;
}
console.log(numeroPar);


// Quetão 9
console.log('---- Questão 9 ----');

const val1 = 7;
const val2 = 10;
const val3 = 16;

let numeroImpar = 0;
if (val1 % 2 !== 0 || val3 % 2 !== 0 || val2 % 2 !== 0 ) {

    numeroImpar = true;
}else{

    numeroImpar = false;
}
console.log(numeroImpar);


// Questão 10
console.log('---- Questão 10 ----');

const custoProduto = 10;
const custoVenda = 450;

if (custoProduto >= 0 && custoVenda >= 0) {
    
    const custoTotalProduto = custoProduto * 1.2;
    const totalCusto = (custoVenda - custoTotalProduto) * 1000; 

    console.log(totalCusto);
} else {
    console.log('Erro valores negativos.');
}


// Questão 11
console.log('---- Questão 11 ----');



let INSS;
let IR;

const salarioBruto = 2000.00;

if (salarioBruto <= 1556.94) {
    INSS = salarioBruto * 0.08;

} else if (salarioBruto <= 2594.92) {

    INSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {

    INSS = salarioBruto * 0.11;
} else {

    INSS = 570.88;
}

const salarioBase = salarioBruto - INSS;

if (salarioBase <= 1903.98) {

  IR = 0;
} else if (salarioBase <= 2826.65) {

  IR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {

  IR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {

  IR = (salarioBase * 0.225) - 636.13;
} else {

  IR = (salarioBase * 0.275) - 869.36;
};

console.log("Salário: " + (salarioBase - IR));