// const a=[5,7,6,7,-5,6,10];
// const check=(x)=>{
//     return (x>=3);
// }
// const rs=a.every(check);
// console.log(rs);//false
// const rs1=a.some(check);
// console.log(rs1);//true
// const x=a.some((t)=>t%3===0);
// console.log(x);//true
// const h=a.filter((c)=>c%5===0);
// console.log(h);//[-5, 10]
// console.log('-------------------');
const b=[
    {ten:'Ha',
        diem:6
    },
    {ten:'Huy',
        diem:4
    },
    {ten:'Hanh',
        diem:8
    },
    {ten:'Han',
        diem:6
    },
]
// const ds=b.filter((t)=>t.diem>=5);
// console.log(ds);//[ { ten: 'Ha', diem: 6 }, { ten: 'Hanh', diem: 8 } ]
// console.log('-------------------');
// const bb={ten:'Ha',diem:6};
// const start=b.findIndex((t)=>t.ten==='Ha'&&t.diem===6);
// const end=b.findLastIndex((t)=>(t.diem>=6));
// console.log(start);//0
// console.log(end);//3
// console.log('-------------------');
// const dssv=['Ha Anh','Thu Hao','Lam Son'];
// console.log(dssv.join());//Ha Anh,Thu Hao,Lam Son
// console.log(dssv.join('/'));//Ha Anh/Thu Hao/Lam Son
// console.log('-------------------');
const ten1 = b.filter((t) => t.ten.toLowerCase().startsWith('h'));
console.log(ten1);
console.log('-------------------');
const dscuoi=b.slice(b.length-2,b.length);
console.log(dscuoi);
console.log('-------------------');
