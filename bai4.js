// 4. Cho người dùng nhập vào 1 dãy số dạng string (VD: 1,2,2,1,3,3,4)
// a. Biến chuỗi đó thành mảng
// b. Tạo ra 1 mảng mới gồm các phần tử của mảng cũ không được lặp lại 2 lần.
// VD [1,2,3,3] => [1,2,3]
let nhap=prompt("Mơi ban nhap vao mot day so cach nhau bơi dau phẩy:");
nhap=nhap.split(",");
nhap=nhap.map(x=>Number(x));
console.log(nhap)
let arr=[]
//không nhớ 
nhap.forEach(y => {
    for(let i=0;i<arr.length;i++){
        if( y != arr[i]){
            arr.push(y);

        }
    }
});
console.log(arr)
