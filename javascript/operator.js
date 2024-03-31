let values = ()=>{
    let a = Number(document.getElementById("inp1").value);
    let b = Number(document.getElementById("inp2").value);
    if(a>b){
        document.write("A is greater than B");
    }
    else{
        document.write(`B is greater than A`);
    }
}

document.getElementById("gt").addEventListener("click",values);