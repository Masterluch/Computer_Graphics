let canvas = document.getElementById("main_canvas");
let context = canvas.getContext("2d");

context.fillStyle = "#3CCE7B";
line_color = "#3CCE7B";

mouse_handler = new MouseHandler(canvas, context);

canvas.addEventListener('mousedown', function(e) {
    mouse_handler.handling(e)
})
