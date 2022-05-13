const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  const isEven = (number) => {
    if (number % 2 === 0) {
      console.log(number, 'é par');
    }
  };
  
  const isOdd = (number) => {
    if ((number % 2) > 0) {
      console.log(number, 'é ímpar');
    }
  };
  
  repeat(6, isEven); // Testa quais números serão pares;
  repeat(6, isOdd); // Testa quais números serão ímpares;

const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(numberGenerator());