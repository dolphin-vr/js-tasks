// Напиши код, який буде запитувати логін за допомогою prompt та логувати результат у консоль браузера.
// Якщо користувач вводить "Адмін", то prompt запитує пароль.Якщо нічого не введено або натиснута клавіша Esc,
//     вивести рядок "Відмінено"
//     У іншому випадку вивести рядок "Я вас не знаю!"

// Пароль перевіряти так:
// якщо введено пароль "Я головний", то вивести "Вітаю!",
//     у іншому випадку виводити рядок "Невірний пароль!".

const login = "Адмін";
const passwd = "Я головний";
const userLogin = prompt ("Enter login");
if (userLogin === "" || userLogin == null){
   console.log("Відмінено");
} else if (userLogin === login){
   const userPaswd = prompt("Enter password");
   if (userPaswd === passwd){
      console.log("Вітаю!");
   } else{
      console.log("Невірний пароль!");
   }
} else {
   console.log("Я вас не знаю!");
}