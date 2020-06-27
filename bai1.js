// 1. Cho người dùng nhập vào 2 số x, y
// a. Tạo một mảng với các số từ x - y cách nhau 2 đơn vị
// b. Tính trung bình cộng các số trong mảng
let nhap1=Number(prompt("Ban hay nhap so thư nhat :"))
let nhap2=Number(prompt("Ban hay nhap so thư hai :"))
let arr=[];
for(let i=nhap1;i<=nhap2;i+=2){
    arr.push(i);
}
console.log(arr);
let tong=arr.reduce(function(x,y){
    return x+y;

})
let TBC=tong/arr.length
console.log(TBC)
