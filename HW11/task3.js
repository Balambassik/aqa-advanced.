async function getToDo(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        const todo = await response.json()
    
        return todo
    } catch(err) {
        console.log("Fetch error", err.message)
    }
}


async function getUser(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
        const user = await response.json()

        return user
    } catch(err) {
        console.log("Fetch error", err.message)
    }
}

//Promise.all and Promise.race

async function prom() {
    try {
        const [todo, user] = await Promise.all([getToDo(), getUser()])
        console.log("Весь результат", {todo, user})

        const firstResult = await Promise.race([getToDo(),getUser()])
        console.log("Перший", firstResult)
    } catch (err) {
        console.log("Помилка в Promises", err.message)
    }
}

prom()