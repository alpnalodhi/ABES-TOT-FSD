// var a=12;
// console.log("Hi " +a);

// console.log(typeof(a));

// let b =12;
// let a= 40;
// console.log(a);

// var a=12;
// if(a>10){
//     let a=30;
//     console.log("a is "+a)
// }
// // console.log("a is "+a)

// // Function Expression
// const data =function(){
//     console.log("Hi, how are you?");

// }
// data();


// const data=()=>{
//     return"Hi, FSD Training"
// }
// console.log(data());

// const sum=(a,b)=>{
//     return a+b;
// }

// const add =(a,b)=>a+b;
// add(23,40); 


// (()=>){
//     console.log("Hello")
// }();

// function greet(msg="Hello"){
//     console.log("Hi"+msg);
// }
// greet();

// function greet(msg="Hello"){
//     console.log("Hi"+msg);
// }
// console.log(greet("Welcome"));





function selectLanguage(lang){
    let data;
    if(lang=="java"){
    function javaCompiler(){
        console.log("java compiler selected and code is being executed");
    }
    data=javaCompiler();
} 
else if(lang=="c"){
    function cCompiler(){
        console.log("c Compiler is being executed");
    }
    data=cCompiler();
}
else{
    console.log("Selected language compiler is not found");
}
return data;
}
selectLanguage("java");