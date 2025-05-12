const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs = [];

rl.question('Введіть координати точки (x y) (наприклад: 3 3): ', (pointInput) => {
    inputs.push(pointInput.split(' ').map(Number));
    rl.question('Введіть межі стрічки (y1 y2) (наприклад: 2 4): ', (stripInput) => {
        inputs.push(stripInput.split(' ').map(Number));
        rl.question('Введіть центр кола (xc yc) (наприклад: 2 2): ', (circleCenterInput) => {
            inputs.push(circleCenterInput.split(' ').map(Number));
            rl.question('Введіть радіус кола (наприклад: 2.5): ', (radiusInput) => {
                inputs.push([Number(radiusInput)]);

                // Обробка введених даних
                const [x, y] = inputs[0];
                const [y1, y2] = inputs[1];
                const [xc, yc] = inputs[2];
                const [r] = inputs[3];

                // Перевірка належності стрічці
                const inStrip = y >= y1 && y <= y2;

                // Перевірка належності колу
                const dx = x - xc;
                const dy = y - yc;
                const inCircle = (dx * dx + dy * dy) <= (r * r);

                // Перевірка перетину
                if (inStrip && inCircle) {
                    console.log("✅ Точка належить перетину стрічки і кола.");
                } else {
                    console.log("❌ Точка НЕ належить перетину стрічки і кола.");
                }

                rl.close();
            });
        });
    });
});
