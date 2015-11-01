/**
 * Created by sarmeetsingh on 10/30/15.
 */
{
    var canvasId;

    function grab_element_create_canvas(name, container, height_container) {
        canvasId = $(name);
        canvasId.css("border", "dotted 1px");
        canvasId.css("width", $(container).width());
        canvasId.css("height", $(height_container).height());

        var canvas2DContext = canvasId[0].getContext("2d");
        canvas2DContext.beginPath();
        canvas2DContext.arc(100,75,50,0,4*Math.PI)
        canvas2DContext.stroke();


    }

}
grab_element_create_canvas("#instrument_canvas", "#instrument_row", "#settings_row");
