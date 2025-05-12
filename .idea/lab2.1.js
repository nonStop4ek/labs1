const readline = require('readline');

const strip = { x1: 1, x2: 3 };
const circle1 = { xc: 2, yc: 2, r: 2 };
const circle2 = { xc: 3, yc: 3, r: 3 };

let prevDistance = null;
let attempt = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("🎯 Спробуйте влучити точкою у фігуру: (стрічка ∪ коло-1) ∩ коло-2");

function askPoint() {
    rl.question(`Спроба #${attempt + 1}. Введіть координати точки (x y): `, (input) => {
        attempt++;
        const [x, y] = input.split(' ').map(Number);

        const inStrip = x >= strip.x1 && x <= strip.x2;
        const inCircle1 = Math.pow(x - circle1.xc, 2) + Math.pow(y - circle1.yc, 2) <= Math.pow(circle1.r, 2);
        const inCircle2 = Math.pow(x - circle2.xc, 2) + Math.pow(y - circle2.yc, 2) <= Math.pow(circle2.r, 2);

        const inUnion = inStrip || inCircle1;
        const inTarget = inUnion && inCircle2;

        if (inTarget) {
            console.log(`🎉 Нарешті ви влучили з ${attempt}-ї спроби!`);
            rl.close();
        } else {
            const distToCenter = Math.sqrt(Math.pow(x - circle2.xc, 2) + Math.pow(y - circle2.yc, 2));
            if (prevDistance === null) {
                console.log("❌ Не влучили. Спробуйте ще.");
            } else if (distToCenter < prevDistance) {
                console.log("🔥 Тепліше!");
            } else {
                console.log("❄️ Холодніше!");
            }
            prevDistance = distToCenter;
            askPoint();
        }
    });
}

askPoint();
