$(document).ready(function(){
    //main box
    $('#main_box').click(function(){
        $("body").css('background', 'lightgray');
        $('h1').css("color", "black");
        $('img').css('border', 'none');
    })
    //mini boxes
    $('.mini_boxes').click(function(event){
        event.stopPropagation();
        $('body').css('background-image', 'url('+$(this).attr('src')+'');
        $('body').css('background-repeat', 'no-repeat');
        $('body').css('background-size', 'cover');
        $('h1').css('color','white');
        $(this).css('border', 'dotted 4px yellow');
    });
});
