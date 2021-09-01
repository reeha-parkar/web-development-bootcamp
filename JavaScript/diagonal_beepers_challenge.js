/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   //your code here
   putBeeper();
   goStraightTillTheEnd();
   rightToLeft();
   leftToRight();
   rightToLeft();
   leftToRight();
   
}

function goStraight(){
   move();
   move();
   putBeeper();
}

function goStraightTillTheEnd(){
   
   while(frontIsClear()){
         goStraight();
      }
}

function rightToLeft(){
   turnLeft();
   move();
   turnLeft();
   move();
   putBeeper();
   goStraight();
}

function leftToRight(){
   move();
   turnRight();
   move();
   putBeeper();
   turnRight();
   goStraightTillTheEnd();
}



