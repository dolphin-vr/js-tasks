// Напишіть дві функції
// makeProduct(name, price, callback) - приймає ім"я та ціну товару, а також callback
// Функція створює об"єкт товару, додає йому унікальний ідентифікатор у властивість id та викликає callback,
// передаючи йому створений об"єкт
// showProduct(product)  - колбек, що приймає об"єкт продукта та виводить його у консоль

function makeProduct(name, price, callback){
   const obj1 ={
      id: Date.now(),
      name,
      price,
   }
   callback(obj1)
}

function showProduct(product){
   console.log(product)
}

makeProduct('name', 50, showProduct)