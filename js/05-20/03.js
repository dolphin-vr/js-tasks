// todo Напишіть функцію calcTotalCost(stones, stonesName), яка приймає масив об'єктів та рядок із назвою каменя.
// Функція рахує і повертає загальну вартість каменів з таким іменем, ціною та кількістю з об'єкта

const stonesArray = [
   { name: 'Изумруд', price: 1300, quantity: 4 },
   { name: 'Бриллиант', price: 2700, quantity: 6 },
   { name: 'Сапфир', price: 400, quantity: 7 },
   { name: 'Щебінь', price: 150, quantity: 100 },
 ]

function calcTotalCost (stones, stonesName){
   let total = 0;
   for (const el of stones) {
      if (el.name === stonesName){
         total += el.price * el.quantity;
         return total;
      }
   }
   return total;
}

console.log(calcTotalCost(stonesArray, "fsdfs"));