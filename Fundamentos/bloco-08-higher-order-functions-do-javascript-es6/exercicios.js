const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:

const formatoBook = () => books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)

console.log(formatoBook(books));

const nameAndAge = () => books.map((book) => ({
        nome: book.author.name,
        idade: book.releaseYear - book.author.birthYear
    }))
    // Linha 75, realizada com o gabarito da Trybe
    .sort((obj1, obj2) => obj1.idade - obj2.idade);

console.log(nameAndAge(books));


const fantasiaAndFicção = () => books.filter( (book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

console.log(fantasiaAndFicção(books));

const maior60 = () => {
// Linha 86, realizada pelo gabarito e ajuda da documentação  
    const nowHour = new Date().getFullYear();
    return books.filter((book) => (
      book.releaseYear < nowHour - 60
    )).sort((A, B) => A.releaseYear - B.releaseYear);
}

console.log(maior60(books));

function fantasyOrScienceFictionAuthors() {
    const wantedGenres = ['Fantasia', 'Ficção Científica'];
    return books
        .filter((book) => wantedGenres.includes(book.genre))
        .map((book) => book.author.name).sort();
}
console.log(fantasyOrScienceFictionAuthors(books));