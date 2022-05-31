// Exercicio 03
const getPlanet = () => {
    const mars = {
        name: "Mars",
        distanceFromSun: {
            value: 227900000,
            measurementUnit: "kilometers",
        },
    };
    console.log("Returned planet: ", mars);
};
setTimeout(() => getPlanet(), 4000); // imprime Marte depois de 4 segundos

// Exercicio 04
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};
// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback) => {
    console.log(`Mars temperature is ${callback} degreee Celsius`);
}

setTimeout(() => {
    sendMarsTemperature(getMarsTemperature()); // imprime "Mars temperature is: 20 degree Celsius", por exemplo 
}, messageDelay());