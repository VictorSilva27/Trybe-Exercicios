const teste = (escopo) =>  {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}

teste(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
for (let index = 1; index < oddsAndEvens.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (oddsAndEvens[index] < oddsAndEvens[secondIndex]) {
        let position = oddsAndEvens[index];
        oddsAndEvens[index] = oddsAndEvens[secondIndex];
        oddsAndEvens[secondIndex] = position;
      }
    }
  }

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉