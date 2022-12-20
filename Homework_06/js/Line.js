class Line
{
    constructor(point_1, point_2)
    {
        this.point_1 = point_1;
        this.point_2 = point_2;
    }

    set_pixel(context, x, y, color)
    {
        context.fillStyle = color;
        context.fillRect(x-5, y-6, 2, 2);
    }

    draw(context, color, x1 = this.point_1.x, y1 = this.point_1.y, x2 = this.point_2.x, y2 = this.point_2.y)
    {
        let dx = x2 - x1;
        let dy = y2 - y1;
        
        let sign_x = (dx > 0) ? 1 : (dx < 0) ? -1 : 0;
        let sign_y = (dy > 0) ? 1 : (dy < 0) ? -1 : 0;
        
        if (dx < 0) { dx = -dx; }
        if (dy < 0) { dy = -dy; }
        
        if (dx > dy)
        {
            var pdx = sign_x;
            var pdy = 0;
            var es = dy;
            var el = dx;
        }
            
        else
        {
            var pdx = 0;
            var pdy = sign_y;
            var es = dx;
            var el = dy;
        }
        
        let x = x1;
        let y = y1;
        let error = el/2;
        let t = 0;       
        
        this.set_pixel(context, x, y, color);
        
        while (t < el)
        {
            error -= es
            if (error < 0)
            {
                error += el;
                x += sign_x;
                y += sign_y;
            } 
            else
            {
                x += pdx;
                y += pdy;
            }
                
            t += 1;
            this.set_pixel(context, x, y, color);
        }
    }

    static are_arrays_the_same(array_1, array_2)
    {
        if (array_1.length != array_2.length) { return false; }

        for (let i = 0; i < array_1.length; i++)
        {
            if (array_1[i] != array_2[i])
            {
                return false;
            }
        }
        return true;
    }

    static is_array_has_one_bit(array)
    {
        let is_bit_found = false;
        for (let i = 0; i < array.length; i++)
        {
            if (array[i] == 1)
            {
                if (is_bit_found == true) { return false; }
                else { is_bit_found = true; }
            }
        }
        return is_bit_found;
    }

    check_conditions_and_draw(context, color, area_x1, area_x2, area_y1, area_y2)
    {
        if ((Line.are_arrays_the_same(this.point_1.bit_array, this.point_2.bit_array)) && (Line.are_arrays_the_same(this.point_1.bit_array, [0, 0, 0, 0])))
        {
            this.draw(context, color);
        }
        else if ((Line.are_arrays_the_same(this.point_1.bit_array, [0, 0, 0, 0])) || (Line.are_arrays_the_same(this.point_2.bit_array, [0, 0, 0, 0])))
        {
            // (!Line.is_array_has_one_bit(Point.operation_bit_array_and(this.point_1, this.point_2)))

            // Алгоритм половинного выделения
            // Случай, когда только одна точка в области
            
            console.log("YEs");
            let x = Math.floor((this.point_1.x + this.point_2.x) / 2);
            let y = Math.floor((this.point_1.y + this.point_2.y) / 2);

            
            
        }
    }
}
