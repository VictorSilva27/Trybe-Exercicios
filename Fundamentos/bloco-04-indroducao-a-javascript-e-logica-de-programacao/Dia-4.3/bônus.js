// Bônus do 1 ao 6

let n = 7;
let meio = 4;
let esquerda = meio;
let direita = meio;
let simbolo = '*';

for (let linha = 1; linha <= meio; linha += 1) {
    let imprimeLinha = '';

    for (let col = 1; col <= n; col += 1) {

        if (col == esquerda || col == direita || linha == meio) {
            imprimeLinha += simbolo;
        } else {
            imprimeLinha += ' ';
        }
    }
    esquerda -= 1;
    direita += 1;
    console.log(imprimeLinha);
}

// 2

let divisors = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');