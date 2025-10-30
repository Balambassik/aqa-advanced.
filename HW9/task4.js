const person = {
  firstName: "Denis",
  lastName: "Kukolnik",
  age: 15,
};

person.email = "DenisKukolnik@gmail.com";
delete person.age;

console.log(person);
