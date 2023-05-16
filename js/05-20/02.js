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