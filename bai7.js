// 7. Cho người dùng nhập vào số n,
// Cho người dùng nhập vào 1 string dạng 1,2,3,4,5...
// a. Biến string đó thành mảng
// b. Nhóm mảng cũ thành một mảng mới gồm các mảng con theo n
// VD: [1,2,3,4,5], n = 2 => [[1,2],[3,4], [5]]
//     [1,2,3,4,5,6], n = 3 => [1,2,3],[4,5,6]]
let n= Number(prompt('Nhap so N=?'));
let inputStr= prompt('Nhap vao day so').split(',').map(x=>Number(x))
let newinputStr=[]; 
for (let i = 0; i < inputStr.length; i += n) {
    chuoinho = inputStr.slice(i, i+n);
    newinputStr.push(chuoinho);
}


    console.log(newinputStr)
