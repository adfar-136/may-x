// async function greet(){
//     return "Good morning"
// }
// greet().then((x)=>{
//   console.log(x)
// })
var promise =  new Promise((resolve,reject)=>{
     resolve("adfar")
})
async function resolvePromise(){
    console.log("1")
    // promise.then((x)=>{
    //     console.log(x)
    // })
    let data =await promise;
    console.log(data)
    console.log("2")
}
resolvePromise()