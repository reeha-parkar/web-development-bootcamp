// Randomizing first dice image

var randomNumber1 = Math.ceil(Math.random()*6);

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "./images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);  

// Randomizing second dice image

var randomNumber2 = Math.ceil(Math.random()*6);

var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// Changing the title
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player1 Wins"
}

if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Wins🚩"
}

if (randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "It's a Draw!"
}
