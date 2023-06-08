// const  str = "aaa sss ddd fff ggg zzz";
// console.log(str);
// const res = str.split(" ").splice(1, str.split(" ").length -2).join(" ");
// console.log(res);

// console.log(rgb(137,-53,210));

// function rgb(r, g, b){
//   return toHex(r) + toHex(g) + toHex(b);

//   function toHex(n){
//     if (n<0){
//       n=0;
//     } else if (n>255){
//       n=255
//     }
//     return n.toString(16).padStart(2, 0).toUpperCase();
//   }
// }

// ---
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

// ---
// function rgb(r, g, b) {
// 	r = Math.max(0, Math.min(255, r));
// 	g = Math.max(0, Math.min(255, g));
// 	b = Math.max(0, Math.min(255, b));
// 	let color = (r << 16) + (g << 8) + b;
// 	return ('00000' + color.toString(16).toUpperCase()).slice(-6);
// }


// findSmallestInt(args) {
//   return args.reduce((m, el) => m = Math.min(m, el), MI)   
// }


// function findSmallestInt(args) {
//   return Math.min(...args)
// }

// console.log('minimum')
// console.log(findSmallestInt([334, -345, -1, 100]));


// =========================
// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// function findNextSquare(sq) {
//   // Return the next square if sq is a perfect square, -1 otherwise
//   return (Number.isInteger(Math.sqrt(sq))) ? (Math.sqrt(sq)+1)**2 : -1
// }

// console.log(findNextSquare(114))


// =========================
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

// function isTriangle(a,b,c){
//   const s = [a, b, c].sort((a,b)=>b-a);
//   return (s[0]<s[1]+s[2]);
  
//   // [a, b, c] = [a, b, c].sort((x, y) => x-y);  
//   // return a+b > c;
// }

// console.log(isTriangle(2,7,7))


// ==========================
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// function removeChar(str){
//   //You got this!
//  return str.split("").slice(1, str.length-1).join("")
// };
// console.log(removeChar("function"))


// ==========================
