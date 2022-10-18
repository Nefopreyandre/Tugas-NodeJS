
let rs = require('readline-sync');

const getOperator = () => {
    operator = rs.question("What operation would you like to perform? ");

    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
    } else {
        console.log("Ini bukan operasi yang valid.");
        getOperator();
    }
}

const getNum = (type) => {
    let someNum = rs.question(`Silakan masukkan ${type} angka: `);
    if (!isNaN(someNum)) {
        return someNum;
    } else {
        console.log("Harap masukkan nomor yang valid.");
        return getNum(type);
    }
}

const calc = () => {
    if (operator === '+') {
        let sum = num1 + num2;
        return sum;
    } else if (operator === '-') {
        let diff = num1 - num2;
        return diff;
    } else if (operator === '*') {
        let product = num1 * num2;
        return product;
    } else if (operator = '/') {
        if (num2 === 0) {
            console.log("Tidak bisa dibagi dengan nol.");
            getOperator();
        } else {
            let quotient = num1 / num2;
            return quotient.toFixed(2);
        }
    }
}
getOperator();
num1 = Number(getNum('first'));
num2 = Number(getNum('second'));
console.log(calc());