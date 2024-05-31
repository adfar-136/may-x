let adfar = {
    firstName:"Adfar",
    lastName:"Khan",
    age: 25,
    skills:["html","css","js"],
    personal:{
        address:"123 main street",
        city:"New York",
    },
    getfullname:function(){
        return adfar.firstName + " "+ adfar.lastName
    }
}
adfar.firstName = "Hello"
// console.log(adfar.personal.city)
console.log(adfar.skills[1])
console.log(adfar.getfullname())