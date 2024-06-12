console.log("hello")
var promise = new Promise((resolve,reject)=>{
    console.log("good")
    resolve("api")
})
promise.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
console.log("Adfar")