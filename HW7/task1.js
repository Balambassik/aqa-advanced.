function handleEven() {
    console.log("Number is even")
}

function handleOdd() {
    console.log("Number is odd")
}

function handleNum(num, evenHand, oddHand) {
    if (num % 2 === 0){
        evenHand()
    } else {
        oddHand()
    }
}

handleNum(232, handleEven, handleOdd)