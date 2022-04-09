let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Quetão 1
console.log('---- Questão 1 ----');

for (let index = 0; index < numbers.length; index+=1) {
    console.log(numbers[index]);    
}


// Questão 2
console.log('---- Questão 2 ----');

let sum = 0;
for (let index = 0; index < numbers.length; index+=1) {
    sum += numbers[index];  
}
console.log(sum);

// Questão 3
console.log('---- Questão 3 ----');

let media = sum / numbers.length;
console.log(media);


// Questão 4
console.log('---- Questão 4 ----');

if (media > 20) {
    console.log("Valor maior que 20");    
}else{
    console.log("Valor menor ou igual a 20");
}

// Questão 5
console.log('---- Questão 5 ----');

let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        
        maiorNumero = numbers[index];
        
    }
}
console.log('Maior numero é ' + maiorNumero);


// Questão 6
console.log('---- Questão 6 ----');

let numeroImpar = 0;
for (let index = 0; index < numbers.length; index += 1) {

    numeroImpar = numbers[index] % 2;
    if (numeroImpar !== 0) {     
        console.log('Numero impar ' + numbers[index]);
    }
}

// Questão 7
console.log('---- Questão 7 ----');
let menorNumero = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumero) {
        
        menorNumero = numbers[index];
        
    }
}
console.log('Menor numero é ' + menorNumero);


// Questão 8
console.log('---- Questão 8 ----');

let numeros = [];

for (let index = 0; index < 25; index++) {
   numeros.push(index)    
}
console.log(numeros);


// Questão 9
console.log('---- Questão 9 ----');

let numerosDividos = 0;

for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index] / 2);
}
