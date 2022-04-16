let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Bônus
// 1
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] < numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}
console.log(numbers);

// 2
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] > numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}
console.log(numbers);

// 3
let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < number.length; index += 1) {

  if (index + 1 < number.length) {

    newArray.push(number[index] * number[index + 1]);
  } else {
      
    newArray.push(number[index] * 2);
  }
}

console.log(newArray);