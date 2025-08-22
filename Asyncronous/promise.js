// // Promises Resolve

// function register(){ 
//     return new Promise((resolve,reject)=>{
        
//     setTimeout(()=>{
//     console.log("register end");
//     resolve();
//     },1000)

//     })  
//     // console.log("register user");
// }
// function sendEmail(){
//     return new Promise((resolve,reject)=>{
        
//     setTimeout(()=>{
//     console.log("send user email end");
//     resolve();
//     },2000)

//     })    // console.log("send user email");
// }
// function login(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//     console.log("login here end");
//     resolve();
//     },3000)
//     })
    
//     // console.log("login here");
// }
// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//     console.log("get data end");
//     resolve();
//     },3000)
//     })

    
//     // console.log("get user data");
// }
// function displayData(){
//     return new Promise((resolve,reject)=>{
//         console.log("display user Data");
//         resolve();

//     })
//     }

// register()
// .then(sendEmail)
// .then(login)
// .then(getData)
// .then(displayData)

// console.log("call other application");



// // Promises Reject

// function register(){ 
//     return new Promise((resolve,reject)=>{
        
//     setTimeout(()=>{
//     console.log("register end");
//     resolve();
//     },1000)

//     })  
//     // console.log("register user");
// }
// function sendEmail(){
//     return new Promise((resolve,reject)=>{
        
//     setTimeout(()=>{
//         return reject("Send Email Data Failed")
//     console.log("send user email end");

//     },2000)

//     })    // console.log("send user email");
// }
// function login(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//     console.log("login here end");
//     resolve();
//     },3000)
//     })
    
//     // console.log("login here");
// }
// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//     console.log("get data end");
//     resolve();
//     },3000)
//     })

    
//     // console.log("get user data");
// }
// function displayData(){
//     return new Promise((resolve,reject)=>{
//         console.log("display user Data");
//         resolve();

//     })
//     }

// register()
// .then(sendEmail)
// .then(login)
// .then(getData)
// .then(displayData)

// .catch((err)=>{
//     console.log('Error: '+err)
// })



// // Promises Async and await

// function register(){ 
//     return new Promise((resolve,reject)=>{
        
//     setTimeout(()=>{
//     console.log("register end");
//     resolve();
//     },1000)

//     })  
//     // console.log("register user");
// }
// function sendEmail(){
//     return new Promise((resolve,reject)=>{
        
//     setTimeout(()=>{
//        // return reject("Send Email Data Failed")
//     console.log("send user email end");
//         resolve();
//     },2000)

//     })    // console.log("send user email");
// }
// function login(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//     console.log("login here end");
//     resolve();
//     },3000)
//     })
    
//     // console.log("login here");
// }
// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//     console.log("get data end");
//     resolve();
//     },3000)
//     })

    
//     // console.log("get user data");
// }
// function displayData(){
//     return new Promise((resolve,reject)=>{
//         console.log("display user Data");
//         resolve();

//     })
//     }

//     async function ex1(err){
//         try{
//             await register();
//             await sendEmail();
//             await login();
//             await getData();
//             await displayData();
//         }
//         catch(err){
//             console.log("Error:"+err)
//     }
//     }
//     ex1();
//     console.log("Call Other Application")


// Promises without try and catch

function register(){ 
    return new Promise((resolve,reject)=>{
        
    setTimeout(()=>{
    console.log("register end");
    resolve();
    },1000)

    })  
    // console.log("register user");
}
function sendEmail(){
    return new Promise((resolve,reject)=>{
        
    setTimeout(()=>{
       // return reject("Send Email Data Failed")
    console.log("send user email end");
        resolve();
    },2000)

    })    // console.log("send user email");
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
    console.log("login here end");
    resolve();
    },3000)
    })
    
    // console.log("login here");
}
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
    console.log("get data end");
    resolve();
    },3000)
    })

    
    // console.log("get user data");
}
function displayData(){
    return new Promise((resolve,reject)=>{
        console.log("display user Data");
        resolve();

    })
    }

    async function ex1(err){
        //try{
            await register();
            await sendEmail();
            await login();
            await getData();
            await displayData();
        }
    // //     catch(err){
    // //         console.log("Error:"+err)
    // // }
    // }
    ex1().then(()=>{
        console.log("Finish all tasks")
    })
    .catch((err)=>{
        console.log("Error:"+err);
    })
    console.log("Call Other Application")