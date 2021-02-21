let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake= [];

snake[0] = {
  x: 8 * box,
  y: 8 * box
}

//direção
let direction = "right";

//Background
function criarBG(){
  context.fillStyle = "lightgreen";
  context.fillRect(0 , 0, 16* box, 16 * box);

}


//Cobrinha
function criarCobrinha(){
  for(i=0; i< snake.length; i++){
    context.fillStyle= "green";
    context.fillRect(snake[i].x, snake[i].y, box, box)
  }
}


//atualizar o jogo para movimentar durante o intervalo
function iniciarJogo(){
  criarBG();
  criarCobrinha();

  //posição de inicio
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if(direction == "right") snakeX += box;
  if(direction == "left") snakeX -=box;
  if(direction == "top") snakeY -=box;
  if(direction == "down") snakeY +=box;
  

  snake.pop();
  
  let newHead ={
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead);


}

  //intercalo para iniciar o jogo 
  let jogo = setInterval(iniciarJogo, 100)





