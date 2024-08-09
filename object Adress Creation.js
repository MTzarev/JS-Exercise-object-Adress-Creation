function objectAdressCreation(obj) {
// let key = Object.keys(obj);
// let value = Object.values(obj)
//let res = [key, value] 
for (let info of Object.entries(obj)) {
    
    //console.log(`${key} -> ${value}`);
    console.log(info.join(` -> `));
}

    console.log();
}
objectAdressCreation({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"});