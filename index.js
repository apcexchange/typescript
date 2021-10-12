// //person interface
// interface IPersonInfo {
//     firstName : string,
//     lastName: string,
//     age: number
// }
// //interface login
// interface ILogin{
//     userName: string,
//     password: string,
//     email?: string
// }
// //hobbies interface
// interface IHobbies{
//     hobbies: string,
//     favouriteFood: string
// }
// class User {
//     firstName:String;
//     age:number;
//     lastName:string
//     userName:string;
//     password:string
//     constructor(personInfo: (IPersonInfo & ILogin )){
//             this.firstName = personInfo.firstName
//             this.lastName = personInfo.lastName
//             this.age = personInfo.age
//             this.userName = personInfo.userName
//             this.password = personInfo.password
//     }
//     printDetails(){
//         console.log(`user name is ${this.firstName} ${this.lastName} and age is ${this.age}`)
//         console.log(`user name is ${this.firstName}`)
//         console.log(`your age is ${this.age}`)
//         console.log(`your userName is ${this.userName}`)
//         console.log(`your password is ${this.password}`)
//     }
// }
// class Admin extends User{
//     constructor(personInfo: (IPersonInfo & ILogin )){
//         super(personInfo)
//     }
//  printDetails(){
//     console.log(`admin is ${this.firstName} ${this.lastName} and age is ${this.age}`)
//     console.log(`admin is ${this.firstName}`)
//     console.log(`admin your age is ${this.age}`)
//     console.log(`admin your userName is ${this.userName}`)
//     console.log(`admin your password is ${this.password}`)     
//  }
// }
// const user = new User({ firstName: "Peter",
//  lastName: "Akam",
//   age: 18,
//     userName: "Odogwu",
//     password: "peter@gmail.com"
// })
// const admin = new Admin({ firstName: "Kay",
//  lastName: "Price",
//   age: 400,
//     userName: "Odogwu",
//     password: "kay@gmail.com"
// })
// function getDetails(user:Admin | User){
//     console.log(user.printDetails())
// }
// getDetails(admin)
// console.log("\n\n")
// getDetails(user)
// console.log("Done!")
var myFirstName = prompt("enter first name");
console.log(myFirstName);
