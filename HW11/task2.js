function getToDo() {
    return fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    .then(res => res.json())
    .then(todo => {
        console.log("Отримав todo", todo)
        return todo;
    })
    .catch((err) => {
        console.log("Fetch error", err.message);
        throw err;
    })

}
getToDo()

function getUser() {
    return fetch(`https://jsonplaceholder.typicode.com/users/1`)
    .then(res => res.json())
    .then(user => {
        console.log("Отримав user", user)
        return user
    })
    .catch((err) => {
        console.log("Fetch error", err.message);
        throw err;
    })
}

Promise.all([getToDo(), getUser()])
    .then(([getToDo, getUser]) => {
        const allResult = {getToDo, getUser}
        console.log('Весь результат ', allResult)
    })
    .catch(err => console.log("Помилка в Promises", err))

Promise.race([getToDo(),getUser()])
    .then((firstResult) => {
        const firstRaceResult = firstResult
        console.log('Весь результат(рейс)', firstRaceResult)
    })
    .catch(err => console.log("Помилка в Promises(race)", err))
