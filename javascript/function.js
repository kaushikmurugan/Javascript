function fullName(firstName,lastName){
    document.write(firstName,lastName);
    console.log(firstName,lastName);
}

fullName("kaushik","kavin");

//addEventListener(typeOfEvent,listener,useCapture)

document.getElementById("inp11").addEventListener("click", (a,b)=>{
    a=10,b=20;
    document.write(`value of C = ${c=a<b}`);
})

// template iteral (`string ${variable}`)

//branch statments

document.getElementById("bst").addEventListener("dblclick",()=>{
    let a = 10,b = 20, c = 30;
    if(a>b){
        document.write(`<br> a = ${a}`);
    }
    else{
        document.write(`<br> b  is greater = ${b}`);
    }
});

//syntax for function
// function functionname(params){
    //statement or code block
// }

//calling of functionname(value of params)