"use strict";

(function () {

    const number = 777;
    const name = 'Vardenis';
    const tiesa = true;
    const melas = true;
    const x = 7;
    const skaiciai = [1, 5, number, x];
    const person = {
        name: name,
        age: 99,
        'megstama spalva': 'zalia',
        5: 'penki',
        77: 77,
    }

    const extra = number + x;
    console.log(extra);

    console.log(skaiciai);
    console.log(person);

    console.log(skaiciai[2]);
    console.log(person.megstamaSpalva);
    console.log(person['megstama spalva']);
    console.log(person['5']);
    console.log(person['77']);


    console.clear();


    /*
    IF
    naudotini: >, <, >=, <=, ===, !==
    nenaudotini: ==, !=
    */

    const spalva = 'zalia';
    if (spalva === 'zalia') {
        console.log('taip');
    } else {
        console.log('ne');
    }

    const luckyNumber = '7';

    if (luckyNumber === 5) {
        console.log('you win');
    } else {
        if (luckyNumber === 6) {
            console.log('you win');
        } else {
            if (luckyNumber === 7) {
                console.log('you win');
            } else {
                console.log('you lose');
            }
        }
    }

    if (luckyNumber === 5) {
        console.log('laimejo: 5');
    } else if (luckyNumber === 6) {
        console.log('laimejo: 6');
    } else if (luckyNumber === 7) {
        console.log('laimejo: 7');
    } else if (luckyNumber === 8) {
        console.log('laimejo: 8');
    } else if (luckyNumber === 9) {
        console.log('laimejo: 9');
    } else if (luckyNumber === 10) {
        console.log('laimejo: 10');
    } else {
        console.log('neaisku kas laimejo');
    }

    const temp = -10;                // -5
    const krituliai = true;        // true
    const sauleta = true;
    const vejoGreitis = 4;

    // ((tv & kv) | (tz & kz)) & s & v

    if (((temp >= 20 && !krituliai) ||
        (temp <= -5 && krituliai)) &&
        sauleta &&
        vejoGreitis <= 5) {
        console.log('Oras yra fainas 😁✔');
    } else {
        console.log('Oras yra ne kazka... 👀');
    }


    const tern = 4 > 2 ? true : false;
    console.log(tern);


    const objType = typeof {};
    console.log(objType);

    class Car { }
    const raudonaTacka = new Car();
    const carType = typeof raudonaTacka;
    class Dog { }
    const rex = new Dog();
    const rexType = typeof rex;
    console.log(carType);
    console.log(rexType);

    const carInstanceCar = raudonaTacka instanceof Car;
    const carInstanceDog = raudonaTacka instanceof Dog;

    console.log(carInstanceCar);
    console.log(carInstanceDog);

    console.clear();

    const pirmasDesimtainis = 13;
    const antrasDesimtainis = 94;

    const pirmasDvejetainis = (pirmasDesimtainis).toString(2);
    const antrasDvejetainis = (antrasDesimtainis).toString(2);

    console.log(pirmasDesimtainis, pirmasDvejetainis);
    console.log(antrasDesimtainis, antrasDvejetainis);

    // 0001101
    // 1011110
    // ------- &
    // 0001100

    const skaiciuAND = pirmasDesimtainis & antrasDesimtainis;
    console.log(skaiciuAND);
    console.log(parseInt(1100, 2));
    console.log(skaiciuAND.toString(2));


    // 0001101
    // 1011110
    // ------- |
    // 1011111

    const skaiciuOR = pirmasDesimtainis | antrasDesimtainis;
    console.log(skaiciuOR);
    console.log(parseInt(1011111, 2));
    console.log(skaiciuOR.toString(2));


    // 0001101
    // 1011110
    // ------- ^
    // 1010011

    const skaiciuXOR = pirmasDesimtainis ^ antrasDesimtainis;
    console.log(skaiciuXOR);
    console.log(parseInt(1010011, 2));
    console.log(skaiciuXOR.toString(2));

    console.clear();

    const day = 'ant';

    switch (day) {
        case 'pir':
            console.log('pirmadienis');
            break;
        case 'ant':
            console.log('antradienis');
            break;
        case 'tre':
            console.log('treciadienis');
            break;

        default:
            console.log('kita diena??..');
            break;
    }

    console.clear();

    // ternary

    const ats = 5 ? '' ? 7 : 8 : true ? 13 : false;

    console.log(ats);

    console.clear();


    const pajamas = [100, 200, 50, 0, 40, 15, 314];
    const size = pajamas.length;

    function arTesti(iterator, sum) {
        if (iterator >= size) {
            return false;
        }
        if (sum < 50) {
            return false;
        }

        return true;
    }

    let i = 0;
    let suma = Infinity;

    for (; arTesti(i, suma);) {
        suma = pajamas[i];
        console.log(suma);

        i++;
    }

    console.log(i);

    console.log('-----------');

    const abc = 'qwertyuiopasdfghjklzxcvbnm';

    const isPriekio = 1;
    const isGalo = 2;
    let p = 0;
    let g = abc.length - 1;

    for (; p < g;) {

        console.log(abc[p], abc[g]);

        p += isPriekio;
        g -= isGalo;
    }


    console.log('----------------');

    const matrix = [
        [1, 2, 3, 4],
        [11, 22, 33, 44],
        [111, 222, 333, 444],
        [1111, 2222, 3333, 4444],
    ];

    const mSize = matrix.length;

    for (let e = 0, s = mSize - 1;
        e < mSize && s >= 0;
        e++, s--) {
        console.log(matrix[e][s]);
    }

    console.log('------------');

    // FOR IN - dirba su array index
    for (let x in pajamas) {
        const suma = pajamas[x];
        console.log(x, suma);
    }

    console.log('------------');

    // FOR OF - dirba su array įrašu
    for (let x of pajamas) {
        console.log(x);
    }

    console.log('------------');

    // WHILE
    let randomSuma = 0;
    const target = 10;
    let randomCounter = 0;

    while (randomSuma < target) {
        randomSuma += Math.random();
        randomCounter++;
        console.log(randomSuma);
    }


    // for (let i = 0; i < 1; i++) {
    //     randomSuma += Math.random();
    //     console.log(randomSuma);
    //     randomCounter++;

    //     if (randomSuma < target) {
    //         i--;
    //     }
    // }

    console.log(randomCounter);


    console.log('---------');

    // DO-WHILE
    let dwTarget = 10;
    let dwSuma = 1000;

    do {
        dwSuma++;
        console.log(dwSuma);
    } while (dwSuma < dwTarget);

    // ES6+ : foreach, map, filter, sort, reduce

})();