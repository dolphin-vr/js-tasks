// Напишіть функцію, яка очистить масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null
// Результат, що очікується[0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

function cleanArray (arr){
   const result = [];
   for (const el of arr) {
      if(el){
         result.push(el);
      }
   }
   return result;
}

console.log(cleanArray([0, 1, false, 2, undefined, '', 3, null]));