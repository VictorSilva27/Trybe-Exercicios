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