var randomNumber1=(Math.floor(Math.random()*6)+1); //dice from 1-6

var randomDiceImage1="dice"+randomNumber1+".png"; //images from dice1-dice6 i.e. dice1.png-dice2.png

var randomDiceImageSource1="/img/"+randomDiceImage1;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImageSource1);


var randomNumber2=(Math.floor(Math.random()*6)+1); //dice from 1-6

var randomDiceImage2="dice"+randomNumber2+".png"; //images from dice1-dice6 i.e. dice1.png-dice2.png

var randomDiceImageSource2="/img/"+randomDiceImage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImageSource2);


if(randomNumber1>randomNumber2)
{
    document.querySelector("h3").innerHTML="Player 1 wins the Game";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h3").innerHTML="Player 2 wins the Game";
}
else{
    document.querySelector("h3").innerHTML="Draw";
}

