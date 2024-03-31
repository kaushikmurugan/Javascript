console.log(window.innerHeight);
console.log(window.innerWidth);

let fun = () => {
    window.scrollTo(0, 200)
};

let start = () => {
    let windowOpen = window.open("https://whytap.in/", "", "height = 300px, width = 500px");
    setTimeout(() => {
        windowOpen.close();

    }, 7000);
}

document.getElementById("para").addEventListener("mouseover", () => {
    setTimeout(() => {
        document.body.style.backgroundColor= `lightblue`;
    }, 1000);
});

document.getElementById("interval").addEventListener("alick",()=>{
    const interval = setInterval(() => {
        let a=1,b=2,c;
        c=a+b;
        document.write(c);
    }, 1000);
    clearInterval(interval);
});