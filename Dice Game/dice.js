var firstRandomNmuber = Math.floor(Math.random()*6)+1;
var firstDice = "img dice/dice" + firstRandomNmuber +".jpg";
document.querySelectorAll("img")[0].setAttribute("src", firstDice );


var secondRandomNmuber = Math.floor(Math.random()*6)+1;
var secondDice = "img dice/dice" + secondRandomNmuber +".jpg";
document.querySelectorAll("img")[1].setAttribute("src", secondDice );


if(firstRandomNmuber > secondRandomNmuber){
    document.querySelector("h1").innerHTML ="Player one wins!"
}else if(firstRandomNmuber < secondRandomNmuber){
    document.querySelector("h1").innerHTML ="Player two wins!"
}else{
    document.querySelector("h1").innerHTML ="Draw!!!!!!"
}