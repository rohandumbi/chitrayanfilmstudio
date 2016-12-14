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
            $('.camera_container').hide();
            $('#mainContent').html(response);
            //include('js/utility/script.js');
        },
        error: function(error) {
            console.log("page load error");
        }
    });
}
$("header").on( "click", "a", function( event ) {
    event.preventDefault();
    //console.log( $( this ).text() );
    $(this).parent().addClass('active');
    console.log('HREF: ' +  $(this).attr('href'));
    callPage($( this ).attr('href'));
});
$(document).ready(function () {
    //callPage("home.html");
});