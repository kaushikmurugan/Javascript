// let array = ["mango", "apple", "orange", "grapes"];

// //array index strats with 0
// //array length 4
// let value = array[0]
// console.log(value);

document.write(`${array[0]} ${array[1]}`); 

let i = 0;

while (array.length > i)//4>4
{
    document.write(`${array[i]}`);  //arr[0] arr[1] arr[2] arr[3]
    i++;
}




let j=0;

do{
    document.write(`<br> *`);
    j++;

}while(10 >= j); //10 <= 0




while(10 <= j){
    document.write(`<br> *`);
    j++;
}
// i++; //i+1 //0+1=1 //1+1=2 //2+1=3//3+1=4





// k=1 1<5;k=2 2<5;k=3 3<5
for(let k=0; k< 5; k++) 
{
    document.write(`<br> ${k} = `)
    for(let l=0; l<k; l++)
    {
        document.write(`${l}`);
    }
} 

// l =1 0<1; 1<1

// l=0  0<2; l=1 1<2; l=2 2<2

// l=0 0<3; l=1 1<3;l=2 2<3;l=3 3<3

let array11 = ["mango", "apple", "orange", "grapes"];

for(let i = 0; i < array.length ; i++)
{
    document.write(`<br>array[${i}]= ${array[i]}`);
}
document.write(`<br> length = ${array.length}`);
document.write(`<br>  ${array[3]}`);


syntax 
for( variable in arrayName ){

}

for (let i in array) {
    document.write(`<br>${i} = ${array[i]}`);
}

let object1 = {
    name1: "kaushik",
    name2: "kavin",
    name3: "kavin kumar",
    name4: "aldrin",
}

for( let na in object )
{
    document.write(`<br> ${na} = ${object[na]}`);
}

let array1 = ["mango", "apple", "orange", "grapes"];


for( let tt of array )
{
    document.write(`<br>${tt}`);
}


let object = {
    name1: "kaushik",
    name2: "kavin",
    name3: "kavin kumar",
    name4: "aldrin",
}

for( let ss of object ) // only for arrays not work in the objects.
{
    document.write(`<br> ${object[ss]}`);
}

let variable = (item)=>{
    document.write(`<br> ${item} `);
}

let veg1 = ["carrot","beetroot","tomato","potato"];

veg.forEach((item) => {
    document.write(`<br> ${item}`);
});

veg.forEach(variable);



let veg = ["carrot","beetroot","tomato","potato"];

let text = veg.map((i)=>{
    //let i; this can not be initialized here in map function
    return `<br> ${i}`;
});

document.write(text);

let result = (a,b)=>{
    //a=10,b=20;
    c=a+b;
    return `${c}`;
}

document.write(result(10,20));