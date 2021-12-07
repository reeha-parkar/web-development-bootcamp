var array = [];
var element = 1;

function fizzBuzz(){
    if(element%3 == 0 && element%5 == 0){
        array.push("FizzBuzz");
    }
    if(element%3 == 0 && element%5 != 0){
        array.push("Fizz");
    }
    if(element%3 != 0 && element%5 == 0){
        array.push("Buzz");
    }
    if(element%3 != 0 && element%5 != 0){
        array.push(element);
    }
    element++;
    console.log(array);
}

fizzBuzz();