

var roll_btn=document.getElementById("roll_btn")
roll_btn.addEventListener("click",function(e){
    var randomno1=Math.floor(Math.random()*6)+1


var randomimg1="images/dice"+randomno1+".png"
var expr1=document.getElementById("expr1")
var expr2=document.getElementById("expr2")
var smile="images/smile.png"
var sad="images/sad.png"
var draw="images/draw.png"

var img1=document.getElementById("img1")
img1.setAttribute("src",randomimg1)

var randomno2=Math.floor(Math.random()*6)+1
var randomimg2="images/dice"+randomno2+".png"
var img2=document.getElementById("img2")
img2.setAttribute("src",randomimg2)

var respointer=document.getElementById("res")
 if(randomno1>randomno2)
    {
        respointer.innerHTML="Player 1 has won"
        expr1.setAttribute("src",smile)
        expr2.setAttribute("src",sad)
    }
else if(randomno2>randomno1)
    {
        respointer.innerHTML="Player 2 has won"
        expr1.setAttribute("src",sad)
        expr2.setAttribute("src",smile)
    }
else
    {
        respointer.innerHTML="Draw"
        expr1.setAttribute("src",draw)
        expr2.setAttribute("src",draw)
    }

var text=document.getElementById("text")
text.innerHTML="Click on the Roll Buttun to Roll the Dice."
})
    