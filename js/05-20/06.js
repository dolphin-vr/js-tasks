// Напишіть функцію, яка розвертає масив у зворотньому напрямку.Метод reverse() не використовувати
const arrNumber = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function arrReversed (arr){
   const result = [];
   for (let i = arr.length -1; i >= 0; i--) {
      result.push(arr[i]);
   }
   return result;
}

console.log(arrReversed(arrNumber));