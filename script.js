let score = 0,com=0,max=0;
function bt(num){
  com=Math.floor(Math.random()*7);
  if(num==com){
    let highScore = document.getElementById("highScore");
    alert("Game Over");
    if(score>max){
      highScore.innerHTML=score;
      max=score;
    }
    score=0;
  }
  else{
    score+=num;
    document.getElementById("score").innerHTML=score;
  }
}