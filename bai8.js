// 8. Cho người dùng nhập vào string dạng 1,2,3,4,5,6
// a. Biến string đó thành mảng
// b. Tìm giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong mảng đó
// Ví dụ:

// Input: [1, 2, 3, 8, 9]
// Output: 8 (là hiệu của 9 và 1)
let input=prompt("nhap vao 1 day so:")
input.split(",").map(x=>Number(x));
//GTLN= số to- số bé nhất
let solon=Math.max(...input)
let sobe=Math.min(...input)
let hieu=solon-sobe
console.log(hieu)