let fullDetail = [
    { pid: 1, pname1: "watch", pimg: "New folder/download (4).jpeg", pmodel: "new fantastic", pbrand: "sonata" },
    { pid: 2, pname1: "watch", pimg: "New folder/download (5).jpeg", pmodel: "new fantastic", pbrand: "fast track" },
    { pid: 3, pname1: "watch", pimg: "New folder/download (4).jpeg", pmodel: "new fantastic", pbrand: "titan" },
    { pid: 10, pname1: "watch", pimg: "New folder/download (4).jpeg", pmodel: "new fantastic", pbrand: "titan" },
    { pid: 4, pname1: "laptops", pimg: "New folder/download (1).jpeg", pmodel: "gaming", pbrand: "hp" },
    { pid: 5, pname1: "laptops", pimg: "New folder/download (2).jpeg", pmodel: "professional", pbrand: "hp" },
    { pid: 6, pname1: "laptops", pimg: "New folder/download (3).jpeg", pmodel: "gaming", pbrand: "ausus" },
    { pid: 7, pname1: "phones", pimg: "New folder/download (7).jpeg", pmodel: "gaming", pbrand: "mi" },
    { pid: 8, pname1: "phones", pimg: "New folder/download (8).jpeg", pmodel: "professional", pbrand: "apple" },
    { pid: 9, pname1: "phones", pimg: "New folder/download (9).jpeg", pmodel: "professional", pbrand: "moto" }
];

let all = [
    { pid: 1, pname: "watch", pimg: "New folder/download (4).jpeg" },
    { pid: 2, pname: "laptops", pimg: "New folder/download (1).jpeg" },
    { pid: 3, pname: "phones", pimg: "New folder/download (7).jpeg" }

];



document.getElementById("all").addEventListener("click", () => {

    document.getElementById("display").innerHTML = all.map((allpro) => {

        return `<br> Product ID: ${allpro.pid} <br> Product Name: ${allpro.pname} <br> <img src="${allpro.pimg}" height= "80px" onclick = "watchDetail()">`;

    }).join('');
});

//segregates the defined item
let coll = fullDetail.filter((collect) =>
    collect.pname1 == "watch"
);


let watchDetail = () => {
    console.log(coll);

    let va1 = coll.map((items) => {

        return `<br>product id : ${items.pid} <br>product name : ${items.pname1} <br>product model : ${items.pmodel} <br>product brand : ${items.pbrand} <br> <img src="${items.pimg}" height = "80px">`;

    }).join('');
    document.getElementById("display").innerHTML = `<button style="height : 30px" onclick = "deleteShiftOpp()">Delete</button> <br><button style="height : 30px" onclick = "watchSplice()">Add</button> <br><button style="height : 30px" onclick = "updateStr()">update</button> <br><button style="height : 30px" onclick = "searchOpp()">search</button> <br><button style="height : 30px" onclick = "sortern()">sort</button> ${va1}`;

}

//push operation adds the item at last position
let watchData = () => {
    let nobj = { pid: 11, pname1: "watch", pimg: "New folder/download (7).jpeg", pmodel: "new fan", pbrand: "rozer" };
    console.log("hello");
    coll.push(nobj);
    document.getElementById("display").innerHTML = coll.map((allpro) => {
        return `<br> Product ID: ${allpro.pid} <br>Product Name: ${allpro.pname1} <br> product Model : ${allpro.pmodel} <br> product Brand : ${allpro.pbrand} <br><img src="${allpro.pimg}" height = "80px">`;
    }).join('');
}

//shift operation adds the item at first position
let watchDataFirst = () => {
    let nobj = { pid: 12, pname1: "watch", pimg: "New folder/download (5).jpeg", pmodel: "rolex 001", pbrand: "rolex" };

    coll.unshift(nobj);
    document.getElementById("display").innerHTML = coll.map((allpro) => {
        return `<br> Product ID: ${allpro.pid} <br> Product Name: ${allpro.pname1} <br> product Model : ${allpro.pmodel} <br> product Brand : ${allpro.pbrand} <br> <img src="${allpro.pimg}" height = "80px">`;
    }).join('');
};

//splice operation adds the item btw a specified position
let watchSplice = () => {
    let nobj = { pid: 12, pname1: "watch", pimg: "New folder/download (8).jpeg", pmodel: "rolex 001", pbrand: "rolex" };

    coll.splice(3, 1, nobj);
    document.getElementById("display").innerHTML = coll.map((allpro) => {
        return `<br>Product ID : ${allpro.pid} <br> Product Name : ${allpro.pname1} <br> Product Model : ${allpro.pmodel} <br> Product Brand = ${allpro.pbrand} <br> <img src="${allpro.pimg}" height = "80px">`;
    }).join('');
}

//delete operation it deletes last item
let deleteOpp = () => {
    coll.pop();
    document.getElementById("display").innerHTML = coll.map((allpro) => {
        return `<br> Product ID : ${allpro.pid} <br> Product Name : ${allpro.pname1} <br> Product Model : ${allpro.pmodel} <br> Product Brand = ${allpro.pbrand} <br> <img src="${allpro.pimg}" height = "80px">`;
    }).join('');
}

//shift operation it deletes first item
let deleteShiftOpp = () => {
    coll.shift();
    document.getElementById("display").innerHTML = coll.map((allpro) => {
        return `<br> Product ID : ${allpro.pid} <br> Product Name : ${allpro.pname1} <br> Product Model : ${allpro.pmodel} <br> Product Brand = ${allpro.pbrand} <br> <img src="${allpro.pimg}" height = "80px">`;
    }).join('');
}

//update operation for only one item
let updateOpp = () => {
    let nid = coll.findIndex((uid) => {
        return uid.pid == 10;
    });
    coll[nid].pid = 4;

    document.getElementById("display").innerHTML = coll.map((allpro) => {
        return `<br>Product ID : ${allpro.pid} <br> Product Name : ${allpro.pname1} <br> Product Model : ${allpro.pmodel} <br> Product Brand = ${allpro.pbrand} <br> <img src="${allpro.pimg}" height = "80px">`;
    }).join('');
}

//update operation for more than one item
let updateStr = () => {
    document.getElementById("display").innerHTML = coll.map((allpro) => {
        if (allpro.pname1 == "watch") {
            allpro.pname1 = "BRANDED WATCH";
        }
        return `<br> Product ID : ${allpro.pid} <br> Product Name : ${allpro.pname1} <br> Product Model : ${allpro.pmodel} <br> Product Brand = ${allpro.pbrand} <br> <img src="${allpro.pimg}" height = "80px">`;
    }).join('');
}

//search or find index
let searchOpp = () => {
    let ser = coll.filter(see=> see.pid == 10 && see.pname1 == "watch");
    console.log("hello");
    if (ser) {
        document.getElementById("display").innerHTML = ser.map((allpro) => {
            console.log("hello i am inside");
            return `<br> Product ID : ${allpro.pid} <br> Product Name : ${allpro.pname1} <br> Product Model : ${allpro.pmodel} <br> Product Brand = ${allpro.pbrand} <br> <img src="${allpro.pimg}" height = "80px">`;
        }).join('');
    }
}


//syntax-ternary operator
//(condition)?truestatement:false
//(5<3)?console.log("5 is greater"):console.log("3 is greater")

let sortern = () => {
    let tern = coll.sort((a, b) => {
        //decending order
        //  return (a.pid > b.pid|| a.pmodel > b.pmodel)?-1:0
        //asscending
        return (a.pid > b.pid) ? -1 : 0

    })
    console.log(tern);
    document.getElementById("display").innerHTML = tern.map((allpro) => {
        return `<br> Product ID: ${allpro.pid} <br> Product Name: ${allpro.pname1} <br> <img src="${allpro.pimg}" width = "50px">`
    }).join('');
}