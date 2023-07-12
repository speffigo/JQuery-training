$(document).ready(function () {
    $('h1').hover(function(e){
        $(e.delegateTarget).fadeOut().fadeIn();
    })

    $('#big-image').click(function(){
       
        $(this).attr('src','images/coffee-grinder.jpg').width('300px').height('400px');
    })
    $('#big-image').dblclick(function(){
        $(this).attr('src','images/commercial-roaster.jpg');
    })

    $('aside').mouseenter(function(){
        $(this).fadeOut().fadeIn().css('background-color','#ADD8E6');
    })
    $('aside').mouseleave(function(){
        $(this).css('background-color','tan');

    })

    $('#main-p').mouseenter(function(){
        $('#next-p,#last-p').hide();

    })
    $('#main-p').mouseleave(function(){
        $('#next-p,#last-p').show();

    })
    
    $('#next-p').mouseenter(function(){
        $('#main-p,#last-p').hide();

    })
    $('#next-p').mouseleave(function(){
        $('#main-p,#last-p').show();

    })
    $('#last-p').mouseenter(function(){
        $('#main-p,#next-p').hide();

    })
    $('#last-p').mouseleave(function(){
        $('#main-p,#next-p').show();

    })




})