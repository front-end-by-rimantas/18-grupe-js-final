const people = [
    {
        name: 'Antanas',
        age: 87,
        eyeColor: 'blue'
    },
    {
        name: 'Birute',
        age: 45,
        eyeColor: 'green'
    },
    {
        name: 'Cinamonas',
        age: 2,
        eyeColor: 'brown'
    },
    {
        name: 'Donatas',
        age: 33,
        eyeColor: 'blue'
    },
    {
        name: 'Egle',
        age: 38,
        eyeColor: 'green'
    },
]

// ES6+ : foreach, map, filter, sort, reduce


// FOREACH
people.forEach((person, i) => {
    console.log(i);
    console.log(person);
});

console.clear();


// MAP
const updatedMapPeople = people.map((person, index) => {
    console.log(index);
    person.luckyNumber = Math.floor(Math.random() * 100);
    return person;
})

console.log(people);
console.log(updatedMapPeople);

// duota sarara skaiciu konvertuoti i tik teigiamus sveikus skaicius
const array1 = [1.58, -4.48, 9, 16.4];

const map1 = array1.map(x => x < 0 ? 0 : Math.floor(x));

console.log(array1);
console.log(map1);

console.clear();


// FILTER
const noBrownEyes = people.filter((person, index) => {
    console.log(index);
    return person.eyeColor !== 'brown' && person.age > 35;
});

console.log(noBrownEyes);

console.clear();

// SORT
const texts = ['fg', 'rt', 'bg', 'ac', 'ru', 'ed'];
const textMinMax = texts.sort();

console.log(textMinMax);

const numbers = [7, 5, -7, 88, 2, 45, 35, -91, -14];
const numMinMax = [...numbers].sort((a, b) => a - b);
const numMaxMin = [...numbers].sort((a, b) => b - a);

console.log(numMinMax);
console.log(numMaxMin);

// ... SPREAD OPERATOR
const numbersCopy = [...numbers];
// const numbersCopy = numbers;
numbers[0] = 'ewaresg';
console.log(numbers);
console.log(numbersCopy);

console.clear();

const suo = {
    veisle: 'Lietuvos lenciuginis',
    spalva: 'ruda',
    vardas: 'Rexius'
}

const suo2 = { ...suo, vardas: 'Murzius', lytis: true };

suo.spalva = 'margas';

console.log(suo);
console.log(suo2);

console.clear();

function sum(...a) {
    let suma = 0;
    for (let num of a) {
        suma += num;
    }
    return suma;
}

const numbersToSum = [4, 7, 8, 12, 46, -156, -87, 545];

console.log(sum(...numbersToSum));
console.log(sum(4, 7));
console.log(sum(4));

// REDUCE
const reduceSum = numbersToSum.reduce((total, num) => total + num, 0);
console.log(reduceSum);

const peopleAgeSum = people.reduce((total, person) => total + person.age, 0);
console.log(peopleAgeSum);

const reduceTexts = texts.reduce((sentence, word) => {
    if (sentence === '') {
        return sentence + word;
    }
    return sentence + ', ' + word
}, '');
console.log(reduceTexts);