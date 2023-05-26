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








