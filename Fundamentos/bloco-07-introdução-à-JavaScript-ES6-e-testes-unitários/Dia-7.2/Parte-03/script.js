const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// Exercicio 01
const addNewKey = (obj, key, value) => obj[key] = value;
console.log(addNewKey(lesson2, 'turno', 'noite'));

// Exercicio 02
const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson1));

// Exercicio 03
const sizeObj = (obj) => Object.keys(obj).length;
console.log(sizeObj(lesson1));

// Exercicio 04
const listValues = (obj) => Object.values(obj);
console.log(listValues(lesson1));

// Exercicio 05
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// Exercicio 06
const getNumberOfStudents = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
        total += obj[array[index]].numeroEstudantes;
    }
    return total;
};
console.log(getNumberOfStudents(allLessons));

// Exercicio 07
const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber);

// Exercicio 08
const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let index in arr) {
      if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
    }
    return isEqual;
  };
  console.log(verifyPair(lesson2,'professor','Carlos'));