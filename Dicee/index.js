// selector
const img1=document.querySelector(".img1");
const img2=document.querySelector(".img2");
const h1=document.querySelector("h1");
// variable
const randomNumber1=Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
const randomNumber2=Math.floor(Math.random()*6)+1;

img1.setAttribute("src","images/dice"+randomNumber1+".png");
img2.setAttribute("src","images/dice"+randomNumber2+".png");


if(randomNumber1>randomNumber2){
    h1.innerHTML="🚩 Player 1 Wins!";
}else if(randomNumber1<randomNumber2){
    h1.innerHTML="Player 2 Wins! 🚩";
}else{
    h1.innerHTML="Draw!";
}