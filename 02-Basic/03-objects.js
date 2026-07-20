//singleton
//Object.create
//object literals

const mysym= Symbol("key1")
const jsUser = {
    name: "Satyam",
    "Full Name": "Satyam Raghuvanshi",
    age: "28",
    [mysym]: "newsymbol",
    Location: "Delhi",
    Email: "satyam@sequifi.com",
    isLoggedIn: false,
    lastloginDays: ["Monday", "Saturday"]

}
// console.log(jsUser.Email);
// console.log(jsUser["Email"]);
// console.log(jsUser["Full Name"]);
//console.log(jsUser.Full Name); not fetch my dot only square bracket 
//console.log(typeof jsUser[mysym]);

jsUser.Email="abc@youtube.com"
//console.log(jsUser);

// Object.freeze(jsUser);
jsUser.Email="asfd";
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
    
}
console.log(jsUser.greeting());

jsUser.greetingtwo = function(){
    console.log(`Hello JS User,${this.name}`);
}
console.log(jsUser.greetingtwo());
