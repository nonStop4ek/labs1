// Початкові координати центра та радіус кола
let circle = {
    x: 3,
    y: 4,
    r: 5
};

console.log("Початкове коло:");
console.log("Центр: (" + circle.x + ", " + circle.y + "), Радіус: " + circle.r);

// Симетрія відносно осі абсцис (Ox): змінюємо знак y
let reflectedCircle = {
    x: circle.x,
    y: -circle.y,
    r: circle.r
};

console.log("Симетричне коло відносно осі абсцис:");
console.log("Центр: (" + reflectedCircle.x + ", " + reflectedCircle.y + "), Радіус: " + reflectedCircle.r);
