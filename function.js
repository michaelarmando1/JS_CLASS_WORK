// FUNCTIONS Declarations

function world() {
    return "Hello World";
}

console.log(world());

// function Expression

const greet = function () {
    return "Hello World 2";
}

console.log(greet());

// Arrow Function

const newGreet = () => {
    return "Hello World 3";
}

console.log(newGreet());

function upperCase(string) {
    let upper = string.toUpperCase();
    return upper;
}

console.log(upperCase("maya"));

let addition = function (a, b, c) {
    let sum = a + b + c;

    console.log(sum);
}

addition(1,2,3);