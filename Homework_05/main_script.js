let canvas = document.getElementById("main_canvas");
let context = canvas.getContext("2d");

function gaussian_func(x, y, sigma=1.5)
{
    return Math.exp(-(Math.pow(x, 2) + Math.pow(y, 2)) / (2*Math.pow(sigma, 2))) / (Math.PI*2*Math.pow(sigma, 2));
}

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(matrix[1][2]) // = 6

let RADIUS = 1;
let weights_matrix = [];
let amount = 0;


// Заполняем матрицу
for (let i = 0; i < RADIUS*2+1; i++)
{
    array = [];
    for (let j = 0; j < RADIUS*2+1; j++)
    {
        let gauss_value = gaussian_func(i-RADIUS, j-RADIUS)
        amount += gauss_value;
        array.push(gauss_value);
    }
    weights_matrix.push(array);
}

for (let i = 0; i < RADIUS*2+1; i++)
{
    for (let j = 0; j < RADIUS*2+1; j++)
    {
        weights_matrix[i][j] = weights_matrix[i][j] / amount;
    }
}

// // Загружаем изображение
// let img = await loadImage("./my/image/path.jpg");
// ctx.drawImage(img, 0, 0);

let image = new Image();

// image.src = window.URL.createObjectURL(input.files[0]);

context.drawImage(image, 0, 0);


upload_img = function(input)
{
    image.src = window.URL.createObjectURL(input.files[0]);
    context.drawImage(image, 0, 0);
    var image_data = context.getImageData(0, 0, canvas.width, canvas.height);
    context.putImageData(image_data, 0, 0);
    input.value = '';
};

console.log(weights_matrix);
