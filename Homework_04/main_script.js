let canvas = document.getElementById("main_canvas");
let context = canvas.getContext("2d");

function dFs(x, y)
{
    return 4*y + 6;
}

function dFd(x, y)
{
    return 4*x + 4*y + 10;
}

let R = 100;
let x = -R;
let y = 0;
let F = 1 - 2*R;
let SHIFT = 250;
while (y < Math.abs(x))
{
    context.fillRect(x+SHIFT, y+SHIFT, 1, 1);
    context.fillRect(-x+SHIFT, y+SHIFT, 1, 1);
    context.fillRect(x+SHIFT, -y+SHIFT, 1, 1);
    context.fillRect(-x+SHIFT, -y+SHIFT, 1, 1);
    context.fillRect(y+SHIFT, x+SHIFT, 1, 1);
    context.fillRect(-y+SHIFT, x+SHIFT, 1, 1);
    context.fillRect(y+SHIFT, -x+SHIFT, 1, 1);
    context.fillRect(-y+SHIFT, -x+SHIFT, 1, 1);
    
    if (F < 0)
    {
        F += dFs(x, y);
        y++;
    }
    else
    {
        F += dFd(x, y);
        x++;
        y++;
    }
}