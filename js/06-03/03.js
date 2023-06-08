// Потрібно виконати рефакторинг коду так, щоб не потрібно було кожного разу передавати ім"я шефа
// Напишіть функцію makeShef(shefName), яка повертає функцію makeDish(dish),
//     яка пам"ятає ім"я шефа під час свого виклику
const makeDish = function (shefName, dish) {
   console.log(`${shefName} is cooking ${dish}`)
 }
 
const makeShef = function(shefName){
   return makeDish = function (shefName, dish) {
      console.log(`${shefName} is cooking ${dish}`)
    }
}

 makeDish('Mango', 'apple pie')
 makeDish('Poly', 'muffins')

