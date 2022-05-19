// const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5


// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Apple', 'Watermelon']; const additionalItens = ['Macarrão', 'Linguiça', 'Arroz'];

const fruitSalad = (fruit, additional) => {
    // Esreva sua função aqui
    return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

