function convert_coordinate(x, y)
{
    if ((x < canvas.width) & (y < canvas.height))
    {
        return(y*(canvas.width)*4+x*4)
    }
}

function draw_graph()
{
    if (x >= canvas.width)
    {
        return
    }
    let y = Math.floor(Math.sin(x/scale)*scale + graph_axis);
    // console.log(y)
    image_data.data[convert_coordinate(x, y)+1] = 255;
    image_data.data[convert_coordinate(x, y)+3] = 255;
    context.putImageData(image_data, 0, 0);
    x++;
}

let canvas = document.getElementById("main_canvas");Homework_02/script.js
let context = canvas.getContext("2d");
var scale = 30;
var graph_axis = 50;
var x = 0;

var image_data = context.getImageData(0, 0, canvas.width, canvas.height);
setInterval(draw_graph, 10);

// Кнопка для сохранения изображения
download_img = function(element)
{
    element.href = canvas.toDataURL("image_sin/jpg");
};