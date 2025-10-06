function divide(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Обидва аргументи повинні бути числами")
    }
    if (denominator === 0) {
        throw new Error("Ділення на 0 неможливе")
    }
    
    return numerator / denominator
}
try {
    console.log(divide(9, 0))
} catch (error) {
    console.log(error)
} finally {
    console.log("Робота завершена")
}