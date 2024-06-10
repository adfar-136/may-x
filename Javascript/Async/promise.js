var promise = new Promise((resolve,reject)=>{
    //   resolve("Data fetched from the api")
    resolve("api fetching rejecting")
})
console.log(promise)
// promise.then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })