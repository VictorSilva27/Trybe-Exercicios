// Questão 1
console.log('----- 1 -----');

let fatorial = 10;
let result = fatorial;
let numInicial = fatorial - 1;

for (let index = numInicial; index > 0; index -=1 ) {
    result *= index;
}
console.log(result);


// Questão 2
console.log('----- 2 -----');

let word = 'tryber';
let palavraInvertida = '';

for (let index = word.length - 1; index >= 0; index -=1 ) {
    palavraInvertida += word[index];
}
console.log(palavraInvertida);


// Questão 3
console.log('----- 3 -----');

let array = ['java', 'javascript', 'python', 'html', 'css'];


let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {

    if (array[index].length > maiorPalavra.length) {
      maiorPalavra = array[index];
    }
  }
  
  for (let index = 0; index < array.length; index += 1) {

    if (array[index].length < menorPalavra.length) {
      menorPalavra = array[index];
    }
  }
  
  console.log(maiorPalavra);
  console.log(menorPalavra);

// Questão 4
console.log('---- 4 ----');

let numeroPrimo = 0;

for (let num = 0; num <= 50; num += 1) {

  let éPrimo = true;

  for (let divisor = 2; divisor < num; divisor += 1) {
    if (num % divisor === 0) {
      éPrimo = false;
    }
  }
  if (éPrimo) {
    numeroPrimo = num;
  }
}

console.log(numeroPrimo);