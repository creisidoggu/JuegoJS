function degradado(){
    var grad = ctx.createLinearGradient(0, 800, 0, 0);
    grad.addColorStop(0, color = "white");
    grad.addColorStop(1, color = "white");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 800, 600);
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.rect(0,0,800,600);
    ctx.stroke();
}

function linea(){
    ctx.beginPath();
    ctx.lineWidth = 100;
    ctx.strokeStyle = 'blue';
    ctx.moveTo(-800, -600);
    ctx.lineTo(800, 600);
    ctx.stroke();
}

function circulo(){
    ctx.beginPath();
    ctx.strokeStyle='red';
    ctx.fillStyle='red';
    ctx.arc(400, 300, 150, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
}

function dibujaBalon(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    dibujaPala();
    var image = new Image();
    image.src = 'img/Pelota_peruana.png';
    x += dx;
    y += dy;
    /**
     * Se desplaza en el eje x
     */
    if(x +dx < -5 || x + dx > canvas.width -45){
        dx = -dx;
    }
    /**
     * Se desplaza en el eje y y si llega a cierto punto resetea por muerte
     */
    if(y +dy < -5 ){
        dy = -dy;
    }else if(y +dy > canvas.height -45){
        window.location.reload();
    }
    ctx.drawImage(image, x, y, 50, 50);
    if(derpulsa && palax < canvas.width - palaw){
        palax += 7;
    }else if(izqpulsa && palax > 0){
        palax -= 7;
    }
    /*if (Math.abs(x-x1) < 50 && Math.abs(y-y1) < 50) {
        dx=-dx;
        dy=-dy;
        dx1=-dx1;
        dy1=-dy1;
    }*/
}

function dibujaPala(){
    ctx.beginPath();
    ctx.rect(palax,canvas.height - 20, palaw, palah);
    ctx.fillStyle= "#00FF00";
    ctx.fill();
    ctx.closePath();
}

/*function dibujaBalon2(){
    var image = new Image();
    image.src = 'img/basketball.png'
    x1 += dx1;
    y1 += dy1;
    if(x1 +dx1 < -5 || x1 + dx1 > canvas.width -45){
        dx1 = -dx1;
    }
    if(y1 +dy1 < -5 || y1 + dy1 > canvas.height -45){
        dy1 = -dy1;
    }
    ctx.drawImage(image, x1, y1, 50, 50);
}*/

function keyDownHandler(e){
    if(e.keyCode == 39){
        derpulsa=true;
    }else if(e.keyCode == 37){
        izqpulsa = true;
    }
}

function keyUpHandler(e){
    if(e.keyCode == 39){
        izqpulsa= false;
    }else if(e.keyCode == 37){
        derpulsa = false;
    }
}