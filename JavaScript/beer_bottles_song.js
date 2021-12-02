var beerCount = 99;

function beer(){

    while (beerCount>=2){
        console.log(beerCount + " bottles of beer on the wall, " + beerCount + " bottles of beer. Take 1 down, pass it around, " + (beerCount-1) + " bottles of beer on the wall.");
        beerCount--;
    }

    if (beerCount==1){
        console.log(beerCount + " bottle of beer on the wall, " + beerCount + " bottle of beer. Take 1 down, pass it around, no more bottles of beer on the wall.");
        beerCount--; 
    }

    if (beerCount==0){
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall");
    }
}
