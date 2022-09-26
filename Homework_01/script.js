function move(x, y)
{
    
}

let canvas = document.getElementById("main_canvas");
let context = canvas.getContext("2d");
context.fillStyle = "#3CCE7B";

context.fillRect(10, 20, 15, 15);

var x = 10;
var y = 10;
var speed = 3;
context.fillRect(x, y, 15, 15);

// #FF6A6A
// #333

//keyup
document.addEventListener("keydown", function(e)
    {
        context.fillStyle = "#FFFFFF";
        context.fillRect(x, y, 15, 15);
        switch(e.code)
        {
            case "KeyW":
                y -= speed;
                break;
            case "KeyA":
                x -= speed;
                break;
            case "KeyS":
                y += speed;
                break;
            case "KeyD":
                x += speed;
                break;
        }
        context.fillStyle = "#3CCE7B";
        context.fillRect(x, y, 15, 15);
    })

// обрабатывать каждую клавишу