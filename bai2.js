// 2. Cho người dùng nhập vào 1 dãy số dạng string (VD: 1,2,3,4,5)
// a. Biến chuỗi đó thành mảng
// b. Tính tổng các số chẵn trong mảng, Tính tổng các số lẻ trong mảng
// c. Tìm max, min của các số trong mảng đó
let nhap=prompt("Nhap vao chuoi so cach nhau boi dau phay:")
let arr=nhap.split(",")
arr=arr.map(function(x){
    return Number(x);
})
console.log(arr)
///
let tongSoChan=0;
let tongSoLe=0;
for(let i=0;i<arr.length;i++){
    
    if(arr[i] %2 ===0){
        tongSoChan +=arr[i];
        //console.log(`Tong so chan là: ${tongSoChan}`)
    }
    else{
        tongSoLe +=arr[i];
        //console.log(`Tong so le là: ${tongSoLe}`)
    }
}
console.log(`Tong so chan là: ${tongSoChan}`)
console.log(`Tong so le là: ${tongSoLe}`)
//
let solonnhat=Math.max(...arr)
let sonhonhat=Math.min(...arr)
console.log(`So lon nhat la: ${solonnhat},so nho nhat la: ${sonhonhat}`)
