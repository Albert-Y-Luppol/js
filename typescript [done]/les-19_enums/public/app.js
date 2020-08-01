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
//Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["DIRECTOR"] = 2] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 3] = "PERSON";
})(ResourceType || (ResourceType = {}));
let docFive = {
    uid: 1,
    resourceType: ResourceType.AUTHOR,
    data: "Sue",
};
let docSix = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: addID({ name: "Sue" }),
};
console.log(docFive, docSix);
