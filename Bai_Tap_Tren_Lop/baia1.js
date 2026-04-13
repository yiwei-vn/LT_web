// let ten = 'Ha Lan';
// let tuoi = 20;
// let gioitinh = false;
// console.log('hello', ten, 'tuoi', tuoi, 'gioitinh', gioitinh ? "Nam" : "Nữ");
// console.log(`Hello ${ten}! tuoi ${tuoi} gioi tinh ${gioitinh ? "Nam" : "Nữ"}`);

// console.log(a);
// var a;
// console.log(sum(a, b));
// function sum(x, y) {
//     return x + y;
// }
// const c ='to an an';
// c='ha lan';

let a=[37,5,33,4,52];
console.log(a);
let b=[6,7,8,9,10];
console.log(b);
let st="Day so";
// cach 1:tung phan tu
for(let i of a){
    st+=i+" ";
}
//cach 2: theo chi so
for(let i=0;i<a.length;i++){
    st+=a[i]+" ";
}
// cach 3: forEach
console.log(st);
a.forEach(function(v,i){
    console.log(`chi so:${i} gia tri:${v}`);
});
const chia3=(n)=>{
    if(n%3===0){
        return true;
    }
    return false;
}
console.log(`------------------------------`);
// let ss=`cac so chia het cho 3: `;
// for(let i of a){
//     if(chia3(i)){
//         ss+=i+" ";
//     }}
// console.log(ss);

let cc = a.filter(chia3);
let nn = a.filter((t) => t % 5 === 0);
console.log(cc);
console.log(nn);