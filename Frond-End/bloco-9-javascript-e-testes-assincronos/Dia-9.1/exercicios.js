const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}
const celsius = getMarsTemperature();

const toFahrenheit = (degreeCelsius) => Math.floor((degreeCelsius * 9 / 5) + 32);
const fahrenheit = toFahrenheit(celsius);

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
sendMarsTemperature = (callback, error) => {
  const gettemperature = getMarsTemperature();
  const res = Math.random() <= 0.6;
  setTimeout(() => {
    if (messageSuccessfullySent) callback(getTemperature)
    else error('Robot is busy');
  }, messageDelay());
}
// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);