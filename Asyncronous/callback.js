// function register(){
//     setTimeout(()=>{
//         console.log("Register End");
//     },1000)
//     //console.log("Register User");
// }
// function sendEmail(){
//     setTimeout(()=>{
//         console.log("Send Email End");
//     },5000)
//     //console.log("Send user email");
// }
// function login(){
//     setTimeout(()=>{
//         console.log("Login End");
//     },500)
//     //console.log("Login here");
// }
// function getData(){
//     console.log("Get User Data");
// }
// function displayData(){
//     console.log("Display User Data");
// }
// register();
// sendEmail();
// login();
// getData();
// displayData();
// console.log("Call Other Aplication");




// Asyncronous Function

// function register(cb){
//     setTimeout(()=>{
//         console.log("Register End");
//         cb();
//     },1000)
//     //console.log("Register User");
// }
// function sendEmail(){
//     setTimeout(()=>{
//         console.log("Send Email End");
//     },5000)
//     //console.log("Send user email");
// }
// function login(){
//     setTimeout(()=>{
//         console.log("Login End");
//     },500)
//     //console.log("Login here");
// }
// function getData(){
//     console.log("Get User Data");
// }
// function displayData(){
//     console.log("Display User Data");
// }
// register(cb);
// function cb(){        
//     sendEmail();
//     login();
//     getData();
//     displayData();
// }
// console.log("Call Other Aplication");




//CallBack Hell


function register(cb){   
    setTimeout(()=>{
    console.log("register end");
    cb();
    },1000)
    // console.log("register user");
}
function sendEmail(cb){
    setTimeout(()=>{
    console.log("send user email end");
    cb();
    },2000)
    // console.log("send user email");
}
function login(cb){
    setTimeout(()=>{
    console.log("login here end");
    cb();
    },3000)
    // console.log("login here");
}
function getData(cb){
    setTimeout(()=>{
    console.log("get data end");
    cb();
    },3000)
    // console.log("get user data");
}
function displayData(){
    console.log("display user Data");
}
// register(()=>{
//     sendEmail(()=>{
//         login(()=>{
//             getData(()=>{
//                 displayData();
//             });
//         });
//     });
// });
register(()=>{
    sendEmail(()=>{
        login(()=>{
            getData(()=>{
                displayData();
            });
        });
    });
});


console.log("call other application");