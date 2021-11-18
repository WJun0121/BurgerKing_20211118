$(function () {
    var oldColor = "";
    $(".nav-list-item1").mouseover(function () {
        $(".nav-list-item1").css("background-color", "#d62300");
    }).mouseout(function () {
        $(".nav-list-item1").css("background-color", "#ff8732");
    });
});

$(function () {
    $(".nav-list-item1").hover(function () {
        $(".nav-sublist-group").toggle();
    });

    $(".nav-sublist-group").hover(function () {
        $(".nav-sublist-group").toggle();
    });
});

$(function () {
    $(".nav-sublist-group").mouseover(function () {
        $(".nav-list-item1").css("background-color", "#d62300");
    }).mouseout(function () {
        $(".nav-list-item1").css("background-color", "#ff8732");
    });
});