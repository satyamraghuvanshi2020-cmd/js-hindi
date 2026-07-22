// function calculationcartprice(...num1){
//     return num1
// }
// console.log(calculationcartprice(1,2,3,4,));

function calculationcartprice(val1, val2, ...num1)
{
    return num1
}
console.log(calculationcartprice(1,2,3,4,));

const user = {
    items: "parelG",
    price: "12",
}

function anyobject(handleobject){

    console.log(`item name = ${handleobject.items} and price of the items = ${handleobject.price}`);
    
}

//anyobject(user)
anyobject({
    items: "ice-cream",
    price: "123",
})

let mynewarray= [1,2,3,4,5,6,7]

function returnsecondarray(getaray){
    return getaray[1]
}
//console.log(returnsecondarray(mynewarray));
console.log(returnsecondarray([100,200,300.400]));
