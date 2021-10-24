var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randDiceImageSsource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randDiceImageSsource);
var randomNumber2 =Math.floor(Math.random()*6+1);
var diceimage2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",diceimage2);
if(randomNumber1>randomNumber2)
    {
        document.querySelector("h1").innerHTML ="player 1 wins!!!";
    }
    else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML ="player 2 wins!!!";

    }
    else{
        document.querySelector("h1").innerHTML ="draw!!!";
    }
