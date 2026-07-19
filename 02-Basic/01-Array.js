const myarry= [1,2,3,4,5]

const heroes = ["Superman", "Batman", "Wonder Woman", "Flash"];

const mixedArray = [1, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]];
//console.log(myarry[3]);

const arry2 = new Array("Apple", "Banana", "Cherry", "100", "200");

//console.log(arry2[2]);

//myarry.push(6);
//console.log(myarry);
//myarry.pop();
//console.log(myarry);
//myarry.unshift(9);
//console.log(myarry);
//myarry.shift();
//console.log(myarry);
// console.log(myarry.includes(9));
// console.log(myarry.indexOf(0));
// console.log(myarry);

// const newArray = myarry.join();
// console.log(newArray);
// console.log(typeof newArray);
// console.log(myarry);

//slice and splice
console.log("A:" + myarry);

const myarn1= myarry.slice(1,3);
console.log(myarn1);

console.log("B after slice:" + myarry);

const myarn2= myarry.splice(1,3);
console.log(myarn2);

console.log("C after splice:" + myarry);

