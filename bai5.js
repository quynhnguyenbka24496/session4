// 5. Cho người dùng nhập vào 1 câu bất kỳ, Biến câu đó thành 1 câu in hoa tất cả các chữ cái đầu tiên 
// VD: input = "my name is peter" => output = "My Name Is Peter"
let input=prompt("Ban hay nhap vao 1 cau:")
input=input.split(" ");
console.log(input)
for(let i=0;i<input.length;i++){
    input[i] =input[i].charAt(0).toUpperCase()+input[i].slice(1)
}
input=input.join(" ")
console.log(input)