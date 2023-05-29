//------------------------------------------------------------------------------------------------------------------------------------//
// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.
// const string = 'Welcome to the future';
// const SEPARATOR = '';
// const result = string.split(SEPARATOR).reverse().join(SEPARATOR);
// console.log(result);

// const string = 'Welcome, to the - future';
// const separators = [',', '-'];
// const SEPARATOR = '';
// const reslt = string.split(SEPARATOR);

// for (let i = 0; i < reslt.length; i += 1) {
//     if (separators.includes(reslt[i])) {
//         reslt.splice(i, 1)
//     }
// }
// const arr = reslt.join(SEPARATOR).replaceAll('  ', ' ').split(' ');

// for (let i = 0; i < arr.length; i += 1) {
//     const item = arr[i].split(SEPARATOR).reverse().join(SEPARATOR)
//     arr[i] = item
// }
// console.log(arr.join(' '));

// // ==============
// const user = {
//    email: 'aaa@mail.com'
// }

// console.log(user['email'])


//------------------------------------------------------------------------------------------------------------------------------------//
// // Example 7 - Сортування масиву із циклом
// // Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.
//  const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby', 'pascal', 'java', 'cobol', 'basic', 'fortran', 'ada', 'lisp'];
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
//  const result = [];
// let cicles=0;
// for (let i = 0; i < langs.length; i++){
//     while (!result.includes( langs[i])){
//         let el = langs[i];
//         for (let j = i + 1; j < langs.length; j++){
//             if (el > langs[j] && !result.includes(  langs[j])){
//                 el = langs[j];
//             }
//             cicles++;
//         }
//         result.push(el);
//     };
// }
// console.log(langs);
// console.log(result);
// console.log(cicles);

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
//  const result = [];
// let cicles=0;
// for (let i = 0; i < langs.length; i++){
//     let el = langs[i]; // c
//     let k=0; //2
//     for (let j = 0; j < result.length; j++){
//         if (el > result[j]){ //  && !result.includes(  langs[j])
//             // el = langs[j];
//             k=j+1; // - j=0  j=0
//         }
//         cicles++;
//     }
//     result.splice(k, 0, el); // js py
// }
// console.log(langs);
// console.log(result);
// console.log(cicles);

//  const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby', 'pascal', 'java', 'cobol', 'basic', 'fortran', 'ada', 'lisp'];

// console.log(langs);
// let flag;
// let cicles=0;
// do{
//     flag = false;

//     for (let i=0; i<langs.length; i++){

//         if (langs[i]>langs[i+1]){
//             const el=langs[i];
//             langs[i]=langs[i+1];
//             langs[i+1]=el;
//             flag=true;
//         }
//             cicles++;

//     }
// } while (flag);
// console.log(langs);
// console.log(cicles);


// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
//  const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby', 'pascal', 'java', 'cobol', 'basic', 'fortran', 'ada', 'lisp'];
// const result = [];
// for (let i = 0; i < langs.length; i += 1) {
//   let max = langs[i];
//   if (result.includes(max)) {
//     continue;
//   }
//     for (let j = i; j < langs.length; j += 1) {
//         if (max > langs[j] && !result.includes(langs[j])) {
//           max = langs[j];
//           langs.push(langs[i]);
//       }
//   }
//   result.push(max);
// }
// console.log(langs);
// console.log(result);


// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// const result = [];

// console.log('start', langs);

// for (let i = 0; i < langs.length; i += 1){
//     let max = langs[i];
//     for (let j = 0; j < langs.length; j += 1){
//         if (max > langs[j] && !result.includes(langs[j])) {
//             max = langs[j];
//             i = -1;
//         }    
//     }
//     if (!result.includes(max)) {
//         result.push(max);
//     }
// }
// console.log('start', langs);
// console.log('result', result);

// const exm = [...langs].sort((a, b) => a.localeCompare(b))
// console.log('example', exm);

// for (let i = 0; i < langs.length; i += 1) {
//     let max = langs[i];
//     for (let j = i; j < langs.length; j += 1) {
//         if (max > langs[j] && !result.includes(langs[j])) {
//             max = langs[j];
//         }
//     }
//     result.push(max)
// }
// console.log(result);


//------------------------------------------------------------------------------------------------------------------------------------//
// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (const number of numbers) {
//     if (min > number) {
//         min = number;
//     }
// }


// console.log(min); // 1


//------------------------------------------------------------------------------------------------------------------------------------//
//     Module 2 p2 Lesson 4
//
//     Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
//     Напишіть функції для роботи з колекцією навчальних курсів courses:

//     addCourse(name) - додає курс до кінця колекції
//     removeCourse(name) - видаляє курс із колекції
//     updateCourse(oldName, newName) - змінює ім'я на нове
//     const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

//     addCourse('Express');
//     console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
//     addCourse('CSS'); // 'Ви вже маєте такий курс'

//     removeCourse('React');
//     console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
//     removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'

//     updateCourse('Express', 'NestJS');
//     console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']


//------------------------------------------------------------------------------------------------------------------------------------//
//     Module 3 p2 Lesson 6
//
//     Створити функцію яка буде рахувати за скільки днів равлик зможе виповзти з колодязя, функція приймає 1 параметр.
//     1 глибина колодязя (depth)

//     Функція повертає кількість днів

//     Умови:
//     вдень Равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз
//     використовувати цикл while()

function calcDays(depth) {
    // return Math.ceil((depth - 7)/5 +1)

    let path = 0;
    let day = 0;
    while (1){
        path +=7;
        day++;
        if (path >= depth){
            break
        }
        path -= 2;
    }
    return day

}
// console.log(calcDays(42), "//виповзе за 8 днів");
// console.log(calcDays(17), "//виповзе за 3 дні");
// console.log(calcDays(18), "//виповзе за 4 дні");
// console.log(calcDays(7), "//виповзе за 1 день");


// ---------------------------------------------------------------------//
// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпадають видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)
// 1 - 15. 2 - 21. 3 - 3. 4 - 1
const products = [{
    id: 'sku1',
    qty: 1,
}, {
    id: 'sku2',
    qty: 2,
}, {
    id: 'sku3',
    qty: 3,
}, {
    id: 'sku1',
    qty: 6,
}, {
    id: 'sku1',
    qty: 8,
}, {
    id: 'sku2',
    qty: 19,
}, {
    id: 'sku4',
    qty: 1,
}]

function summingItem(arr){
    for (let i = 0; i < arr.length-1; i++) {
        let {id, qty} = arr[i];
        for (let j = i+1; j < arr.length; j++) {
            const {id: idJ, qty: qtyJ} = arr[j];
            if (id === idJ){
                qty += qtyJ;
                arr.splice(j, 1);
                j--;
            }
        }
        if (qty > arr[i].qty){
            arr.splice(i, 1, {id, qty});
        }
    }
}

function printArr (arr){
    for (const el of arr) {
        const {id, qty} = el;
        console.log(`id = ${id}  qty = ${qty}`)
    }
}

summingItem(products);
console.table(products);
