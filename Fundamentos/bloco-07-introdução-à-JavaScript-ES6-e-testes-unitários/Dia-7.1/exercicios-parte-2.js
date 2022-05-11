// Exercicio 01
const fatorial = num => num > 1 ? num * fatorial(num - 1) : 1;

console.log(fatorial(5));

// Exercicio 02-
const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

// Exercicio 03 está no arquivo index.html

// Exercicio 04

const array = ["JavaScript", "HTML", "CSS", "NodeJS", "React"];
function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
        `Tryber ${paramInner} aqui!
        
        Tudo bem?`
        );
        
    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill) =>
    result = `${result}

    - ${skill}`);

    result = `
${result}

    #VQV
    `;

    return result;
}

console.log(buildSkillsPhrase("Victor"));