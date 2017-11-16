$(window).ready(function () {
    if ($('.date-filter').length >= 1) {
        $(function () {
            $("#slider-range").slider({
                range: true,
                min: 0,
                max: 500,
                values: [75, 425],
                slide: function (event, ui) {
                    $("#amount").val("$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
                }
            });
            $("#amount").val("$" + $("#slider-range").slider("values", 0) +
                    " - $" + $("#slider-range").slider("values", 1));
        });
    } else {

    };
    
//    $('.coveo-result-list-container').removeClass('shadow'); 
});

