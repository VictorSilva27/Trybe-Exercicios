function maiorNum(primeiroNum, segundoNum) {

  if (primeiroNum > segundoNum) {
  
    return primeiroNum + ' é maior que ' + segundoNum;
  } else if (segundoNum > primeiroNum) {
  
    return segundoNum + ' é maior que ' + primeiroNum;
  } else {
  
    return 'Os números são iguais';
  }
}

console.log(maiorNum(10, 20));
console.log(maiorNum(-29, 29));
console.log(maiorNum(1, 1)); 



