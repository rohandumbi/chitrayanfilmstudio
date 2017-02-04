function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}
function callPage(pageRefInput) {
    $.ajax({
        url: pageRefInput,
        type: "GET",
        dataType: 'text',
        success: function(response){
            console.log("successfully loaded page");
            if(pageRefInput === 'home.html'){
                //$('.camera_container').show();
                window.location.reload();
                /*$('.camera_container').show();
                $('#mainContent').html(response);*/
            }else{
                $('.camera_container').hide();
                $('#mainContent').html(response);
            }
            //include('js/utility/script.js');
        },
        error: function(error) {
            console.log("page load error");
        }
    });
}
$("header").on( "click", "a", function( event ) {
    event.preventDefault();
    $('li').removeClass('active');
    $(this).parent().addClass('active');
    //console.log('HREF: ' +  $(this).attr('href'));
    callPage($(this).attr('href'));
});

$("body").on( "click", "a", function( event ) {
    event.preventDefault();
    if($(event.currentTarget).hasClass('page-link')){
        $('li').removeClass('active');
        $(this).parent().addClass('active');
        callPage($(this).attr('href'));
        //$('.rd-mobilemenu').toggleClass('active');
        //$('.rd-mobilepanel_toggle').toggleClass('active');
        $('.rd-mobilepanel_toggle').trigger('click');
    }else{
        return;
    }
});

$(document).ready(function () {
    //callPage("home.html");
});