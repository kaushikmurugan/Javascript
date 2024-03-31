let object = [{
    name: "alan",
    age: 25,
    city: "Chennai"
},{
    name: "prasanna",
    age: 25,
    city: "sivagangai"
}]

let objectjas = JSON.stringify(object);
console.log(objectjas);

let jsonobj = `[{
    "name" : "kavin",
    "roll" : 29,
    "stream" : "mechanical"
},{
    "name" : "prasanna",
    "stream" : "chemical"
}]`

let model = JSON.parse(jsonobj);
console.log(model);

