prompt("What is your name?");
prompt("What is their name?");

var random_number = Math.ceil(Math.random()*100);

if (random_number > 70){
    console.log("The random score is " + random_number + " %" + "\nWhoa, that's too much!");
}

if (random_number > 30 && random_number <= 70){
    console.log("The random score is " + random_number + " %" + "\nMeh");
}

else{
    console.log("The random score is " + random_number + " %" + "\nThat is too low");
}


