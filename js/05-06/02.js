//  Напишіть програму, яка отримає від користувача число(кількість хвилин)
// і виведе у консоль рядок у форматі годин та хвилин

const minutes = +prompt("Enter minutes");
const hh = String(Math.trunc(minutes / 60)).padStart(2,0);
const mm = String(minutes % 60).padStart(2, 0);
console.log (`${hh}:${mm}`);