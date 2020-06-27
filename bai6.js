// 6. Cho người dùng nhập vào số n,
// Cho người dùng nhập vào 1 string dạng 1,2,3,4,5
// a. Biến string đó thành mảng
// b. Tạo ra 1 mảng mới gồm n phần tử đầu tiên của mảng cũ
let n=Number(prompt("Ban hay nhap vao mot so:"))
let string=prompt("Ban hay nhap vao 1 chuoi so:")
string=string.split(",").map(x=>Number(x));
let newstring=[]
if(n<string.length){
    for(let i=0;i<=n;i++){
        newstring.push(string[i]);
    }

}
else{
    console.log(`so ban nhap lon hon do dai cua mang nen chung toi chịu :))`)
}
console.log(newstring)
