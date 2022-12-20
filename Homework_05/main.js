const canvas = document.getElementById("main_canvas");
const ctx = canvas.getContext("2d");

function convert_coordinate(x, y)
{
    if ((x < canvas.width) & (y < canvas.height))
    {
        return(y*(canvas.width)*4+x*4)
    }
}

function value(image_data, x, y, i)
{
    return image_data.data[convert_coordinate(x, y)+i];
}

function multiply_matrix(matrix1, matrix2)
{
    let result_matrix = [];
    for (let i = 0; i < matrix1.length; i++)
    {
        result_matrix.push([]);
        for (let j = 0; j < matrix2[0].length; j++)
        {
            console.log(matrix1[i][j]);
            result_matrix[i].push(matrix1[i][j] * matrix2[i][j]);
        }
    }

    return result_matrix;
}

function calculate_amount_of_matrix(matrix)
{
    let amount = 0;
    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[0].length; j++)
        {
            amount += matrix[i][j];
        }
    }

    return amount;
}

function division_matrix(matrix, value)
{
    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[0].length; j++)
        {
            matrix[i][j] = matrix[i][j] / value;
        }
    }

    return matrix;
}

function gauss_filter(img_data)
{
    let new_img_data = img_data;

    let gauss_filter_weights = [
        [1, 2, 1],
        [2, 4, 2],
        [1, 2, 1]
    ]

    for (let x = 1; x < canvas.width; x++)
    {
        for (let y = 1; y < canvas.height; y++)
        {
            // image_data.data[convert_coordinate(x), convert_coordinate(y)]
            let m_r = [
                [value(img_data, x-1, y+1, 0), value(img_data, x, y+1, 0), value(img_data, x+1, y+1, 0)],
                [value(img_data, x-1, y, 0), value(img_data, x, y, 0), value(img_data, x+1, y, 0)],
                [value(img_data, x-1, y-1, 0), value(img_data, x, y-1, 0), value(img_data, x+1, y-1, 0)]
            ]

            let m_g = [
                [value(img_data, x-1, y+1, 1), value(img_data, x, y+1, 1), value(img_data, x+1, y+1, 1)],
                [value(img_data, x-1, y, 1), value(img_data, x, y, 1), value(img_data, x+1, y, 1)],
                [value(img_data, x-1, y-1, 1), value(img_data, x, y-1, 1), value(img_data, x+1, y-1, 1)]
            ]

            let m_b = [
                [value(img_data, x-1, y+1, 2), value(img_data, x, y+1, 2), value(img_data, x+1, y+1, 2)],
                [value(img_data, x-1, y, 2), value(img_data, x, y, 2), value(img_data, x+1, y, 2)],
                [value(img_data, x-1, y-1, 2), value(img_data, x, y-1, 2), value(img_data, x+1, y-1, 2)]
            ]

            let new_m_r = multiply_matrix(gauss_filter_weights, m_r);
            let new_m_g = multiply_matrix(gauss_filter_weights, m_g);
            let new_m_b = multiply_matrix(gauss_filter_weights, m_b);

            amount_r = calculate_amount_of_matrix(new_m_r);
            amount_g = calculate_amount_of_matrix(new_m_g);
            amount_b = calculate_amount_of_matrix(new_m_b);

            new_m_r = division_matrix(new_m_r, amount_r);
            new_m_g = division_matrix(new_m_g, amount_g);
            new_m_b = division_matrix(new_m_b, amount_b);

            new_img_data.data[convert_coordinate(x, y)] = new_m_r[];
        }
    }
}



const reader = new FileReader();
const img = new Image();

const upload_image = (e) => {
    reader.onload = () => {
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            // Отображение изображения
            // ctx.drawImage(img, 0, 0);
            var image_data = context.getImageData(0, 0, canvas.width, canvas.height);

            
        };
        img.src = reader.result;    
    };
    reader.readAsDataURL(e.target.files[0]);    
};

const imageLoader = document.getElementById("uploader");
imageLoader.addEventListener("change", upload_image);



let m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let m1 = [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2]
]

console.log(m[1][1]*m1[1][1]);
console.log(m[1].length);
res = multiply_matrix(m, m1);
console.log(res);
