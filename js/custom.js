$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', 'rgb(0, 0, 0, 0.6)');
    }
});



// When the user clicks on the button, scroll to the top of the document

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }