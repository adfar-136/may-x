// // let user = {
// //     firtName:"Adfar",
// //     lastName:"Rashid",
// // //     age:28,
// // //     getAgeYear:function(){
// // //         return new Date().getFullYear() - user.age
// // //     }
// // // }
// //factory function
// // function createUser(firstName,lastName,age){
// //     const user = {
// //         firstName,
// //         lastName,
// //         age,
// //         getAgeYear:function(){
// //             return new Date().getFullYear() - user.age
// //         }
// //     }
// //   return user;
// // }
// // let user1 = createUser("Adfar","Rasheed",28)
// // let user2 = createUser("Anshu","Kumar",24);


// //memory space voilation
// // function getAgeYear(){
// //     return new Date().getFullYear() - this.age
// // }
// // //global space voilted
// // getAgeYear()
// // function createUser(firstName,lastName,age){
// //     const user = {
// //         firstName,
// //         lastName,
// //         age,
// //         getAgeYear,
// //     }
// //   return user;
// // }
// // let user1 = createUser("Adfar","Rasheed",28)
// // let user2 = createUser("Anshu","Kumar",24);


// // function getAgeYear(){
// //     return new Date().getFullYear() - this.age
// // }

// // function createUser(firstName,lastName,age){
// //     const user = {
// //         firstName,
// //         lastName,
// //         age,
// //         getBirthYear:createUser.commonMethods.getAgeYear
// //     }
// //   return user;
// // }
// // createUser.commonMethods ={
// //     getAgeYear : function(){
// //         return new Date().getFullYear() - this.age
// //     }
// // }
// // let user1 = createUser("Adfar","Rasheed",28)
// // let user2 = createUser("Anshu","Kumar",24);


// // function greet(){
// //    this.adfar = "adfar rasheed"
// //     return "Good morning"
// // }


// function createUser(firstName,lastName,age){
// //     this.firstName=firstName;
// //     this.lastName = lastName;
// //     this.age = age;
// // }
// // createUser.prototype.getBirthYear  = function(){
// //     return new Date().getFullYear() - this.age
// // }
// // createUser.prototype.getFullName =function(){
// //     return this.firstName + " " + this.lastName
// // }
// // let user1 =new createUser("Adfar","Rasheed",28)
// // let user2 =new createUser("Anshu","Kumar",24);
let element = document.getElementById("main")
