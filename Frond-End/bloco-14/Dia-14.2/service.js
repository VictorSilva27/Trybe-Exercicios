const retornaNumeroAleatorio = () => Math.floor(Math.random() * 101);
const stringUp = (stg) => stg.toUpperCase();
const firstString = (stg) => stg[0];
const stringConcatena = (str, strg) => str + strg;

fetchDog = async () => {
    const URL_DOG = 'https://dog.ceo/api/breeds/image/random';
    const promise =  await fetch(URL_DOG);
    const response = await promise.json();
    return response;
    // return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    //   response
    //     .json()
    //     .then(json =>
    //       response.ok ? Promise.resolve(json) : Promise.reject(json)
    //     )
    // );
  }
  module.exports = { fetchDog };

module.exports = { retornaNumeroAleatorio, stringUp, firstString, stringConcatena, fetchDog };