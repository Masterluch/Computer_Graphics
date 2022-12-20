class MouseHandler
{
    constructor(canvas, context)
    {
        this.canvas = canvas;
        this.context = context;
        this.is_area_created = false;
        this.are_first_area_coordinates_set = false;
        this.are_second_area_coordinates_set = false;
        this.area_x1 = 0;
        this.area_y1 = 0;
        this.area_x2 = 0;
        this.area_y2 = 0;
        this.is_first_line_coordinates_set = false;
        this.line_x1 = 0;
        this.line_y1 = 0;
    }

    handling(event)
    {
        if (!this.is_area_created)
        {
            // Задаём координаты области
            if (!this.are_first_area_coordinates_set)
            {
                const rect = this.canvas.getBoundingClientRect()
                this.area_x1 = event.clientX - rect.left;
                this.area_y1 = event.clientY - rect.top;
                this.are_first_area_coordinates_set = true;
            }
            else if (!this.are_second_area_coordinates_set)
            {
                const rect = this.canvas.getBoundingClientRect()
                this.area_x2 = event.clientX - rect.left;
                this.area_y2 = event.clientY - rect.top;
                this.are_second_area_coordinates_set = true;
            }

            // Рисуем область, если координты заданы
            if ((this.are_first_area_coordinates_set) && (this.are_second_area_coordinates_set))
            {
                this.context.fillRect(this.area_x1, this.area_y1, this.area_x2-this.area_x1, this.area_y2-this.area_y1);
                this.is_area_created = true;
            }
        }
        else
        {
            // Обработка стандартных нажатий для рисования линий
            if (!this.is_first_line_coordinates_set)
            {
                // Обработка первого нажатия
                const rect = this.canvas.getBoundingClientRect()
                this.line_x1 = event.clientX - rect.left;
                this.line_y1 = event.clientY - rect.top;
                this.is_first_line_coordinates_set = true;

                console.log("line 1");
            }
            else
            {
                // Обработка второго нажатия
                const rect = this.canvas.getBoundingClientRect()
                const line_x2 = event.clientX - rect.left;
                const line_y2 = event.clientY - rect.top;
                
                let line = new Line(
                    new Point(this.line_x1, this.line_y1, this.area_x1, this.area_y1, this.area_x2, this.area_y2),
                    new Point(line_x2, line_y2, this.area_x1, this.area_y1, this.area_x2, this.area_y2)
                    );

                // line.draw(this.context, "#FFFFFF");
                line.check_conditions_and_draw(this.context, "#FFFFFF", this.area_x1, this.area_y1, this.area_x2, this.area_y2);

                this.is_first_line_coordinates_set = false;
                
                console.log("line 2");
            }
        }
    }
}
