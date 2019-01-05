

function draw(){
    var canvas = document.getElementById('tablero');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 550, 150);  
    ctx.font = '48px Courier New';
    ctx.strokeText(dspWord, xpos, 100);
    }
  
  function clearCnv(){
    var canvas = document.getElementById('tablero');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  
  function updateCnv(){
    var canvas = document.getElementById('tablero');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '48px Courier New';
    ctx.strokeText(dspWord, 1+xpos, 100);
  
  
    
  }