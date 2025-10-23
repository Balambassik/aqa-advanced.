const car1 = {
    brand: "Audi",
    model: "TT",
    year: "2017"
}

const car2 = {
    brand: "Mercedes-Benz",
    model: "S-Class",
    owner: "2018"
}

const car3 = {
    ...car2,
    ...car1
}

console.log(car3)