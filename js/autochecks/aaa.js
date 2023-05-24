// const  str = "aaa sss ddd fff ggg zzz";
// console.log(str);
// const res = str.split(" ").splice(1, str.split(" ").length -2).join(" ");
// console.log(res);

console.log(rgb(137,-53,210));

function rgb(r, g, b){
  return toHex(r) + toHex(g) + toHex(b);

  function toHex(n){
    if (n<0){
      n=0;
    } else if (n>255){
      n=255
    }
    return n.toString(16).padStart(2, 0).toUpperCase();
  }
}

// function rgb(r, g, b){
//   return [r,g,b].map(function(x) {
//     return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
//   }).join('').toUpperCase();
// }

// const rgb = (...arg) => arg
//   .map(it => Math.max(Math.min(it, 255), 0)
//     .toString(16)
//     .padStart(2, '0')
//     .toUpperCase()
//    ).join('');

// const rgb = (r, g, b) =>
//   [r, g, b].map(val => Math.max(0, Math.min(255, val)).toString(16).padStart(2, `0`)).join(``).toUpperCase();

// function rgb(r, g, b) {
// 	r = Math.max(0, Math.min(255, r));
// 	g = Math.max(0, Math.min(255, g));
// 	b = Math.max(0, Math.min(255, b));
// 	let color = (r << 16) + (g << 8) + b;
// 	return ('00000' + color.toString(16).toUpperCase()).slice(-6);
// }


//------------------------------------------------------------------------------------------------------------------------------------//
// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.
// const string = 'Welcome to the future';
// const SEPARATOR = '';
// const result = string.split(SEPARATOR).reverse().join(SEPARATOR);
// console.log(result);

const string = 'Welcome, to the - future';
const separators = [',', '-'];
const SEPARATOR = '';
const result = string.split(SEPARATOR);

for (let i = 0; i < result.length; i += 1) {
    if (separators.includes(result[i])) {
        result.splice(i, 1)
    }
}
const arr = result.join(SEPARATOR).replaceAll('  ', ' ').split(' ');

for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i].split(SEPARATOR).reverse().join(SEPARATOR)
    arr[i] = item
}
console.log(arr.join(' '));

// ==============
const user = {
   email: 'aaa@mail.com'
}

console.log(user['email'])



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

const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
 const result = [];
let cicles=0;
for (let i = 0; i < langs.length; i++){
    let el = langs[i]; // c
    let k=0; //2
    for (let j = 0; j < result.length; j++){
        if (el > result[j]){ //  && !result.includes(  langs[j])
            // el = langs[j];
            k=j+1; // - j=0  j=0
        }
        cicles++;
    }
    result.splice(k, 0, el); // js py
}
console.log(langs);
console.log(result);
console.log(cicles);

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


