//Script para juego de coder
var words = ['function()','addEventListener','Math.floor((Math.random())','document.getElementById','location.reload','if(array.length > 1){}','console.log(var)','styles.cc','<title>', '</title>']
var score = 0;
var round = 0;
var timer = 0;
var rdm = 0;
var ksc = 0;
var dspWord = words[rdm];
var xpos = 0
var xspd = 5

window.onload = function(){
  var startBtn = document.getElementById("btnStart");
  startBtn.addEventListener('click',getWord);
  
  var cajadetexto = document.getElementById("cajatexto");
  cajadetexto.addEventListener('change', evaluaPalabra);
  cajadetexto.addEventListener('keyup', evaluaPalabra);
  cajadetexto.addEventListener('keyup',keyCount); 
  cajadetexto.addEventListener('focus',startTimer);
}

//1.0 Elegir la palabra
function getWord(){
rdm = Math.floor((Math.random() * words.length-1) + 1);
  console.log('Word:                         '      + words[rdm]);
console.log('Random:     ' + rdm)
//document.getElementById("printWord").innerHTML = words[rdm];
document.getElementById("cajatexto").value ="";
focusTextBox();
dspWord = words[rdm];
draw();
}

// 2.0 Evalua palabra!
function evaluaPalabra(){
  console.log(this.value === words[rdm]) 
  if (this.value === words[rdm]){
     score = score + words[rdm].length;
     round = round + 1;
     document.getElementById("wordCount").innerHTML = 'Palabras:  ' + round;
     console.log(score);
     document.getElementById("scoreBoard").innerHTML = 'Score:   ' + score;
    words.splice(rdm,1);
    console.log("round: " + round ) 
    console.log(words); 
    getWord();
    wordsLeft();
    draw();
    xpos=0;
    xspd=5;
  } 
}
//3.0 Esperar el final del array
function wordsLeft(){
  if(words.length === 0){
    //document.getElementById("printWord").innerHTML = "Buen Trabajo!";
    //document.getElementById("printWord").style.color = 'Green';
   alert("Terminaste!!, Palabras: " + round + "  Precisión:  " + acc +"%   Tiempo: "+ (timer/10).toFixed(1) + 's');
   clearTimer();
  }
}

//4.0 Analizar precisión y feedback

function keyCount(){
  ksc = ksc + 1
  xspd = xspd + .5
  document.getElementById("keystrokeCount").innerHTML = "Keystrokes: "+ ksc;
  acc = (parseFloat((score/ksc)).toFixed(2))*100;
  document.getElementById("accCount").innerHTML = "Precisión: " + acc + " %";

}

//5.0 Mover el foco al textbox cuando start aplica
function focusTextBox(){
  document.getElementById("cajatexto").focus();
}

//6.0 Velocidad, animación y timer update
function startTimer(){
  setInterval(function(){
    timer = timer + 1;
    xpos = xpos + xspd;
    console.log(timer);
    updateCnv();
    document.getElementById("timer").innerHTML = "Tiempo:  " + (timer/10).toFixed(1);
  },100)
}

//7.0 Reset Timer
function clearTimer(){
  clearInterval(timer);
}