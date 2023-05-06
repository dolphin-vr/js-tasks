 //  Використовуючи if...else напиши код, який буде запитувати у користувача "Яка офіційна назва JavaScript?".
//    Якщо користувач вводить "ECMAScript", то показати за допомогою alert("Вірно!")
//    У інших випадках показати "Не знаєте? ECMAScript!"

const str = prompt("Яка офіційна назва JavaScript");
if (!str) {
  alert("Де відповідь?");
} else if (str.toLowerCase() === "ECMAScript".toLowerCase()){
  alert("Вірно!");
} else {
  alert("Не знаєте? ECMAScript!");
}