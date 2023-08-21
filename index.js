randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1*6)+1);
document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice"+randomNumber1+".png");
randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2*6)+1);
document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "player1 wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML= "player2 wins"
}
else
{document.querySelector("h1").innerHTML= "draw match"};