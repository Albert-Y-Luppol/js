//generics
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let docOne = addID({ name: "yoshi", age: 40 });
// let docTwo = addID("Dou");
let docThree = addID({ name: "Tom" });
// let docFour = addID({ name: 12 });
console.log(docOne.name);
let docFive = {
    uid: 1,
    resourceName: "person",
    data: "Sue",
};
let docSix = {
    uid: 1,
    resourceName: "person",
    data: addID({ name: "Sue" }),
};
