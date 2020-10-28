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


})();