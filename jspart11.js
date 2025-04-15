function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();

setTimeout(()=>{
    console.log("Hi");
},2000);

console.log("Hello");

let h1 = document.querySelector("h1");

// setTimeout(()=>{
//     h1.style.color = "orange";
// },1000);
// setTimeout(()=>{
//     h1.style.color = "red";
// },2000);
// setTimeout(()=>{
//     h1.style.color = "blue";
// },3000);


// function changeColor(color, delay, nextColor) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColor) nextColor();
//     }, delay);
// }

// changeColor("yellow",1000, ()=>{
//     changeColor("black",1000, () =>{
//         changeColor("pink",1000);
//     });
// });


// function savetoDb(data, success, fail){
//     let internetSpeed =  Math.floor(Math.random()*10) + 1;
//     if(internetSpeed >4){
//         success();
//     } else {
//         fail();
//     }
// }

// savetoDb(
//     "hello", 
//     ()=>{
//         console.log("data saved");
//         savetoDb(
//             "hellow world",
//             () => {
//                 console.log("data saved 2");
//                 savetoDb(
//                     "harshh",
//                     () => {
//                         console.log("saved 3");
//                     },
//                     () => {
//                         console.log("fail 3");
//                     }
//                 ); 
//             },
//             () => {
//                 console.log("fail 2");
//             }
//         );
//     }, 
//     () =>{
//         console.log("weak connection");
//     }
// );

function savetoDb(data){
    let internetSpeed =  Math.floor(Math.random()*10) + 1;
    return new Promise((resolve, reject) => {
        if(internetSpeed >4){
            //console.log("data saved");
            resolve("data saved");
        } else {
            //console.log("weak connection");
            reject("weak connection");
        }
    })
   
}


//let request = savetoDb("apna college"); // we can compact it with this

// request
//     .then(() => {
//         console.log("then saved");
//         console.log(request);
//     })
//     .catch(() => {
//         console.log("catch saved");
//         console.log(request);
//     });

// savetoDb("apna college")
//     .then(() => {
//         console.log("then saved");
//     })
//     .catch(() => {
//         console.log("catch saved");
//     });

// promise chaining now with same 



savetoDb("apna college")
    .then((result) => {
        console.log("then saved");
        console.log(result);
        return savetoDb("jeelo");
    })
    .then((result) => {
        console.log("data2 saved");
        console.log(result);
        return savetoDb("harsh");
    })
    .then((result) => {
        console.log("data3 saved");
        console.log(result);
    })
    .catch((error) => {                       //one catch is enough to catch every reject.
        console.log("catch saved");
        console.log(error);
    });



async function greet() {  // async fun always return promise 
   // throw "randon error";  //use to throw error
    return "hello";
}

greet()
    .then((result) => {
        console.log("promise was resolved");
        console.log("result : ", result);
    })
    .catch((err) => {
        console.log("promise was rejected");
        console.log("error : ", err);
    });


function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*10) +1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}



function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*5) +1;
            if(num > 3) {
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color changed");
        }, delay);
    });
}
async function getcolor() {
    try{
        await changeColor("red",1000);
        await changeColor("yellow",1000);
        await changeColor("orange",1000);
        changeColor("blue",1000);
    } catch(err){
        console.log("error caught");
        console.log(err);
    }
}