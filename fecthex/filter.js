// const arr=[1,2,3,4,5,6,7,8,9];
// const s1=arr.filter((data)=>(data%2)==0);
// console.log(s1);



// const arr=[1,2,3,4,5,6,7,8,9];
// const s1=arr.filter((data)=>(data*5));
// console.log(s1);




// const arr=[1,2,3,4,5,6,7,8,9];
// const s1=arr.map((data)=>(data*5));
// console.log(s1);



// const arr=[1,2,3,4,5,6,7,8,9];
// const s1=arr.reduce((a,b)=>(a+b),0);
// console.log(s1);


const arr=[1,2,3,4]
function sum(){
    return arr.reduce((a,b)=>(a+b),0)
}
// const s1=arr.reduce((a,b)=>(a+b),4);
// console.log(s1);
console.log(...arr)
console.log("Value is"+sum(...arr))
