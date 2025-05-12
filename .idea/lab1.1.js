let A = 1;
let B = 2;
let C = 3;
let D = 4;
let E = 5;

console.log("Початкові значення:");
console.log("A =", A, "B =", B, "C =", C, "D =", D, "E =", E);

// Збереження старих значень
let tempA = A;
let tempB = B;
let tempC = C;
let tempD = D;
let tempE = E;

// Перестановка згідно варіанту CADEB
A = tempC;
B = tempA;
C = tempD;
D = tempE;
E = tempB;

console.log("Після перестановки (варіант CADEB):");
console.log("A =", A, "B =", B, "C =", C, "D =", D, "E =", E);
