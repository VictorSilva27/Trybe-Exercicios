// Exercicio 03
// const getPlanet = () => {
//     const mars = {
//         name: "Mars",
//         distanceFromSun: {
//             value: 227900000,
//             measurementUnit: "kilometers",
//         },
//     };
//     console.log("Returned planet: ", mars);
// };
// setTimeout(() => getPlanet(), 4000); // imprime Marte depois de 4 segundos

// Exercicio 04
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//     const maxTemperature = 58;
//     return Math.floor(Math.random() * maxTemperature);
// };
// // crie a função sendMarsTemperature abaixo
// const sendMarsTemperature = (callback) => {
//     console.log(`Mars temperature is ${callback} degreee Celsius`);
// }

// setTimeout(() => {
//     sendMarsTemperature(getMarsTemperature()); // imprime "Mars temperature is: 20 degree Celsius", por exemplo 
// }, messageDelay());

// Exercicio 05
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};
const celsius = getMarsTemperature();

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;
const fahrenheit = toFahrenheit(celsius);

const temperatureInFahrenheit = (temperature) =>
    console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
    console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...
sendMarsTemperature = (callback) => {
    if (callback === greet) {
        return callback(celsius);
    }
    return callback(fahrenheit);
}

sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo