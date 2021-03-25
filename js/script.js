$(document).ready(function() {
    $(document).scroll(function(e){
        opacidade();
    });

    var element = $('#brands');
    var elementHeight = element.outerHeight();

    function opacidade(){
        var opacityPercent = window.scrollY   / (750);
        console.log(window.scrollY, opacityPercent);
            element.css('opacity', opacityPercent);
    }
});


$(document).ready(function() {

    function checkWidth() {
   
   

if($(window).width() >= 750){
    
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 500) {
        $('#newNav').fadeIn();
    } else {
        $('#newNav').fadeOut();
    }

});
} else{
    $('#newNav').hide();
}
}
checkWidth();

$(window).resize(checkWidth);
});

window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
  });
