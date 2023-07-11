$(document).ready(function(){

    $('#click').click(function(){
        $('.p1').fadeOut();
    })

    $('#toggle').click(function(){
        $('.p2').toggle();
    })

    $('#effect').click(function(){
        $('.p4').toggle(2000);
        $('#image').toggle(3000);
    })

    $('#change').click(function(){
        $('#image').attr("src","D:\Html\Working Files\Website Project\images\tiny-coffee-cup.gif");
    })

})