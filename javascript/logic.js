//Script para juego de precisión 
var words = ['hola','perro','gato','estas','son','las','palabras','del','juego', 'edificio', 'jamón', 'sorpresa','comida','barista','techo','conexión','pluma','quebrado']
var score = 0;
var round = 0;
var timer = 0;
var rdm = 0;
var ksc = 0;
var dspWord = words[rdm];

window.onload = function(){
  var startBtn = document.getElementById("btnStart");
  startBtn.addEventListener('click',getWord);
  
  var cajadetexto = document.getElementById("cajatexto");
  cajadetexto.addEventListener('change', evaluaPalabra);
  cajadetexto.addEventListener('keyup', evaluaPalabra);
  cajadetexto.addEventListener('keyup',keyCount);  
}

//1.0 Elegir la palabra
function getWord(){
rdm = Math.floor((Math.random() * words.length-1) + 1);
  console.log('Word:                         '      + words[rdm]);
console.log('Random:     ' + rdm)
document.getElementById("printWord").innerHTML = words[rdm];
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
     round = +1;
     console.log(score);
     document.getElementById("scoreBoard").innerHTML = 'Score:   ' + score;
    words.splice(rdm,1);
    console.log("round: " + round ) 
    console.log(words); 
    getWord();
    wordsLeft();
    draw();
  } 
}
//3.0 Esperar el final del array
function wordsLeft(){
  if(words.length === 0){
    document.getElementById("printWord").innerHTML = "Buen Trabajo!";
    document.getElementById("printWord").style.color = 'Green';
   alert("Terminaste!!, Score: " + score + "  Precisión:  " + acc);
  }
}

//4.0 Analizar precisión y feedback

function keyCount(){
  ksc = ksc + 1
  document.getElementById("keystrokeCount").innerHTML = "Keystrokes: "+ ksc;
  acc = (parseFloat((score/ksc)).toFixed(2))*100;
  document.getElementById("accCount").innerHTML = "Precisión: " + acc + " %";
}

//5.0 Mover el foco al textbox cuando start aplica
function focusTextBox(){
  document.getElementById("cajatexto").focus();
}


//6.0 Funcion que borra el Canvas en canvas.jss