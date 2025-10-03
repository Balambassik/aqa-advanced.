// function declaration
function areaRectangle1(width, height) {
    return (width * height)
}

// fuction expression 
const areaRectangle2 = function(width, height) {
    return (width * height)
}

// arrow function
const areaRectangle3 = (width, height)=> {
    return (width * height)
}



console.log("Declaration", areaRectangle1(5, 10))
console.log("Expression", areaRectangle2(4, 9))
console.log("Arrow", areaRectangle3(3, 8))