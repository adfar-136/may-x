// function fun1(callbak){
//     setTimeout(()=>{
//         console.log("Function 1 executed");
//         callbak()
//     },3000)
// }
// function fun2(callback){
//     setTimeout(()=>{
//     console.log("function 2 executed")
//     callback()
//     },2000)
// }
// function fun3(callback){
//     setTimeout(()=>{
//         console.log("function 3 executed") 
//         callback()
//         },1000)
// }
// function fun4(callback){
//     setTimeout(()=>{
//         console.log("function 4 executed") ;
//         callback()
//         },5000)
// }
// function fun5(callback){
//     setTimeout(()=>{
//         console.log("function 5 executed") 
//         callback()
//         },2500)
// }
// fun1(()=>{
//  fun2(()=>{
//     fun3(()=>{
//         fun4(()=>{
//             fun5(()=>{
//                 console.log("hello")
//             })
//         })
//     })
//  })
// })

// setTimeout(()=>{
//   setTimeout(()=>{
//     setTimeout(()=>{
//         setTimeout(()=>{
//             setTimeout(()=>{
//                 console.log("hello")
//             })
//             console.log("4")
//         },3000)
//         console.log("3")
//     },2000)
//     console.log("2")
//   },1000)
// },2000)