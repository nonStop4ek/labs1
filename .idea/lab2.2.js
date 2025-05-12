const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Вводьте цілі числа через пробіл (наприклад: 45 -891 82 23 944 100).");
rl.question("Введіть послідовність чисел: ", (input) => {
    const tokens = input.split(' ').map(Number);

    let max = -Infinity;
    let secondMax = -Infinity;

    for (let num of tokens) {
        const firstDigit = parseInt(Math.abs(num).toString()[0]);

        if (firstDigit !== 9) {
            if (num > max) {
                secondMax = max;
                max = num;
            } else if (num > secondMax && num !== max) {
                secondMax = num;
            }
        }
    }

    if (secondMax === -Infinity) {
        console.log("❗ Немає достатньо чисел, що відповідають критерію.");
    } else {
        console.log("✅ Друге за величиною число зі старшою цифрою не 9:", secondMax);
    }

    rl.close();
});
