const users = [
    {name: "Lolnik", email: "Lolnikow@gmail.com", age: 44},
    {name: "Vania", email: "Vanilka@gmail.com", age : 12},
    {name: "Vova", email: "Vov4ik@gmail.com", age: 22},
]

for (const {name, email, age} of users) {
    console.log(name, email, age)
}