let player = document.getElementById("playerCar")
let gameArea = document.getElementById("gameArea")
let scoreText = document.getElementById("score")

let playerX = 125
let score = 0

function startGame(){
score = 0
scoreText.innerText = "Score: 0"
spawnEnemy()
}

function moveLeft(){
if(playerX > 0){
playerX -= 25
player.style.left = playerX + "px"
}
}

function moveRight(){
if(playerX < 250){
playerX += 25
player.style.left = playerX + "px"
}
}

function spawnEnemy(){

let enemy = document.createElement("div")
enemy.classList.add("enemy")

enemy.style.left = Math.floor(Math.random()*250) + "px"

gameArea.appendChild(enemy)

let enemyY = -100

let move = setInterval(()=>{

enemyY += 5
enemy.style.top = enemyY + "px"

let playerRect = player.getBoundingClientRect()
let enemyRect = enemy.getBoundingClientRect()

if(
playerRect.left < enemyRect.right &&
playerRect.right > enemyRect.left &&
playerRect.top < enemyRect.bottom &&
playerRect.bottom > enemyRect.top
){
alert("Game Over! Score: "+score)
location.reload()
}

if(enemyY > 500){
enemy.remove()
score++
scoreText.innerText = "Score: " + score
clearInterval(move)
spawnEnemy()
}

},30)

}
