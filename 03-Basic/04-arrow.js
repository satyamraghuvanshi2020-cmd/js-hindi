const user = {

    username: "Satyam",
    price: "999",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
    // user.welcomeMessage()
    // user.username="sam",
    // user.welcomeMessage()

    //console.log(this);
    
    // 
    
    const chai =()=>{
        let username = "Satyam";
        console.log(this.username);
        
    }
    //chai()
    // const addtwonumber=(num1, num2)=>{
    //     return num1+num2
    // }
    //const addtwonumber=(num1, num2)=> num1+num2
    const addtwonumber=(num1, num2)=> ({username: "satyam"})
    
    console.log(addtwonumber(3,7));
    