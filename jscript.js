var rnum1=Math.floor( Math.random()*6+1 );
var rnum2=Math.floor(Math.random()*6+1);
var heading=document.querySelector(".container h1 ");

var ts="images/dice" + rnum1 + ".png";
document.querySelector(".img1").src=ts;
var  tts="images/dice" + rnum2 + ".png";
 document.querySelector(".img2").src=tts;

 if( rnum1>rnum2 ) {
    heading.innerHTML="Player 1 Wins ";
}
else if( rnum2>rnum1) { 
    heading.innerHTML="Player 2 Wins ";
}
else heading.innerHTML="Draw";
