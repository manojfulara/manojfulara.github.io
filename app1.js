
	var c,m;
    var active=0;
   function input(y){
    c=y;
    if(c=="X"){m="O";}
    else{m="X";active=1;}


   }
 function newgame(){

    document.location.reload();
 }


	var flag=0;
	
	var count=0,k=0,j=0;
	var  count1=0,count2=0;
	
 function test(e){
    if(c==undefined){c="X"; m="O";}
if(flag==0){ flag=1 ; count++;document.getElementById("q").style.backgroundColor = "blue";
     document.getElementById(e.id).value=c; active=0;}
else if(flag==1){flag=0 ;count++;document.getElementById("q").style.backgroundColor = "violet";
     document.getElementById(e.id).value=m; active=1;}
 process(count);

 }
function process(count){
if(count>=4){ 
  
  	 if(document.getElementById("0").value=="X"&&document.getElementById("1").value=="X"&&document.getElementById("2").value=="X")
      { document.getElementById("p2").style.backgroundColor = "violet";
if(active==0){document.getElementById("p2").innerHTML="player 1 won";}
else if(active==1){document.getElementById("p2").innerHTML="player 2 won";}
document.body.style.backgroundImage = "url('B.gif')";
 }

     else if(document.getElementById("3").value=="X"&&document.getElementById("4").value=="X"&&document.getElementById("5").value=="X")
      {document.getElementById("p2").style.backgroundColor = "violet";

 if(active==0){document.getElementById("p2").innerHTML="player 1 won";}
else if(active==1){document.getElementById("p2").innerHTML="player 2 won";}
document.body.style.backgroundImage = "url('B.gif')";
  }


     else if(document.getElementById("6").value=="X"&&document.getElementById("7").value=="X"&&document.getElementById("8").value=="X")
      {document.getElementById("p2").style.backgroundColor = "violet";

if(active==0){document.getElementById("p2").innerHTML="player 1 won";}
else if(active==1){document.getElementById("p2").innerHTML="player 2 won";}
document.body.style.backgroundImage = "url('B.gif')";
}


     else if(document.getElementById("0").value=="X"&&document.getElementById("4").value=="X"&&document.getElementById("8").value=="X"){ document.getElementById("p2").style.backgroundColor = "violet";

if(active==0){document.getElementById("p2").innerHTML="player 1 won";}
else if(active==1){document.getElementById("p2").innerHTML="player 2 won";} 
document.body.style.backgroundImage = "url('B.gif')";
}


     else if(document.getElementById("2").value=="X"&&document.getElementById("4").value=="X"&&document.getElementById("6").value=="X"){ document.getElementById("p2").style.backgroundColor = "violet";

 if(active==0){document.getElementById("p2").innerHTML="player 1 won";}
else if(active==1){document.getElementById("p2").innerHTML="player 2 won";}
document.body.style.backgroundImage = "url('B.gif')";
  }


     else if(document.getElementById("0").value=="X"&&document.getElementById("3").value=="X"&&document.getElementById("6").value=="X"){ document.getElementById("p2").style.backgroundColor = "violet";

 if(active==0){document.getElementById("p2").innerHTML="player 1 won";}
else if(active==1){document.getElementById("p2").innerHTML="player 2 won";} 
document.body.style.backgroundImage = "url('B.gif')";
}


     else if(document.getElementById("1").value=="X"&&document.getElementById("4").value=="X"&&document.getElementById("7").value=="X"){document.getElementById("p2").style.backgroundColor = "violet";

 if(active==0){document.getElementById("p2").innerHTML="player 1 won";}
else if(active==1){document.getElementById("p2").innerHTML="player 2 won";}
document.body.style.backgroundImage = "url('B.gif')";
}


     else if(document.getElementById("2").value=="X"&&document.getElementById("5").value=="X"&&document.getElementById("8").value=="X"){ document.getElementById("p2").style.backgroundColor = "violet";

 if(active==0){document.getElementById("p2").innerHTML="player 1 won";}
else if(active==1){document.getElementById("p2").innerHTML="player 2 won";} 
document.body.style.backgroundImage = "url('B.gif')";
}
//change for o
else if(document.getElementById("0").value=="O"&&document.getElementById("1").value=="O"&&document.getElementById("2").value=="O"){ document.getElementById("p2").style.backgroundColor = "lightblue";
if(active==0){document.getElementById("p2").innerHTML="player 1 won";}
else if(active==1){document.getElementById("p2").innerHTML="player 2 won";}
document.body.style.backgroundImage = "url('B.gif')";
}

     else if(document.getElementById("3").value=="O"&&document.getElementById("4").value=="O"&&document.getElementById("5").value=="O"){ document.getElementById("p2").style.backgroundColor = "lightblue";

 if(active==0){document.getElementById("p2").innerHTML="player 1 won";}
else if(active==1){document.getElementById("p2").innerHTML="player 2 won";}
document.body.style.backgroundImage = "url('B.gif')";
}


     else if(document.getElementById("6").value=="O"&&document.getElementById("7").value=="O"&&document.getElementById("8").value=="O"){ document.getElementById("p2").style.backgroundColor = "lightblue";

 if(active==0){document.getElementById("p2").innerHTML="player 1 won";}
else if(active==1){document.getElementById("p2").innerHTML="player 2 won";}
document.body.style.backgroundImage = "url('B.gif')";
}


     else if(document.getElementById("0").value=="O"&&document.getElementById("4").value=="O"&&document.getElementById("8").value=="O"){ document.getElementById("p2").style.backgroundColor = "lightblue";

 if(active==0){document.getElementById("p2").innerHTML="player 1 won";}
else if(active==1){document.getElementById("p2").innerHTML="player 2 won";}
document.body.style.backgroundImage = "url('B.gif')";
}


     else if(document.getElementById("2").value=="O"&&document.getElementById("4").value=="O"&&document.getElementById("6").value=="O"){ document.getElementById("p2").style.backgroundColor = "lightblue";

 if(active==0){document.getElementById("p2").innerHTML="player 1 won";}
else if(active==1){document.getElementById("p2").innerHTML="player 2 won";}
document.body.style.backgroundImage = "url('B.gif')";
  }


     else if(document.getElementById("0").value=="O"&&document.getElementById("3").value=="O"&&document.getElementById("6").value=="O"){ document.getElementById("p2").style.backgroundColor = "lightblue";

 if(active==0){document.getElementById("p2").innerHTML="player 1 won";}
else if(active==1){document.getElementById("p2").innerHTML="player 2 won";}
document.body.style.backgroundImage = "url('B.gif')";
  }


     else if(document.getElementById("1").value=="O"&&document.getElementById("4").value=="O"&&document.getElementById("7").value=="O"){ document.getElementById("p2").style.backgroundColor = "lightblue";

 if(active==0){document.getElementById("p2").innerHTML="player 1 won";}
else if(active==1){document.getElementById("p2").innerHTML="player 2 won";}
document.body.style.backgroundImage = "url('B.gif')";
}


     else if(document.getElementById("2").value=="O"&&document.getElementById("5").value=="O"&&document.getElementById("8").value=="O"){ document.getElementById("p2").style.backgroundColor = "lightblue";

 if(active==0){document.getElementById("p2").innerHTML="player 1 won";}
else if(active==1){document.getElementById("p2").innerHTML="player 2 won";}
document.body.style.backgroundImage = "url('B.gif')";
}

else if(count==9){document.getElementById("p2").style.backgroundColor = "orange";
document.getElementById("q").style.backgroundColor = "orange";

 document.getElementById("p2").innerHTML="Game is draw ";
document.body.style.backgroundImage = "url('B.gif')";
}

}}
