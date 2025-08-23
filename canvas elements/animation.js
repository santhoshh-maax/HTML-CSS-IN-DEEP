let canvas = document.getElementById("my_canvas");
let content = canvas.getContext("2d");

const speed = 4;
let position = 0;
let moveSpeed = speed;
let radius = 40;

function moveBall(){
    if(position + radius > 640){
        moveSpeed = -speed;
    }
    else if(position - radius < 0){
        moveSpeed = speed;
    }
    position += moveSpeed;
}

function drawBall(){
    content.clearRect(0, 0, 640, 480);

    content.fillStyle ="#0433f2ff";
    content.beginPath();
    content.arc(position, 50, radius, 0,2 * Math.PI);
    content.fill();
}

function animate(){
    moveBall();
    drawBall();
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);
