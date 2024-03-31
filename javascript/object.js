// let name = "first topic";
// //syntax
// //let objectname={key:value}
// let user = {
//     firstName: "kaushik M",
//     age: 21,
//     gender: "Male",
//     transport: "bike",
//     native: "tiruchengode",
//     percentage: 95
// }

// document.write(`FIRSTNAME : ${user.firstName} <br> AGE : ${user.age} <br> GENDER : ${user.transport}  <br> NATIVE : ${user.native} <br> PERCENTAGE : ${user['percentage']}`);

// console.log(`FIRSTNAME : ${user.firstName} <br> AGE : ${user.age} <br> GENDER : ${user.transport}  <br> NATIVE : ${user.native} <br> PERCENTAGE : ${user['percentage']}`);

// let age = 90;
// document.write(`<br> age : ${age}`);

// let f = 20;
// let c = 10;
// document.write("<br>f = ", f);
// document.write(`<br> f = ${f}`); //template literal `${}`
// document.write(`<br> c = ${c}`);

// //ARRAY

// let array = ["kaushik", 1, "kavin", 2, "kavinkumar", 3, "nithish", 4, true];
// document.write(`<br>length=${array.length}`);
// document.write(`<br> arrayStartshere <br>${array[0]} <br> ${array[1]}`);

let mobile = [
    {
        name: "samsung",
        prize: "25000",
        model: "A70",
        img: `New folder/chappathi.jpg`
    },
    {
        name: "mi",
        prize: "26000",
        model: "A00",
        img: `https://www.google.com/imgres?imgurl=https%3A%2F%2Ftiimg.tistatic.com%2Ffp%2F1%2F007%2F574%2Fvivo-mobile-phone-7-38mm-ultra-smooth-body-170g-light-2-5d-adjusted-outline-for-a-great-hold-703.jpg&tbnid=WO-Ftp3Cnq_fNM&vet=12ahUKEwiT39-trYmDAxVvbmwGHW1oBHwQMygDegQIARB5..i&imgrefurl=https%3A%2F%2Fwww.tradeindia.com%2Fproducts%2Fcolor-blue-vivo-mobile-phone-7-38mm-ultra-smooth-body-170g-light-2-5d-adjusted-outline-for-a-great-hold-7574703.html&docid=4cKjIOphiZIgEM&w=500&h=500&q=mobile%20phone%20images&ved=2ahUKEwiT39-trYmDAxVvbmwGHW1oBHwQMygDegQIARB5`
    }
];

document.write(`<br> arrayStarts <br> mobile name = ${mobile[0].name} <br> prize = ${mobile[0].prize} <br> image = ${mobile[0].img}`);

//FUNCTION

//predefined function -- build in function
//userdefined function -- user will give name to the function in camel case

//syntax for function
// function functionname(){
//     //coding part
// }
// let a=10, b=20; //global variable
// let f = 200;
// function additionOperation(){
//     let c; //decleration --local variable
//     c = a + b;
//     document.write(`<br> addtion = ${c}`);
// }

// function subOperation(){
//     let d;
//     document.write(`<br> sub = ${d=a-b}  <br> f = ${f}`);
// }

// additionOperation();

// function agecalc(){
//     let age =Number(document.getElementById("dob").value);
//     document.write(`<br> age = ${2023 - age}`);
// }

