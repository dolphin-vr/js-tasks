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
