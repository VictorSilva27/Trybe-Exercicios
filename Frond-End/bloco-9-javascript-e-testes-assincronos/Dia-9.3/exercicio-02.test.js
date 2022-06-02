const { saveFavoriteMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  // implemente sua função aqui
  favoriteCards.splice(4, favoriteCards.length - 4);
}

describe(' Testa a função saveFavoriteMagicCard', () => {
  afterEach(() => {
    retrievesFavoriteCards();
  });

  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(3);

    // implemente seus testes aqui
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards).toHaveLength(5);

    const card = favoriteCards[favoriteCards.length - 1];
    expect(card.name).toBe('Beacon of Immortality');

    await saveFavoriteMagicCard('130554');
    expect(favoriteCards.length).toBe(6);

  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(2);
    expect(favoriteCards).toHaveLength(4);

    // implemente seus testes aqui

    const namesCards = favoriteCards.map((card) => card.name);
    const names = [`Ancestor's Chosen`, 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad'];

    expect(namesCards).toEqual(names);
  });
});
