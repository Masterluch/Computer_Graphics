class Point
{
    construct_bit_array(area_x1, area_y1, area_x2, area_y2)
    {
        let bit_array = [];
        bit_array.push((this.y < area_y1) ? true : false);
        bit_array.push((this.y > area_y2) ? true : false);
        bit_array.push((this.x < area_x1) ? true : false);
        bit_array.push((this.x > area_x2) ? true : false);

        return bit_array;
    }
    
    constructor(x, y, area_x1, area_y1, area_x2, area_y2)
    {
        /*
            ось y ось x -->
            |
            v

            (area_x1, ares_y1) - верхний левый угол области
            (area_x2, ares_y2) - нижний правый угол области
        */
        this.x = x;
        this.y = y;
        this.bit_array = this.construct_bit_array(area_x1, area_y1, area_x2, area_y2);
        
    }

    static operation_bit_array_and(point_1, point_2)
    {
        // Побитовое сложение двоичных векторов
        let result_bit_array = [];
        for (let i = 0; i < 4; i++)
        {
            result_bit_array.push(point_1.bit_array[i]*point_2.bit_array[i]);
        }
        return result_bit_array;
    }

    static operation_compare_bit_arrays(point_1, point_2)
    {
        for (let i = 0; i < 4; i++)
        {
            if (point_1.bit_array[i] != point_2.bit_array[i])
            {
                return false;
            }
        }
        return true;
    }
}
