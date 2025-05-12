const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function leadingDigit(num) {
    return parseInt(Math.abs(num).toString()[0]);
}

function selectionSortIndexes(arr) {
    const indexes = arr.map((_, i) => i);
    for (let i = 0; i < indexes.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < indexes.length; j++) {
            const a = leadingDigit(arr[indexes[j]]);
            const b = leadingDigit(arr[indexes[minIdx]]);
            if (a < b) {
                minIdx = j;
            }
        }
        [indexes[i], indexes[minIdx]] = [indexes[minIdx], indexes[i]];
    }
    return indexes;
}

let arr = [];
let n = null;
let count = 0;

console.log("🔢 Програма впорядковує індекси чисел за старшою цифрою (методом вибору).");
console.log("📝 Спочатку введіть КІЛЬКІСТЬ чисел (наприклад: 5)");
console.log("➡️ Потім введіть КОЖНЕ ціле число з нового рядка, ось приклад:");
console.log("   2413");
console.log("   943");
console.log("   81");
console.log("   234");
console.log("   512");
console.log("🔄 Після кожного числа натискайте Enter");

rl.on('line', (line) => {
    if (n === null) {
        n = parseInt(line.trim());
        if (isNaN(n) || n <= 0) {
            console.log("❗ Помилка: Введіть правильне число елементів.");
            n = null;
            return;
        }
        console.log(`📥 Тепер введіть ${n} цілих чисел по одному з нового рядка:`);
    } else {
        const value = parseInt(line.trim());
        if (isNaN(value)) {
            console.log("❗ Це не ціле число. Спробуйте ще раз:");
            return;
        }
        arr.push(value);
        count++;
        if (count < n) {
            console.log(`✅ Введено: ${count}/${n}. Введіть наступне число:`);
        }
        if (count === n) {
            rl.close();
        }
    }
}).on('close', () => {
    console.log("\n📋 Введена послідовність:", arr.join(' '));

    const sortedIndexes = selectionSortIndexes(arr);
    console.log("📌 Упорядковані індекси за старшою цифрою чисел:");
    console.log(sortedIndexes.join(' '));

    console.log("🔎 Значення у цьому порядку:");
    sortedIndexes.forEach(i => process.stdout.write(arr[i] + " "));
    console.log();
});
