function sayMyName() {
    console.log("S");
    console.log("a");
    console.log("t");
    console.log("t");
    console.log("a");
    console.log("m");
    
}
//sayMyName()

// function addNumber(number01, number02){

//     console.log(number01+number02);
    
// }
function addNumber(number01, number02){

    //let result = number01+number02;
    //console.log(result);
    return number01+number02;
    //return result
}
//const result =addNumber(2,9)
//console.log("Result of addNumber:"+result);

function userloginname(username = "sam"){
if(!username){
console.log("Please enter the name");
return
}
    return`${username} just login in`
    
}
console.log(userloginname(null));
 