// ========================================================================================
// Preloader
// ========================================================================================
$(window).on('load', function () {
    var $preloader = $('#preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

// ========================================================================================
// Scripts for Site
// ========================================================================================
$( document ).ready(function(){

});