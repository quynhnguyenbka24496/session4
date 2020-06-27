// 3. Cho mảng [1, 2, 4, 6, [3, 5], [10, 12]]
// a. Tính tổng tất cả các phần tử trong mảng
// b. Tạo ra 1 mảng mới chỉ là 1 mảng đơn(không chứa mảng khác ở trong) chứa tất cả các phần tử đã được tăng 
//lên 10 đơn vị
const arr=[1, 2, 4, 6, [3, 5], [10, 12]]
let arr1=arr.toString();
//console.log(arr1);
arr1=arr1.split(",");
//console.log(arr1)
arr1=arr1.map(x=>Number(x));
console.log(arr1);
let arr2=[]
arr2=arr1.map(x=>x+10);
console.log(arr2)
