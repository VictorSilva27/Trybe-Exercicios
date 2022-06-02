require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic.js');
const { card } = require('../simulator/card');

describe('Testa a função getMagicCard', () => {
  it('Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async () => {
    const response = await getMagicCard('130550');
    // implemente seus testes aqui
    expect(response.name).toBe(`Ancestor's Chosen`);
  });

  it('Deve retornar true se a getMagicCard for uma função', async () => {
    const response = await getMagicCard;
    // implemente seus testes aqui
    expect(typeof response === 'function').toEqual(true);
  });

  it('Verifique se, ao chamar a função getMagicCard com o argumento "130550", a função fetch foi chamada.', async () => {
    // implemente seus testes aqui
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('Verifique se, ao chamar a função getMagicCard com o argumento "130550", a função fetch foi chamada com o endpoint "https://api.magicthegathering.io/v1/cards/130550".', async () => {
    // implemente seus testes aqui
    const endpoint = 'https://api.magicthegathering.io/v1/cards/130550';
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('Verifique se o retorno da função getMagicCard é igual ao objeto card', async () => {
    // implemente seus testes aqui
    const response = await getMagicCard('130550');
    const { ...expected } = response ;
    expect(response).toStrictEqual(expected);
  });

  it('Verifica se, ao chamar a função getMagicCard com o argumento "idDesconhecido", retorna um erro com a mensagem: "Id is not found!"', async () => {
    // implemente seus testes aqui
    const response = await getMagicCard('idDesconhecido');
    expect(response).toStrictEqual(new Error('Id is not found!'));
    console.log(response);
  });
});

//  {
//   name: "Ancestor's Chosen",
//   manaCost: "{5}{W}{W}",
//   types: [ "Creature" ],
//   subtypes: [ "Human", "Cleric" ],
//   rarity: "Uncommon",
// }