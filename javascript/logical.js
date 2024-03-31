document.getElementById("btn").addEventListener("click", () => {
    let in1 = Number(document.getElementById("in1").value);
    let sell = document.getElementById("things").value;
    if (in1 >= 5000 && sell == "mobile" || sell == "plastics") {
        document.getElementById("off").innerHTML = "offer Available for 5000rs";
    }
    else {
        document.getElementById("off").innerHTML = "offer Not Available for lessthan 5000rs";
    }
});

document.getElementById("clc").addEventListener("click", () => {
    let exp = document.getElementById("setup").value;
    let dep = document.getElementById("dtp").value;

    // if(exp == "5years"){
    //     document.getElementById("salary").innerHTML = "your salary is 5000000 Lpa"
    // }
    // else if(exp == "2years"){
    //     document.getElementById("salary").innerHTML = "your salary is 2000000 Lpa"
    // }
    // else{
    //     document.getElementById("salary").innerHTML = "your salary is 1000000 Lpa"
    // }

    if (dep == "production") {
        switch (exp) {
            case "5years":
                document.getElementById("salary").innerHTML = "your salary is 5000000 Lpa";
                break;

            case "2years":
                document.getElementById("salary").innerHTML = "your salary is 2000000 Lpa";
                break;

            default:
                document.getElementById("salary").innerHTML = "your salary is 1000000 Lpa";
                break;
        }
    }
    else{
        document.getElementById("salary").innerHTML = "your salary will not be applicable";
    }
});

//syntax
// switch(condition or expression or boolean value)
// {
//     case condition:
//      result;
//     break;

//     case condition:
//         result;
//         break;

//     default :
//         default result;
//         break;
// }