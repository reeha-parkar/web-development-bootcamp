var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names){
    return names[Math.floor(Math.random()*names.length)] + " is going to buy lunch today!";
}

whosPaying(names);